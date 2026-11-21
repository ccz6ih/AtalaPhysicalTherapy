import { og } from "@/lib/og";
import { getActivity } from "@/content/activities";

const a = getActivity("runners");
export const alt = `Physical therapy for ${a.name.toLowerCase()} at Atala Physical Therapy in Carlsbad`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: `Physical therapy for ${a.name.toLowerCase()}`, sub: `${a.local.heading}. One-on-one care in Carlsbad.`, image: a.hero.src });
}
