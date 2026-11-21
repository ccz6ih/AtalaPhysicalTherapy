import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/MapEmbed";
import { Pic } from "@/components/Pic";
import { ReviewsSection } from "@/components/Reviews";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { ids, webPage } from "@/lib/schema";

export const metadata = pageMeta("/contact-us/", { image: "/wp-content/uploads/2023/03/IMG_3933-scaled.jpg" });

const items = [
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Fax", value: site.fax },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Office", value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`, href: site.mapsUrl },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPage("/contact-us/", "Contact Atala Physical Therapy | Carlsbad, CA", "Contact Atala Physical Therapy in Carlsbad.", "ContactPage", { mainEntity: { "@id": ids.clinic } })} />
      <PageHero crumbs={[{ name: "Contact", href: "/contact-us/" }]} title="Contact Atala Physical Therapy | Carlsbad, CA" lede="Questions about your injury, insurance or self-pay rates? Send a note or call — a real person at our front desk will answer.">
        <dl className="ui mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:max-w-3xl">
          {items.map((i) => (
            <div key={i.label} className="border-t border-line pt-4">
              <dt className="text-[0.9rem] text-muted">{i.label}</dt>
              <dd className="mt-1 text-[1.15rem] font-[650] text-marine">
                {i.href ? (
                  <a href={i.href} className="hover:text-oxblood" data-track="contact-page" {...(i.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
                    {i.value}
                  </a>
                ) : (
                  i.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="rounded-xl bg-fog p-7 sm:p-10">
            <LeadForm heading="Get in touch" />
          </div>
          <div>
            <h2 className="display-md">Where we are located</h2>
            <p className="mt-4">Atala Physical Therapy is located conveniently at 3222 Grey Hawk Court, Carlsbad, CA 92010, in the city of Carlsbad, California.</p>
            <p className="mt-4">Surrounding cities include Encinitas, Leucadia, Oceanside, Vista, and San Marcos. We have patients that come from San Diego, Del Mar, La Jolla, Rancho Santa Fe, Olivenhain, Bonsall and Fallbrook! Our location is easily accessible by car, and ample free parking is available in front of the building. Quality care is well worth the effort to find this gem of a clinic!</p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl">
              <Pic src="/wp-content/uploads/2023/03/IMG_3933-scaled.jpg" alt="Atala Physical Therapy entrance at 3222 Grey Hawk Court" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover object-[50%_60%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="display-md">Find us on the map</h2>
            <p className="mt-4">The location of Atala Physical Therapy in Carlsbad, CA is great for physical therapy for a few reasons.</p>
            <p className="mt-4">Firstly, it is easily accessible to residents of surrounding cities such as Oceanside, Vista, Encinitas, and San Marcos. The location is also close to major highways, making it convenient to get to from further locations.</p>
            <p className="mt-4">Additionally, the facility is located in a quiet business park, surrounded by residential homes, providing a comfortable and private setting for patients to receive therapy. The facility also offers private treatment rooms and a semi-private gym, which can help to create a more personalized and effective treatment experience. Overall, the location and facilities of Atala Physical Therapy make it an excellent choice for those seeking high-quality physical therapy in the north San Diego area.</p>
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="btn btn-ghost mt-8">
              Get directions
            </a>
          </div>
          <MapEmbed className="min-h-[420px]" />
        </div>
      </section>
      <ReviewsSection heading="Hear it from our patients" />
    </>
  );
}
