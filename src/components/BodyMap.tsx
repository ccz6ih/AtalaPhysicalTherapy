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

/** Figure parts, tagged with the region they belong to. Coordinates in a 260×560 viewBox. */
const limbs: { id: string; region: RegionId; x1: number; y1: number; x2: number; y2: number; w: number }[] = [
  { id: "neck", region: "spine", x1: 130, y1: 82, x2: 130, y2: 106, w: 24 },
  { id: "uarm-l", region: "shoulder", x1: 90, y1: 124, x2: 70, y2: 214, w: 24 },
  { id: "uarm-r", region: "shoulder", x1: 170, y1: 124, x2: 190, y2: 214, w: 24 },
  { id: "farm-l", region: "elbow-wrist-hand", x1: 70, y1: 214, x2: 58, y2: 298, w: 20 },
  { id: "farm-r", region: "elbow-wrist-hand", x1: 190, y1: 214, x2: 202, y2: 298, w: 20 },
  { id: "thigh-l", region: "hip", x1: 113, y1: 296, x2: 109, y2: 408, w: 34 },
  { id: "thigh-r", region: "hip", x1: 147, y1: 296, x2: 151, y2: 408, w: 34 },
  { id: "shin-l", region: "knee", x1: 109, y1: 408, x2: 107, y2: 508, w: 26 },
  { id: "shin-r", region: "knee", x1: 151, y1: 408, x2: 153, y2: 508, w: 26 },
];

const hotspots: { region: RegionId; x: number; y: number; name: string }[] = [
  { region: "balance", x: 130, y: 52, name: "Head — balance and dizziness" },
  { region: "spine", x: 130, y: 98, name: "Neck" },
  { region: "shoulder", x: 92, y: 124, name: "Left shoulder" },
  { region: "shoulder", x: 168, y: 124, name: "Right shoulder" },
  { region: "spine", x: 130, y: 232, name: "Lower back" },
  { region: "elbow-wrist-hand", x: 70, y: 214, name: "Left elbow" },
  { region: "elbow-wrist-hand", x: 190, y: 214, name: "Right elbow" },
  { region: "elbow-wrist-hand", x: 56, y: 310, name: "Left wrist and hand" },
  { region: "hip", x: 110, y: 290, name: "Left hip" },
  { region: "hip", x: 150, y: 290, name: "Right hip" },
  { region: "knee", x: 109, y: 410, name: "Left knee" },
  { region: "knee", x: 151, y: 410, name: "Right knee" },
  { region: "foot-ankle", x: 105, y: 516, name: "Left ankle and foot" },
  { region: "foot-ankle", x: 155, y: 516, name: "Right ankle and foot" },
];

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

  const tint = (r: RegionId) => (active === r ? "#f0d3d3" : "#ffffff");
  const info = active ? regionInfo[active] : null;
  const cond = active ? conditionRegions.find((c) => c.id === active) : null;
  const regionGuides = active ? guides.filter((g) => g.region === active) : [];

  return (
    <div id="body-map" className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14" data-section="body-map">
      <div>
        <h2 className="display-lg">{heading}</h2>
        <p className="lede mt-4 max-w-md">{intro}</p>

        <div className="relative mx-auto mt-8 max-w-[22rem]">
          <svg viewBox="0 0 260 560" className="h-auto w-full" role="group" aria-label="Body map">
            {/* outline layer */}
            <g stroke="var(--color-line)" strokeLinecap="round" fill="none">
              {limbs.map((l) => (
                <line key={l.id} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={l.w + 4} />
              ))}
              <circle cx="130" cy="52" r="31" fill="var(--color-line)" stroke="none" />
              <path d="M86 112 Q130 98 174 112 L171 206 Q168 252 162 292 L98 292 Q92 252 89 206 Z" fill="var(--color-line)" stroke="var(--color-line)" strokeWidth="4" strokeLinejoin="round" />
              <circle cx="56" cy="316" r="13" fill="var(--color-line)" stroke="none" />
              <circle cx="204" cy="316" r="13" fill="var(--color-line)" stroke="none" />
              <ellipse cx="103" cy="526" rx="20" ry="10" fill="var(--color-line)" stroke="none" />
              <ellipse cx="157" cy="526" rx="20" ry="10" fill="var(--color-line)" stroke="none" />
            </g>
            {/* fill layer */}
            <g strokeLinecap="round">
              {limbs.map((l) => (
                <line key={l.id} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} strokeWidth={l.w} stroke={tint(l.region)} className="transition-[stroke] duration-300" />
              ))}
              <circle cx="130" cy="52" r="29" fill={tint("balance")} />
              <path d="M88 114 Q130 101 172 114 L169 206 Q166 250 160 290 L100 290 Q94 250 91 206 Z" fill={tint("spine")} />
              <circle cx="56" cy="316" r="11" fill={tint("elbow-wrist-hand")} />
              <circle cx="204" cy="316" r="11" fill={tint("elbow-wrist-hand")} />
              <ellipse cx="103" cy="526" rx="18" ry="8" fill={tint("foot-ankle")} />
              <ellipse cx="157" cy="526" rx="18" ry="8" fill={tint("foot-ankle")} />
            </g>
            {/* spine line hint */}
            <path d="M130 118 L130 272" stroke="var(--color-line)" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />

            {hotspots.map((h) => {
              const on = active === h.region;
              return (
                <g key={h.name} transform={`translate(${h.x} ${h.y})`}>
                  {on && <circle r="17" className="animate-[ping_1.8s_ease-out_infinite] motion-reduce:animate-none" fill="var(--color-oxblood)" opacity=".18" />}
                  <circle
                    r={on ? 10 : 8}
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
                    className="cursor-pointer outline-none transition-all duration-200 focus-visible:stroke-[var(--color-signal)] [&:hover]:fill-[var(--color-oxblood)]"
                    fill={on ? "var(--color-oxblood)" : "var(--color-marine)"}
                    stroke="#fff"
                    strokeWidth="3"
                  />
                </g>
              );
            })}
          </svg>
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
