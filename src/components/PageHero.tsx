import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({ crumbs, title, lede, children, aside }: { crumbs: Crumb[]; title: string; lede?: string; children?: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <section data-section="page-hero" className="contours bg-[position:right_-260px_top_-80px] pb-14 pt-8 lg:pb-20 lg:pt-12">
      <div className="wrap">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid gap-10 ${aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-end" : ""}`}>
          <div>
            <h1 className="display-lg max-w-4xl">{title}</h1>
            {lede && <p className="lede mt-6 max-w-2xl">{lede}</p>}
            {children}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
