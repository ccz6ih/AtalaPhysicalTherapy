"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useMenu } from "./MenuContext";

const primary = [
  { label: "Services", href: "/services/" },
  { label: "Conditions", href: "/conditions-we-treat/" },
  { label: "Self-Pay PT", href: "/self-pay-physical-therapy/" },
  { label: "Our Team", href: "/our-team/" },
  { label: "Reviews", href: "/reviews/" },
];

export function Header() {
  const pathname = usePathname();
  const { open, setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (href: string) => pathname?.startsWith(href);

  return (
    <header
      data-section="header"
      style={{ viewTransitionName: "site-header" }}
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-fog/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-fog"}`}
    >
      <a href="#main" className="sr-only-focusable ui absolute left-4 top-3 z-[60] rounded bg-marine px-4 py-2 text-white">
        Skip to content
      </a>
      <div className="wrap flex h-[4.75rem] items-center gap-4 lg:h-[5.25rem]">
        <Link href="/" className="shrink-0" aria-label="Atala Physical Therapy home">
          <Image src="/brand/atala-logo.svg" alt="Atala Physical Therapy — Reach your highest peak" width={200} height={159} priority unoptimized className="h-[52px] w-auto lg:h-[60px]" />
        </Link>

        <nav aria-label="Main" className="ui ml-auto hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-[560] transition-colors hover:text-oxblood ${active(item.href) ? "text-oxblood" : "text-marine"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-3">
          <a href={site.phoneHref} className="ui hidden whitespace-nowrap font-[650] text-marine hover:text-oxblood md:inline xl:hidden 2xl:inline" data-track="header">
            {site.phone}
          </a>
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary hidden !min-h-[2.75rem] !px-5 sm:inline-flex" data-track="header">
            Book an evaluation
          </a>
          <button
            type="button"
            className="ui group flex h-11 items-center gap-2.5 rounded-full bg-marine pl-4 pr-3.5 font-[600] text-white transition-colors hover:bg-oxblood"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(!open)}
          >
            <span>Menu</span>
            <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden className="transition-transform duration-300 group-hover:translate-y-[-1px]">
              <path d="M1 11L7 3l3.5 4.5L13 4l8 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
