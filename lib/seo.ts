import type { Metadata } from "next";
import { company } from "@/lib/data";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path of the page, e.g. "/our-business". */
  path: string;
  /** Share image path; defaults to the site-wide image. */
  image?: string;
};

/**
 * Per-page metadata: title, description, canonical URL and social-share tags.
 * Without this, pages would inherit the homepage's share title and URL.
 * Uses the site-wide share image unless a page passes its own.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: PageMetaInput): Metadata {
  const shareTitle = `${title} | ${company.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: company.name,
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: shareTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

const absolute = (path: string) => new URL(path, company.domain).toString();

/** schema.org Organization + WebSite, rendered once in the root layout. */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absolute("/#organization"),
      name: company.name,
      alternateName: company.short,
      url: absolute("/"),
      logo: absolute("/apple-icon"),
      foundingDate: String(company.established),
      email: company.email,
      telephone: company.phones[0],
      areaServed: { "@type": "Country", name: "Ethiopia" },
      description:
        "Importer and distributor of high-purity industrial chemicals and specialty raw materials for Ethiopia's manufacturing sector.",
      contactPoint: company.phones.map((phone) => ({
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "sales",
        areaServed: "ET",
        availableLanguage: ["English", "Amharic"],
      })),
    },
    {
      "@type": "WebSite",
      "@id": absolute("/#website"),
      url: absolute("/"),
      name: company.name,
      publisher: { "@id": absolute("/#organization") },
      potentialAction: {
        "@type": "SearchAction",
        target: `${absolute("/product-search")}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

/** schema.org BreadcrumbList from breadcrumb items (last item = current page). */
export function breadcrumbJsonLd(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absolute(item.href) } : {}),
    })),
  };
}
