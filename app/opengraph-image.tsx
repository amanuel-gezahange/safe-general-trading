import { renderOgImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "Safe General Trading PLC — Essential Chemicals. Endless possibilities.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage({
    eyebrow: "Chemical importer · Ethiopia",
    title: "Essential Chemicals. Endless possibilities.",
    subtitle: "Trusted importer of high-purity industrial chemicals and specialty raw materials.",
  });
}
