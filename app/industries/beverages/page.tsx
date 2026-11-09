import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Beverage Manufacturing | SGT PLC",
    description:
        "Learn about industrial sourcing inquiries for beverage production facilities and manufacturing operations.",
};

export default function BeverageIndustryPage() {
    return (
        <main>
            <section className="section pale">
                <div className="container">
                    <Link href="/business-fields" className="industry-detail-back">
                        <ArrowLeft size={17} />
                        Back to business fields
                    </Link>

                    <div className="industry-detail-header">
                        <span className="eyebrow green">
                            INDUSTRIES WE SERVE
                        </span>

                        <h1>Beverage Manufacturing</h1>

                        <p>
                            Supporting beverage producers with industrial
                            sourcing inquiries for manufacturing facilities,
                            production operations, and related processes.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container industry-detail-content">
                    <div>
                        <span className="eyebrow green">INDUSTRY OVERVIEW</span>

                        <h2>Supporting beverage production facilities.</h2>

                        <p>
                            Beverage manufacturing involves ingredient handling,
                            water quality management, production equipment,
                            bottling, and packaging. Manufacturers maintain
                            strict hygiene and quality standards throughout
                            these operations.
                        </p>

                        <p>
                            Industrial chemicals can play a role in certain
                            facility maintenance, equipment cleaning, and
                            processing operations. The selection of any chemical
                            requires careful assessment of its intended use,
                            technical grade, and applicable food safety
                            regulations.
                        </p>

                        <div className="industry-detail-note">
                            <CheckCircle2 size={22} />
                            <span>
                                Contact SGT PLC to discuss your industrial
                                sourcing requirements, required grades,
                                documentation, packaging, and quotations.
                            </span>
                        </div>
                    </div>

                    <div>
                        <span className="eyebrow green">
                            INDUSTRIAL SOURCING INQUIRIES
                        </span>

                        <div className="industry-detail-products">
                            <div className="industry-detail-product">
                                <div className="industry-detail-product-heading">
                                    <h3>Facility and Process Requirements</h3>
                                </div>
                                <p>
                                    Tell us about the industrial materials
                                    required for your manufacturing or facility
                                    operations. Our team can review your inquiry
                                    against available product specifications.
                                </p>
                            </div>

                            <div className="industry-detail-product">
                                <div className="industry-detail-product-heading">
                                    <h3>Grade and Documentation Review</h3>
                                </div>
                                <p>
                                    Chemical suitability must be confirmed
                                    before use in food or beverage production
                                    environments. Relevant documentation and
                                    regulatory requirements must be evaluated.
                                </p>
                            </div>
                        </div>

                        <p
                            style={{
                                marginTop: "18px",
                                fontSize: "14px",
                                lineHeight: 1.7,
                                color: "#657b73",
                            }}
                        >
                            No products in the current SGT PLC catalog are
                            represented here as food-grade, beverage
                            ingredients, or approved for food-contact use.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container ctacontent">
                    <span className="eyebrow">REQUEST A QUOTATION</span>

                    <h2>
                        Sourcing industrial materials
                        <br />
                        for beverage production?
                    </h2>

                    <p>
                        Share your requirements and intended application. Our
                        team will review your inquiry.
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
