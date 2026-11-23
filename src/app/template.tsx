"use client";

import { useLayoutEffect, useState } from "react";

/**
 * Templates remount on every navigation. After the first page load, each new
 * page starts at its top and fades up into place (see "Page transitions" in
 * globals.css). The first load is left alone so nothing delays it, and Back /
 * Forward keep the browser's own scroll restoration.
 */
let firstRender = true;
let poppedState = false;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    poppedState = true;
  });
}

export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => {
    if (typeof window === "undefined") return false;
    const a = !firstRender;
    firstRender = false;
    return a;
  });

  useLayoutEffect(() => {
    if (!animate) return;
    if (!poppedState && !window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    poppedState = false;
  }, [animate]);

  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
