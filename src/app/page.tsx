import Link from "next/link";
import { Pic } from "@/components/Pic";
import { Ridge } from "@/components/Ridge";
import { GoogleBadge, ReviewsSection } from "@/components/Reviews";
import { TeamGrid } from "@/components/TeamGrid";
import { WallOfFame } from "@/components/WallOfFame";
import { ResourcesStrip } from "@/components/ResourcesStrip";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { images, services } from "@/content/services";
import { BodyMap } from "@/components/BodyMap";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { webPage } from "@/lib/schema";

export const metadata = pageMeta("/", { image: "/brand/og-default.jpg" });

const comparison = [
  { topic: "Getting started", typical: "Referral and insurance authorization first", atala: "No referral needed in California — book directly" },
  { topic: "Who treats you", typical: "Often passed between providers and aides", atala: "Your dedicated therapist, every visit" },
  { topic: "Where", typical: "A busy open floor with several patients at once", atala: "Private treatment rooms and a semi-private gym of two or three patients" },
  { topic: "How many visits", typical: "Capped by plan limits and approvals", atala: "Set by your progress and your goals" },
  { topic: "What it costs", typical: "Deductibles and coinsurance you learn about later", atala: "One clear rate per visit, known before you book" },
];

const difference = [
  "Excellent hands-on manual therapy combined with specific exercise therapy.",
  "Treatment as an individual with the patient's needs specifically addressed.",
  "We motivate our patients to succeed and become involved with their treatment.",
  "Education of our patients with respect to their diagnosis, treatment plan, and their responsibility in managing their condition.",
  "Follow-through with every patient's course of treatment.",
  "Private treatment rooms.",
  "Semi-private gym (no more than two-three patients).",
  "Supervised at all times to ensure proper exercise form, safety and maximize your results.",
];

