import { PageHero } from "@/components/PageHero";
import { GoogleBadge, ReviewCard } from "@/components/Reviews";
import { WallOfFame } from "@/components/WallOfFame";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { googleReviews, patientLetters } from "@/content/reviews";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { reviewNodes, webPage } from "@/lib/schema";

export const metadata = pageMeta("/reviews/");

const apart = [
  ["Excellent hands-on manual therapy", "With amazing hands-on manual therapy, we differentiate ourselves from other clinics."],
  ["Boutique clinic", "Private treatment rooms and semi-private gym to provide a personal experience and efficient use of your time."],
  ["Positive and motivating environment", "We provide a positive and motivating environment, where patients can feel comfortable and confident during their recovery journey."],
  ["Personalized care", "We take the time to understand your individual needs and create a treatment plan that's tailored to you."],
  ["Expert therapists", "Our therapists are experts in their field and have the knowledge and skills to help you recover quickly and effectively."],
  ["Proven modalities", "We take the time to use classic modalities, such as heat, ice, ultrasound and electrical stimulation, to reduce your pain and speed up the healing process."],
  ["Follow-through", "We ensure that every patient's course of treatment is followed through and results are tracked."],
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": [webPage("/reviews/", "Patient Reviews | Atala Physical Therapy", "Patient reviews of Atala Physical Therapy in Carlsbad."), ...reviewNodes()] }} />
      <PageHero
        crumbs={[{ name: "Reviews", href: "/reviews/" }]}
        title="Patient Reviews | Hear What Clients Say About Atala Physical Therapy"
        lede="Patient-approved: what people say after working with Terri, Jason, Laurel and Julie."
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <GoogleBadge />
          <a href={site.links.googleReviews} target="_blank" rel="noopener" className="link">
            Read or leave a review on Google
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24" aria-labelledby="g-h">
        <div className="wrap">
          <h2 id="g-h" className="display-md">On Google</h2>
          <ul className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3 [&>li]:mb-5 [&>li]:break-inside-avoid">
            {googleReviews.map((r) => (
              <li key={r.author} className="rounded-lg border border-line">
                <ReviewCard author={r.author} text={r.text} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24" aria-labelledby="l-h">
        <div className="wrap">
          <h2 id="l-h" className="display-md">Thank-you notes from the front desk</h2>
          <ul className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {patientLetters.map((l) => (
              <li key={l.author} className="border-t-2 border-oxblood pt-6">
                <blockquote className="text-[1.15rem] leading-relaxed text-marine">&ldquo;{l.text}&rdquo;</blockquote>
                <p className="ui mt-3 text-[0.95rem] font-[650] text-muted">{l.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WallOfFame />

      <section className="py-20 lg:py-24" aria-labelledby="apart-h">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 id="apart-h" className="display-lg">Here&apos;s what sets us apart</h2>
            <p className="mt-6">
              All of these features and benefits contribute to the great reviews we receive from our patients who consistently comment on our personalized care, expert therapists, and positive and motivating environment. We are humbled and grateful for the confidence they and their doctors have in us to maximize each patient&apos;s outcome in our friendly, up-beat clinic. At Atala Physical Therapy, we love what we do — and it shows!
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {apart.map(([t, d]) => (
              <div key={t} className="grid gap-2 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="ui font-[700] text-marine">{t}</dt>
                <dd>{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CtaBand heading="Talk to our experienced specialists about your concerns." />
    </>
  );
}
