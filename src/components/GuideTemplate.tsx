import Link from "next/link";
import { guides, guidePath, type Guide } from "@/content/guides";
import { site } from "@/content/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { Pic } from "./Pic";
import { JsonLd } from "./JsonLd";
import { GoogleBadge, ReviewsSection } from "./Reviews";
import { CtaBand } from "./CtaBand";
import { ids } from "@/lib/schema";

const toc = [
  ["what", "What it is"],
  ["symptoms", "Symptoms"],
  ["causes", "Causes"],
  ["treatment", "How physical therapy helps"],
  ["plan", "Your plan at Atala"],
  ["self-care", "What you can do now"],
  ["red-flags", "When to see a doctor first"],
  ["faq", "Questions"],
] as const;

export function GuideTemplate({ guide: g }: { guide: Guide }) {
  const url = `${site.url}${guidePath(g.slug)}`;
  const related = g.related.map((s) => guides.find((x) => x.slug === s)).filter(Boolean) as Guide[];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalWebPage",
              "@id": `${url}#webpage`,
              url,
              name: g.h1,
              description: g.description,
              isPartOf: { "@id": ids.website },
              publisher: { "@id": ids.clinic },
              lastReviewed: g.updated,
              ...(g.reviewedBy ? { reviewedBy: { "@type": "Person", name: g.reviewedBy } } : {}),
              audience: { "@type": "PeopleAudience", audienceType: "Patient" },
              about: {
                "@type": "MedicalCondition",
                name: g.name,
                signOrSymptom: g.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
                possibleTreatment: { "@type": "MedicalTherapy", name: "Physical therapy" },
              },
              primaryImageOfPage: `${site.url}${g.image.src}`,
              citation: g.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
            },
            {
              "@type": "FAQPage",
              mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />

      <section data-stage="Overview" className="contours bg-[position:right_-260px_top_-80px] pb-14 pt-8 lg:pb-20 lg:pt-12">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Conditions We Treat", href: "/conditions-we-treat/" }, { name: g.name, href: guidePath(g.slug) }]} />
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <h1 className="display-lg">{g.h1}</h1>
              <p className="lede mt-6 max-w-2xl">{g.answer}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="guide-hero">
                  Book an evaluation
                </a>
                <a href={site.phoneHref} className="btn btn-ghost" data-track="guide-hero">
                  Call {site.phone}
                </a>
              </div>
              <div className="mt-8">
                <GoogleBadge />
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-fog-2">
                <Pic src={g.image.src} alt={g.image.alt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <dl className="ui mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line text-[0.92rem]">
                {[
                  ["Referral needed?", "No — book directly"],
                  ["Who treats you", "A licensed physical therapist, one-on-one"],
                  ["Ways to pay", "Self-pay, Medicare, most PPO plans"],
                  ["Where", "3222 Grey Hawk Ct, Carlsbad"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white p-4">
                    <dt className="text-muted">{k}</dt>
                    <dd className="mt-1 font-[650] leading-snug text-marine">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="wrap grid gap-14 py-16 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20 lg:py-24">
          <nav aria-label="On this page" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <p className="ui text-[0.9rem] font-[650] text-marine">On this page</p>
            <ol className="ui mt-3 space-y-2 border-l border-line pl-4 text-[0.92rem]">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted hover:text-oxblood">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-[44rem] text-[1.06rem]">
            <section id="what" data-stage="What it is" aria-labelledby="what-h">
              <h2 id="what-h" className="display-md">What is {g.name.toLowerCase().replace("rehab", "rehabilitation")}?</h2>
              <div className="mt-5 space-y-4">
                {g.whatItIs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              <section id="symptoms" data-stage="Symptoms" aria-labelledby="sym-h">
                <h2 id="sym-h" className="ui text-[1.45rem] font-[750] tracking-tight">Common symptoms</h2>
                <ul className="peak-list mt-4 text-[1rem]">
                  {g.symptoms.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
              <section id="causes" aria-labelledby="cause-h">
                <h2 id="cause-h" className="ui text-[1.45rem] font-[750] tracking-tight">Common causes</h2>
                <ul className="peak-list mt-4 text-[1rem]">
                  {g.causes.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section id="treatment" data-stage="Treatment" aria-labelledby="tx-h" className="mt-16">
              <h2 id="tx-h" className="display-md">How physical therapy helps</h2>
              <div className="mt-5 space-y-4">
                {g.howPTHelps.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <h3 className="ui mt-8 text-[1.15rem] font-[700]">What treatment can include</h3>
              <ul className="peak-list mt-3">
                {g.treatments.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section id="plan" data-stage="Your plan" aria-labelledby="plan-h" className="mt-16">
              <h2 id="plan-h" className="display-md">Your plan at Atala</h2>
              <p className="mt-4">A typical path, adjusted to you at every visit:</p>
              <ol className="relative mt-8 space-y-7 border-l-2 border-line pl-9">
                {g.plan.map((s, i) => (
                  <li key={s.title} className="relative">
                    <span className="ui absolute -left-[3.05rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-oxblood text-[0.9rem] font-[700] text-white">{i + 1}</span>
                    <h3 className="ui text-[1.15rem] font-[700]">{s.title}</h3>
                    <p className="mt-1">{s.text}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 rounded-xl bg-fog p-6">
                <p className="ui font-[700] text-marine">Who you&apos;ll see</p>
                <p className="mt-1.5 text-[0.98rem]">
                  Your evaluation and hands-on care are with a licensed physical therapist, in a private treatment room. Gym progressions are coached by our exercise specialist with no more than two or three patients in the gym at once.{" "}
                  <Link href="/our-team/" className="link">Meet the team</Link>
                </p>
              </div>
            </section>

            <section id="self-care" data-stage="Self-care" aria-labelledby="sc-h" className="mt-16">
              <h2 id="sc-h" className="display-md">What you can do now</h2>
              <ul className="peak-list mt-5">
                {g.selfCare.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section id="red-flags" aria-labelledby="rf-h" className="mt-14 rounded-xl border-2 border-oxblood/70 p-6 sm:p-8">
              <h2 id="rf-h" className="ui text-[1.35rem] font-[750] tracking-tight text-oxblood">When to see a doctor first</h2>
              <ul className="peak-list mt-4">
                {g.redFlags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="mt-4 text-[0.95rem] text-muted">This page is general education, not a diagnosis. If you&apos;re unsure, call us — we&apos;ll tell you honestly whether to start with us or your physician.</p>
            </section>

            <section id="faq" data-stage="Questions" aria-labelledby="faq-h" className="mt-16">
              <h2 id="faq-h" className="display-md">Questions we hear about {g.name.toLowerCase()}</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {g.faqs.map((f) => (
                  <details key={f.q} className="group py-5">
                    <summary className="ui flex cursor-pointer list-none items-center justify-between gap-6 text-[1.08rem] font-[700] text-marine [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="shrink-0 transition-transform group-open:rotate-45">
                        <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </summary>
                    <p className="mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <footer className="mt-14 border-t border-line pt-6 text-[0.88rem] text-muted">
              <p className="ui">
                {g.reviewedBy ? <>Clinically reviewed by {g.reviewedBy}. </> : null}
                Updated {new Date(g.updated + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
              </p>
              <p className="ui mt-3 font-[650] text-marine">Sources</p>
              <ol className="mt-2 list-decimal space-y-1.5 pl-5">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-oxblood">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </footer>
          </article>
        </div>
      </div>

      {related.length > 0 && (
        <section data-stage="Related" className="py-20 lg:py-24" aria-labelledby="rel-h">
          <div className="wrap">
            <h2 id="rel-h" className="display-md">Related guides</h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={guidePath(r.slug)} className="group block h-full rounded-xl bg-white p-6 transition-colors hover:bg-marine">
                    <span className="ui block text-[1.25rem] font-[700] text-marine group-hover:text-white">{r.name}</span>
                    <span className="mt-2 block text-[0.95rem] text-body group-hover:text-white/75">{r.answer.split(". ")[0]}.</span>
                    <span className="ui mt-4 inline-block text-[0.9rem] font-[650] text-oxblood underline underline-offset-4 group-hover:text-white">Read the guide</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={g.service} className="link mt-8 inline-block">
              Related treatment at Atala
            </Link>
          </div>
        </section>
      )}

      <ReviewsSection heading="From patients who've been there" />
      <CtaBand heading={`Ready to get past ${g.name.toLowerCase()}?`} />
    </>
  );
}
