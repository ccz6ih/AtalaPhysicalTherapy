import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Pic } from "@/components/Pic";
import { CtaBand } from "@/components/CtaBand";
import { ResourcesStrip } from "@/components/ResourcesStrip";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { services, servicesOverview } from "@/content/services";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { ids, webPage } from "@/lib/schema";

export const metadata = pageMeta("/services/", { image: "/wp-content/uploads/2022/12/5M3A7984-scaled.jpg" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webPage("/services/", "Our Services | Comprehensive Physical Therapy in Carlsbad, CA", "Physical therapy services at Atala PT in Carlsbad.", "CollectionPage", {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `${site.url}${s.path}`, name: s.name })),
          },
          provider: { "@id": ids.clinic },
        })}
      />
      <PageHero
        crumbs={[{ name: "Services", href: "/services/" }]}
        title="Our Services | Comprehensive Physical Therapy in Carlsbad, CA | Atala PT"
        lede="Orthopedic, surgical, sports and work-injury rehabilitation — all delivered one-on-one in a boutique clinic, with a plan built around the life you want to get back to."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="services-hero">
            Book an evaluation
          </a>
          <Link href="/conditions-we-treat/" className="btn btn-ghost">
            Conditions we treat
          </Link>
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap space-y-20 lg:space-y-28">
          {servicesOverview.map((o, i) => {
            const svc = services.find((s) => s.slug === o.slug)!;
            return (
              <article key={o.title} className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
                <div className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-fog-2 ${i % 2 ? "lg:order-last" : ""}`}>
                  <Pic src={o.image.src} alt={o.image.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div>
                  <h2 className="display-md">{o.title}</h2>
                  <div className="mt-5 space-y-4">
                    {o.paragraphs.map((p, k) => (
                      <p key={k}>{p}</p>
                    ))}
                  </div>
                  <Link href={svc.path} className="btn btn-ghost mt-7">
                    Learn more about {o.title.toLowerCase().replace("pre and post-surgical", "pre & post-surgical")}
                  </Link>
                </div>
              </article>
            );
          })}
          <article className="grid gap-6 rounded-xl bg-fog p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <h2 className="display-md">Also: back &amp; neck rehab and workers&apos; compensation</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/back-neck-rehabilitation/" className="btn btn-primary">Back &amp; neck rehabilitation</Link>
              <Link href="/industrial-medicine-workers-compensation/" className="btn btn-ghost">Workers&apos; comp</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 className="display-lg">Why choose us?</h2>
            <div className="mt-6 space-y-4 text-[1.05rem]">
              <p>At Atala Physical Therapy we use the &ldquo;total body approach&rdquo; paired with manual techniques to meet our patient&apos;s functional goals. Not only do we assess and treat our clients&apos; current symptoms, but we also treat the underlying causes and compensations. From there, we develop a treatment plan that enables the client to ultimately be independent with their care and get back to doing whatever they love.</p>
              <p>We treat each patient as a separate and unique case. Besides addressing the patient&apos;s immediate symptoms and rehabilitating the injury at hand, we analyze their movement patterns to get to the underlying cause of the injury. We then work to correct those movement patterns and ultimately work to decrease the chance of the injury repeating. We also understand that complete recovery looks different for each individual patient, depending on the activities of their daily lives. With this understanding, we incorporate the patient&apos;s lifestyle needs into their rehab, better preparing their joints, tissues and neuromuscular system for their real-life demands. We work to reduce your pain quickly, get you moving faster, and return you to your life sooner. We enjoy our jobs and we want you to enjoy and learn from your rehabilitation experience.</p>
              <p>Beyond training athletes, Atala Physical Therapy also has tremendous experience working with individuals who simply want to improve their overall health and quality of life, through a combination of weight loss, balanced eating habits, and realistic exercise routines. We have close relationships with several nutritionists and weight loss experts who work with us in helping you reach your highest peak.</p>
            </div>
          </div>
          <div className="rounded-xl bg-white p-7 sm:p-10 lg:self-start">
            <LeadForm heading="Get in touch" intro="Talk to our experienced specialists about your concerns." />
          </div>
        </div>
      </section>
      <ResourcesStrip />
      <CtaBand />
    </>
  );
}
