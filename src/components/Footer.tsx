import Link from "next/link";
import Image from "next/image";
import { fullAddress, site } from "@/content/site";
import { services } from "@/content/services";
import { Year } from "./Year";

const patientLinks = [
  { label: "Self-pay physical therapy", href: "/self-pay-physical-therapy/" },
  { label: "Insurance & billing", href: "/client-information/" },
  { label: "Online patient form", href: "/online-patient-form/" },
  { label: "Request an appointment", href: "/schedule-an-appointment/" },
  { label: "Find your plan (quiz)", href: "/personal-pt-quiz/" },
  { label: "Conditions we treat", href: "/conditions-we-treat/" },
  { label: "Our team", href: "/our-team/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Resources", href: "/resources/" },
];

export function Footer() {
  return (
    <footer data-section="footer" className="on-dark relative overflow-hidden bg-marine text-white/80">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url('/brand/contours-light.svg')] bg-[length:1600px_auto] bg-[position:right_-200px_top_-120px] bg-no-repeat" />
      <div className="wrap relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Image src="/brand/atala-logo-white.png" alt="Atala Physical Therapy" width={200} height={159} className="h-16 w-auto" />
          <p className="mt-6 max-w-xs text-[1.02rem] text-white/75">
            Personalized care to help you reach your highest peak. Boutique orthopedic physical therapy in Carlsbad since {site.foundingYear}.
          </p>
          <ul className="ui mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {site.social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener" className="text-white/80 underline-offset-4 hover:text-white hover:underline">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ui text-[0.95rem]">
          <h2 className="text-base font-[650] text-white">Visit</h2>
          <address className="mt-4 not-italic leading-relaxed">
            <a href={site.mapsUrl} target="_blank" rel="noopener" className="hover:text-white">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </a>
          </address>
          <p className="mt-4 leading-relaxed">
            <a href={site.phoneHref} className="text-lg font-[650] text-white hover:underline" data-track="footer">
              {site.phone}
            </a>
            <br />
            Fax {site.fax}
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-white/60">{site.appointmentWindow}</p>
          <span className="sr-only">{fullAddress}</span>
        </div>

        <div className="ui text-[0.95rem]">
          <h2 className="text-base font-[650] text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.path} className="hover:text-white">
                  {s.name.replace(" & Athletic Recovery", "").replace(" Rehabilitation", " Rehab")}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services/" className="hover:text-white">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div className="ui text-[0.95rem]">
          <h2 className="text-base font-[650] text-white">Patients</h2>
          <ul className="mt-4 space-y-2.5">
            {patientLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.links.payment} target="_blank" rel="noopener" className="hover:text-white" data-track="footer">
                Make a payment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="wrap ui flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© <Year /> {site.legalName} All rights reserved.</p>
          <p className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/contact-us/" className="hover:text-white">
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
