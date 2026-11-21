import type { Block } from "@/content/services";

export function Blocks({ blocks, dark = false }: { blocks: Block[]; dark?: boolean }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if ("p" in b) return <p key={i}>{b.p}</p>;
        if ("list" in b)
          return (
            <ul key={i} className="peak-list">
              {b.list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          );
        if ("quote" in b)
          return (
            <p key={i} className={`display-md border-l-[3px] border-oxblood py-1 pl-5 !text-[1.5rem] ${dark ? "!text-white" : ""}`}>
              {b.quote}
            </p>
          );
        if ("defs" in b)
          return (
            <dl key={i} className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {b.defs.map((d) => (
                <div key={d.term} className={`border-t pt-4 ${dark ? "border-white/20" : "border-line"}`}>
                  <dt className={`ui text-[1.05rem] font-[700] ${dark ? "text-white" : "text-marine"}`}>{d.term}</dt>
                  <dd className="mt-1.5 text-[0.98rem]">{d.text}</dd>
                </div>
              ))}
            </dl>
          );
        if ("steps" in b)
          return (
            <ol key={i} className="relative space-y-6 border-l-2 border-line pl-8">
              {b.steps.map((s, k) => (
                <li key={s.title} className="relative">
                  <span className="ui absolute -left-[2.85rem] top-0 grid h-8 w-8 place-items-center rounded-full bg-oxblood text-[0.85rem] font-[700] text-white">{k + 1}</span>
                  <h4 className="ui text-[1.1rem] font-[700] text-marine">{s.title}</h4>
                  <p className="mt-1">{s.text}</p>
                </li>
              ))}
            </ol>
          );
        return null;
      })}
    </div>
  );
}
