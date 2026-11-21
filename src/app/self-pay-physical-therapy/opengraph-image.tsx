import { og } from "@/lib/og";
export const alt = "Self-pay physical therapy at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Self-pay physical therapy", sub: "Pay the clinic directly. Longer one-on-one visits, no insurance limits.", image: "/wp-content/uploads/2022/12/5M3A8005-scaled.jpg" });
}
