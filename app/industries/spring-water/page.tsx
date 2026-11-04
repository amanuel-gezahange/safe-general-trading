
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Spring Water Manufacturing | SGT PLC",
  description:
    "Learn about spring water manufacturing, bottled water production, and industrial raw material sourcing inquiries through SGT PLC.",
};

const relevantProducts = [
  {
    name: "Caustic Soda Flakes",
    description:
      "Used in selected industrial cleaning and pH adjustment processes. Any use in a drinking-water facility requires an appropriate verified grade, approved procedures, and regulatory compliance.",
    href: "/products/caustic-soda-flakes",
  },
];

export default function SpringWaterIndustryPage() {
  return (
    <main>
      <section className="section pale">
        <div className="container">
          <Link
            href="/#industries"
            className="industry-detail-back"
          >
            <ArrowLeft size={17} />
            Back to industries
          </Link>

          <div className="industry-detail-header">
            <span className="eyebrow green">
              INDUSTRIES WE SERVE
            </span>

            <h1>Spring Water Manufacturing</h1>

            <p>
              Supporting bottled spring water
              producers with industrial sourcing
              inquiries for manufacturing,
              processing, and facility operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container industry-detail-content">
          <div>
            <span className="eyebrow green">
              INDUSTRY OVERVIEW
            </span>

            <h2>
              Supporting bottled water
              manufacturers.
            </h2>

            <p>
              Spring water manufacturing involves
              water collection, quality monitoring,
              processing, bottling, packaging,
              and maintaining hygienic production
              environments.
            </p>

            <p>
              Manufacturers may require carefully
              selected industrial materials for
              certain facility operations and
              maintenance processes. The choice
              of any chemical depends on its
              intended use, technical grade,
              safety requirements, and applicable
              regulations.
            </p>

            <div className="industry-detail-note">
              <CheckCircle2 size={22} />

              <span>
                Contact our team to discuss
                required specifications,
                documentation, packaging,
                and quotation requirements.
              </span>
            </div>
          </div>

          <div>
            <span className="eyebrow green">
              POTENTIALLY RELEVANT MATERIALS
            </span>

            <div className="industry-detail-products">
              {relevantProducts.map((product) => (
                <Link
                  href={product.href}
                  className="industry-detail-product"
                  key={product.name}
                >
                  <div className="industry-detail-product-heading">
                    <h3>{product.name}</h3>
                    <ArrowUpRight size={19} />
                  </div>

                  <p>{product.description}</p>
                </Link>
              ))}
            </div>

            <p
              style={{
                marginTop: "18px",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#657b73",
              }}
            >
              Listed materials are not presented
              as food-grade or drinking-water
              approved. Suitability must be
              independently verified before
              use in a water production facility.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container ctacontent">
          <span className="eyebrow">
            REQUEST A QUOTATION
          </span>

          <h2>
            Sourcing materials for
            <br />
            bottled water production?
          </h2>

          <p>
            Share your manufacturing requirements,
            intended application, and estimated
            quantity. Our team will review
            your inquiry.
          </p>

          <Link
            href="/quote"
            className="btn white"
          >
            Request a quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
