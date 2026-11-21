import { og } from "@/lib/og";
export const alt = "Atala Physical Therapy, Carlsbad, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Physical therapy in Carlsbad, CA", sub: "One-on-one care with a licensed physical therapist. No referral needed.", image: "/wp-content/uploads/2022/12/5M3A7984-scaled.jpg" });
}
