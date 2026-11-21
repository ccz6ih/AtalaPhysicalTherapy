import Link from "next/link";
import posts from "@/content/posts.json";
import { Pic } from "./Pic";

export function ResourcesStrip({ exclude, heading = "Resources" }: { exclude?: string; heading?: string }) {
  const list = posts.filter((p) => p.slug !== exclude).slice(0, 3);
  return (
    <section data-stage="Learn more" data-section="resources" className="py-20 lg:py-24" aria-labelledby="res-h">
      <div className="wrap">
        <div className="flex items-end justify-between gap-6">
          <h2 id="res-h" className="display-lg">{heading}</h2>
          <Link href="/resources/" className="link hidden sm:inline">All articles</Link>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {list.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}/`} className="group block">
                {p.image && (
                  <span className="block aspect-[3/2] overflow-hidden rounded-lg bg-fog-2">
                    <Pic src={p.image} alt={p.imageAlt || ""} sizes="(min-width:768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </span>
                )}
                <span className="ui mt-4 block text-[0.85rem] text-muted">{p.readingMinutes} min read</span>
                <span className="ui mt-1 block text-[1.2rem] font-[700] leading-snug text-marine group-hover:text-oxblood">{p.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/resources/" className="link mt-8 inline-block sm:hidden">All articles</Link>
      </div>
    </section>
  );
}
