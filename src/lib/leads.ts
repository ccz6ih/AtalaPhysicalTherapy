import "server-only";
import { neon } from "@neondatabase/serverless";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Lead storage (Postgres via the Neon integration in Vercel → Storage).
 * Env: DATABASE_URL (set automatically by the integration; POSTGRES_URL also works)
 *      LEADS_PASSWORD — password for the private /leads/ page
 */

export const LEAD_STATUSES = ["new", "contacted", "booked", "not a fit"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];

export type Lead = {
  id: number;
  created_at: string;
  form: string;
  name: string;
  email: string | null;
  phone: string | null;
  message: string | null;
  details: Record<string, string> | null;
  page: string | null;
  status: LeadStatus;
  notes: string | null;
};

const url = () => process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
export const leadsDbReady = () => Boolean(url());

let schemaReady: Promise<void> | null = null;
function db() {
  const sql = neon(url());
  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`CREATE TABLE IF NOT EXISTS leads (
        id BIGSERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        form TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        message TEXT,
        details JSONB,
        page TEXT,
        status TEXT NOT NULL DEFAULT 'new',
        notes TEXT
      )`;
      await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`;
    })().catch((e) => {
      schemaReady = null;
      throw e;
    });
  }
  return { sql, ready: schemaReady };
}

export async function saveLead(l: { form: string; name: string; email: string; phone: string; message: string; details: Record<string, string>; page: string }) {
  const { sql, ready } = db();
  await ready;
  const rows = await sql`INSERT INTO leads (form, name, email, phone, message, details, page)
    VALUES (${l.form}, ${l.name}, ${l.email || null}, ${l.phone || null}, ${l.message || null}, ${JSON.stringify(l.details)}::jsonb, ${l.page || null})
    RETURNING id`;
  return Number(rows[0]?.id);
}

export async function listLeads(opts: { status?: string; limit?: number } = {}) {
  const { sql, ready } = db();
  await ready;
  const limit = Math.min(Math.max(opts.limit ?? 500, 1), 5000);
  const status = opts.status && (LEAD_STATUSES as readonly string[]).includes(opts.status) ? opts.status : null;
  const rows = status
    ? await sql`SELECT * FROM leads WHERE status = ${status} ORDER BY created_at DESC LIMIT ${limit}`
    : await sql`SELECT * FROM leads ORDER BY created_at DESC LIMIT ${limit}`;
  return rows as unknown as Lead[];
}

export async function monthlyCounts(months = 6) {
  const { sql, ready } = db();
  await ready;
  const rows = await sql`SELECT to_char(date_trunc('month', created_at AT TIME ZONE 'America/Los_Angeles'), 'YYYY-MM') AS month,
      count(*)::int AS total,
      count(*) FILTER (WHERE status = 'booked')::int AS booked
    FROM leads
    WHERE created_at > now() - make_interval(months => ${months}::int)
    GROUP BY 1 ORDER BY 1 DESC`;
  return rows as unknown as { month: string; total: number; booked: number }[];
}

export async function updateLead(id: number, patch: { status?: string; notes?: string }) {
  const { sql, ready } = db();
  await ready;
  if (patch.status !== undefined) {
    if (!(LEAD_STATUSES as readonly string[]).includes(patch.status)) throw new Error("Unknown status");
    await sql`UPDATE leads SET status = ${patch.status} WHERE id = ${id}`;
  }
  if (patch.notes !== undefined) {
    await sql`UPDATE leads SET notes = ${patch.notes.slice(0, 2000) || null} WHERE id = ${id}`;
  }
}

/* ── Access to /leads/ ─────────────────────────────────────────────── */

export const LEADS_COOKIE = "atala_leads";

function token() {
  const pw = process.env.LEADS_PASSWORD || "";
  return pw ? createHmac("sha256", pw).update("atala-leads-v1").digest("hex") : "";
}

export function passwordMatches(input: string) {
  const pw = process.env.LEADS_PASSWORD || "";
  if (!pw || !input) return false;
  const a = createHmac("sha256", "cmp").update(input).digest();
  const b = createHmac("sha256", "cmp").update(pw).digest();
  return timingSafeEqual(a, b);
}

export function sessionToken() {
  return token();
}

export function cookieValid(value: string | undefined) {
  const t = token();
  if (!t || !value || value.length !== t.length) return false;
  return timingSafeEqual(Buffer.from(value), Buffer.from(t));
}
