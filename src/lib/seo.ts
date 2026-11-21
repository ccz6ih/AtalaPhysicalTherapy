import type { Metadata } from "next";
import seo from "@/content/seo.json";
import { site } from "@/content/site";

type SeoEntry = { title: string; description: string; ogImage: string | null };
const table = seo as Record<string, SeoEntry>;

export const DEFAULT_OG = "/brand/og-default.jpg";

/** Drop the redundant " - Atala Physical Therapy" suffix when the title already names the clinic. */
function tidyTitle(t: string) {
  const suffix = " - Atala Physical Therapy";
  if (t.endsWith(suffix)) {
    const head = t.slice(0, -suffix.length);
    if (/Atala/i.test(head)) return head;
  }
  return t;
}

/**
 * Metadata for a route. Titles and descriptions default to the values Rank Math
 * served on the WordPress site so existing rankings carry over.
 */
export function pageMeta(path: string, o: { title?: string; description?: string; image?: string; type?: "website" | "article"; noindex?: boolean } = {}): Metadata {
  const e = table[path];
  const title = tidyTitle(o.title ?? e?.title ?? site.name);
  const description = o.description ?? e?.description ?? site.description;
  const url = `${site.url}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: o.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: o.type ?? "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_US",
      // Share images come from each route's opengraph-image.tsx (app/opengraph-image.tsx is the fallback).
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
