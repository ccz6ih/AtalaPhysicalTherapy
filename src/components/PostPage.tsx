import { notFound } from "next/navigation";
import Link from "next/link";
import posts from "@/content/posts.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Pic } from "@/components/Pic";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/CtaBand";
import { ResourcesStrip } from "@/components/ResourcesStrip";
import { GoogleBadge } from "@/components/Reviews";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { ids } from "@/lib/schema";

const find = (slug: string) => posts.find((p) => p.slug === slug);
const fmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" });

export function postMeta(slug: string) {
  const p = find(slug);
  if (!p) return {};
  return pageMeta(`/${p.slug}/`, { type: "article", image: p.image ?? undefined });
}

export function PostPage({ slug }: { slug: string }) {
  const p = find(slug);
  if (!p) notFound();
  const url = `${site.url}/${p.slug}/`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          mainEntityOfPage: url,
          headline: p.title,
          description: p.excerpt,
          image: p.image ? `${site.url}${p.image}` : undefined,
          datePublished: p.date,
          dateModified: p.modified,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@id": ids.clinic },
          isPartOf: { "@id": ids.website },
          inLanguage: "en-US",
        }}
      />
      <article>
        <header className="contours bg-[position:right_-260px_top_-80px] pb-12 pt-8 lg:pt-12">
          <div className="wrap">
            <Breadcrumbs items={[{ name: "Resources", href: "/resources/" }, { name: p.title, href: `/${p.slug}/` }]} />
            <div className="mt-8 max-w-4xl">
              <p className="ui text-[0.95rem] text-muted">
                <time dateTime={p.date}>{fmt(p.date)}</time>, {p.readingMinutes} min read
              </p>
              <h1 className="display-lg mt-3">{p.title}</h1>
            </div>
          </div>
        </header>
        {p.image && (
          <div className="wrap">
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-fog-2">
              <Pic src={p.image} alt={p.imageAlt || ""} fill priority sizes="(min-width:1312px) 1220px, 100vw" className="object-cover" />
            </div>
          </div>
        )}
        <div className="wrap grid gap-14 py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20 lg:py-20">
          <div className="prose-atala max-w-[42rem] text-[1.08rem]" dangerouslySetInnerHTML={{ __html: p.html }} />
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl bg-white p-6">
              <p className="ui text-[1.1rem] font-[700] text-marine">Ready to feel better?</p>
              <p className="mt-2 text-[0.98rem]">One-on-one care in Carlsbad. No referral needed.</p>
              <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary mt-5 w-full" data-track="post-aside">
                Book an evaluation
              </a>
              <a href={site.phoneHref} className="btn btn-ghost mt-2 w-full" data-track="post-aside">
                {site.phone}
              </a>
              <div className="mt-5">
                <GoogleBadge />
              </div>
            </div>
            <Link href="/personal-pt-quiz/" className="link mt-5 inline-block">
              Take the 60-second PT quiz
            </Link>
          </aside>
        </div>
      </article>
      <ResourcesStrip exclude={p.slug} heading="Keep reading" />
      <CtaBand />
    </>
  );
}
