"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

function isExternal(href: string) {
  return href.startsWith("http");
}

function NavLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (isExternal(href))
    return (
      <a href={href} className={className} target="_blank" rel="noopener" onClick={onClick}>
        {children}
      </a>
    );
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation (state adjustment during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const active = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
    <header
      data-section="header"
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-fog/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-fog"
      }`}
    >
      <a href="#main" className="sr-only-focusable ui absolute left-4 top-3 z-[60] rounded bg-marine px-4 py-2 text-white">
        Skip to content
      </a>
      <div className="wrap flex h-[4.75rem] items-center gap-6 lg:h-[5.25rem]">
        <Link href="/" className="shrink-0" aria-label="Atala Physical Therapy home">
          <Image src="/brand/atala-logo.png" alt="Atala Physical Therapy — Reach your highest peak" width={200} height={159} priority className="h-[52px] w-auto lg:h-[60px]" />
        </Link>

        <nav ref={navRef} aria-label="Main" className="ui ml-auto hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenMenu((m) => (m === item.label ? null : item.label))}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-[0.95rem] 2xl:px-3.5 font-[560] transition-colors hover:text-oxblood ${
                      active(item.href) ? "text-oxblood" : "text-marine"
                    }`}
                  >
                    {item.label}
                    <svg width="10" height="7" viewBox="0 0 10 7" aria-hidden className={`transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                    </svg>
                  </button>
                  <div
                    id={`menu-${item.label}`}
                    className={`absolute left-0 top-full pt-2 transition-[opacity,transform] duration-200 ${
                      openMenu === item.label ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="w-[19rem] rounded-md border border-line bg-white p-2 shadow-[0_18px_40px_-18px_rgba(30,43,49,.35)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <NavLink
                            href={c.href}
                            className={`block rounded px-3 py-2.5 text-[0.95rem] leading-snug hover:bg-fog ${pathname === c.href ? "text-oxblood" : "text-marine"}`}
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink
                    href={item.href}
                    className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[0.95rem] font-[560] 2xl:px-3.5 transition-colors hover:text-oxblood ${active(item.href) ? "text-oxblood" : "text-marine"}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:ml-2">
          <a href={site.phoneHref} className="ui hidden whitespace-nowrap font-[650] text-marine hover:text-oxblood md:inline xl:hidden 2xl:inline" data-track="header">
            {site.phone}
          </a>
          <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary hidden !min-h-[2.75rem] !px-5 sm:inline-flex" data-track="header">
            Book an evaluation
          </a>
          <button
            type="button"
            className="ui flex h-11 items-center gap-2 rounded-full border border-marine/25 px-4 font-[600] text-marine xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden>
              {open ? (
                <path d="M3 1l12 10M15 1L3 11" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

    </header>
      <div id="mobile-menu" hidden={!open} className="ui fixed inset-x-0 bottom-0 z-[45] top-[4.75rem] overflow-y-auto bg-fog pb-28 lg:top-[5.25rem] xl:hidden">
        <nav aria-label="Mobile" className="wrap pt-4">
          <ul className="divide-y divide-line border-y border-line">
            {nav.map((item) => (
              <li key={item.label} className="py-3">
                <NavLink href={item.href} className="block py-1 text-2xl font-[700] tracking-tight text-marine" onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="mt-2 grid gap-1 pb-1 sm:grid-cols-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <NavLink href={c.href} className="block py-1.5 text-[1.02rem] text-body" onClick={() => setOpen(false)}>
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="mobile-menu">
              Book an evaluation
            </a>
            <a href={site.phoneHref} className="btn btn-ghost" data-track="mobile-menu">
              Call {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
