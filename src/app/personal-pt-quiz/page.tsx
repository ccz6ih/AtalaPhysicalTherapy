import { PTQuiz } from "@/components/PTQuiz";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GoogleBadge } from "@/components/Reviews";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/personal-pt-quiz/", {
  title: "Personal PT Quiz | Find Your Physical Therapy Plan | Atala PT Carlsbad",
  description: "Answer four quick questions about your pain, daily movement and goals to get a personalized physical therapy plan from Atala Physical Therapy in Carlsbad.",
});

export default function Page() {
  return (
    <section className="contours bg-[position:right_-260px_top_-80px] pb-24 pt-8 lg:pt-12">
      <div className="wrap max-w-5xl">
        <Breadcrumbs items={[{ name: "Personal PT Quiz", href: "/personal-pt-quiz/" }]} />
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display-lg">Let&apos;s start your recovery</h1>
            <p className="lede mt-4 max-w-xl">Four quick questions. One personalized plan you can bring to your first visit.</p>
          </div>
          <GoogleBadge />
        </div>
        <div className="mt-10">
          <PTQuiz />
        </div>
      </div>
    </section>
  );
}
