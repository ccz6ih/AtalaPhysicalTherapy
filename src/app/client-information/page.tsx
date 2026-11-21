import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { Pic } from "@/components/Pic";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { webPage } from "@/lib/schema";

export const metadata = pageMeta("/client-information/", { image: "/wp-content/uploads/2023/02/unnamed-scaled.jpg" });

const insurers = ["Aetna", "Anthem / Blue Cross", "Blue Shield of California", "Cigna", "Medicare", "Tricare / TriWest", "United Healthcare", "Workers' Compensation Insurance"];

const terms = [
  { term: "Deductible", text: "A deductible is usually a fixed dollar amount that you have to pay out of your own pocket before the insurance will cover the remaining eligible expenses. Depending on the insurance plan, the deductible can range from $0 all the way up to thousands of dollars. Deductibles may be based per individual, and/or family based, they usually paid per certificate period." },
  { term: "Copay (copayment)", text: "Copays are a fixed amount of money you pay each time you come to physical therapy. Unlike deductibles, copays tend to be smaller dollar amounts and are applied and paid on a per visit basis. At Atala, your copay will be collected prior to every session." },
  { term: "Co-insurance", text: "Co-insurance is a percentage and represents the percentage cost that you will need to pay and the insurance plan will pay towards your eligible medical expenses. Some common co-insurance examples include: 80/20, 90/10 and 50/50 – so if you have 80/20 co-insurance on your insurance plan, it means that the insurance company will cover 80% of your medical cost and you are responsible for paying the other 20% yourself. A deductible is commonly used together with co-insurance. For example, you would pay the deductible amount first and then you would pay the left-over co-insurance amount." },
];

export default function ClientInfo() {
  return (
    <>
      <JsonLd data={webPage("/client-information/", "Patient Information | Atala Physical Therapy in Carlsbad, CA", "Insurance, self-pay and new patient information.")} />
      <PageHero
        crumbs={[{ name: "Patient Information", href: "/client-information/" }]}
        title="Patient Information | Atala Physical Therapy in Carlsbad, CA"
        lede="Atala's goal is to make physical therapy a positive and enjoyable path to recovery. We believe physical therapy can be a huge part of maximizing your recovery. On this page you will find helpful downloadable resources that will make your visits more meaningful and effective."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.links.intakePacket} className="btn btn-primary" download>
            Download our new patient packet
          </a>
          <Link href="/online-patient-form/" className="btn btn-ghost">
            What to expect at your first visit
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-[0.98rem] text-muted">
          Please download, print and fill out the new patient forms and bring them into your first appointment. Please have your insurance card, medication list, and photo identification with you at your first visit as well.
        </p>
      </PageHero>

      {/* Two ways to pay */}
      <section className="bg-white py-16 lg:py-24" aria-labelledby="pay-h">
        <div className="wrap">
          <h2 id="pay-h" className="display-lg max-w-3xl">Two ways to pay for your care</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-marine p-8 text-white/80 on-dark sm:p-10">
              <h3 className="display-md !text-white">Self-pay</h3>
              <p className="mt-4">Pay directly at each visit. You and your therapist decide how often you come and how long your plan runs — no authorizations or visit caps.</p>
              <ul className="peak-list mt-5">
                <li>No physician referral needed</li>
                <li>Clear rate per visit, known before you book</li>
                <li>Often the fastest route to your first appointment</li>
              </ul>
              <Link href="/self-pay-physical-therapy/" className="btn btn-light mt-8">
                How self-pay works
              </Link>
            </div>
            <div className="rounded-xl bg-fog p-8 sm:p-10">
              <h3 className="display-md">Insurance</h3>
              <p className="mt-4">We accept Medicare, most PPO insurances &amp; cash, including but not limited to this list:</p>
              <ul className="peak-list mt-5 grid gap-x-6 sm:grid-cols-2 [&>li+li]:mt-0 [&>li]:mb-2">
                {insurers.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href={site.phoneHref} className="btn btn-ghost mt-6" data-track="client-info">
                Verify my benefits
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" aria-labelledby="ins-h">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 id="ins-h" className="display-md">Insurance information</h2>
            <p className="mt-5">
              When you schedule a Physical Therapy appointment at Atala Physical Therapy (and you wish to bill your treatments through your insurance) our Patient Care Co-Ordinator will work with you to verify your insurance benefits. We do our best to find out from your insurance provider the most accurate information of your coverage, but the ultimate responsibility is yours. You are strongly encouraged to contact your insurance provider on every case to verify your benefits.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl">
              <Pic src="/wp-content/uploads/2023/02/unnamed-scaled.jpg" alt="The Atala front desk, where our coordinator verifies benefits" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="display-md">Insurance terminology</h2>
            <p className="mt-5">Here are explanations of three important insurance terms that represent the portion of the medical bill that you are responsible for.</p>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {terms.map((t) => (
                <div key={t.term} className="py-5">
                  <dt className="ui text-[1.15rem] font-[700] text-marine">{t.term}</dt>
                  <dd className="mt-2">{t.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="da-h">
        <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h2 id="da-h" className="display-md">Direct access</h2>
            <div className="mt-5 space-y-4">
              <p>Atala Physical Therapy accepts patients without a physician referral. In the state of California, patients are able to be evaluated and treated by licensed physical therapists without a physician referral under the legislation. This means you no longer have to wait to get treated for injuries that would immediately benefit from physical therapy services.</p>
              <p>This allows patients to expedite treatment while saving money. Expediting treatment time helps reduce total injury time and allows you to return to normal function faster. Most insurances still require you to have a doctor&apos;s referral within a certain time period to cover physical therapy costs.</p>
              <p>For self-pay patients and some insurances, you do not need a physician referral to come to Atala Physical Therapy for treatment. However, certain insurances may require a physician referral in order to cover your PT visits. Call our office and our Front Office Specialist will be happy to verify benefits with your insurance company. We will contact your insurance provider for you to determine your benefits under direct access.</p>
            </div>
          </div>
          <div className="rounded-xl bg-fog p-7 sm:p-10 lg:self-start">
            <LeadForm heading="Get in touch" intro="Questions about coverage or self-pay? We'll get back to you within one business day." />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
