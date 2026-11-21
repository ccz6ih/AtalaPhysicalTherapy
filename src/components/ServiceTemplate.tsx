import Link from "next/link";
import type { Service } from "@/content/services";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Pic } from "./Pic";
import { Blocks } from "./Blocks";
import { Breadcrumbs } from "./Breadcrumbs";
import { GoogleBadge, ReviewsSection } from "./Reviews";
import { CtaBand } from "./CtaBand";
import { ResourcesStrip } from "./ResourcesStrip";
import { LeadForm } from "./LeadForm";
import { JsonLd } from "./JsonLd";
import { ids } from "@/lib/schema";

export function ServiceTemplate({ service: s }: { service: Service }) {
  const others = services.filter((x) => x.slug !== s.slug);
  const [first, ...rest] = s.sections;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "@id": `${site.url}${s.path}#webpage`,
          url: `${site.url}${s.path}`,
          name: s.h1,
          description: s.summary,
          isPartOf: { "@id": ids.website },
          about: { "@type": "MedicalTherapy", name: s.name, description: s.cardText },
          mainEntity: {
            "@type": "Service",
            name: s.name,
            serviceType: "Physical therapy",
            provider: { "@id": ids.clinic },
            areaServed: { "@type": "City", name: "Carlsbad, CA" },
            description: s.cardText,
          },
          primaryImageOfPage: `${site.url}${s.hero.src}`,
          lastReviewed: "2026-11-20",
        }}
      />

      <section data-section="service-hero" className="contours bg-[position:right_-260px_top_-80px] pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Services", href: "/services/" }, { name: s.shortName, href: s.path }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <h1 className="display-lg">{s.h1}</h1>
              <p className="lede mt-6 max-w-2xl">{s.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="service-hero">
                  Book an evaluation
                </a>
                <a href={site.phoneHref} className="btn btn-ghost" data-track="service-hero">
                  Call {site.phone}
                </a>
              </div>
              <div className="mt-8">
                <GoogleBadge />
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] bg-fog-2">
              <Pic src={s.hero.src} alt={s.hero.alt} fill priority sizes="(min-width:1024px) 42vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="ui mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 text-[0.95rem] text-muted" aria-label="What to expect">
            {s.taglines.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="12" height="9" viewBox="0 0 12 9" className="fill-oxblood" aria-hidden><path d="M0 9L6 0l6 9z" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* First section: content + sticky aside with quick actions */}
      <section data-section="service-understanding" className="bg-white py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <div className="max-w-[44rem]">
            <h2 className="display-md">{first.heading}</h2>
            <div className="mt-6 text-[1.06rem]">
              <Blocks blocks={first.blocks} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            {first.image && (
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-fog-2">
                <Pic src={first.image.src} alt={first.image.alt} fill sizes="(min-width:1024px) 28vw, 100vw" className="object-cover" />
              </div>
            )}
            <div className="mt-5 rounded-xl bg-fog p-6">
              <p className="ui text-[1.05rem] font-[700] text-marine">Not sure this is the right fit?</p>
              <p className="mt-2 text-[0.98rem]">Answer four quick questions and we&apos;ll point you to the right plan.</p>
              <Link href="/personal-pt-quiz/" className="link mt-3 inline-block">
                Take the quiz
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {rest.map((sec, i) => (
        <section key={sec.heading} data-section={`service-${i + 2}`} className={i % 2 === 0 ? "py-20 lg:py-28" : "bg-white py-20 lg:py-28"}>
          <div className={`wrap grid gap-14 ${sec.image ? "lg:grid-cols-2 lg:gap-20" : ""}`}>
            <div className={sec.image ? (i % 2 === 0 ? "lg:order-last" : "") : "max-w-[46rem]"}>
              <h2 className="display-md">{sec.heading}</h2>
              <div className="mt-6 text-[1.04rem]">
                <Blocks blocks={sec.blocks} />
              </div>
            </div>
            {sec.image && (
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-fog-2 lg:sticky lg:top-28 lg:self-start">
                <Pic src={sec.image.src} alt={sec.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Why choose — dark */}
      <section data-section="service-why" className="on-dark bg-marine py-20 text-white/80 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <h2 className="display-lg !text-white">{s.why.heading}</h2>
            {s.why.image && (
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl">
                <Pic src={s.why.image.src} alt={s.why.image.alt} fill sizes="(min-width:1024px) 35vw, 100vw" className="object-cover" />
              </div>
            )}
          </div>
          <div className="text-[1.04rem]">
            <Blocks blocks={s.why.blocks} dark />
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="service-why">
                Book an evaluation
              </a>
              <Link href="/self-pay-physical-therapy/" className="btn btn-ghost">
                Self-pay options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection heading="Patients who've been where you are" />

      <section data-section="service-contact" className="bg-white py-20 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="display-md">Other ways we can help</h2>
            <ul className="mt-6 border-t border-line">
              {others.map((o) => (
                <li key={o.slug} className="border-b border-line">
                  <Link href={o.path} className="ui flex items-center justify-between gap-4 py-4 text-[1.08rem] font-[650] text-marine hover:text-oxblood">
                    {o.name.replace(" & Athletic Recovery", "")}
                    <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden><path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
                  </Link>
                </li>
              ))}
              <li className="border-b border-line">
                <Link href="/conditions-we-treat/" className="ui flex items-center justify-between gap-4 py-4 text-[1.08rem] font-[650] text-marine hover:text-oxblood">
                  Conditions we treat
                  <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden><path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-fog p-7 sm:p-10">
            <LeadForm heading="Get in touch" intro="Send a question and our front office will reply within one business day." />
          </div>
        </div>
      </section>

      <ResourcesStrip />
      <CtaBand />
    </>
  );
}
