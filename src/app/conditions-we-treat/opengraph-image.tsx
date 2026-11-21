import { og } from "@/lib/og";
export const alt = "Conditions we treat at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Conditions we treat", sub: "Find your pain on the body map and read the guide.", image: "/wp-content/uploads/2022/12/5M3A8001-2-scaled.jpg" });
}
