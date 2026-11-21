import { fullAddress, site, selfPay } from "@/content/site";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { googleReviews } from "@/content/reviews";

export const ids = {
  clinic: `${site.url}/#clinic`,
  website: `${site.url}/#website`,
  logo: `${site.url}/#logo`,
};

const dayMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function personNode(slug: string) {
  const m = team.find((t) => t.slug === slug)!;
  return {
    "@type": "Person",
    "@id": `${site.url}/our-team/#${m.slug}`,
    name: m.name,
    honorificSuffix: m.credentials,
    jobTitle: m.role,
    image: `${site.url}${m.photo}`,
    description: m.bio[0],
    worksFor: { "@id": ids.clinic },
    alumniOf: m.education?.map((e) => ({ "@type": "CollegeOrUniversity", name: e })),
    knowsAbout: m.knowsAbout,
  };
}

/** Site-wide graph: the clinic (MedicalClinic / LocalBusiness), logo and website. */
export function siteGraph() {
  const clinic: Record<string, unknown> = {
    "@type": ["MedicalClinic", "MedicalBusiness"],
    "@id": ids.clinic,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: { "@id": ids.logo },
    image: [`${site.url}/brand/og-default.jpg`, `${site.url}/wp-content/uploads/2023/03/IMG_3933-scaled.jpg`, `${site.url}/wp-content/uploads/2022/12/5M3A8070-2-scaled.jpg`],
    telephone: "+1-760-727-9100",
    faxNumber: "+1-760-727-9122",
    email: site.email,
    foundingDate: String(site.foundingYear),
    medicalSpecialty: "https://schema.org/Physiotherapy",
    isAcceptingNewPatients: true,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance (Medicare, PPO), Workers' Compensation",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.mapsUrl,
    areaServed: site.serviceArea.map((c) => ({ "@type": "City", name: `${c}, CA` })),
    sameAs: site.social.map((s) => s.href),
    founder: { "@id": `${site.url}/our-team/#terri-brusseau-kraus` },
    employee: team.map((m) => ({ "@id": `${site.url}/our-team/#${m.slug}` })),
    availableService: services.map((s) => ({
      "@type": "MedicalTherapy",
      name: s.name,
      url: `${site.url}${s.path}`,
      description: s.cardText,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Self-pay physical therapy",
      itemListElement: selfPay.visits.map((v) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: v.name, description: v.detail },
        ...(v.price ? { price: v.price, priceCurrency: "USD" } : {}),
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: site.links.booking, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
      result: { "@type": "Reservation", name: "Physical therapy evaluation" },
    },
  };
  if (site.openingHours.length) {
    clinic.openingHoursSpecification = site.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => dayMap[d]),
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      clinic,
      {
        "@type": "ImageObject",
        "@id": ids.logo,
        url: `${site.url}/brand/atala-logo.png`,
        contentUrl: `${site.url}/brand/atala-logo.png`,
        width: 200,
        height: 159,
        caption: site.name,
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.name,
        alternateName: "Atala PT Carlsbad",
        publisher: { "@id": ids.clinic },
        inLanguage: "en-US",
      },
    ],
  };
}

export function webPage(path: string, name: string, description: string, type: string = "WebPage", extra: Record<string, unknown> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${site.url}${path}#webpage`,
    url: `${site.url}${path}`,
    name,
    description,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.clinic },
    inLanguage: "en-US",
    ...extra,
  };
}

export function reviewNodes() {
  return googleReviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    reviewBody: r.text,
    publisher: { "@type": "Organization", name: "Google" },
    itemReviewed: { "@id": ids.clinic },
  }));
}

export const addressLine = fullAddress;
