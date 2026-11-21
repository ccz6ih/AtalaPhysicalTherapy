"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { conditionRegions } from "@/content/conditions";
import { guides, guidePath } from "@/content/guides";
import { site } from "@/content/site";
import { track } from "@/lib/track";

type RegionId = "spine" | "shoulder" | "elbow-wrist-hand" | "hip" | "knee" | "foot-ankle" | "balance";

const regionInfo: Record<RegionId, { label: string; intro: string; plan: [string, string][] }> = {
  spine: {
    label: "Neck & back",
    intro: "Low back pain, sciatica, disc problems, neck stiffness and headaches. Most spine pain responds well to hands-on care and the right exercise.",
    plan: [
      ["Find the cause", "Movement testing to see what eases and what aggravates your symptoms."],
      ["Calm it down", "Hands-on treatment and positions that settle pain and nerve irritation."],
      ["Rebuild", "Trunk, hip and upper-back strength in our semi-private gym."],
      ["Stay well", "Sitting, lifting and sleep habits, plus a plan for flare-ups."],
    ],
  },
  shoulder: {
    label: "Shoulder",
    intro: "Rotator cuff pain and tears, frozen shoulder, impingement, instability and recovery after shoulder surgery.",
    plan: [
      ["Find the cause", "Range, strength and shoulder-blade control testing."],
      ["Restore motion", "Hands-on mobilization matched to how irritable the shoulder is."],
      ["Rebuild", "Rotator cuff and shoulder blade strength, progressed carefully."],
      ["Back overhead", "Paddling, serving, lifting and reaching rebuilt in stages."],
    ],
  },
  "elbow-wrist-hand": {
    label: "Elbow, wrist & hand",
    intro: "Tennis and golfer’s elbow, carpal tunnel, tendinitis, sprains and rehab after hand or elbow surgery.",
    plan: [
      ["Find the cause", "Grip, strength and nerve testing — including the neck and shoulder."],
      ["Calm it down", "Load changes, hands-on care and pain-relieving exercise."],
      ["Rebuild", "Progressive tendon and grip strengthening."],
      ["Back to work and play", "Workstation, tool and racquet adjustments."],
    ],
  },
  hip: {
    label: "Hip & pelvis",
    intro: "Hip arthritis, impingement, bursitis, groin and hamstring strains, and recovery after hip replacement.",
    plan: [
      ["Find the cause", "Hip, back and gait assessment."],
      ["Ease pain", "Hands-on treatment and activity changes that take load off the sore spot."],
      ["Rebuild", "Hip, core and single-leg strength and balance."],
      ["Return", "Walking, golf, hiking and pickleball, progressed deliberately."],
    ],
  },
  knee: {
    label: "Knee",
    intro: "Runner’s knee, meniscus and ligament injuries, arthritis, and rehab after ACL surgery or knee replacement.",
    plan: [
      ["Find the cause", "Swelling, motion, strength and movement testing."],
      ["Calm the knee", "Swelling control, range of motion and load adjustments."],
      ["Rebuild", "Quad, hip and calf strength with balance and control."],
      ["Return", "Stairs, running, cutting and sport with clear criteria."],
    ],
  },
  "foot-ankle": {
    label: "Foot & ankle",
    intro: "Plantar fasciitis, ankle sprains, Achilles pain, shin splints and recovery after foot or ankle surgery.",
    plan: [
      ["Find the cause", "Ankle mobility, strength, balance and footwear review."],
      ["Calm it down", "Hands-on care, taping and stretching."],
      ["Rebuild", "Calf, foot and balance training."],
      ["Return", "Running, hiking and long days on your feet."],
    ],
  },
  balance: {
    label: "Balance & dizziness",
    intro: "Dizziness, unsteadiness and leg weakness that make you less confident on your feet.",
    plan: [
      ["Find the cause", "Balance, strength and walking assessment; we’ll refer on if something needs a physician first."],
      ["Build stability", "Balance and leg-strength training matched to your level."],
      ["Practice real life", "Turning, stairs, uneven ground and the beach path."],
      ["Stay steady", "A home routine to keep the gains."],
    ],
  },
};

