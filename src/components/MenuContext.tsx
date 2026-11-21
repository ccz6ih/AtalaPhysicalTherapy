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

  /** Zoom the page back in, then navigate — the page transition takes over from there. */
  const navigate = useCallback(
    (href: string) => {
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener");
        return;
      }
      setOpenState(false);
      window.setTimeout(() => router.push(href), reduced() ? 0 : 460);
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
