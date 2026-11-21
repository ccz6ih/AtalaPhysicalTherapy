import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { site } from "@/content/site";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className={`ui text-sm text-muted ${className}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && (
                <svg width="6" height="9" viewBox="0 0 6 9" aria-hidden className="opacity-50">
                  <path d="M1 1l3.5 3.5L1 8" stroke="currentColor" fill="none" strokeWidth="1.4" />
                </svg>
              )}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-marine">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-oxblood">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: `${site.url}${c.href}` })),
        }}
      />
    </>
  );
}
