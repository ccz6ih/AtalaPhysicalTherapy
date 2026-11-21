"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ptQuiz } from "@/content/quiz";
import { site } from "@/content/site";
import { track } from "@/lib/track";

const field =
  "ui block w-full rounded-md border border-white/25 bg-white/10 px-4 py-3 text-[1rem] text-white placeholder:text-white/50 focus:border-white focus:outline-none";

export function PTQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [sent, setSent] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const done = step >= ptQuiz.length;

  useEffect(() => {
    if (step > 0) heading.current?.focus();
    if (done) track("quiz_complete", { quiz_name: "personal_pt_quiz" });
  }, [step, done]);

  const choose = (i: number) => {
    if (step === 0) track("quiz_start", { quiz_name: "personal_pt_quiz" });
    setAnswers((a) => [...a.slice(0, step), i]);
    setStep((s) => s + 1);
  };

  async function sendPlan(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSent("sending");
    setErr("");
    const details: Record<string, string> = {};
    ptQuiz.forEach((q, i) => (details[q.question] = q.options[answers[i]]));
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ form: "quiz", name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"), details, company: fd.get("company"), startedAt: startedAt.current, page: location.pathname }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error);
      track("generate_lead", { form_name: "quiz" });
      setSent("sent");
    } catch (e) {
      setSent("error");
      setErr(e instanceof Error && e.message ? e.message : `Something went wrong. Please call ${site.phone}.`);
    }
  }

  return (
    <div className="on-dark rounded-2xl bg-marine p-6 text-white/85 sm:p-10 lg:p-14">
      {!done ? (
        <div>
          <div className="ui flex items-center justify-between gap-4 text-[0.9rem] text-white/60">
            <span>
              Question {step + 1} of {ptQuiz.length}
            </span>
            {step > 0 && (
              <button type="button" onClick={() => setStep((s) => s - 1)} className="underline underline-offset-4 hover:text-white">
                Back
              </button>
            )}
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuemin={0} aria-valuemax={ptQuiz.length} aria-valuenow={step} aria-label="Quiz progress">
            <div className="h-full rounded-full bg-signal transition-[width] duration-500" style={{ width: `${(step / ptQuiz.length) * 100}%` }} />
          </div>
          <h2 ref={heading} tabIndex={-1} className="display-md mt-8 !text-white outline-none">
            {ptQuiz[step].question}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ptQuiz[step].options.map((o, i) => (
              <li key={o}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={answers[step] === i}
                  className="ui flex w-full items-center gap-4 rounded-xl border border-white/20 bg-white/5 px-5 py-5 text-left text-[1.05rem] font-[600] text-white transition-colors hover:border-white hover:bg-white/10 aria-pressed:border-signal aria-pressed:bg-signal/20"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/40 text-[0.85rem]">{String.fromCharCode(65 + i)}</span>
                  {o}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2 ref={heading} tabIndex={-1} className="display-lg !text-white outline-none">
            Here&apos;s your personalized PT plan
          </h2>
          <ol className="mt-8 space-y-6">
            {ptQuiz.map((q, i) => (
              <li key={q.question} className="border-t border-white/15 pt-6">
                <p className="ui text-[0.9rem] text-white/55">
                  {q.question} <span className="text-white/80">— {q.options[answers[i]]}</span>
                </p>
                <p className="mt-2 text-[1.05rem] leading-relaxed [&_strong]:font-[650] [&_strong]:text-white" dangerouslySetInnerHTML={{ __html: q.responses[answers[i]] }} />
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-10 rounded-xl bg-white/5 p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="display-md !text-white">Let&apos;s start your recovery</h3>
              <p className="mt-3">Book your evaluation now, or leave your number and someone from our team will call to talk through this plan.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="quiz-result">
                  Book an evaluation
                </a>
                <Link href="/schedule-an-appointment/" className="btn btn-ghost">
                  Request a time
                </Link>
              </div>
            </div>
            {sent === "sent" ? (
              <p role="status" className="self-center text-[1.1rem] text-white">Got it — we&apos;ll call you within one business day with your plan in hand.</p>
            ) : (
              <form onSubmit={sendPlan} className="grid gap-4">
                <div className="hidden" aria-hidden>
                  <input name="company" tabIndex={-1} autoComplete="off" />
                </div>
                <label className="ui text-[0.92rem] font-[600] text-white">
                  Name
                  <input name="name" required autoComplete="name" className={`${field} mt-1.5`} />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="ui text-[0.92rem] font-[600] text-white">
                    Phone
                    <input name="phone" type="tel" required autoComplete="tel" className={`${field} mt-1.5`} />
                  </label>
                  <label className="ui text-[0.92rem] font-[600] text-white">
                    Email (optional)
                    <input name="email" type="email" autoComplete="email" className={`${field} mt-1.5`} />
                  </label>
                </div>
                {err && (
                  <p role="alert" className="ui text-[0.95rem] text-white">
                    {err}
                  </p>
                )}
                <button type="submit" className="btn btn-light justify-self-start" disabled={sent === "sending"}>
                  {sent === "sending" ? "Sending…" : "Call me about my plan"}
                </button>
              </form>
            )}
          </div>
          <button
            type="button"
            className="ui mt-8 text-[0.95rem] text-white/70 underline underline-offset-4 hover:text-white"
            onClick={() => {
              setAnswers([]);
              setStep(0);
              setSent("idle");
            }}
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
