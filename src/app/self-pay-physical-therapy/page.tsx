import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Pic } from "@/components/Pic";
import { LeadForm } from "@/components/LeadForm";
import { GoogleBadge, ReviewsSection } from "@/components/Reviews";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Ridge } from "@/components/Ridge";
import { images } from "@/content/services";
import { selfPay, site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { ids, webPage } from "@/lib/schema";

export const metadata = pageMeta("/self-pay-physical-therapy/", {
  title: "Self-Pay & Cash-Based Physical Therapy in Carlsbad, CA | Atala PT",
  description: "Cash-based physical therapy in Carlsbad with no referral, no visit caps and one-on-one care in private rooms. See how self-pay works at Atala Physical Therapy.",
  image: "/wp-content/uploads/2022/12/5M3A7984-scaled.jpg",
});

const reasons = [
  { title: "More of your therapist", text: "Extended one-on-one sessions with your dedicated therapist in a private treatment room — not a rotating cast of aides on a busy floor." },
  { title: "Start without the wait", text: "California allows Direct Access, so you can be evaluated and treated without waiting on a physician referral or an insurance authorization." },
  { title: "A plan built on progress", text: "How often you come and how long your plan runs are decided by your goals and how you respond, not by a visit cap." },
  { title: "Know the cost up front", text: "One clear rate per visit, paid at the visit. No surprise statements months later after deductibles and coinsurance." },
];

const steps = [
  { title: "Book your evaluation", text: "Book online or call. No referral or insurance paperwork needed to get started." },
  { title: "Find the cause", text: "A full movement assessment and a working diagnosis of what's driving your pain, with hands-on treatment the same day." },
  { title: "Follow your plan", text: "One-on-one manual therapy and targeted exercise, plus a home program that fits your week." },
  { title: "Reach your peak", text: "We progress you back to what you love — surfing, golf, running, lifting or simply a pain-free day — and teach you how to stay there." },
];

const faqs = [
  { q: "Do I need a referral from my doctor?", a: "No. Atala Physical Therapy accepts patients without a physician referral. In California, patients can be evaluated and treated by a licensed physical therapist without a referral (Direct Access)." },
  { q: "Can I still use my insurance?", a: "Yes. We accept Medicare, most PPO insurances and workers' compensation. If your plan covers physical therapy well, insurance may cost you less — our front office will verify your benefits and help you compare before you decide." },
  { q: "I have Medicare. Can I pay cash instead?", a: "Medicare has specific rules about private payment for covered services. Because we accept Medicare, Medicare patients are generally billed through Medicare. Call us and we'll explain your options." },
  { q: "How many visits will I need?", a: "It depends on your condition, your goals and how you respond to treatment. After your evaluation your therapist will explain your plan and give you an estimate, and you'll always know the cost of each visit before you book it." },
  { q: "What should I bring and wear?", a: "Comfortable athletic clothing and closed-toe shoes, a medication list, any recent imaging (X-ray or MRI) and a photo ID. Please arrive 15 minutes early for your first visit." },
  { q: "What is your cancellation policy?", a: "Please give us 24 hours' notice. Less than 24 hours' notice incurs a $50 cancellation fee, and a missed appointment a $75 no-show fee." },
];

function price(n: number | null) {
  return n ? `$${n}` : null;
}

export default function SelfPay() {
  const perks = selfPay.perks.filter((p) => !p.confirm);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webPage("/self-pay-physical-therapy/", "Self-Pay & Cash-Based Physical Therapy in Carlsbad, CA", "How self-pay physical therapy works at Atala PT.", "MedicalWebPage", { provider: { "@id": ids.clinic } }),
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />
      <section data-stage="Basecamp" className="contours bg-[position:right_-200px_top_-60px] pt-8 lg:pt-12">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Self-Pay Physical Therapy", href: "/self-pay-physical-therapy/" }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="display-xl">Self-pay physical therapy in Carlsbad</h1>
              <p className="lede mt-6 max-w-2xl">
                Pay directly and get care the way it should work: your own therapist, a private room, and a plan decided by your progress — not by an insurance company.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="selfpay-hero">
                  Book an evaluation
                </a>
                <a href="#rates" className="btn btn-ghost">
                  See how pricing works
                </a>
              </div>
              <div className="mt-8">
                <GoogleBadge />
              </div>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem]">
              <Pic src={images.jasonTreat.src} alt={images.jasonTreat.alt} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Ridge />
        </div>
      </section>

      <section data-stage="Why pay direct" className="on-dark bg-marine pb-24 pt-8 text-white/80" aria-labelledby="why-h">
        <div className="wrap">
          <h2 id="why-h" className="display-lg max-w-3xl !text-white">Why patients choose to pay directly</h2>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 md:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="bg-marine p-8 lg:p-10">
                <dt className="ui text-[1.3rem] font-[700] text-white">{r.title}</dt>
                <dd className="mt-3 text-[1.02rem]">{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="rates" data-stage="Pricing" className="bg-white py-20 lg:py-28" aria-labelledby="rates-h">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 id="rates-h" className="display-lg">Simple, upfront pricing</h2>
            <p className="lede">You&apos;ll know what each visit costs before you book it. Call or send a note and we&apos;ll give you today&apos;s rates.</p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {selfPay.visits.map((v) => (
              <li key={v.name} className="flex flex-col rounded-xl border border-line bg-fog p-7">
                <h3 className="ui text-[1.25rem] font-[700]">{v.name}</h3>
                <p className="ui mt-3 text-[2rem] font-[750] tracking-tight text-oxblood">{price(v.price) ?? <span className="text-[1.15rem] font-[650]">Ask for today&apos;s rate</span>}</p>
                <p className="mt-3 flex-1 text-[0.98rem]">{v.detail}</p>
              </li>
            ))}
          </ul>
          <ul className="peak-list mt-10 grid gap-x-10 sm:grid-cols-2 [&>li+li]:mt-0 [&>li]:mb-3">
            {perks.map((p) => (
              <li key={p.text}>{p.text}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[0.98rem] text-muted">
            Prefer to use insurance? We accept Medicare, most PPO plans and workers&apos; compensation. <Link href="/client-information/" className="link">Insurance &amp; billing details</Link>
          </p>
        </div>
      </section>

      <section data-stage="How it works" className="py-20 lg:py-28" aria-labelledby="how-h">
        <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 id="how-h" className="display-lg">How it works</h2>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-xl">
              <Pic src={images.chartTeach.src} alt={images.chartTeach.alt} fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ol className="relative space-y-10 border-l-2 border-line pl-10 lg:mt-24">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="ui absolute -left-[3.6rem] top-0 grid h-10 w-10 place-items-center rounded-full bg-oxblood text-[0.95rem] font-[700] text-white">{i + 1}</span>
                <h3 className="ui text-[1.35rem] font-[700]">{s.title}</h3>
                <p className="mt-2 text-[1.04rem]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-stage="Questions" className="bg-white py-20 lg:py-28" aria-labelledby="faq-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 id="faq-h" className="display-lg">Questions about self-pay</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="ui flex cursor-pointer list-none items-center justify-between gap-6 text-[1.1rem] font-[700] text-marine [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden className="shrink-0 transition-transform group-open:rotate-45">
                      <path d="M7 0v14M0 7h14" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </summary>
                  <p className="mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-fog p-7 sm:p-10 lg:self-start">
            <LeadForm variant="selfpay" heading="Ask about self-pay rates" intro="Tell us what you're dealing with and we'll reply with rates and the soonest openings." />
          </div>
        </div>
      </section>

      <ReviewsSection heading="Worth every visit" />
      <CtaBand />
    </>
  );
}
