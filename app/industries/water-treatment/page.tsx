import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Water Treatment Companies | SGT PLC",
    description:
        "Explore industrial chemical sourcing for water treatment facilities, including pH control and selected treatment processes.",
};

const relevantProducts = [
    {
        name: "Caustic Soda Flakes",
        description:
            "Sodium hydroxide is used in selected water treatment processes for pH adjustment and alkalinity control. Suitability depends on the required grade and application.",
        href: "/products/caustic-soda-flakes",
    },
    {
        name: "Soda Ash Light",
        description:
            "Sodium carbonate can be used in selected water treatment processes to adjust alkalinity and pH.",
        href: "/products/soda-ash-light",
    },
];

export default function WaterTreatmentPage() {
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

                        <h1>Water Treatment Companies</h1>

                        <p>
                            Supporting industrial water treatment operations
                            with chemical raw material sourcing inquiries for
                            water quality management and processing
                            applications.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container industry-detail-content">
                    <div>
                        <span className="eyebrow green">INDUSTRY OVERVIEW</span>

                        <h2>Supporting water treatment operations.</h2>

                        <p>
                            Water treatment companies manage water quality for
                            industrial processes, manufacturing facilities, and
                            other applications. Treatment requirements vary
                            depending on water composition, intended use, and
                            applicable standards.
                        </p>

                        <p>
                            Chemical raw materials may be used in selected
                            treatment processes, including pH adjustment and
                            alkalinity management. SGT PLC welcomes inquiries
                            for relevant industrial chemicals, subject to grade,
                            specifications, and availability confirmation.
                        </p>

                        <div className="industry-detail-note">
                            <CheckCircle2 size={22} />
                            <span>
                                Contact our team to discuss technical
                                specifications, documentation, packaging, and
                                quotation requirements.
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
                            Drinking-water applications require independently
                            verified product suitability, appropriate
                            certifications, and compliance with applicable
                            regulations. SGT PLC does not claim these grades are
                            drinking-water approved.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container ctacontent">
                    <span className="eyebrow">REQUEST A QUOTATION</span>

                    <h2>
                        Looking for water
                        <br />
                        treatment chemicals?
                    </h2>

                    <p>
                        Share your application, required specifications, and
                        estimated quantity. Our team will review your inquiry.
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
