"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Ctx = { open: boolean; setOpen: (v: boolean) => void; navigate: (href: string) => void };
const MenuCtx = createContext<Ctx>({ open: false, setOpen: () => {}, navigate: () => {} });
export const useMenu = () => useContext(MenuCtx);

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpenState] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenState(false);
  }

  const setOpen = useCallback((v: boolean) => setOpenState(v), []);

  /**
   * Navigate straight away and keep the menu open until the new page has
   * rendered; the pathname change closes it, so the page that zooms back in
   * is the one you chose.
   */
  const navigate = useCallback(
    (href: string) => {
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener");
        return;
      }
      const target = new URL(href, window.location.href);
      if (target.pathname === window.location.pathname) {
        setOpenState(false);
        if (target.hash) window.setTimeout(() => document.querySelector(target.hash)?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth" }), 450);
        return;
      }
      window.dispatchEvent(new Event("nav-start"));
      router.push(href);
    },
    [router],
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenState(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return <MenuCtx.Provider value={{ open, setOpen, navigate }}>{children}</MenuCtx.Provider>;
}
