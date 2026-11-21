import { og } from "@/lib/og";
export const alt = "Physical therapy services at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Physical therapy services", sub: "Orthopedic, sports, surgical, spine and workers\u2019 comp rehab in Carlsbad.", image: "/wp-content/uploads/2023/01/AdobeStock_175991477-scaled.jpeg" });
}
