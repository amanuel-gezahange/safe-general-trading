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
            <section className="pagehero">
                <div className="container">
                    <span className="eyebrow green">PRODUCT CATALOG</span>
                    <h1>
                        Industrial chemicals,
                        <br />
                        <em>made accessible.</em>
                    </h1>
                    <p>
                        Seven core products for diverse industrial applications.
                        Contact us for verified specifications, grades,
                        packaging and availability.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="productsgrid">
                        {products.map((p) => (
                            <ProductCard key={p.slug} product={p} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
