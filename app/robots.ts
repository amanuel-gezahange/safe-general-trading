import type { MetadataRoute } from "next";
import { company } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/quote/success"] },
    sitemap: `${company.domain}/sitemap.xml`,
    host: company.domain,
  };
}
