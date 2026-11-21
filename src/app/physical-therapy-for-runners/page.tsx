import { ActivityTemplate } from "@/components/ActivityTemplate";
import { activityPath, getActivity } from "@/content/activities";
import { pageMeta } from "@/lib/seo";

const activity = getActivity("runners");
export const metadata = pageMeta(activityPath(activity.slug), { title: activity.title, description: activity.description, image: activity.hero.src });

export default function Page() {
  return <ActivityTemplate activity={activity} />;
}
