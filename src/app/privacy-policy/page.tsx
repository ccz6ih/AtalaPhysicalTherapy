import { PageHero } from "@/components/PageHero";
import { site, fullAddress } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/privacy-policy/", { title: "Privacy Policy | Atala Physical Therapy in Carlsbad, CA" });

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ name: "Privacy Policy", href: "/privacy-policy/" }]} title="Privacy Policy" lede="How atalaphysicaltherapy.com collects and uses information. Last updated November 2026." />
      <section className="bg-white py-16 lg:py-20">
        <div className="wrap">
          <div className="prose-atala measure max-w-[44rem]">
            <h2>Who we are</h2>
            <p>This website is operated by {site.legalName} (&ldquo;Atala,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), {fullAddress}. Our website address is {site.url}.</p>

            <h2>Information you give us</h2>
            <p>When you use a form on this site (contact, appointment request, quiz call-back or self-pay inquiry) we collect the details you enter, such as your name, phone number, email address, preferred appointment times and a short message. We use this information only to respond to you and to schedule care. Our website forms are not designed to collect detailed medical history; please share that with your therapist at your visit.</p>
            <p>Health information you provide as a patient (for example on intake paperwork or in our clinical records) is protected under HIPAA and described in our Notice of Patient Information Practices, which you receive at your first visit.</p>

            <h2>Online booking and payments</h2>
            <p>Online scheduling is provided by BetterHealthcare and online bill payment by Xpress-pay. When you use those services you are on their websites and their privacy policies apply.</p>

            <h2>Analytics and advertising</h2>
            <p>We use Google Tag Manager, Google Analytics and Google Ads to understand how visitors use the site and to measure whether our ads lead to appointment requests. These tools may set cookies and collect information such as pages visited, approximate location, device and browser type. They do not receive the contents of our forms. You can opt out of Google Analytics with the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out add-on</a> and manage ad personalization at <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ad Settings</a>.</p>

            <h2>Embedded content</h2>
            <p>Pages on this site may include embedded content such as Google Maps. Embedded content from other websites behaves in the exact same way as if you had visited the other website, and those sites may collect data about you.</p>

            <h2>Who we share your data with</h2>
            <p>We do not sell your personal information. We share it only with service providers that help us run the website and deliver messages (for example our web host and email provider), or when required by law.</p>

            <h2>How long we keep it</h2>
            <p>Messages sent through our forms are kept in our office email for as long as needed to respond and for our normal business records.</p>

            <h2>Your rights</h2>
            <p>California residents may request access to, correction of, or deletion of the personal information we hold about them, subject to legal record-keeping requirements. To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone}.</p>

            <h2>Contact</h2>
            <p>Questions about this policy: {site.legalName}, {fullAddress}, {site.phone}, <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
