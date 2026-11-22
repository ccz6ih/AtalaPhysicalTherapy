import { cookies } from "next/headers";
import { LEADS_COOKIE, cookieValid, leadsDbReady, listLeads } from "@/lib/leads";

const cell = (v: unknown) => {
  const s = v === null || v === undefined ? "" : typeof v === "object" ? JSON.stringify(v) : String(v);
  // Quote every cell; neutralise spreadsheet formulas.
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  return `"${safe.replace(/"/g, '""')}"`;
};

export async function GET() {
  const jar = await cookies();
  if (!cookieValid(jar.get(LEADS_COOKIE)?.value)) return new Response("Sign in at /leads/ first.", { status: 401 });
  if (!leadsDbReady()) return new Response("No database connected.", { status: 503 });
  const leads = await listLeads({ limit: 5000 });
  const head = ["id", "received", "form", "name", "phone", "email", "message", "details", "page", "status", "notes"];
  const lines = [head.map(cell).join(",")].concat(
    leads.map((l) => [l.id, new Date(l.created_at).toISOString(), l.form, l.name, l.phone, l.email, l.message, l.details, l.page, l.status, l.notes].map(cell).join(",")),
  );
  const date = new Date().toISOString().slice(0, 10);
  return new Response("﻿" + lines.join("\r\n"), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="atala-leads-${date}.csv"`,
      "cache-control": "no-store",
    },
  });
}
