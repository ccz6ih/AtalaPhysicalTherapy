import { ServiceTemplate } from "@/components/ServiceTemplate";
import { getService } from "@/content/services";
import { pageMeta } from "@/lib/seo";

const service = getService("industrial-medicine-workers-compensation");
export const metadata = pageMeta(service.path, { image: service.hero.src });

export default function Page() {
  return <ServiceTemplate service={service} />;
}
