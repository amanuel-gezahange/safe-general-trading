import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Cosmetics Manufacturing | SGT PLC",
    description:
        "Explore chemical raw materials for cosmetics and personal care manufacturing, including glycerin and SLES.",
};

const relevantProducts = [
    {
        name: "Glycerin",
        description:
            "A commonly used humectant that helps retain moisture in selected cosmetic and personal care formulations.",
        href: "/products/glycerin",
    },
    {
        name: "SLES 70%",
        description:
            "An anionic surfactant used in selected cleansing formulations, including shampoos and body washes.",
        href: "/products/sles-70",
    },
    {
        name: "Light Paraffin",
        description:
            "Certain cosmetic-grade paraffin materials may be used in personal care formulations, depending on their composition and specifications.",
        href: "/products/light-paraffin",
    },
    {
        name: "Heavy Paraffin",
        description:
            "Selected appropriately refined paraffin materials may have applications in creams, lotions, and related products.",
        href: "/products/heavy-paraffin",
    },
];

export default function CosmeticsIndustryPage() {
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

                        <h1>Cosmetics Manufacturing</h1>

                        <p>
                            Supporting cosmetics and personal care manufacturers
                            with industrial raw material sourcing inquiries for
                            a wide range of formulations.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container industry-detail-content">
                    <div>
                        <span className="eyebrow green">INDUSTRY OVERVIEW</span>

                        <h2>
                            Supporting beauty and personal care manufacturers.
                        </h2>

                        <p>
                            Cosmetics manufacturing involves combining carefully
                            selected ingredients to create products such as
                            lotions, creams, shampoos, soaps, and other personal
                            care formulations.
                        </p>

                        <p>
                            Raw materials may contribute to cleansing
                            performance, moisture retention, product texture,
                            and formulation stability. Their suitability depends
                            on the required cosmetic grade, purity, technical
                            specifications, and applicable regulations.
                        </p>

                        <div className="industry-detail-note">
                            <CheckCircle2 size={22} />
                            <span>
                                Contact our team to discuss your formulation
                                requirements, product grades, specifications,
                                documentation, and quotations.
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
                            Cosmetic-grade suitability and compliance must be
                            verified. Listing a material does not establish that
                            SGT PLC supplies a cosmetic-approved grade.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container ctacontent">
                    <span className="eyebrow">REQUEST A QUOTATION</span>

                    <h2>
                        Looking for cosmetics
                        <br />
                        manufacturing materials?
                    </h2>

                    <p>
                        Tell us which raw materials you need, their intended
                        application, and estimated quantity. Our team will
                        review your inquiry.
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
