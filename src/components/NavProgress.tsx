"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin bar at the top of the window from the moment a link is clicked until
 * the new page is showing, so it's always clear that something is happening.
 * While it runs, the current page is dimmed.
 */
export function NavProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [lastPath, setLastPath] = useState(pathname);
  const timer = useRef<number | undefined>(undefined);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (state === "loading") setState("done");
  }

  useEffect(() => {
    if (state !== "done") return;
    const t = window.setTimeout(() => setState("idle"), 600);
    return () => window.clearTimeout(t);
  }, [state]);

  useEffect(() => {
    const start = () => {
      window.clearTimeout(timer.current);
      // A prefetched page usually appears within ~100ms; only show the bar if it takes longer.
      timer.current = window.setTimeout(() => setState((s) => (s === "loading" ? s : "loading")), 90);
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      start();
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("nav-start", start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("nav-start", start);
      window.clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    window.clearTimeout(timer.current);
  }, [pathname]);

  // Dim the current page while the next one loads.
  useEffect(() => {
    const root = document.documentElement;
    if (state === "loading") root.setAttribute("data-navigating", "");
    else root.removeAttribute("data-navigating");
  }, [state]);

  return <div aria-hidden className="nav-progress" data-state={state === "idle" ? undefined : state} />;
}