/** Hotspots and highlight glows, in the 1024×1024 space of /brand/body-map.svg. */
const hotspots: { region: RegionId; x: number; y: number; name: string }[] = [
  { region: "balance", x: 515, y: 92, name: "Head — balance and dizziness" },
  { region: "spine", x: 515, y: 172, name: "Neck" },
  { region: "shoulder", x: 418, y: 238, name: "Left shoulder" },
  { region: "shoulder", x: 612, y: 238, name: "Right shoulder" },
  { region: "spine", x: 515, y: 405, name: "Lower back" },
  { region: "elbow-wrist-hand", x: 318, y: 318, name: "Left elbow" },
  { region: "elbow-wrist-hand", x: 712, y: 318, name: "Right elbow" },
  { region: "elbow-wrist-hand", x: 218, y: 388, name: "Left wrist and hand" },
  { region: "elbow-wrist-hand", x: 810, y: 388, name: "Right wrist and hand" },
  { region: "hip", x: 462, y: 505, name: "Left hip" },
  { region: "hip", x: 568, y: 505, name: "Right hip" },
  { region: "knee", x: 468, y: 688, name: "Left knee" },
  { region: "knee", x: 552, y: 688, name: "Right knee" },
  { region: "foot-ankle", x: 466, y: 905, name: "Left ankle and foot" },
  { region: "foot-ankle", x: 558, y: 905, name: "Right ankle and foot" },
];

const glows: Record<RegionId, { cx: number; cy: number; rx: number; ry: number; rot?: number }[]> = {
  balance: [{ cx: 515, cy: 100, rx: 90, ry: 95 }],
  spine: [{ cx: 515, cy: 290, rx: 85, ry: 220 }],
  shoulder: [{ cx: 418, cy: 238, rx: 80, ry: 72 }, { cx: 612, cy: 238, rx: 80, ry: 72 }],
  "elbow-wrist-hand": [{ cx: 268, cy: 350, rx: 120, ry: 60, rot: -28 }, { cx: 762, cy: 350, rx: 120, ry: 60, rot: 28 }],
  hip: [{ cx: 515, cy: 505, rx: 135, ry: 80 }],
  knee: [{ cx: 468, cy: 688, rx: 62, ry: 70 }, { cx: 552, cy: 688, rx: 62, ry: 70 }],
  "foot-ankle": [{ cx: 466, cy: 910, rx: 52, ry: 78 }, { cx: 558, cy: 910, rx: 52, ry: 78 }],
};

const order: RegionId[] = ["spine", "shoulder", "elbow-wrist-hand", "hip", "knee", "foot-ankle", "balance"];

