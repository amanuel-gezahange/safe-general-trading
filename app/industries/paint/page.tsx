import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Paint Manufacturing | SGT PLC",
  description:
    "Explore industrial raw materials and sourcing inquiries for paint manufacturing through SGT PLC.",
};

const relevantProducts = [
  {
    name: "Light Paraffin",
    description:
      "A petroleum-derived material with applications that depend on its grade and technical specifications.",
    href: "/products/light-paraffin",
  },
  {
    name: "Heavy Paraffin",
    description:
      "A petroleum-derived material used in selected industrial applications, subject to formulation requirements.",
    href: "/products/heavy-paraffin",
  },
];

export default function PaintIndustryPage() {
  return (
    <main>
      <section className="section pale">
        <div className="container">
          <Link href="/business-fields" className="industry-detail-back">
            <ArrowLeft size={17} />
            Back to business fields
          </Link>

          <div className="industry-detail-header">
            <span className="eyebrow green">INDUSTRIES WE SERVE</span>

            <h1>Paint Manufacturing</h1>

            <p>
              Paint and coating manufacturers rely on carefully selected raw
              materials to achieve the required consistency, application
              performance, and finish.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container industry-detail-content">
          <div>
            <span className="eyebrow green">INDUSTRY OVERVIEW</span>

            <h2>Supporting paint and coating manufacturers.</h2>

            <p>
              Paint manufacturing involves combining ingredients such as
              pigments, binders, solvents, and additives to produce coatings for
              decorative, commercial, and industrial applications.
            </p>

            <p>
              SGT PLC welcomes inquiries from paint and coating manufacturers
              seeking industrial raw materials. The suitability of any product
              depends on the intended application, formulation, and verified
              technical specifications.
            </p>

            <div className="industry-detail-note">
              <CheckCircle2 size={22} />
              <span>
                Contact our team to discuss your application, required grades,
                technical specifications, packaging, and quotation needs.
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
              Product suitability for paint formulations must be confirmed
              against the relevant technical specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container ctacontent">
          <span className="eyebrow">REQUEST A QUOTATION</span>

          <h2>
            Looking for paint
            <br />
            manufacturing raw materials?
          </h2>

          <p>
            Tell us about your manufacturing requirements and the materials you
            need. Our team will review your inquiry.
          </p>

          <Link href="/quote" className="btn white">
            Request a quote
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
