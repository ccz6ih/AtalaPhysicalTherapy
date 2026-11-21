import { og } from "@/lib/og";
import { getGuide } from "@/content/guides";

const g = getGuide("hip-replacement-rehab");
export const alt = `${g.name}: a physical therapy guide from Atala Physical Therapy`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: g.name, sub: "What it is, how physical therapy helps, and when to see a doctor.", image: g.image.src });
}
