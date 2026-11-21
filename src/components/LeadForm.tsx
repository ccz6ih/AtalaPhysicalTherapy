"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/content/site";
import { track } from "@/lib/track";

type Variant = "contact" | "appointment" | "selfpay";

const field =
  "ui block w-full rounded-md border border-line bg-white px-4 py-3 text-[1rem] text-marine placeholder:text-muted/70 focus:border-marine focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1";
const label = "ui mb-1.5 block text-[0.92rem] font-[600] text-marine";

export function LeadForm({ variant = "contact", heading, intro, dark = false }: { variant?: Variant; heading?: string; intro?: string; dark?: boolean }) {
  const router = useRouter();
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k) as string | null) ?? "";
    const details: Record<string, string | string[]> = {};
    if (variant === "appointment") {
      details["New or returning"] = get("patientType");
      details["Paying with"] = get("payment");
      details["Area of concern"] = get("area");
      details["Best times"] = fd.getAll("times") as string[];
    }
    if (variant === "selfpay") details["Interested in"] = get("interest");
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          form: variant,
          name: [get("firstName"), get("lastName")].filter(Boolean).join(" ") || get("name"),
          email: get("email"),
          phone: get("phone"),
          message: get("message"),
          details,
          company: get("company"),
          startedAt: startedAt.current,
          page: window.location.pathname,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || `We couldn't send that. Please call ${site.phone}.`);
      track("generate_lead", { form_name: variant, payment_type: details["Paying with"] || (variant === "selfpay" ? "Self-pay" : undefined) });
      if (variant === "appointment") {
        router.push("/thank-you-for-scheduling-your-appointment/");
        return;
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : `We couldn't send that. Please call ${site.phone}.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className={`rounded-lg p-8 ${dark ? "bg-white/10 text-white" : "bg-white"}`}>
        <p className={`display-md ${dark ? "!text-white" : ""}`}>Message sent.</p>
        <p className="mt-3">Thanks — our front office will get back to you within one business day. Need us sooner? Call {site.phone}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false} aria-describedby={error ? "form-error" : undefined}>
      {heading && <h2 className={`display-md ${dark ? "!text-white" : ""}`}>{heading}</h2>}
      {intro && <p className={dark ? "text-white/80" : ""}>{intro}</p>}

      <div className="hidden" aria-hidden>
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {variant === "appointment" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="f-first">First name</label>
            <input id="f-first" name="firstName" required autoComplete="given-name" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="f-last">Last name</label>
            <input id="f-last" name="lastName" required autoComplete="family-name" className={field} />
          </div>
        </div>
      ) : (
        <div>
          <label className={label} htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" required autoComplete="name" className={field} />
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="f-phone">Phone</label>
          <input id="f-phone" name="phone" type="tel" required={variant === "appointment"} autoComplete="tel" inputMode="tel" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" required={variant !== "appointment"} autoComplete="email" className={field} />
        </div>
      </div>

      {variant === "appointment" && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="f-type">Are you a new patient?</label>
              <select id="f-type" name="patientType" className={field} defaultValue="New patient">
                <option>New patient</option>
                <option>Returning patient</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="f-pay">How will you pay?</label>
              <select id="f-pay" name="payment" className={field} defaultValue="Self-pay">
                <option>Self-pay</option>
                <option>Insurance (PPO)</option>
                <option>Medicare</option>
                <option>Workers&apos; compensation</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <div>
            <label className={label} htmlFor="f-area">What would you like help with?</label>
            <select id="f-area" name="area" className={field} defaultValue="">
              <option value="" disabled>Choose one</option>
              <option>Back or neck</option>
              <option>Shoulder</option>
              <option>Knee</option>
              <option>Hip or pelvis</option>
              <option>Foot or ankle</option>
              <option>Elbow, wrist or hand</option>
              <option>Before or after surgery</option>
              <option>Sports injury or performance</option>
              <option>Work injury</option>
              <option>Balance or dizziness</option>
              <option>Something else</option>
            </select>
          </div>
          <fieldset>
            <legend className={label}>Best times for your visits</legend>
            <div className="ui flex flex-wrap gap-2">
              {["Early morning", "Midday", "Afternoon", "Evening"].map((t) => (
                <label key={t} className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[0.95rem] text-marine has-[:checked]:border-oxblood has-[:checked]:bg-oxblood has-[:checked]:text-white">
                  <input type="checkbox" name="times" value={t} className="sr-only" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      {variant === "selfpay" && (
        <div>
          <label className={label} htmlFor="f-interest">I&apos;m interested in</label>
          <select id="f-interest" name="interest" className={field} defaultValue="Self-pay rates">
            <option>Self-pay rates</option>
            <option>Visit packages</option>
            <option>Using HSA / FSA</option>
            <option>A superbill for my insurance</option>
          </select>
        </div>
      )}

      <div>
        <label className={label} htmlFor="f-msg">
          {variant === "appointment" ? "Anything we should know? (optional)" : "How can we help?"}
        </label>
        <textarea id="f-msg" name="message" rows={4} required={variant === "contact"} className={field} />
        <p className={`ui mt-1.5 text-[0.82rem] ${dark ? "text-white/60" : "text-muted"}`}>Please keep medical details brief — we&apos;ll go over your history privately at your visit.</p>
      </div>

      {error && (
        <p id="form-error" role="alert" className="ui rounded-md bg-oxblood/10 px-4 py-3 text-[0.95rem] text-oxblood">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : variant === "appointment" ? "Request appointment" : "Send message"}
        </button>
        <a href={site.phoneHref} className={`ui text-[0.95rem] font-[600] underline underline-offset-4 ${dark ? "text-white" : "text-marine"}`}>
          Or call {site.phone}
        </a>
      </div>
    </form>
  );
}
