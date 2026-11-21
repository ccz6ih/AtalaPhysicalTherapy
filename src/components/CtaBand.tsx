import Link from "next/link";
import { site } from "@/content/site";
import { RidgeDivider } from "./Ridge";

/** Closing call to action used on most pages. */
export function CtaBand({
  heading = "We'll help you to get better and stay better.",
  text = "Talk to our experienced specialists about your concerns. No referral needed — book online or call and we'll find a time that works.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section data-stage="Your peak" data-section="cta" className="on-dark relative mt-[70px] bg-marine text-white sm:mt-[110px]" aria-labelledby="cta-h">
      <RidgeDivider fill="var(--color-marine)" className="absolute bottom-full left-0" flip />
      <div className="wrap grid items-end gap-10 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-24">
        <div>
          <h2 id="cta-h" className="display-lg !text-white">
            {heading}
          </h2>
          <p className="lede mt-5 max-w-2xl !text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="cta-band">
            Book an evaluation online
          </a>
          <a href={site.phoneHref} className="btn btn-ghost" data-track="cta-band">
            Call {site.phone}
          </a>
          <Link href="/schedule-an-appointment/" className="ui text-center text-[0.95rem] text-white/75 underline underline-offset-4 hover:text-white">
            Prefer a call back? Request an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
