
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Chemical Products",
  description:
    "Explore industrial chemical raw materials available for inquiry from SGT PLC.",
  alternates: { canonical: "/products" },
};

export default function Products() {
  return (
    <main>
      <section className="products-page-intro">
        <div className="container">
          <span className="eyebrow green">
            PRODUCT CATALOG
          </span>

          <h1>
            Our Chemical <em>Products.</em>
          </h1>

          <p>
            Explore our range of industrial chemical raw
            materials. Contact our team for specifications,
            packaging, pricing, and availability.
          </p>
        </div>
      </section>

      <section className="products-page-catalog">
        <div className="container">
          <div className="productsgrid">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
