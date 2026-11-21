import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { MapEmbed } from "@/components/MapEmbed";
import { GoogleBadge } from "@/components/Reviews";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { webPage } from "@/lib/schema";

export const metadata = pageMeta("/schedule-an-appointment/");

export default function SchedulePage() {
  return (
    <>
      <JsonLd data={webPage("/schedule-an-appointment/", "Schedule an Appointment | Atala Physical Therapy in Carlsbad, CA", "Request a physical therapy appointment at Atala PT.")} />
      <PageHero
        crumbs={[{ name: "Schedule an Appointment", href: "/schedule-an-appointment/" }]}
        title="Schedule an Appointment | Atala Physical Therapy in Carlsbad, CA"
        lede="Book instantly online, or request a time below and our scheduler will call to confirm. No physician referral needed."
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="schedule-hero">
            Book online now
          </a>
          <GoogleBadge />
        </div>
      </PageHero>

      <section className="bg-white py-16 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="rounded-xl bg-fog p-7 sm:p-10">
            <LeadForm
              variant="appointment"
              heading="Request an appointment"
              intro="This form is to request an appointment. Our scheduler will call and confirm based on available dates and times based on your request."
            />
          </div>
          <aside className="space-y-10">
            <div>
              <h2 className="ui text-[1.25rem] font-[700]">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {[
                  "Our scheduler calls you, usually within one business day.",
                  "We take down your name, address, date of birth, phone number, and any insurance information applicable — or confirm self-pay.",
                  "We find a time convenient for you. Our first appointment is at 7am and our last appointment is at 6pm.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="ui grid h-8 w-8 shrink-0 place-items-center rounded-full bg-oxblood text-[0.85rem] font-[700] text-white">{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-xl border border-line p-6">
              <h2 className="ui text-[1.1rem] font-[700]">Our cancellation policy</h2>
              <p className="mt-2 text-[0.98rem]">
                Please give us 24 hours&apos; notice so we have the opportunity to offer your appointment to another patient. If less than 24 hours&apos; notice is given, you will be charged a $50 cancellation fee. If you do not show up for a scheduled appointment, you will be charged a $75 no-show fee.
              </p>
            </div>
            <MapEmbed className="h-[280px]" />
          </aside>
        </div>
      </section>
    </>
  );
}
