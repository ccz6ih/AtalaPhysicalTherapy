import Link from "next/link";
import { MapEmbed } from "@/components/MapEmbed";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { Ridge } from "@/components/Ridge";

export const metadata = pageMeta("/thank-you-for-scheduling-your-appointment/", { noindex: true });

export default function ThankYou() {
  return (
    <>
      <section className="contours pt-14 lg:pt-20">
        <div className="wrap max-w-4xl">
          <h1 className="display-lg">Thank You for Scheduling Your Appointment!</h1>
          <p className="lede mt-6">
            We&apos;re thrilled you&apos;ve taken the first step toward a healthier, pain-free you! Your appointment request has been successfully submitted, and our team is already preparing to provide the personalized care you deserve.
          </p>
        </div>
        <div className="mt-10">
          <Ridge />
        </div>
      </section>
      <section className="on-dark bg-marine pb-24 pt-6 text-white/80">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-md !text-white">What happens next?</h2>
            <ul className="peak-list mt-6 space-y-3">
              <li><b className="text-white">Confirmation:</b> one of our team members will reach out shortly to confirm your appointment details.</li>
              <li><b className="text-white">Questions?</b> Have any specific concerns or updates? Call us directly at <a className="link" href={site.phoneHref}>{site.phone}</a>.</li>
              <li><b className="text-white">Prepare for your visit:</b> bring any relevant medical records or imaging (like MRIs or X-rays) that can help us understand your journey better.</li>
            </ul>
            <h2 className="display-md mt-12 !text-white">Why Atala Physical Therapy?</h2>
            <p className="mt-4">
              At Atala, we take a boutique, whole-body approach to healing. Whether it&apos;s relieving pain, regaining strength, or enhancing mobility, we&apos;re here to make every step enjoyable, effective, and tailored just for you. Don&apos;t forget to say hi to Bernie, our friendly therapy dog, when you arrive!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/online-patient-form/" className="btn btn-light">Get your paperwork ready</Link>
              <Link href="/" className="btn btn-ghost">Back to home</Link>
            </div>
          </div>
          <MapEmbed className="min-h-[360px]" />
        </div>
      </section>
    </>
  );
}
