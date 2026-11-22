import nodemailer from "nodemailer";
import { site } from "@/content/site";
import { leadsDbReady, saveLead } from "@/lib/leads";

/**
 * Lead intake for every form on the site (contact, appointment request, quiz call-back).
 * Delivery: SMTP (e.g. the SiteGround mailbox) and/or a webhook (Zapier, Make, Google Apps Script…).
 *
 * Env:
 *   SMTP_HOST, SMTP_PORT (465 or 587), SMTP_USER, SMTP_PASS
 *   LEAD_TO      — inbox that receives leads (default contact@atalaphysicaltherapy.com)
 *   LEAD_FROM    — From address; must be the SMTP account or an allowed alias
 *   LEAD_WEBHOOK_URL — optional, receives the same JSON payload
 *   DATABASE_URL — Postgres (Vercel → Storage → Neon). Every lead is saved here and
 *                  shown on the private /leads/ page (password: LEADS_PASSWORD).
 *
 * Forms intentionally do not collect medical history (PHI). The online intake
 * stays in the clinic's EHR / PDF packet.
 */

const FORM_NAMES: Record<string, string> = {
  contact: "Contact form",
  appointment: "Appointment request",
  quiz: "PT quiz call-back",
  selfpay: "Self-pay inquiry",
};

const MAX = { name: 120, email: 160, phone: 40, text: 2000 };
const hits = new Map<string, number[]>();

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";
}
function cleanMultiline(v: unknown, max: number) {
  return typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";
}
function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bot traps: hidden field must stay empty and the form must have been open for > 3s.
  if (clean(body.company, 50)) return Response.json({ ok: true });
  const started = Number(body.startedAt);
  if (!Number.isFinite(started) || Date.now() - started < 3000) return Response.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 6) return Response.json({ ok: false, error: "Too many submissions. Please call us instead." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const form = clean(body.form, 30) in FORM_NAMES ? clean(body.form, 30) : "contact";
  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const message = cleanMultiline(body.message, MAX.text);

  if (!name) return Response.json({ ok: false, error: "Add your name so we know who to contact." }, { status: 422 });
  if (!email && !phone) return Response.json({ ok: false, error: "Add a phone number or email so we can reach you." }, { status: 422 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ ok: false, error: "That email address doesn't look complete." }, { status: 422 });

  const details: [string, string][] = [];
  const extra = (body.details && typeof body.details === "object" ? body.details : {}) as Record<string, unknown>;
  for (const [k, v] of Object.entries(extra).slice(0, 20)) {
    const val = Array.isArray(v) ? v.map((x) => clean(x, 200)).filter(Boolean).join(", ") : cleanMultiline(v, 800);
    if (val) details.push([clean(k, 60), val]);
  }
  const page = clean(body.page, 300);

  const payload = { form: FORM_NAMES[form], name, email, phone, message, details: Object.fromEntries(details), page, submittedAt: new Date().toISOString() };

  const rows: [string, string][] = [["Name", name], ["Phone", phone], ["Email", email], ...details, ["Message", message], ["Page", page]];
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:Arial,sans-serif;color:#7e1416">${esc(FORM_NAMES[form])}</h2><table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="color:#5a6a71;vertical-align:top;white-space:nowrap"><b>${esc(k)}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const tasks: Promise<unknown>[] = [];
  // The database copy is the record of truth; email and webhook are notifications.
  let stored = false;
  if (leadsDbReady()) {
    try {
      await saveLead({ form: FORM_NAMES[form], name, email, phone, message, details: Object.fromEntries(details), page });
      stored = true;
    } catch (e) {
      console.error("[lead] database save failed:", e);
    }
  }
  const smtpReady = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;
  if (smtpReady) {
    const port = Number(process.env.SMTP_PORT || 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    tasks.push(
      transport.sendMail({
        from: `"${site.name} Website" <${process.env.LEAD_FROM || process.env.SMTP_USER}>`,
        to: process.env.LEAD_TO || site.email,
        replyTo: email ? `"${name.replace(/"/g, "")}" <${email}>` : undefined,
        subject: `${FORM_NAMES[form]}: ${name}`,
        text,
        html,
      }),
    );
  }
  if (process.env.LEAD_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) }).then((r) => {
        if (!r.ok) throw new Error(`Webhook ${r.status}`);
      }),
    );
  }

  if (tasks.length === 0) {
    if (stored) return Response.json({ ok: true });
    console.warn("[lead] No database, SMTP or webhook configured. Lead:", payload);
    if (process.env.NODE_ENV === "production" && process.env.VERCEL_ENV === "production") {
      return Response.json({ ok: false, error: `We couldn't send your message. Please call ${site.phone}.` }, { status: 503 });
    }
    return Response.json({ ok: true, dev: true });
  }

  const results = await Promise.allSettled(tasks);
  const failures = results.filter((r) => r.status === "rejected") as PromiseRejectedResult[];
  failures.forEach((f) => console.error("[lead] delivery failed:", f.reason));
  if (failures.length === results.length && !stored) {
    return Response.json({ ok: false, error: `We couldn't send your message. Please call ${site.phone}.` }, { status: 502 });
  }
  return Response.json({ ok: true });
}
