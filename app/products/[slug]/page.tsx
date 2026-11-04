
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/lib/data";
import {
  ArrowLeft,
  ArrowUpRight,
  Info,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | SGT PLC`,
    description: product.short,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) notFound();

  return (
    <main>
      <section className="section">
        <div className="container">

          {/* Back navigation */}
          <Link href="/products" className="back">
            <ArrowLeft size={17} />
            All products
          </Link>

          <div className="detailgrid">

            {/* Product image */}
            <div>
              <div className="detailimage">
                <Image
                  src={product.image}
                  alt={`Illustrative representation of ${product.name}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  priority
                />
              </div>

              <p
                style={{
                  fontSize: "12px",
                  color: "#70827c",
                  marginTop: "12px",
                  lineHeight: 1.6,
                }}
              >
                Illustrative product image.
                Actual appearance and packaging
                may vary.
              </p>
            </div>

            {/* Product information */}
            <div className="detailcontent">

              <span className="eyebrow green">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <p className="lead">
                {product.short}
              </p>

              {/* Detailed description */}
              <div style={{ marginTop: "28px" }}>
                <h3>Product Overview</h3>

                <p
                  style={{
                    lineHeight: 1.9,
                    color: "#526b63",
                    marginTop: "12px",
                  }}
                >
                  {product.description}
                </p>
              </div>

              {/* Applications */}
              <div style={{ marginTop: "30px" }}>
                <h3>Common Applications</h3>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginTop: "18px",
                  }}
                >
                  {product.uses.map((use) => (
                    <li
                      key={use}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "14px",
                      }}
                    >
                      <CheckCircle2
                        size={19}
                        color="#23866b"
                        style={{ flexShrink: 0 }}
                      />

                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product information */}
              <div
                style={{
                  background: "#f3f7f4",
                  borderRadius: "16px",
                  padding: "24px",
                  marginTop: "28px",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "18px",
                  }}
                >
                  Product Information
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                    fontSize: "14px",
                  }}
                >
                  <div>
                    <strong>Product:</strong>{" "}
                    {product.name}
                  </div>

                  <div>
                    <strong>Category:</strong>{" "}
                    {product.category}
                  </div>

                  <div>
                    <strong>Applications:</strong>{" "}
                    {product.uses.join(", ")}
                  </div>

                  <div>
                    <strong>Packaging:</strong>{" "}
                    Available upon inquiry
                  </div>

                  <div>
                    <strong>Technical documents:</strong>{" "}
                    Request from SGT PLC
                  </div>

                  <div>
                    <strong>Price and availability:</strong>{" "}
                    Contact our sales team
                  </div>
                </div>
              </div>

              {/* Safety notice */}
              <div
                className="notice"
                style={{ marginTop: "24px" }}
              >
                <Info
                  size={21}
                  style={{ flexShrink: 0 }}
                />

                <p>
                  Product specifications, grade,
                  concentration, purity, origin,
                  packaging, certifications and
                  availability must be verified
                  with SGT PLC before ordering.
                  This page is not a technical
                  data sheet or safety data sheet.
                </p>
              </div>

              {/* Contact buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "28px",
                }}
              >
                <Link
                  className="btn primary"
                  href={`/quote?product=${encodeURIComponent(
                    product.name
                  )}`}
                >
                  Request a Quote
                  <ArrowUpRight size={18} />
                </Link>

                <a
                  className="btn"
                  href={`https://wa.me/251913033179?text=${encodeURIComponent(
                    `Hello SGT PLC, I would like more information about ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "1px solid #c9dcd4",
                    background: "#ffffff",
                    color: "#173f34",
                  }}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
