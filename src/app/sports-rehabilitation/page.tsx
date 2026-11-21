import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/seo";

const service = getService("sports-rehabilitation");
export const metadata = pageMeta(service.path, { image: service.hero.src });

export default function Page() {
  return <ServiceTemplate service={service} />;
}
