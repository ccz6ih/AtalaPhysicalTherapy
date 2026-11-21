import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Pic } from "@/components/Pic";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { webPage } from "@/lib/schema";

export const metadata = pageMeta("/online-patient-form/", { image: "/wp-content/uploads/2023/02/unnamed-1-scaled.jpg" });

export default function OnlinePatientForm() {
  return (
    <>
      <JsonLd data={webPage("/online-patient-form/", "Fill Out Your Online Patient Form | Atala Physical Therapy", "New patient paperwork and what to expect at your first visit.")} />
      <PageHero
        crumbs={[{ name: "New Patients", href: "/client-information/" }, { name: "Online Patient Form", href: "/online-patient-form/" }]}
        title="Fill Out Your Online Patient Form | Atala Physical Therapy"
        lede="Atala Physical Therapy will redefine your patient care experience. We aim to excel in service and experience. We strive to exceed your expectations!"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.links.intakePacket} className="btn btn-primary" download>
            Download the new patient packet (PDF)
          </a>
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-ghost" data-track="intake">
            Book or manage your visit online
          </a>
        </div>
        <p className="mt-5 max-w-2xl text-[0.98rem] text-muted">
          Filling out the packet takes about 15–20 minutes. Print it, complete it at home and bring it to your first visit.
        </p>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2 className="display-md">First visit expectation: what to expect at your first visit</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              <div className="py-6">
                <h3 className="ui text-[1.2rem] font-[700]">What to wear on your first visit?</h3>
                <p className="mt-2">Please wear comfortable and athletic clothing. Closed toe shoes, preferably tennis shoe/sneaker. Please arrive 15 minutes early to your scheduled appointment to complete all required paperwork and answer any questions you may have.</p>
              </div>
              <div className="py-6">
                <h3 className="ui text-[1.2rem] font-[700]">What should I bring?</h3>
                <ul className="peak-list mt-3">
                  <li>Completed paperwork</li>
                  <li>Insurance card (if using insurance)</li>
                  <li>Physician&apos;s prescription for physical therapy, if you have one</li>
                  <li>Medication list</li>
                  <li>Recent imaging (X-ray, MRI), if you have any</li>
                  <li>Photo identification</li>
                </ul>
              </div>
              <div className="py-6">
                <h3 className="ui text-[1.2rem] font-[700]">Your individualized plan</h3>
                <p className="mt-2">This individualized plan is created with input from you, your therapist, and your doctor to help you achieve your goals as quickly as possible. Please call us with any questions or concerns you may have.</p>
              </div>
              <div className="py-6">
                <h3 className="ui text-[1.2rem] font-[700]">Our cancellation policy</h3>
                <p className="mt-2">Please give us 24 hours&apos; notice. Less than 24 hours&apos; notice incurs a $50 cancellation fee, and a missed appointment a $75 no-show fee.</p>
              </div>
            </div>
            <p className="mt-8">
              Already filled it out? <Link href="/schedule-an-appointment/" className="link">Request your appointment</Link> or call{" "}
              <a href={site.phoneHref} className="link">{site.phone}</a>.
            </p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl lg:sticky lg:top-28 lg:self-start">
            <Pic src="/wp-content/uploads/2023/02/unnamed-1-scaled.jpg" alt="The Atala front desk where you'll check in" fill sizes="(min-width:1024px) 38vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
