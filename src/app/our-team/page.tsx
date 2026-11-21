import { PageHero } from "@/components/PageHero";
import { TeamGrid } from "@/components/TeamGrid";
import { ReviewsSection } from "@/components/Reviews";
import { CtaBand } from "@/components/CtaBand";
import { Pic } from "@/components/Pic";
import { JsonLd } from "@/components/JsonLd";
import { team } from "@/content/team";
import { pageMeta } from "@/lib/seo";
import { personNode, webPage } from "@/lib/schema";

export const metadata = pageMeta("/our-team/", { image: "/wp-content/uploads/2022/12/5M3A8070-2-scaled.jpg" });

export default function TeamPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [webPage("/our-team/", "Meet Our Team | Expert Physical Therapists in Carlsbad, CA", "The Atala Physical Therapy team.", "AboutPage"), ...team.map((m) => personNode(m.slug))] }} />
      <PageHero
        crumbs={[{ name: "Our Team", href: "/our-team/" }]}
        title="Meet Our Team | Expert Physical Therapists in Carlsbad, CA"
        lede="A small team on purpose. You'll know everyone by name, and they'll know your goals — not just your diagnosis."
      />
      <section className="bg-white py-16 lg:py-24" aria-labelledby="pros-h">
        <div className="wrap">
          <h2 id="pros-h" className="display-md">Meet our professionals</h2>
          <div className="mt-10">
            <TeamGrid />
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Pic src="/wp-content/uploads/2023/02/Facetune_28-08-2022-16-03-49.jpg" alt="Terri Brusseau Kraus, PT, MPT, owner of Atala Physical Therapy" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-top" />
          </div>
          <div>
            <h2 className="display-lg">Led by Terri Brusseau Kraus, PT, MPT, CCET</h2>
            <div className="mt-6 space-y-4 text-[1.05rem]">
              {team[0].bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection heading="What patients say about the team" />
      <CtaBand />
    </>
  );
}
