/**
 * Single source of truth for business details, links and tracking.
 * Everything a non-developer is likely to change lives in this file.
 */

export const site = {
  name: "Atala Physical Therapy",
  legalName: "Atala Physical Therapy, Inc.",
  shortName: "Atala PT",
  tagline: "Reach your highest peak",
  url: "https://atalaphysicaltherapy.com",
  foundingYear: 2004,
  description:
    "Boutique, one-on-one orthopedic physical therapy in Carlsbad, CA. Private treatment rooms, hands-on manual therapy and plans built around your life. Self-pay friendly; Medicare and most PPO plans accepted.",

  phone: "(760) 727-9100",
  phoneHref: "tel:+17607279100",
  fax: "(760) 727-9122",
  email: "office@atalaphysicaltherapy.com",

  address: {
    street: "3222 Grey Hawk Court",
    building: "Grey Hawk Business Center",
    city: "Carlsbad",
    region: "CA",
    postalCode: "92010",
    country: "US",
  },
  geo: { lat: 33.1303844, lng: -117.2381999 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Atala+Physical+Therapy+3222+Grey+Hawk+Ct+Carlsbad+CA+92010",
  mapsEmbed:
    "https://maps.google.com/maps?q=atala%20physical%20therapy%203222%20grey%20hawk%20ct%20carlsbad&t=m&z=13&output=embed&iwloc=near",

  /** Copied from the current site: "Our first appointment is at 7am and our last appointment is at 6pm." */
  appointmentWindow: "Appointments from 7am to 6pm",
  /**
   * Opening hours for schema.org + footer. Leave empty until confirmed against
   * the Google Business Profile — wrong hours in schema hurt local SEO.
   * Example: [{ days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" }]
   */
  openingHours: [] as { days: string[]; opens: string; closes: string }[],

  serviceArea: [
    "Carlsbad",
    "Encinitas",
    "Leucadia",
    "Oceanside",
    "Vista",
    "San Marcos",
    "Del Mar",
    "La Jolla",
    "Rancho Santa Fe",
    "Olivenhain",
    "Bonsall",
    "Fallbrook",
    "San Diego",
  ],

  links: {
    /** Online booking (BetterHealthcare) — same link the WordPress menu used. */
    booking:
      "https://patients.betterhealthcare.co/booking/facilities/12138/appointment-type?utm_source=client&utm_medium=website&utm_campaign=4939",
    payment: "https://payv3.xpress-pay.com/pt/5063eb5c75fc11ef969b005056b805a0",
    intakePacket: "/wp-content/uploads/2022/11/Atala_Intake_Forms_r4.pdf",
    googleReviews:
      "https://www.google.com/maps/search/?api=1&query=Atala+Physical+Therapy+Carlsbad",
  },

  social: [
    { name: "Facebook", href: "https://www.facebook.com/atalaTherapy" },
    { name: "Instagram", href: "https://www.instagram.com/atalaphysicaltherapy/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/atala-physical-therapy/" },
    { name: "Nextdoor", href: "https://nextdoor.com/pages/atala-phyiscal-therapy-carlsbad-ca/" },
  ],

  /** Tracking carried over from the WordPress site (Elementor snippets + Site Kit). */
  tracking: {
    gtmIds: (process.env.NEXT_PUBLIC_GTM_IDS ?? "GTM-MJR3WK7S,GTM-T6RNMD9F")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
    /** Google tag from Site Kit (GA4) + Google Ads. */
    gtagIds: (process.env.NEXT_PUBLIC_GTAG_IDS ?? "GT-5NGCTGN,AW-11547202367")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/**
 * Self-pay (cash) program. Set `price` values to show rates on the site;
 * while a price is null the card shows "Ask for today's rate" instead.
 * Items in `perks` marked `confirm: true` are common for self-pay clinics but
 * should be confirmed with the office before launch — remove any that don't apply.
 */
export const selfPay = {
  visits: [
    {
      name: "Initial evaluation",
      price: null as number | null,
      detail:
        "A full movement assessment, a working diagnosis of what's driving your pain, hands-on treatment and a written plan you leave with.",
    },
    {
      name: "Follow-up treatment",
      price: null as number | null,
      detail:
        "One-on-one time with your therapist: manual therapy, targeted exercise and progressions matched to how you're responding.",
    },
    {
      name: "Visit packages",
      price: null as number | null,
      detail:
        "Committing to a plan of care? Ask about package pricing for a set number of visits.",
    },
  ],
  perks: [
    { text: "No physician referral needed in California (Direct Access)", confirm: false },
    { text: "No insurance visit caps or prior authorizations deciding your care", confirm: false },
    { text: "HSA and FSA cards welcome", confirm: true },
    { text: "Superbill on request for possible out-of-network reimbursement", confirm: true },
  ],
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Orthopedic Physical Therapy", href: "/orthopedic-physical-therapy/" },
      { label: "Non-Surgical Injury Rehabilitation", href: "/non-surgical-injury-rehabilitation/" },
      { label: "Pre & Post-Surgical Rehabilitation", href: "/pre-and-post-surgical-rehabilitation/" },
      { label: "Sports Rehabilitation", href: "/sports-rehabilitation/" },
      { label: "Back & Neck Rehabilitation", href: "/back-neck-rehabilitation/" },
      { label: "Industrial Medicine & Workers' Comp", href: "/industrial-medicine-workers-compensation/" },
      { label: "Conditions We Treat", href: "/conditions-we-treat/" },
    ],
  },
  { label: "Self-Pay PT", href: "/self-pay-physical-therapy/" },
  {
    label: "New Patients",
    href: "/client-information/",
    children: [
      { label: "Insurance & Billing", href: "/client-information/" },
      { label: "Online Patient Form", href: "/online-patient-form/" },
      { label: "Request an Appointment", href: "/schedule-an-appointment/" },
      { label: "Find your plan (quiz)", href: "/personal-pt-quiz/" },
      { label: "Make a Payment", href: site.links.payment },
    ],
  },
  { label: "Our Team", href: "/our-team/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Resources", href: "/resources/" },
  { label: "Contact", href: "/contact-us/" },
];
