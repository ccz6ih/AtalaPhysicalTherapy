import { og } from "@/lib/og";
export const alt = "What our patients say at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "What our patients say", sub: "Five-star Google reviews from Carlsbad patients.", image: "/wp-content/uploads/2022/12/5M3A8005-scaled.jpg" });
}
