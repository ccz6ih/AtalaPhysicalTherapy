"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/track";

const questions = [
  { id: "q1", text: "Do you experience ongoing pain in your muscles, joints, or tendons?", yes: "Yes, I have consistent pain", no: "No, I don’t experience ongoing pain", result: "You're experiencing ongoing pain — physical therapy can help alleviate it and improve your quality of life." },
  { id: "q2", text: "Have you had a recent injury or surgery that limits your mobility?", yes: "Yes, I’ve recently been injured or had surgery", no: "No, I haven’t had an injury or surgery recently", result: "You've had a recent injury or surgery — our rehabilitation programs can assist in restoring mobility and strength." },
  { id: "q3", text: "Do you feel stiffness or discomfort performing daily activities?", yes: "Yes, I struggle with daily activities", no: "No, I don’t feel discomfort", result: "You feel stiffness or discomfort — this is a common issue we address with targeted exercises and therapies." },
  { id: "q4", text: "Are you an athlete looking to recover or improve performance?", yes: "Yes, I want to recover or enhance my performance", no: "No, I’m not an athlete", result: "You're an athlete — our performance training can help you recover and improve your performance." },
  { id: "q5", text: "Would you like a professional assessment of your condition?", yes: "Yes, I’d like a professional opinion", no: "No, I don’t need an assessment", result: "You'd like a professional assessment — our expert therapists can evaluate your condition and create a personalized plan." },
];

export function TherapyQuiz() {
  const [answers, setAnswers] = useState<Record<string, "yes" | "no">>({});
  const [show, setShow] = useState(false);
  const [missing, setMissing] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const complete = questions.every((q) => answers[q.id]);
  const yesList = questions.filter((q) => answers[q.id] === "yes");

  return (
    <div>
      {!show ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!complete) return setMissing(true);
            track("quiz_complete", { quiz_name: "therapy_quiz", yes_count: yesList.length });
            setShow(true);
            requestAnimationFrame(() => resultRef.current?.focus());
          }}
          className="space-y-5"
        >
          {questions.map((q, i) => (
            <fieldset key={q.id} className="rounded-xl bg-white p-6 sm:p-7">
              <legend className="sr-only">{q.text}</legend>
              <p aria-hidden className="ui text-[1.12rem] font-[700] text-marine">
                {i + 1}. {q.text}
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(["yes", "no"] as const).map((v) => (
                  <label key={v} className="ui flex cursor-pointer items-center gap-3 rounded-lg border border-line px-4 py-3.5 text-[0.98rem] text-marine has-[:checked]:border-oxblood has-[:checked]:bg-oxblood/5">
                    <input type="radio" name={q.id} value={v} checked={answers[q.id] === v} onChange={() => setAnswers((a) => ({ ...a, [q.id]: v }))} className="h-4 w-4 accent-[var(--color-oxblood)]" />
                    {v === "yes" ? q.yes : q.no}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          {missing && !complete && (
            <p role="alert" className="ui text-oxblood">
              Answer all five questions to see your results.
            </p>
          )}
          <button type="submit" className="btn btn-primary">
            See your results
          </button>
        </form>
      ) : (
        <div ref={resultRef} tabIndex={-1} className="on-dark rounded-2xl bg-marine p-8 text-white/85 outline-none sm:p-12">
          <h2 className="display-md !text-white">Your results</h2>
          {yesList.length ? (
            <>
              <p className="mt-4">Based on your answers, here&apos;s how we can help:</p>
              <ul className="peak-list mt-5 text-[1.05rem]">
                {yesList.map((q) => (
                  <li key={q.id}>{q.result}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-4">It looks like you&apos;re doing well, but if you ever experience discomfort or need guidance, we&apos;re here to help!</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="therapy-quiz">
              Schedule an appointment now
            </a>
            <button type="button" className="btn btn-ghost" onClick={() => { setShow(false); setAnswers({}); }}>
              Retake the quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
