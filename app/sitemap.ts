
import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

const baseUrl = "https://safe-general-trading.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/products",
    "/quote",
    ...products.map((p) => "/products/" + p.slug),
  ].map((path) => ({
    url: baseUrl + path,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
