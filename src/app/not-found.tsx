import Link from "next/link";
import { Ridge } from "@/components/Ridge";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="contours pt-16 lg:pt-24">
      <div className="wrap max-w-3xl">
        <h1 className="display-lg">This trail doesn&apos;t go anywhere.</h1>
        <p className="lede mt-5">The page you were looking for has moved or no longer exists. These will get you back on track:</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">Go to the homepage</Link>
          <Link href="/services/" className="btn btn-ghost">Our services</Link>
          <a href={site.phoneHref} className="btn btn-ghost">Call {site.phone}</a>
        </div>
      </div>
      <div className="mt-16">
        <Ridge showLabels={false} />
      </div>
      <div className="h-16 bg-marine" />
    </section>
  );
}
