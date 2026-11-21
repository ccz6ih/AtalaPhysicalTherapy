import { site } from "@/content/site";

/** Thumb-reachable call/book bar on small screens. */
export function MobileBar() {
  return (
    <div data-section="mobile-bar" className="ui fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-fog/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <a href={site.phoneHref} className="btn btn-ghost !min-h-12 !px-3 text-[0.95rem]">
        Call now
      </a>
      <a href={site.links.booking} target="_blank" rel="noopener" className="btn btn-primary !min-h-12 !px-3 text-[0.95rem]">
        Book online
      </a>
    </div>
  );
}
