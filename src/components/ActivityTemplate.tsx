import Link from "next/link";
import { activities, activityPath, type Activity } from "@/content/activities";
import { guides, guidePath, midName } from "@/content/guides";
import { site } from "@/content/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { Pic } from "./Pic";
import { JsonLd } from "./JsonLd";
import { GoogleBadge, ReviewsSection } from "./Reviews";
import { CtaBand } from "./CtaBand";
import { ids } from "@/lib/schema";

/* A gentle elevation profile; marker x positions line up with a 4-column grid. */
const PROFILE = "M0 92 C60 88 90 70 125 62 S210 74 250 58 S330 18 375 22 S460 60 500 52 S590 30 625 36 S720 70 760 66 S850 50 875 48 S960 60 1000 58";
const MARKERS = [{ x: 125, y: 62 }, { x: 375, y: 22 }, { x: 625, y: 36 }, { x: 875, y: 48 }];

export function ActivityTemplate({ activity: a }: { activity: Activity }) {
  const url = `${site.url}${activityPath(a.slug)}`;
  const others = activities.filter((x) => x.slug !== a.slug);
  const guideFor = (slug?: string) => (slug ? guides.find((g) => g.slug === slug) : undefined);

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
              name: a.h1,
              description: a.description,
              isPartOf: { "@id": ids.website },
              publisher: { "@id": ids.clinic },
              lastReviewed: a.updated,
              audience: { "@type": "PeopleAudience", audienceType: `${a.name} in and around Carlsbad, CA` },
              about: { "@type": "MedicalTherapy", name: `Physical therapy for ${a.sport} injuries` },
              primaryImageOfPage: `${site.url}${a.hero.src}`,
              citation: a.sources.map((s) => ({ "@type": "CreativeWork", name: s.label, url: s.url })),
            },
            {
              "@type": "FAQPage",
              mainEntity: a.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />

      {/* Hero: full-bleed photo, copy on a marine scrim */}
      <section data-stage="Overview" className="on-dark relative isolate overflow-hidden bg-marine text-white">
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[64%]">
          <Pic src={a.hero.src} alt={a.hero.alt} fill priority sizes="(min-width:1024px) 64vw, 100vw" className="object-cover opacity-45 lg:opacity-100" />
          <div aria-hidden className="absolute inset-0 bg-marine/55 lg:hidden" />
          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,43,49,1)_0%,rgba(30,43,49,.55)_30%,rgba(30,43,49,0)_65%)] max-lg:hidden" />
        </div>
        <div className="wrap pb-20 pt-8 lg:pb-28 lg:pt-12">
          <Breadcrumbs className="[&_*]:!text-white/75 [&_[aria-current]]:!text-white" items={[{ name: "Sports Rehabilitation", href: "/sports-rehabilitation/" }, { name: a.name, href: activityPath(a.slug) }]} />
          <div className="mt-12 max-w-[40rem] lg:mt-20">
            <h1 className="display-xl text-white">{a.h1}</h1>
            <p className="lede mt-6 !text-white/85">{a.answer}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="activity-hero">
                Book an evaluation
              </a>
              <a href={site.phoneHref} className="btn btn-ghost" data-track="activity-hero">
                Call {site.phone}
              </a>
            </div>
            <div className="mt-8">
              <GoogleBadge dark />
            </div>
          </div>
        </div>
      </section>

      {/* What we treat */}
      <section data-stage="What we treat" className="bg-white py-20 lg:py-28" aria-labelledby="inj-h">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <h2 id="inj-h" className="display-lg">What we treat in {a.name.toLowerCase()}</h2>
              <figure className="mt-10 border-l-4 border-oxblood pl-6">
                <p className="ui text-[clamp(3rem,6vw,4.75rem)] font-[800] leading-none tracking-tight text-oxblood">{a.stat.figure}</p>
                <figcaption className="mt-3 text-[1rem] text-body">
                  {a.stat.text}{" "}
                  <a href={a.sources[a.stat.source].url} target="_blank" rel="noopener" className="text-muted underline underline-offset-2 hover:text-oxblood">
                    Source
                  </a>
                </figcaption>
              </figure>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {a.injuries.map((inj) => {
                const g = guideFor(inj.guide);
                return (
                  <li key={inj.name} className="flex flex-col bg-white p-6">
                    <h3 className="ui text-[1.15rem] font-[700] text-marine">{inj.name}</h3>
                    <p className="mt-2 text-[0.98rem]">{inj.text}</p>
                    {g && (
                      <Link href={guidePath(g.slug)} className="ui mt-auto pt-4 text-[0.9rem] font-[650] text-oxblood underline underline-offset-4 hover:text-marine">
                        Read the {midName(g.name)} guide
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Local terrain: places along an elevation profile */}
      <section data-stage="Local" className="on-dark bg-marine py-20 text-white lg:py-28" aria-labelledby="local-h">
        <div className="wrap">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 id="local-h" className="display-lg text-white">{a.local.heading}</h2>
              <p className="lede mt-5 max-w-2xl !text-white/80">{a.local.text}</p>
            </div>
            <div className="relative hidden aspect-[16/10] overflow-hidden rounded-[1.25rem] lg:block">
              <Pic src={a.local.image.src} alt={a.local.image.alt} fill sizes="40vw" className="object-cover" />
            </div>
          </div>

          <div className="relative mt-14 hidden h-24 md:block" aria-hidden>
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
              <path d={`${PROFILE} L1000 100 L0 100 Z`} fill="rgba(255,255,255,.06)" />
              <path d={PROFILE} fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              {MARKERS.map((m) => (
                <line key={m.x} x1={m.x} x2={m.x} y1={m.y} y2={100} stroke="rgba(255,255,255,.25)" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
              ))}
            </svg>
            {MARKERS.map((m) => (
              <span key={m.x} className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-marine bg-signal" style={{ left: `${m.x / 10}%`, top: `${m.y}%` }} />
            ))}
          </div>
          <ol className="mt-6 grid gap-8 border-l border-white/20 pl-6 md:grid-cols-4 md:gap-6 md:border-0 md:pl-0">
            {a.local.places.map((p) => (
              <li key={p.name} className="md:text-center">
                <h3 className="ui text-[1.2rem] font-[700] text-white">{p.name}</h3>
                <p className="mt-1.5 text-[0.95rem] text-white/70">{p.note}</p>
              </li>
            ))}
          </ol>
          <p className="ui mt-12 text-[0.82rem] text-white/50">Places are named so you know where our patients play. Atala Physical Therapy isn&apos;t affiliated with them.</p>
        </div>
      </section>

      {/* Screen + plan */}
      <section data-stage="Your screen" className="py-20 lg:py-28" aria-labelledby="screen-h">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 id="screen-h" className="display-md">What we check at your first visit</h2>
            <p className="mt-4 max-w-xl">A full evaluation of the injury, plus a {a.sport}-specific screen so the plan fits what you do.</p>
            <dl className="mt-8 space-y-6">
              {a.screen.map((s) => (
                <div key={s.title} className="border-t border-line pt-5">
                  <dt className="ui text-[1.1rem] font-[700] text-marine">{s.title}</dt>
                  <dd className="mt-1.5">{s.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="display-md">Your plan at Atala</h2>
            <ol className="relative mt-8 space-y-7 border-l-2 border-line pl-9">
              {a.plan.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="ui absolute -left-[3.05rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-oxblood text-[0.9rem] font-[700] text-white">{i + 1}</span>
                  <h3 className="ui text-[1.15rem] font-[700]">{s.title}</h3>
                  <p className="mt-1">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-xl bg-white p-6">
              <p className="ui font-[700] text-marine">Habits that keep you {a.sport === "golf" ? "on the course" : a.sport === "surfing" ? "in the water" : "running"}</p>
              <ul className="peak-list mt-3 text-[0.98rem]">
                {a.habits.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + sources */}
      <section data-stage="Questions" className="bg-white py-20 lg:py-24" aria-labelledby="faq-h">
        <div className="wrap max-w-[52rem]">
          <h2 id="faq-h" className="display-md">Questions from {a.name.toLowerCase()}</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {a.faqs.map((f) => (
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
          <footer className="mt-12 text-[0.88rem] text-muted">
            <p className="ui font-[650] text-marine">Sources</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5">
              {a.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-oxblood">
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-4">General education, not a diagnosis. If you&apos;re unsure where to start, call us.</p>
          </footer>
        </div>
      </section>

      <section className="py-16" aria-labelledby="more-h">
        <div className="wrap">
          <h2 id="more-h" className="ui text-[1.3rem] font-[750] tracking-tight">More sports we treat</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={activityPath(o.slug)} className="btn btn-ghost">
                  Physical therapy for {o.name.toLowerCase()}
                </Link>
              </li>
            ))}
            <li>
              <Link href={a.service} className="btn btn-ghost">
                Sports rehabilitation
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ReviewsSection heading="From patients who got back out there" />
      <CtaBand heading={`Get back to ${a.sport}.`} />
    </>
  );
}
