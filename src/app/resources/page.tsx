import Link from "next/link";
import posts from "@/content/posts.json";
import { PageHero } from "@/components/PageHero";
import { Pic } from "@/components/Pic";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { webPage } from "@/lib/schema";

export const metadata = pageMeta("/resources/", {
  title: "Physical Therapy Resources & Recovery Guides | Atala PT Carlsbad",
  description: "Recovery tips, post-surgery guides and physical therapy advice for active people in Carlsbad and North County San Diego from the team at Atala Physical Therapy.",
});

const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" });

export default function Resources() {
  const [lead, ...rest] = posts;
  return (
    <>
      <JsonLd data={webPage("/resources/", "Physical Therapy Resources", "Articles from Atala Physical Therapy.", "CollectionPage", {
        mainEntity: { "@type": "ItemList", itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${site.url}/${p.slug}/`, name: p.title })) },
      })} />
      <PageHero crumbs={[{ name: "Resources", href: "/resources/" }]} title="Resources for an active recovery" lede="Practical guides from our therapists on recovering well, staying active and getting the most out of physical therapy in Carlsbad." />
      <section className="bg-white py-16 lg:py-24">
        <div className="wrap">
          <Link href={`/${lead.slug}/`} className="group grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            {lead.image && (
              <span className="relative block aspect-[16/10] overflow-hidden rounded-xl bg-fog-2">
                <Pic src={lead.image} alt={lead.imageAlt || ""} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </span>
            )}
            <span>
              <span className="ui block text-[0.9rem] text-muted">
                {fmt(lead.date)}, {lead.readingMinutes} min read
              </span>
              <span className="display-md mt-3 block group-hover:text-oxblood">{lead.title}</span>
              <span className="mt-4 block">{lead.excerpt}</span>
              <span className="link mt-5 inline-block">Read the article</span>
            </span>
          </Link>
          <ul className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}/`} className="group block">
                  {p.image && (
                    <span className="relative block aspect-[3/2] overflow-hidden rounded-lg bg-fog-2">
                      <Pic src={p.image} alt={p.imageAlt || ""} fill sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                    </span>
                  )}
                  <span className="ui mt-4 block text-[0.85rem] text-muted">
                    {fmt(p.date)}, {p.readingMinutes} min read
                  </span>
                  <span className="ui mt-1 block text-[1.25rem] font-[700] leading-snug text-marine group-hover:text-oxblood">{p.title}</span>
                  <span className="mt-2 block text-[0.98rem] text-body">{p.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
