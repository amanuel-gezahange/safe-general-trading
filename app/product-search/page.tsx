import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

import PageHero, { Breadcrumb } from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import { products } from "@/lib/data";
import ProductSearch from "./ProductSearch";

export const metadata: Metadata = pageMetadata({
  title: "Product Search",
  description:
    "Search Safe General Trading PLC's chemical portfolio by product name, chemical name, product line, business field, or application.",
  path: "/product-search",
});

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const first = (value: string | string[] | undefined) =>
  (Array.isArray(value) ? value[0] : value) ?? "";

export default async function ProductSearchPage({ searchParams }: Props) {
  const params = await searchParams;

  // "Product Name" chosen in the search form: go straight to that product.
  const productSlug = first(params.product);
  if (products.some((product) => product.slug === productSlug)) {
    redirect(`/products/${productSlug}`);
  }

  return (
    <main>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Product Search" }]} />

      <PageHero eyebrow="Chemical Product Finder" title="Find the Right Chemicals.">
        <div className="sgt-copy">
          <p>
            Search our industrial chemical portfolio by product name, chemical
            composition, category, or manufacturing application.
          </p>
        </div>
      </PageHero>

      <ProductSearch
        initialQuery={first(params.q)}
        initialGroup={first(params.group)}
        initialField={first(params.field)}
      />

      <ContactBand
        eyebrow="Need Help Finding a Product?"
        title="Can't find the chemical you need?"
        text="Contact our sales team to discuss your product requirements, technical specifications, and quotation."
        buttonLabel="Contact Our Team"
      />
    </main>
  );
}
