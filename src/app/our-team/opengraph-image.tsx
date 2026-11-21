import { og } from "@/lib/og";
export const alt = "Meet the team at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Meet the team", sub: "Licensed physical therapists who see you one-on-one.", image: "/wp-content/uploads/2022/12/5M3A7547-2-scaled.jpg" });
}
