"use client";
import { useRef } from "react";

/** Horizontally scrolling list with keyboard-accessible previous/next controls. */
export function ReviewRail({ children, label = "Patient reviews" }: { children: React.ReactNode; label?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 820), behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <div className="mt-10">
      <ul
        ref={ref}
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-px-[max(1.25rem,calc((100vw-82rem)/2+3rem))] px-[max(1.25rem,calc((100vw-82rem)/2+3rem))] pb-4 [scrollbar-width:none] focus-visible:outline-offset-[-3px] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </ul>
      <div className="wrap mt-4 flex gap-2">
        <button type="button" onClick={() => go(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-marine/25 text-marine hover:bg-marine hover:text-white" aria-label="Previous reviews">
          <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden><path d="M6 1L1 6l5 5M1 6h14" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
        </button>
        <button type="button" onClick={() => go(1)} className="grid h-12 w-12 place-items-center rounded-full border border-marine/25 text-marine hover:bg-marine hover:text-white" aria-label="Next reviews">
          <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden><path d="M10 1l5 5-5 5M15 6H1" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
        </button>
      </div>
    </div>
  );
}
