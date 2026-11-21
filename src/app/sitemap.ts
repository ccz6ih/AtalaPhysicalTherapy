import type { MetadataRoute } from "next";
import posts from "@/content/posts.json";
import { services } from "@/content/services";
import { guides, guidePath } from "@/content/guides";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ["/", 1],
    ["/self-pay-physical-therapy/", 0.9],
    ["/services/", 0.9],
    ["/conditions-we-treat/", 0.8],
    ["/client-information/", 0.7],
    ["/our-team/", 0.7],
    ["/reviews/", 0.7],
    ["/contact-us/", 0.7],
    ["/schedule-an-appointment/", 0.8],
    ["/online-patient-form/", 0.5],
    ["/personal-pt-quiz/", 0.5],
    ["/therapy-quiz/", 0.4],
    ["/resources/", 0.6],
    ["/privacy-policy/", 0.2],
  ];
  return [
    ...pages.map(([p, priority]) => ({ url: `${site.url}${p}`, priority, changeFrequency: "monthly" as const })),
    ...services.map((s) => ({ url: `${site.url}${s.path}`, priority: 0.8, changeFrequency: "monthly" as const, images: [`${site.url}${s.hero.src}`] })),
    ...guides.map((g) => ({ url: `${site.url}${guidePath(g.slug)}`, lastModified: g.updated, priority: 0.8, changeFrequency: "monthly" as const, images: [`${site.url}${g.image.src}`] })),
    ...posts.map((p) => ({ url: `${site.url}/${p.slug}/`, lastModified: p.modified, priority: 0.6, changeFrequency: "yearly" as const, images: p.image ? [`${site.url}${p.image}`] : undefined })),
  ];
}
