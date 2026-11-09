import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ProductCard from "@/components/ProductCard";
import PageHero, { Breadcrumb } from "@/components/PageHero";
import ProductLineup from "@/components/ProductLineup";
import { products } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Products & Solutions",
  description:
    "High-purity surfactants, industrial alkalis, glycerin, and refined mineral oils imported by Safe General Trading PLC for Ethiopian manufacturers.",
  path: "/products",
});

export default function Products() {
  return (
    <main>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Products & Solutions" }]}
      />

      <PageHero
        title="Products & Solutions"
        media={<ProductLineup />}
      >
        <div className="sgt-copy">
          <p>
            Surfactants, industrial alkalis, glycerin, and refined mineral
            oils sourced directly from verified international manufacturers.
            Open any product for full technical parameters, applications, and
            packaging options.
          </p>
        </div>
      </PageHero>

      <section className="sgt-section sgt-section--tight" aria-label="Product catalog">
        <div className="sgt-wrap">
          <div className="sgt-tilegrid" data-reveal="stagger">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
