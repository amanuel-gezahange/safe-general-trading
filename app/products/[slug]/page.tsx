import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, CheckCircle2, Info, MessageCircle, Package } from "lucide-react";

import PageHero, { Breadcrumb } from "@/components/PageHero";
import Expandable, { ExpandableList } from "@/components/Expandable";
import { products, whatsappLink } from "@/lib/data";
import "./product-detail.css";

/** Keep meta descriptions within the ~160 characters search engines display. */
const clip = (text: string, max = 160) =>
  text.length <= max
    ? text
    : `${text.slice(0, max - 1).replace(/\s+\S*$/, "").replace(/[\s.,;:–-]+$/, "")}…`;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return pageMetadata({
    title: `${product.name} Supplier in Ethiopia`,
    description: clip(
      `${product.name} (${product.chemicalName}) supplier in Ethiopia. ${product.function} COA with every batch.`
    ),
    path: `/products/${product.slug}`,
    image: `/products/${product.slug}/opengraph-image`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const quoteHref = `/quote?product=${encodeURIComponent(product.name)}`;
  const optionCount = product.packaging.length;

  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products & Solutions", href: "/products" },
          { label: product.name },
        ]}
      />

      <PageHero
        eyebrow={product.category}
        title={product.name}
        subtitle={product.fullName}
        image={product.image}
      >
        <dl className="sgt-detail-function">
          <dt>Chemical Function</dt>
          <dd>{product.function}</dd>
        </dl>

        <div className="sgt-pagehero-actions">
          <Link className="sgt-btn" href={quoteHref}>
            Request a Quote
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>

          <a
            className="sgt-btn sgt-btn--outline"
            href={whatsappLink(
              `Hello Safe General Trading PLC, I would like more information about ${product.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Sales
          </a>
        </div>
      </PageHero>

      <section className="sgt-section sgt-section--grey" aria-labelledby="details-title">
        <div className="sgt-wrap">
          <div className="sgt-section-head" data-reveal>
            <span className="sgt-eyebrow">Product Details</span>
            <h2 id="details-title" className="sgt-section-title">
              Technical information
            </h2>
          </div>

          <ExpandableList>
            <Expandable title="Simple Explanation">
              <p>{product.description}</p>
            </Expandable>

            <Expandable
              title="Technical Parameters"
              teaser={`${product.specs.length} parameters · COA with every batch`}
            >
              <div className="sgt-spec-wrap">
                <table className="sgt-spec-table">
                  <thead>
                    <tr>
                      <th scope="col">Parameter</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label}>
                        <th scope="row">{spec.label}</th>
                        <td>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Expandable>

            <Expandable
              title="Primary Applications"
              teaser={`${product.uses.length} key uses`}
            >
              <ul className="sgt-detail-list">
                {product.uses.map((use) => (
                  <li key={use}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </Expandable>

            <Expandable
              title="Packaging Options"
              teaser={`${optionCount} ${optionCount === 1 ? "option" : "options"} available`}
            >
              <ul className="sgt-detail-list">
                {product.packaging.map((pack) => (
                  <li key={pack}>
                    <Package size={18} aria-hidden="true" />
                    <span>{pack}</span>
                  </li>
                ))}
              </ul>
              <p className="sgt-detail-note">
                Contact our sales team for current stock, lead times, and bulk
                order pricing.
              </p>
            </Expandable>
          </ExpandableList>

          <div className="sgt-detail-notice" data-reveal>
            <Info size={20} aria-hidden="true" />
            <p>
              Values shown are standard specifications. Please confirm grade,
              batch COA, and Safety Data Sheet (SDS) with our team before
              ordering for your formulation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
