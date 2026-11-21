"use client";
import { useState } from "react";

/** Shows the first ~limit characters with a "Read more" toggle for long reviews. */
export function ExpandText({ text, limit = 260 }: { text: string; limit?: number }) {
  const [open, setOpen] = useState(false);
  if (text.length <= limit + 40) return <p>{text}</p>;
  const cut = text.slice(0, text.lastIndexOf(" ", limit));
  return (
    <p>
      {open ? text : `${cut}…`}{" "}
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="ui whitespace-nowrap text-[0.9rem] font-[650] text-oxblood underline underline-offset-4">
        {open ? "Show less" : "Read more"}
      </button>
    </p>
  );
}
