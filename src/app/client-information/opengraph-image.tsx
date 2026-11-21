import { og } from "@/lib/og";
export const alt = "New patient information at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "New patient information", sub: "Insurance, self-pay, paperwork and your first visit.", image: "/wp-content/uploads/2023/02/unnamed-scaled.jpg" });
}
