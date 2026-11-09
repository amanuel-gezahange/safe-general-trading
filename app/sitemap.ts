import type { MetadataRoute } from "next";
import { company, products } from "@/lib/data";

/** Date the site content last changed — update when content is edited. */
const CONTENT_UPDATED = new Date("2026-11-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${company.domain}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/products", 0.9),
    ...products.map((product) => page(`/products/${product.slug}`, 0.9)),
    page("/our-business", 0.7),
    page("/business-fields", 0.7),
    page("/product-search", 0.6),
    page("/quote", 0.6),
  ];
}
