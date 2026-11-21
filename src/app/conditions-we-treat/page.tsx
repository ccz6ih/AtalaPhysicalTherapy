import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Pic } from "@/components/Pic";
import { ReviewsSection } from "@/components/Reviews";
import { CtaBand } from "@/components/CtaBand";
import { ResourcesStrip } from "@/components/ResourcesStrip";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { boutiqueApproach, conditionRegions } from "@/content/conditions";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { ids, webPage } from "@/lib/schema";

export const metadata = pageMeta("/conditions-we-treat/");

export default function ConditionsPage() {
  return (
    <>
      <JsonLd
        data={webPage("/conditions-we-treat/", "Conditions We Treat at Atala Physical Therapy in Carlsbad, CA", "Musculoskeletal and orthopedic conditions treated at Atala Physical Therapy.", "MedicalWebPage", {
          about: conditionRegions.flatMap((r) => [...r.nonSurgical, ...r.postSurgical]).slice(0, 60).map((c) => ({ "@type": "MedicalCondition", name: c })),
          provider: { "@id": ids.clinic },
        })}
      />
      <PageHero
        crumbs={[{ name: "Conditions We Treat", href: "/conditions-we-treat/" }]}
        title="Conditions We Treat at Atala Physical Therapy in Carlsbad, CA"
        lede="At Atala Physical Therapy, we are dedicated to helping you overcome pain, regain strength, and restore mobility. Our team specializes in treating a wide variety of musculoskeletal conditions, primarily orthopedic in nature. Whether you're recovering from trauma, managing a chronic condition, or looking for post-surgical rehabilitation, we're here to support you every step of the way."
      >
        <p className="mt-4 max-w-2xl">Our expertise extends to addressing the following issues and more. If you don&apos;t see your condition listed, please don&apos;t hesitate to contact us — we&apos;re happy to discuss how we can help.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="conditions-hero">
            Schedule an appointment
          </a>
          <a href={site.phoneHref} className="btn btn-ghost" data-track="conditions-hero">
            Ask about your condition
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24" aria-label="Conditions by body region">
        <div className="wrap grid gap-10 lg:grid-cols-[14rem_1fr] lg:gap-16">
          <nav aria-label="Body regions" className="lg:sticky lg:top-28 lg:self-start">
            <ul className="ui flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible">
              {conditionRegions.map((r) => (
                <li key={r.id} className="shrink-0">
                  <a href={`#${r.id}`} className="block whitespace-nowrap rounded-full border border-line px-4 py-2 text-[0.98rem] font-[600] text-marine hover:border-oxblood hover:text-oxblood lg:rounded-md lg:border-0 lg:px-3">
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="divide-y divide-line">
            {conditionRegions.map((r) => (
              <section key={r.id} id={r.id} aria-labelledby={`${r.id}-h`} className="py-10 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h2 id={`${r.id}-h`} className="display-md">
                    {r.name === "Balance" ? "Balance disorders" : `${r.name} injuries`}
                  </h2>
                  <Link href={r.service} className="link text-[0.95rem]">
                    Related treatment
                  </Link>
                </div>
                <div className={`mt-6 grid gap-8 ${r.postSurgical.length ? "md:grid-cols-2" : ""}`}>
                  <div>
                    <h3 className="ui text-[1.05rem] font-[700] text-sage">Non-surgical</h3>
                    <ul className="peak-list mt-3 text-[1rem]">
                      {r.nonSurgical.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  {r.postSurgical.length > 0 && (
                    <div>
                      <h3 className="ui text-[1.05rem] font-[700] text-sage">Post-surgical</h3>
                      <ul className="peak-list mt-3 text-[1rem]">
                        {r.postSurgical.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28" aria-labelledby="why-h">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <h2 id="why-h" className="display-lg">Why choose Atala Physical Therapy?</h2>
              <p className="lede mt-4">Our boutique approach means you&apos;ll experience:</p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Pic src="/wp-content/uploads/2025/01/o-6.jpg" alt="Therapist guiding a patient through a shoulder exercise" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-[50%_35%]" />
            </div>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
            {boutiqueApproach.map((g) => (
              <div key={g.title} className="bg-white p-7 lg:p-9">
                <h3 className="ui text-[1.2rem] font-[700]">{g.title}</h3>
                <ul className="peak-list mt-4">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary mt-10" data-track="conditions-why">
            Schedule an appointment
          </a>
        </div>
      </section>

      <ReviewsSection heading="Success stories from our patients" intro="Here's what some of our patients have to say:" />

      <section className="bg-white py-20 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="display-lg">Don&apos;t see your condition?</h2>
            <p className="lede mt-5">Ask us. Our therapists treat a wide range of orthopedic problems beyond this list, and we&apos;ll tell you honestly whether physical therapy is the right place to start.</p>
            <p className="ui mt-6">
              <a href={site.phoneHref} className="text-[1.4rem] font-[700] text-marine hover:text-oxblood" data-track="conditions-contact">
                {site.phone}
              </a>
            </p>
          </div>
          <div className="rounded-xl bg-fog p-7 sm:p-10">
            <LeadForm heading="Get in touch" />
          </div>
        </div>
      </section>
      <ResourcesStrip />
      <CtaBand />
    </>
  );
}
