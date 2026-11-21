"use client";

import { useLayoutEffect, useRef } from "react";
import { useMenu } from "./MenuContext";

/**
 * Wraps the whole page. When the menu opens, the page zooms out and slides aside
 * to reveal the menu underneath; tapping the page (or Esc) zooms it back in.
 */
export function Shell({ children }: { children: React.ReactNode }) {
  const { open, setOpen } = useMenu();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (open && ref.current) ref.current.style.transformOrigin = `50% ${window.scrollY + window.innerHeight / 2}px`;
  }, [open]);

  return (
    <div ref={ref} id="shell" data-open={open || undefined} className="relative z-10 bg-fog">
      <div inert={open || undefined} className="flex min-h-screen flex-col">
        {children}
      </div>
      {open && (
        <button type="button" aria-label="Close menu and return to the page" onClick={() => setOpen(false)} className="absolute inset-0 z-[70] cursor-zoom-in" />
      )}
    </div>
  );
}
