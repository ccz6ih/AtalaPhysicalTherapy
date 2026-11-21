"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * The signature element: an elevation profile of the climb from first visit to "your peak".
 * Atala means "mountain peak" in the San Dieguito language — recovery is drawn as the ascent.
 * The ridge draws itself once on load; markers follow. Static (fully drawn) with reduced motion or no JS.
 */

type P = [number, number];
const W = 1440;
const H = 240;
const pts: P[] = [
  [0, 214], [90, 200], [190, 206], [300, 178], [380, 168], [470, 182], [560, 150], [650, 128], [720, 138],
  [810, 104], [880, 92], [940, 104], [1010, 62], [1068, 30], [1110, 40], [1170, 82], [1250, 76], [1340, 108], [1440, 124],
];
export const markers = [
  { i: 4, label: "Evaluation", note: "Find the cause" },
  { i: 7, label: "Your plan", note: "Built around your life" },
  { i: 10, label: "Rebuild", note: "Strength & mobility" },
  { i: 13, label: "Your peak", note: "Back to what you love" },
];

function catmull(points: P[]) {
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1: P = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: P = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d;
}
const line = catmull(pts);
const area = `${line} L${W},${H} L0,${H} Z`;

export function Ridge({ fill = "var(--color-marine)", showLabels = true }: { fill?: string; showLabels?: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;
    const path = el.querySelector<SVGPathElement>("[data-ridge-line]");
    const dots = el.querySelectorAll<HTMLElement>("[data-ridge-marker]");
    const len = path?.getTotalLength() ?? 0;
    if (path) {
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    }
    dots.forEach((d) => (d.style.opacity = "0"));
    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.25, defaults: { ease: "power2.out" } });
        tl.to(path, { strokeDashoffset: 0, duration: 2.1, ease: "power1.inOut" });
        dots.forEach((d, k) => {
          tl.fromTo(d, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, 0.35 + k * 0.48);
        });
      }, el);
    });
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={root} className="relative w-full" aria-hidden={!showLabels}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="block h-[120px] w-full sm:h-[170px] lg:h-[220px]" aria-hidden>
        <path d={area} fill={fill} />
        <path d={line} data-ridge-line fill="none" stroke="var(--color-oxblood)" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      </svg>
      {showLabels && (
        <ol className="ui pointer-events-none absolute inset-0 m-0 list-none p-0" aria-label="Your recovery path">
          {markers.map((m, k) => {
            const [x, y] = pts[m.i];
            const last = k === markers.length - 1;
            return (
              <li
                key={m.label}
                data-ridge-marker
                className="absolute"
                style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
              >
                <span className={`absolute left-0 top-0 block -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-oxblood ${last ? "h-4 w-4 bg-oxblood" : "h-3.5 w-3.5 bg-fog"}`} />
                <span className="absolute bottom-3 left-0 hidden -translate-x-1/2 whitespace-nowrap text-center sm:block">
                  <span className="block text-[0.95rem] font-[700] text-marine">
                    <span className="sr-only">Step {k + 1}: </span>
                    {m.label}
                  </span>
                  <span className="hidden text-[0.8rem] text-muted lg:block">{m.note}</span>
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}

/** Decorative ridge silhouette used as a section divider (no markers, no motion). */
export function RidgeDivider({ fill = "var(--color-marine)", flip = false, className = "" }: { fill?: string; flip?: boolean; className?: string }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={`block h-[70px] w-full sm:h-[110px] ${flip ? "-scale-x-100" : ""} ${className}`} aria-hidden>
      <path d={area} fill={fill} />
    </svg>
  );
}
