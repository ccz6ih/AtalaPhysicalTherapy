import { og } from "@/lib/og";
export const alt = "Book your evaluation at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Book your evaluation", sub: "Book online or call. No referral needed.", image: "/wp-content/uploads/2022/12/5M3A7984-scaled.jpg" });
}
