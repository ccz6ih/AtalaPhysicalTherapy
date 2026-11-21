"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

/** Sends phone, booking and payment clicks to the dataLayer for GA4 / Ads conversions. */
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const where = a.dataset.track || a.closest("[data-section]")?.getAttribute("data-section") || "unknown";
      if (href.startsWith("tel:")) track("phone_click", { link_location: where });
      else if (href.includes("betterhealthcare.co")) track("book_online_click", { link_location: where });
      else if (href.includes("xpress-pay.com")) track("payment_click", { link_location: where });
      else if (href.startsWith("mailto:")) track("email_click", { link_location: where });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
