import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Detergent Manufacturing | SGT PLC",
    description:
        "Explore industrial chemical raw materials for detergent manufacturing, including LABSA, SLES, Caustic Soda, and Soda Ash.",
};

const relevantProducts = [
    {
        name: "LABSA 96%",
        description:
            "A surfactant raw material commonly used in detergent formulations.",
    },
    {
        name: "SLES 70%",
        description:
            "An anionic surfactant used in liquid detergents and cleaning products.",
    },
    {
        name: "Caustic Soda Flakes",
        description:
            "Used in selected manufacturing processes, including pH adjustment and neutralization.",
    },
    {
        name: "Soda Ash Light",
        description:
            "Used in certain powdered detergent formulations as an alkaline builder.",
    },
];

export default function DetergentIndustryPage() {
    return (
        <main>
            <section className="section pale">
                <div className="container">
                    <Link href="/#industries" className="industry-detail-back">
                        <ArrowLeft size={17} />
                        Back to industries
                    </Link>

                    <div className="industry-detail-header">
                        <span className="eyebrow green">
                            INDUSTRIES WE SERVE
                        </span>

                        <h1>Detergent Manufacturing</h1>

                        <p>
                            Chemical raw materials play an important role in
                            manufacturing laundry detergents, liquid soaps, and
                            household cleaning products.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container industry-detail-content">
                    <div>
                        <span className="eyebrow green">INDUSTRY OVERVIEW</span>

                        <h2>Supporting cleaning-product manufacturers.</h2>

                        <p>
                            Detergent manufacturers use different chemical
                            ingredients to achieve cleaning performance,
                            foaming, stability, and other formulation goals.
                        </p>

                        <p>
                            SGT PLC offers a range of industrial raw materials
                            that may be relevant to detergent manufacturing.
                            Product selection depends on the intended
                            formulation, grade, and technical specifications.
                        </p>

                        <div className="industry-detail-note">
                            <CheckCircle2 size={22} />
                            <span>
                                Contact our team to discuss product grades,
                                specifications, packaging, and quotation
                                requirements.
                            </span>
                        </div>
                    </div>

                    <div>
                        <span className="eyebrow green">
                            RELEVANT RAW MATERIALS
                        </span>

                        <div className="industry-detail-products">
                            {relevantProducts.map((product) => (
                                <Link
                                    href={
                                        product.name === "LABSA 96%"
                                            ? "/products/labsa-96"
                                            : product.name === "SLES 70%"
                                              ? "/products/sles-70"
                                              : product.name ===
                                                  "Caustic Soda Flakes"
                                                ? "/products/caustic-soda-flakes"
                                                : "/products/soda-ash-light"
                                    }
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
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container ctacontent">
                    <span className="eyebrow">REQUEST A QUOTATION</span>

                    <h2>
                        Looking for detergent
                        <br />
                        raw materials?
                    </h2>

                    <p>
                        Tell us which chemicals you need and your estimated
                        quantity. Our team will review your inquiry.
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
