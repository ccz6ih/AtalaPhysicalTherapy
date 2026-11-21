import { GuideTemplate } from "@/components/GuideTemplate";
import { getGuide, guidePath } from "@/content/guides";
import { pageMeta } from "@/lib/seo";

const guide = getGuide("neck-pain");
export const metadata = pageMeta(guidePath(guide.slug), { title: guide.title, description: guide.description, image: guide.image.src, type: "article" });

export default function Page() {
  return <GuideTemplate guide={guide} />;
}