export function BodyMap({ heading = "Where does it hurt?", intro = "Tap the area that's bothering you to see what we treat there, what a typical plan looks like and who you'll work with." }: { heading?: string; intro?: string }) {
  const [active, setActive] = useState<RegionId | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const select = (r: RegionId) => {
    setActive(r);
    track("body_map_select", { region: r });
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
    }
  };

  const info = active ? regionInfo[active] : null;
  const cond = active ? conditionRegions.find((c) => c.id === active) : null;
  const regionGuides = active ? guides.filter((g) => g.region === active) : [];

  return (
    <div id="body-map" className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14" data-section="body-map">
      <div>
        <h2 className="display-lg">{heading}</h2>
        <p className="lede mt-4 max-w-md">{intro}</p>

        <div className="relative mx-auto mt-8 max-w-[34rem] overflow-hidden rounded-[1.5rem] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element -- static vector illustration */}
          <img src="/brand/body-map.svg" alt="" width={1024} height={1024} loading="lazy" decoding="async" className="block h-auto w-full select-none" draggable={false} />
          <svg viewBox="0 0 1024 1024" className="absolute inset-0 h-full w-full" role="group" aria-label="Body map: choose where it hurts">
            <defs>
              <radialGradient id="bm-glow">
                <stop offset="0%" stopColor="#b5262b" stopOpacity="0.55" />
                <stop offset="60%" stopColor="#b5262b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#b5262b" stopOpacity="0" />
              </radialGradient>
            </defs>
            {active &&
              glows[active].map((g, i) => (
                <ellipse
                  key={`${active}-${i}`}
                  cx={g.cx}
                  cy={g.cy}
                  rx={g.rx}
                  ry={g.ry}
                  transform={g.rot ? `rotate(${g.rot} ${g.cx} ${g.cy})` : undefined}
                  fill="url(#bm-glow)"
                  className="animate-[bm-in_.45s_ease-out] motion-reduce:animate-none"
                  style={{ mixBlendMode: "multiply" }}
                />
              ))}
            {hotspots.map((h) => {
              const on = active === h.region;
              return (
                <g key={h.name} transform={`translate(${h.x} ${h.y})`}>
                  {on && <circle r="30" className="animate-[ping_1.8s_ease-out_infinite] motion-reduce:animate-none" fill="var(--color-oxblood)" opacity=".2" />}
                  <circle r="34" fill="transparent" className="cursor-pointer" onClick={() => select(h.region)} aria-hidden />
                  <circle
                    r={on ? 17 : 13}
                    role="button"
                    tabIndex={0}
                    aria-label={`${h.name}: show ${regionInfo[h.region].label.toLowerCase()} conditions`}
                    aria-pressed={on}
                    onClick={() => select(h.region)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        select(h.region);
                      }
                    }}
                    className="cursor-pointer outline-none transition-all duration-200 hover:fill-[var(--color-oxblood)] focus-visible:stroke-[var(--color-signal)]"
                    fill={on ? "var(--color-oxblood)" : "var(--color-marine)"}
                    stroke="#fff"
                    strokeWidth="5"
                  />
                </g>
              );
            })}
          </svg>
          <p className="ui pointer-events-none absolute left-5 top-4 text-[0.85rem] font-[600] text-muted">{active ? regionInfo[active].label : "Tap a dot"}</p>
        </div>

        <ul className="ui mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Choose an area">
          {order.map((r) => (
            <li key={r}>
              <button
                type="button"
                onClick={() => select(r)}
                aria-pressed={active === r}
                className="rounded-full border border-marine/20 bg-white px-4 py-2 text-[0.95rem] font-[600] text-marine transition-colors hover:border-oxblood aria-pressed:border-oxblood aria-pressed:bg-oxblood aria-pressed:text-white"
              >
                {regionInfo[r].label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div ref={panelRef} aria-live="polite" className="scroll-mt-28">
        {!info || !cond || !active ? (
          <div className="flex h-full min-h-[24rem] flex-col justify-center rounded-2xl border border-dashed border-marine/25 p-8 sm:p-10">
            <p className="display-md">Start with where it hurts.</p>
            <p className="mt-4 max-w-md">
              Every plan at Atala starts the same way: a one-on-one evaluation that finds what&apos;s driving your pain, not just where it is. Pick an area to see how that usually unfolds.
            </p>
            <p className="ui mt-6 text-[0.95rem] text-muted">No referral needed. Self-pay, Medicare and most PPO plans welcome.</p>
          </div>
        ) : (
          <div className="on-dark rounded-2xl bg-marine p-7 text-white/80 sm:p-10">
            <h3 className="display-md !text-white">{info.label}</h3>
            <p className="mt-3 text-[1.04rem]">{info.intro}</p>

            {regionGuides.length > 0 && (
              <div className="mt-7">
                <p className="ui text-[0.95rem] font-[650] text-white">In-depth guides</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {regionGuides.map((g) => (
                    <li key={g.slug}>
                      <Link href={guidePath(g.slug)} className="ui inline-flex rounded-full bg-white px-4 py-2 text-[0.95rem] font-[650] text-marine hover:bg-fog">
                        {g.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-7">
              <p className="ui text-[0.95rem] font-[650] text-white">Conditions we commonly treat here</p>
              <ul className="peak-list mt-3 grid gap-x-6 text-[0.98rem] sm:grid-cols-2 [&>li+li]:mt-0 [&>li]:mb-1.5">
                {[...cond.nonSurgical.slice(0, 6), ...cond.postSurgical.slice(0, 2)].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Link href={`/conditions-we-treat/#${active}`} className="link mt-2 inline-block text-[0.92rem]">
                See the full list
              </Link>
            </div>

            <div className="mt-8">
              <p className="ui text-[0.95rem] font-[650] text-white">What a typical plan looks like</p>
              <ol className="mt-4 grid gap-3 sm:grid-cols-2">
                {info.plan.map(([t, d], i) => (
                  <li key={t} className="rounded-lg bg-white/5 p-4">
                    <span className="ui text-[0.82rem] text-white/55">Step {i + 1}</span>
                    <span className="ui mt-0.5 block font-[700] text-white">{t}</span>
                    <span className="mt-1 block text-[0.93rem] leading-snug">{d}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-[0.85rem] text-white/55">Every plan is individual; your therapist explains yours after the evaluation.</p>
            </div>

            <div className="mt-8 rounded-lg border border-white/15 p-5">
              <p className="ui text-[0.95rem] font-[650] text-white">Who you&apos;ll see</p>
              <p className="mt-1.5 text-[0.95rem]">
                Your evaluation and hands-on treatment are with a licensed physical therapist — Terri or Jason. Laurel, our exercise specialist, coaches your progressions in the gym, with no more than two or three patients at a time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !bg-signal hover:!bg-oxblood" data-track="body-map">
                Book an evaluation
              </a>
              <Link href={cond.service} className="btn btn-ghost">
                Related treatment
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
