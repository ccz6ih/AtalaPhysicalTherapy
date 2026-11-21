"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

/**
 * The climb, site-wide: a thin elevation profile pinned to the right edge that fills
 * as you scroll. Each [data-stage] section (or each h2 when a page has none) is a waypoint.
 * Desktop shows the vertical ridge with waypoints; small screens get a 2px progress line.
 */

type Stage = { label: string; el: HTMLElement; at: number };

const H = 600;
const W = 36;
// A gently irregular vertical ridge — the same mountain, standing up.
const ridgePts: [number, number][] = [
  [18, 600], [22, 560], [14, 520], [20, 480], [12, 440], [24, 400], [16, 360], [26, 320], [14, 280],
  [22, 240], [10, 200], [24, 160], [16, 120], [28, 80], [18, 40], [18, 0],
];
function path() {
  let d = `M${ridgePts[0][0]},${ridgePts[0][1]}`;
  for (let i = 1; i < ridgePts.length; i++) {
    const [x0, y0] = ridgePts[i - 1];
    const [x1, y1] = ridgePts[i];
    const my = (y0 + y1) / 2;
    d += ` C${x0},${my} ${x1},${my} ${x1},${y1}`;
  }
  return d;
}
const D = path();
const xAt = (yFrac: number) => {
  // approximate x along the ridge for a vertical position (0 = top, 1 = bottom)
  const y = yFrac * H;
  for (let i = 1; i < ridgePts.length; i++) {
    const [x0, y0] = ridgePts[i - 1];
    const [x1, y1] = ridgePts[i];
    if (y <= y0 && y >= y1) {
      const t = (y0 - y) / (y0 - y1);
      const s = t * t * (3 - 2 * t);
      return x0 + (x1 - x0) * s;
    }
  }
  return 18;
};

export function AltitudeRail() {
  const pathname = usePathname();
  const [stages, setStages] = useState<Stage[]>([]);
  const [progress, setProgress] = useState(0);
  const [len, setLen] = useState(0);
  const lineRef = useCallback((el: SVGPathElement | null) => {
    if (el) setLen(el.getTotalLength());
  }, []);

  useEffect(() => {
    let raf = 0;
    const collect = () => {
      const main = document.getElementById("main");
      if (!main) return;
      let els = Array.from(main.querySelectorAll<HTMLElement>("[data-stage]"));
      let labels = els.map((e) => e.dataset.stage || "");
      if (els.length < 3) {
        els = Array.from(main.querySelectorAll<HTMLElement>("h2")).slice(0, 9);
        labels = els.map((e) => (e.textContent || "").trim().replace(/\s+/g, " ").slice(0, 34));
      }
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const list = els.map((el, i) => {
        const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.35;
        return { label: labels[i], el, at: Math.min(1, Math.max(0, top / max)) };
      });
      setStages(list.filter((s, i) => s.label && (i === 0 || s.at - list[i - 1].at > 0.015)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
      });
    };
    const t = window.setTimeout(() => {
      collect();
      onScroll();
    }, 300);
    const ro = new ResizeObserver(() => collect());
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const current = stages.reduce<Stage | null>((acc, s) => (progress + 0.02 >= s.at ? s : acc), null);
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const go = (s: Stage) => s.el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  if (stages.length < 2) return null;

  return (
    <>
      {/* small screens: progress line */}
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] xl:hidden">
        <div className="h-full origin-left bg-oxblood" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav aria-label="Sections on this page" className="altitude-rail ui fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block 2xl:right-7">
        <div className="group relative" style={{ width: W, height: "min(60vh, 560px)" }}>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
            <path d={D} fill="none" stroke="var(--color-marine)" strokeOpacity=".16" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            <path
              ref={lineRef}
              d={D}
              fill="none"
              stroke="var(--color-oxblood)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ strokeDasharray: len || 1000, strokeDashoffset: (len || 1000) * (1 - progress) }}
            />
          </svg>
          <ol className="absolute inset-0">
            {stages.map((s) => {
              const yFrac = 1 - s.at;
              const passed = progress + 0.02 >= s.at;
              const isCurrent = current === s;
              return (
                <li key={s.label + s.at} className="absolute" style={{ top: `${yFrac * 100}%`, left: `${(xAt(yFrac) / W) * 100}%` }}>
                  <button
                    type="button"
                    onClick={() => go(s)}
                    aria-current={isCurrent ? "step" : undefined}
                    className="peer absolute -translate-x-1/2 -translate-y-1/2 p-1.5"
                  >
                    <span className={`block rounded-full border-2 transition-all duration-300 ${isCurrent ? "h-3.5 w-3.5 border-oxblood bg-oxblood" : passed ? "h-2.5 w-2.5 border-oxblood bg-fog" : "h-2.5 w-2.5 border-marine/30 bg-fog"}`} />
                    <span className="sr-only">Jump to {s.label}</span>
                  </button>
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute right-5 top-0 -translate-y-1/2 whitespace-nowrap rounded-full bg-marine px-3 py-1 text-[0.78rem] font-[600] text-white transition-opacity duration-200 ${isCurrent ? "opacity-0 group-hover:opacity-100" : "opacity-0 peer-hover:opacity-100 peer-focus-visible:opacity-100 group-hover:opacity-70"}`}
                  >
                    {s.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
        <p className="mt-4 w-[4.5rem] -translate-x-5 text-center text-[0.7rem] leading-tight text-muted" aria-live="off">
          {Math.round(progress * 100)}%<span className="block text-marine/70">{current?.label ?? ""}</span>
        </p>
      </nav>
    </>
  );
}
