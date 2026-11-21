"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { team, type TeamMember } from "@/content/team";
import { site } from "@/content/site";

export function TeamGrid({ compact = false }: { compact?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<TeamMember | null>(null);

  const open = (m: TeamMember) => {
    setActive(m);
    requestAnimationFrame(() => dialog.current?.showModal());
  };

  return (
    <>
      <ul className={`grid gap-x-6 gap-y-10 ${compact ? "grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {team.map((m) => (
          <li key={m.slug} id={m.slug}>
            <button type="button" onClick={() => open(m)} className="group block w-full text-left" aria-haspopup="dialog">
              <span className="relative block aspect-[9/12] overflow-hidden rounded-lg bg-fog-2">
                <Image src={m.photo} alt={`${m.name}${m.credentials ? `, ${m.credentials}` : ""} — ${m.role}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover object-top transition-transform duration-500 ease-[var(--ease-out-quint)] group-hover:scale-[1.03]" />
              </span>
              <span className="ui mt-4 block text-[1.15rem] font-[700] leading-tight text-marine">
                {m.name}
                {m.credentials && <span className="font-[500] text-muted">, {m.credentials}</span>}
              </span>
              <span className="ui mt-1 block text-[0.95rem] text-muted">{m.role}</span>
              <span className="ui mt-2 inline-block text-[0.9rem] font-[650] text-oxblood underline decoration-1 underline-offset-4 group-hover:decoration-transparent">
                Read bio
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[90vh] w-[min(56rem,92vw)] overflow-hidden rounded-xl bg-fog p-0 text-body backdrop:bg-marine/70 backdrop:backdrop-blur-sm"
        aria-labelledby="bio-name"
      >
        {active && (
          <div className="grid max-h-[90vh] overflow-y-auto md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative aspect-[4/5] bg-fog-2 md:aspect-auto">
              <Image src={active.portrait} alt="" fill sizes="(min-width:768px) 360px, 92vw" className="object-cover object-top" />
            </div>
            <div className="p-7 md:p-10">
              <p className="ui text-[0.95rem] text-muted">{active.role}</p>
              <h2 id="bio-name" className="display-md mt-1">
                {active.name}
                {active.credentials && <span className="block text-[1.05rem] font-[550] text-muted">{active.credentials}</span>}
              </h2>
              <div className="mt-5 space-y-4">
                {active.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary" data-track="team-bio">
                  Book an evaluation
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => dialog.current?.close()}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
