"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useMenu } from "./MenuContext";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { guides, guidePath } from "@/content/guides";
import { activities, activityPath } from "@/content/activities";

const paths = [
  { href: "/conditions-we-treat/#body-map", title: "I’m in pain", note: "Find your condition on the body map" },
  { href: "/pre-and-post-surgical-rehabilitation/", title: "I’m having surgery", note: "Prehab and post-op recovery" },
  { href: "/sports-rehabilitation/", title: "I’m an athlete", note: "Sports rehab and performance" },
  { href: "/self-pay-physical-therapy/", title: "I want to pay directly", note: "How self-pay works" },
  { href: "/industrial-medicine-workers-compensation/", title: "I was hurt at work", note: "Workers’ comp rehab" },
  { href: "/client-information/", title: "I’m a new patient", note: "Insurance, paperwork, first visit" },
];

const clinic = [
  { href: "/", label: "Home" },
  { href: "/our-team/", label: "Our team" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/resources/", label: "Resources" },
  { href: "/personal-pt-quiz/", label: "Find your plan (quiz)" },
  { href: "/schedule-an-appointment/", label: "Request an appointment" },
  { href: "/online-patient-form/", label: "Online patient form" },
  { href: "/contact-us/", label: "Contact" },
  { href: site.links.payment, label: "Make a payment" },
];

function L({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const { navigate } = useMenu();
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      onClick={(e) => {
        if (external || e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}

export function SiteMenu() {
  const { open, setOpen } = useMenu();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) window.setTimeout(() => closeRef.current?.focus(), 80);
  }, [open]);

  return (
    <div
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      inert={!open || undefined}
      data-open={open || undefined}
      className="on-dark fixed inset-0 z-0 overflow-y-auto bg-marine text-white/80"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[url('/brand/contours-light.svg')] bg-[length:1500px_auto] bg-[position:left_-300px_top_-100px] bg-no-repeat" />
      <div className="relative w-[84vw] px-6 pb-16 pt-5 sm:px-10 md:w-[62vw] lg:pl-[max(2.5rem,calc((100vw-82rem)/2+3rem))]">
        <div className="flex items-center justify-between gap-4">
          <Image src="/brand/atala-logo-white.svg" alt="Atala Physical Therapy" width={200} height={159} unoptimized className="h-12 w-auto" />
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} className="ui flex h-11 items-center gap-2 rounded-full border border-white/30 px-4 font-[600] text-white hover:bg-white hover:text-marine">
            Close
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </button>
        </div>

        <h2 className="menu-item ui mt-10 text-[1rem] font-[600] text-white/60" style={{ "--i": 0 } as React.CSSProperties}>
          Where are you starting?
        </h2>
        <ul className="mt-4 border-t border-white/10">
          {paths.map((p, i) => (
            <li key={p.href} className="menu-item border-b border-white/10" style={{ "--i": i + 1 } as React.CSSProperties}>
              <L href={p.href} className="group flex items-baseline justify-between gap-6 py-4">
                <span className="ui text-[clamp(1.5rem,3.2vw,2.6rem)] font-[750] leading-none tracking-tight text-white transition-colors group-hover:text-[#f3b6b6]" style={{ fontStretch: "115%" }}>
                  {p.title}
                </span>
                <span className="ui hidden text-right text-[0.9rem] text-white/55 sm:block">{p.note}</span>
              </L>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div className="menu-item" style={{ "--i": 8 } as React.CSSProperties}>
            <h3 className="ui text-[0.95rem] font-[650] text-white">Services</h3>
            <ul className="ui mt-3 space-y-2 text-[0.95rem]">
              <li><L href="/services/" className="hover:text-white">All services</L></li>
              {services.map((s) => (
                <li key={s.slug}>
                  <L href={s.path} className="hover:text-white">{s.name.replace(" & Athletic Recovery", "").replace("Industrial Medicine & Workers' Compensation Rehabilitation", "Workers' comp rehab")}</L>
                </li>
              ))}
            </ul>
            <h3 className="ui mt-8 text-[0.95rem] font-[650] text-white">By sport</h3>
            <ul className="ui mt-3 space-y-2 text-[0.95rem]">
              {activities.map((a) => (
                <li key={a.slug}>
                  <L href={activityPath(a.slug)} className="hover:text-white">{a.name}</L>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-item" style={{ "--i": 9 } as React.CSSProperties}>
            <h3 className="ui text-[0.95rem] font-[650] text-white">Condition guides</h3>
            <ul className="ui mt-3 space-y-2 text-[0.95rem]">
              <li><L href="/conditions-we-treat/" className="hover:text-white">All conditions</L></li>
              {guides.map((g) => (
                <li key={g.slug}>
                  <L href={guidePath(g.slug)} className="hover:text-white">{g.name}</L>
                </li>
              ))}
            </ul>
          </div>
          <div className="menu-item" style={{ "--i": 10 } as React.CSSProperties}>
            <h3 className="ui text-[0.95rem] font-[650] text-white">Clinic</h3>
            <ul className="ui mt-3 space-y-2 text-[0.95rem]">
              {clinic.map((c) => (
                <li key={c.href}>
                  <L href={c.href} className="hover:text-white">{c.label}</L>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu-item mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8" style={{ "--i": 11 } as React.CSSProperties}>
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="menu">
            Book an evaluation
          </a>
          <a href={site.phoneHref} className="btn btn-ghost" data-track="menu">
            Call {site.phone}
          </a>
          <a href={site.mapsUrl} target="_blank" rel="noopener" className="ui ml-1 text-[0.92rem] text-white/70 underline underline-offset-4 hover:text-white">
            {site.address.street}, {site.address.city} — directions
          </a>
        </div>
      </div>
    </div>
  );
}
