import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

import PageHero, { Breadcrumb } from "@/components/PageHero";
import ContactBand from "@/components/ContactBand";
import OpenOnHash from "@/components/OpenOnHash";
import SectorGrid from "@/components/SectorGrid";
import { businessFields, products } from "@/lib/data";
import "./business-fields.css";

export const metadata: Metadata = pageMetadata({
  title: "Business Fields",
  description:
    "Explore the industries served by Safe General Trading PLC, including detergents, personal care, pharmaceuticals, soap manufacturing, and industrial processing.",
  path: "/business-fields",
});

const fields = businessFields.map((field) => ({
  ...field,
  relatedProducts: products.filter((product) =>
    (field.products as readonly string[]).includes(product.slug)
  ),
}));

export default function BusinessFieldsPage() {
  return (
    <main>
      <OpenOnHash />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Business Fields" }]} />

      <PageHero
        title="Business Fields"
        media={<SectorGrid />}
      >
        <div className="sgt-copy">
          <p>Our core chemical inputs serve key manufacturing sectors:</p>
        </div>

        <ul className="sgt-hero-list">
          {businessFields.map((field) => (
            <li key={field.slug}>
              <a href={`#${field.slug}`}>{field.title}</a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="sgt-section sgt-section--tight" aria-labelledby="industries-title">
        <div className="sgt-wrap">
          <div className="sgt-section-head" data-reveal>
            <span className="sgt-eyebrow">Industries We Serve</span>
            <h2 id="industries-title" className="sgt-section-title">
              Key Manufacturing Sectors
            </h2>
          </div>

          <div className="sgt-tilegrid" data-reveal="stagger">
            {fields.map((field) => (
              <details key={field.slug} id={field.slug} className="sgt-tile">
                <summary>
                  <span className="sgt-tile-image">
                    <Image
                      src={field.image}
                      alt=""
                      fill
                      sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </span>
                  <span className="sgt-tile-bar">
                    <span className="sgt-tile-title">{field.title}</span>
                    <ChevronDown className="sgt-tile-icon" size={20} aria-hidden="true" />
                  </span>
                </summary>

                <div className="sgt-tile-body">
                  <p>{field.description}</p>

                  <p className="sgt-fields-related-label">Related products</p>
                  <ul className="sgt-fields-related">
                    {field.relatedProducts.map((product) => (
                      <li key={product.slug}>
                        <Link href={`/products/${product.slug}`}>
                          {product.name}
                          <ChevronRight size={14} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactBand
        eyebrow="Work With Us"
        title="Let's Grow Together."
        text="Looking for chemical raw materials for your business? Contact our team to discuss your requirements."
        buttonLabel="Contact Us"
      />

      <div className="sgt-wrap sgt-pagefoot">
        <Link href="/products" className="sgt-pagefoot-link">
          Explore Our Products
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
