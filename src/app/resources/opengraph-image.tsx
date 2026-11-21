import { og } from "@/lib/og";
export const alt = "Guides and resources at Atala Physical Therapy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default function Image() {
  return og({ title: "Guides and resources", sub: "Plain-language answers about pain, surgery and recovery.", image: "/wp-content/uploads/2025/02/AdobeStock_485516813.jpeg" });
}
