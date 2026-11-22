import { Suspense } from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { LEADS_COOKIE, LEAD_STATUSES, cookieValid, leadsDbReady, listLeads, monthlyCounts, type Lead } from "@/lib/leads";
import { signIn, signOut } from "./actions";
import { StatusSelect, NotesField } from "./LeadControls";

export const metadata: Metadata = {
  title: { absolute: "Leads | Atala Physical Therapy" },
  robots: { index: false, follow: false, nocache: true },
};

export default function LeadsPage({ searchParams }: { searchParams: Promise<{ status?: string; error?: string }> }) {
  return (
    <section className="wrap py-12 lg:py-16">
      <h1 className="display-md">Website leads</h1>
      <Suspense fallback={<p className="mt-6 text-muted">Loading…</p>}>
        <Gate searchParams={searchParams} />
      </Suspense>
    </section>
  );
}

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(iso));
const fmtMonth = (m: string) => new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "long", year: "numeric" }).format(new Date(`${m}-01T00:00:00Z`));

async function Gate({ searchParams }: { searchParams: Promise<{ status?: string; error?: string }> }) {
  const [{ status, error }, jar] = await Promise.all([searchParams, cookies()]);

  if (!process.env.LEADS_PASSWORD) {
    return <p className="mt-6 max-w-xl">This page is turned off. Add <code>LEADS_PASSWORD</code> in Vercel’s environment variables and redeploy to use it.</p>;
  }

  if (!cookieValid(jar.get(LEADS_COOKIE)?.value)) {
    return (
      <form action={signIn} className="mt-8 flex max-w-sm flex-col gap-3">
        <label className="ui flex flex-col gap-1.5 text-[0.95rem] font-[650] text-marine">
          Password
          <input type="password" name="password" required autoComplete="current-password" className="rounded-lg border border-line bg-white px-3 py-2.5 font-normal" />
        </label>
        {error && <p className="text-[0.92rem] text-signal" role="alert">That password didn’t match.</p>}
        <button type="submit" className="btn btn-primary self-start">Sign in</button>
      </form>
    );
  }

  if (!leadsDbReady()) {
    return <p className="mt-6 max-w-xl">No database is connected yet. In Vercel, open Storage, add a Neon Postgres database to this project, then redeploy. Leads submitted after that appear here.</p>;
  }

  let leads: Lead[] = [];
  let months: { month: string; total: number; booked: number }[] = [];
  try {
    [leads, months] = await Promise.all([listLeads({ status }), monthlyCounts(6)]);
  } catch (e) {
    console.error("[leads] load failed:", e);
    return <p className="mt-6 text-signal">The leads couldn’t be loaded. Check the database connection in Vercel and try again.</p>;
  }

  const active = status && (LEAD_STATUSES as readonly string[]).includes(status) ? status : "";

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <nav aria-label="Filter by status" className="ui flex flex-wrap gap-2 text-[0.92rem]">
          {["", ...LEAD_STATUSES].map((s) => (
            <Link
              key={s || "all"}
              href={s ? `/leads/?status=${encodeURIComponent(s)}` : "/leads/"}
              className={`rounded-full border px-3 py-1.5 ${active === s ? "border-marine bg-marine text-white" : "border-line bg-white text-marine hover:border-marine"}`}
            >
              {s ? s.charAt(0).toUpperCase() + s.slice(1) : "All"}
            </Link>
          ))}
        </nav>
        <div className="ui flex items-center gap-4 text-[0.92rem]">
          <a href="/leads/export/" className="font-[650] text-oxblood underline underline-offset-4">Download CSV</a>
          <form action={signOut}>
            <button type="submit" className="text-muted underline underline-offset-4 hover:text-marine">Sign out</button>
          </form>
        </div>
      </div>

      {months.length > 0 && (
        <dl className="ui mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {months.map((m) => (
            <div key={m.month} className="bg-white p-4">
              <dt className="text-[0.85rem] text-muted">{fmtMonth(m.month)}</dt>
              <dd className="mt-1 text-[1.6rem] font-[750] leading-none text-marine">{m.total}</dd>
              <dd className="mt-1 text-[0.82rem] text-muted">{m.booked} booked</dd>
            </div>
          ))}
        </dl>
      )}

      {leads.length === 0 ? (
        <p className="mt-10 text-muted">{active ? `No leads marked “${active}”.` : "No leads yet. New form submissions will appear here."}</p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full min-w-[60rem] border-collapse text-left text-[0.93rem]">
            <thead className="ui bg-fog text-[0.82rem] text-muted">
              <tr>
                <th className="p-3 font-[650]">Received</th>
                <th className="p-3 font-[650]">Contact</th>
                <th className="p-3 font-[650]">Form and message</th>
                <th className="p-3 font-[650]">Status</th>
                <th className="p-3 font-[650]">Notes</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="border-t border-line align-top">
                  <td className="whitespace-nowrap p-3 text-muted">{fmtDate(l.created_at)}</td>
                  <td className="p-3">
                    <p className="font-[650] text-marine">{l.name}</p>
                    {l.phone && <p><a href={`tel:${l.phone.replace(/[^\d+]/g, "")}`} className="underline underline-offset-2">{l.phone}</a></p>}
                    {l.email && <p><a href={`mailto:${l.email}`} className="break-all underline underline-offset-2">{l.email}</a></p>}
                  </td>
                  <td className="max-w-[28rem] p-3">
                    <p className="ui text-[0.85rem] font-[650] text-oxblood">{l.form}</p>
                    {l.details && Object.keys(l.details).length > 0 && (
                      <ul className="mt-1 space-y-0.5 text-[0.88rem]">
                        {Object.entries(l.details).map(([k, v]) => (
                          <li key={k}><span className="text-muted">{k}:</span> {String(v)}</li>
                        ))}
                      </ul>
                    )}
                    {l.message && <p className="mt-1 whitespace-pre-line">{l.message}</p>}
                    {l.page && <p className="mt-1 text-[0.82rem] text-muted">From {l.page}</p>}
                  </td>
                  <td className="p-3"><StatusSelect id={l.id} status={l.status} /></td>
                  <td className="p-3"><NotesField id={l.id} notes={l.notes} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
