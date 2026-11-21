import { TherapyQuiz } from "@/components/TherapyQuiz";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("/therapy-quiz/", {
  title: "Do You Need Physical Therapy? Take the Quiz | Atala PT Carlsbad",
});

export default function Page() {
  return (
    <section className="contours bg-[position:right_-260px_top_-80px] pb-24 pt-8 lg:pt-12">
      <div className="wrap max-w-4xl">
        <Breadcrumbs items={[{ name: "Therapy Quiz", href: "/therapy-quiz/" }]} />
        <h1 className="display-lg mt-8">Do you need physical therapy?</h1>
        <p className="lede mt-4 max-w-2xl">Answer these quick questions to discover how we can help you. Your responses will guide us in recommending the best path forward!</p>
        <div className="mt-10">
          <TherapyQuiz />
        </div>
      </div>
    </section>
  );
}
