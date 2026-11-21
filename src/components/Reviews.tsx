import { googleReviews, googleSummary } from "@/content/reviews";
import { site } from "@/content/site";
import { GoogleMark, Stars } from "./Stars";
import { ReviewRail } from "./ReviewRail";
import { ExpandText } from "./ExpandText";

export function GoogleBadge({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={site.links.googleReviews}
      target="_blank"
      rel="noopener"
      className={`ui inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-4 transition-colors ${dark ? "bg-white/10 text-white hover:bg-white/15" : "bg-white text-marine shadow-[0_1px_0_var(--color-line)] hover:bg-fog-2"}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
        <GoogleMark className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="flex items-center gap-2">
          <b className="text-[1.05rem]">{googleSummary.rating.toFixed(1)}</b>
          <Stars n={5} />
        </span>
        <span className={`text-[0.8rem] ${dark ? "text-white/70" : "text-muted"}`}>{googleSummary.count} Google reviews</span>
      </span>
    </a>
  );
}

function initials(n: string) {
  return n
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function ReviewCard({ author, text }: { author: string; text: string }) {
  return (
    <figure className="flex h-full flex-col rounded-lg bg-white p-7">
      <Stars n={5} />
      <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-body">
        <ExpandText text={text} />
      </blockquote>
      <figcaption className="ui mt-6 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-marine text-[0.85rem] font-[700] text-white">{initials(author)}</span>
        <span className="leading-tight">
          <span className="block font-[650] text-marine">{author}</span>
          <span className="flex items-center gap-1.5 text-[0.8rem] text-muted">
            <GoogleMark className="h-3.5 w-3.5" /> Google review
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewsSection({ heading = "What patients say after the climb", intro }: { heading?: string; intro?: string }) {
  return (
    <section data-section="reviews" className="py-20 lg:py-28" aria-labelledby="reviews-h">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="reviews-h" className="display-lg">
              {heading}
            </h2>
            {intro && <p className="lede mt-4">{intro}</p>}
          </div>
          <GoogleBadge />
        </div>
      </div>
      <ReviewRail>
        {googleReviews.map((r) => (
          <li key={r.author} className="w-[min(86vw,25rem)] shrink-0 snap-start">
            <ReviewCard author={r.author} text={r.text} />
          </li>
        ))}
      </ReviewRail>
    </section>
  );
}
