import { wallOfFame } from "@/content/reviews";
import { Pic } from "./Pic";
import { ReviewRail } from "./ReviewRail";

/** Patients back at their peak — photos from the old homepage "summit" cards. */
export function WallOfFame({ heading = "Back at their peak", intro = "Ironman finishes, mud runs, graduation stages and Harley rides. A few of the patients who climbed back with us." }: { heading?: string; intro?: string }) {
  return (
    <section data-section="wall-of-fame" className="bg-white py-20 lg:py-24" aria-labelledby="wall-h">
      <div className="wrap">
        <div className="max-w-2xl">
          <h2 id="wall-h" className="display-lg">{heading}</h2>
          <p className="lede mt-4">{intro}</p>
        </div>
      </div>
      <ReviewRail label="Patients back at their peak">
        {wallOfFame.map((c) => (
          <li key={c.src} className="w-[min(80vw,21rem)] shrink-0 snap-start">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-fog-2">
                <Pic src={c.src} alt={`${c.name}, an Atala Physical Therapy patient`} fill sizes="(min-width:640px) 336px, 80vw" className="object-cover" />
              </div>
              <blockquote className="mt-4 text-[1.02rem] leading-snug text-marine">&ldquo;{c.quote}&rdquo;</blockquote>
              <figcaption className="ui mt-2 text-[0.9rem] font-[650] text-oxblood">{c.name}</figcaption>
            </figure>
          </li>
        ))}
      </ReviewRail>
    </section>
  );
}
