import { og } from "@/lib/og";
import { getService } from "@/content/services";

const s = getService("sports-rehabilitation");
export const alt = `${s.name} at Atala Physical Therapy in Carlsbad`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: s.name, sub: "One-on-one care in Carlsbad, CA. No referral needed.", image: "/wp-content/uploads/2023/02/athlete-runner-knee-injury-run.jpg" });
}