export default function Home() {
  return (
    <>
      <JsonLd data={webPage("/", "Top-Rated Physical Therapy Services in Carlsbad, CA | Atala PT", site.description, "MedicalWebPage", { primaryImageOfPage: `${site.url}/brand/og-default.jpg` })} />

      {/* Hero */}
      <section data-stage="Basecamp" data-section="hero" className="contours relative overflow-hidden bg-[position:right_-160px_top_-60px] pt-8 lg:pt-14">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="relative z-10 pb-4">
            <p className="ui text-[0.98rem] font-[560] text-sage">Boutique orthopedic physical therapy in Carlsbad since {site.foundingYear}</p>
            <h1 className="display-xl mt-4 max-w-[52rem]">Reaching new heights of recovery at Atala Physical Therapy</h1>
            <p className="lede mt-6 max-w-[36rem]">
              One-on-one care from licensed physical therapists in private treatment rooms. No referral needed, and no insurance plan deciding how many visits you get.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="hero">
                Book an evaluation
              </a>
              <Link href="/personal-pt-quiz/" className="btn btn-ghost">
                Take the 60-second quiz
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <GoogleBadge />
              <p className="ui max-w-[17rem] text-[0.9rem] leading-snug text-muted">
                Self-pay friendly. Medicare, most PPO plans and workers&apos; comp accepted.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-fog-2">
              <Pic src={images.teamGym.src} alt={images.teamGym.alt} fill priority sizes="(min-width:1024px) 40vw, 90vw" className="object-cover object-[50%_30%]" />
            </div>
            <figure className="absolute -bottom-6 left-4 right-10 rounded-lg bg-white p-5 shadow-[0_24px_50px_-24px_rgba(30,43,49,.45)] sm:-left-8 sm:right-auto sm:max-w-[19rem]">
              <blockquote className="text-[0.98rem] leading-snug text-marine">
                &ldquo;She is always timely, never rushed, also personable, professional and truly caring!&rdquo;
              </blockquote>
              <figcaption className="ui mt-2 text-[0.82rem] text-muted">Allison M., Google review</figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-16 lg:mt-6">
          <Ridge />
        </div>
      </section>

      {/* Cash-based / direct pay */}
      <section data-stage="Pay direct" data-section="direct-pay" className="on-dark bg-marine pb-24 pt-10 text-white/85 lg:pb-28" aria-labelledby="direct-h">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 id="direct-h" className="display-lg max-w-[40rem] !text-white">
              Your recovery, decided by you and your therapist.
            </h2>
            <p className="lede !text-white/80">
              More of our patients now choose to pay directly for their care. They get more time, fewer hoops and a plan shaped around their goals instead of an approval letter.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-xl border border-white/15">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Typical insurance-driven clinic compared with Atala self-pay care</caption>
              <thead className="ui">
                <tr className="bg-white/5 text-[0.95rem]">
                  <th scope="col" className="hidden w-[22%] px-6 py-4 font-[600] text-white/60 md:table-cell">
                    <span className="sr-only">Topic</span>
                  </th>
                  <th scope="col" className="px-5 py-4 font-[600] text-white/60 md:px-6">Typical insurance-driven clinic</th>
                  <th scope="col" className="bg-oxblood px-5 py-4 font-[700] text-white md:px-6">Atala, paying direct</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.topic} className="border-t border-white/10 align-top">
                    <th scope="row" className="ui hidden px-6 py-5 text-[1rem] font-[650] text-white md:table-cell">
                      {r.topic}
                    </th>
                    <td className="px-5 py-5 text-[0.98rem] text-white/65 md:px-6">
                      <span className="ui mb-1 block text-[0.85rem] font-[650] text-white md:hidden">{r.topic}</span>
                      {r.typical}
                    </td>
                    <td className="bg-oxblood/25 px-5 py-5 text-[0.98rem] text-white md:px-6">
                      <span className="ui mb-1 block text-[0.85rem] font-[650] text-transparent md:hidden" aria-hidden>
                        .
                      </span>
                      {r.atala}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/self-pay-physical-therapy/" className="btn btn-light">
              How self-pay works
            </Link>
            <p className="ui text-[0.95rem] text-white/70">
              Using insurance? We accept Medicare, most PPO plans and workers&apos; compensation.{" "}
              <Link href="/client-information/" className="link">
                Insurance details
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Story / holistic approach */}
      <section data-stage="Our approach" data-section="about" className="py-24 lg:py-32" aria-labelledby="about-h">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Pic src={images.spineTeach.src} alt={images.spineTeach.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <p className="ui mt-4 text-[0.9rem] text-muted">Every visit starts with understanding why it hurts, not just where.</p>
          </div>
          <div className="lg:pt-6">
            <p className="ui text-[1rem] font-[600] text-oxblood">Helping you move, heal &amp; thrive since {site.foundingYear}.</p>
            <h2 id="about-h" className="display-lg mt-3">
              We believe in a whole-body, holistic approach to treat your specific needs
            </h2>
            <div className="mt-7 space-y-5 text-[1.08rem]">
              <p>
                At Atala Physical Therapy, we&apos;re climbing to new heights of patient care! Our name, Atala, meaning &ldquo;mountain peak&rdquo; in the San Dieguito Native American language, symbolizes our goal to help you reach your highest potential during treatment.
              </p>
              <p>
                Our experienced therapists will take the time to explain your treatment plan and how it&apos;s tailored to your unique needs. We&apos;re here to help you get back to doing what you love, in the fastest, most efficient way! We believe in treating the whole body and look at each injury in its relationship to the individual.
              </p>
              <p>
                With a focus on individualized care and positive reinforcement, we&apos;ll work with you to push yourself toward a higher level of recovery each day. Our ultimate measure of success is your satisfaction, so let&apos;s start your journey to complete health today!
              </p>
            </div>
            <dl className="ui mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-[0.9rem] text-muted">Lead therapist experience</dt>
                <dd className="mt-1 text-[1.6rem] font-[750] tracking-tight text-marine">25+ years</dd>
              </div>
              <div>
                <dt className="text-[0.9rem] text-muted">Patients in the gym at once</dt>
                <dd className="mt-1 text-[1.6rem] font-[750] tracking-tight text-marine">2 to 3</dd>
              </div>
              <div>
                <dt className="text-[0.9rem] text-muted">Referral required</dt>
                <dd className="mt-1 text-[1.6rem] font-[750] tracking-tight text-marine">None</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* The Atala difference */}
      <section data-stage="The difference" data-section="difference" className="bg-white py-24 lg:py-28" aria-labelledby="diff-h">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="diff-h" className="display-lg">The Atala difference</h2>
            <p className="mt-6 text-[1.08rem]">
              Atala Physical Therapy is a private boutique physical therapy clinic. We are the perfect blend of clinical expertise, genuine compassion, and tailored care. We use a combination of hands-on techniques to treat you effectively, complement your lifestyle, and design a program to fit your life and realistic needs and desires.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Pic src={images.privateRoom.src} alt={images.privateRoom.alt} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Pic src={images.trx.src} alt={images.trx.alt} fill sizes="(min-width:1024px) 20vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {difference.map((d) => (
              <li key={d} className="flex gap-4 bg-white p-6 lg:p-7">
                <svg width="22" height="16" viewBox="0 0 22 16" className="mt-1 shrink-0 fill-oxblood" aria-hidden>
                  <path d="M0 16L8 3l3.5 5L14 4l8 12z" />
                </svg>
                <span className="text-[1.02rem] leading-snug text-marine">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section data-stage="Services" data-section="services" className="py-24 lg:py-28" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="svc-h" className="display-lg">We can help you with</h2>
            <Link href="/services/" className="link">
              View all services
            </Link>
          </div>
          <ul className="mt-12 border-t border-marine/20">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-marine/20">
                <Link href={s.path} className="group grid items-center gap-4 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto] md:gap-10">
                  <span className="ui text-[clamp(1.35rem,2.4vw,2rem)] font-[700] leading-tight tracking-tight text-marine transition-colors group-hover:text-oxblood" style={{ fontStretch: "112%" }}>
                    {s.name.replace(" & Athletic Recovery", "")}
                  </span>
                  <span className="text-[1rem] text-body">{s.cardText}</span>
                  <span className="hidden h-12 w-12 place-items-center rounded-full border border-marine/25 text-marine transition-colors group-hover:border-oxblood group-hover:bg-oxblood group-hover:text-white md:grid" aria-hidden>
                    <svg width="16" height="12" viewBox="0 0 16 12"><path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conditions + body map */}
      <section data-stage="Where it hurts" data-section="conditions" className="bg-fog-2 py-24 lg:py-28" aria-labelledby="cond-h">
        <div className="wrap">
          <div className="grid gap-8 border-b border-marine/15 pb-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h2 id="cond-h" className="display-lg">Comprehensive treatment for a range of conditions</h2>
            <div className="space-y-4 text-[1.05rem]">
              <p>
                At Atala Physical Therapy, we&apos;re here to help get you back to feeling your best! We specialize in treating a wide range of musculoskeletal conditions, primarily those that are orthopedic in nature.
              </p>
              <p>
                Whether you&apos;re dealing with an injury from trauma, poor posture, muscle imbalances, nerve damage, overuse injuries, or post-operative complications, we&apos;ve got you covered.{" "}
                <Link href="/conditions-we-treat/" className="link">
                  See every condition we treat
                </Link>
              </p>
            </div>
          </div>
          <div className="pt-14">
            <BodyMap />
          </div>
        </div>
      </section>

      <ReviewsSection stage="Reviews" heading="Some of our best patient reviews" intro="Real words from real patients, posted on Google." />

      {/* Team */}
      <section data-stage="Your team" data-section="team" className="pb-24 lg:pb-28" aria-labelledby="team-h">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="team-h" className="display-lg max-w-2xl">The professional team who&apos;ll guide your climb</h2>
            <Link href="/our-team/" className="link">
              Meet the team
            </Link>
          </div>
          <div className="mt-12">
            <TeamGrid compact />
          </div>
        </div>
      </section>

      <WallOfFame />

      {/* Quiz */}
      <section data-stage="Your plan" data-section="quiz-promo" className="py-24 lg:py-28" aria-labelledby="quiz-h">
        <div className="wrap">
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-white p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
            <div>
              <h2 id="quiz-h" className="display-lg">Not sure where to start?</h2>
              <p className="lede mt-5 max-w-xl">
                Answer four quick questions about your pain, your day and your goals. You&apos;ll get a personalized plan outline you can bring to your first visit.
              </p>
              <Link href="/personal-pt-quiz/" className="btn btn-primary mt-8">
                Start the quiz
              </Link>
            </div>
            <ol className="ui space-y-3 text-[1rem] text-marine" aria-label="Quiz questions">
              {["How would you describe your pain today?", "How would you describe your daily movement?", "What's your biggest goal right now?", "What kind of approach do you prefer?"].map((q, i) => (
                <li key={q} className="flex items-center gap-4 rounded-lg border border-line px-5 py-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fog text-[0.85rem] font-[700]">{i + 1}</span>
                  {q}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ResourcesStrip />
      <CtaBand />
    </>
  );
}
