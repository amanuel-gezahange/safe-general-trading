import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { company } from "@/lib/data";
export const metadata: Metadata = {
    title: "Request a Quotation",
    description:
        "Request chemical product pricing and availability from SGT PLC.",
    alternates: { canonical: "/quote" },
};
export default function Quote() {
    return (
        <main>
            <section className="pagehero">
                <div className="container">
                    <span className="eyebrow green">BUSINESS INQUIRIES</span>
                    <h1>
                        Let's talk about
                        <br />
                        <em>your requirements.</em>
                    </h1>
                    <p>
                        Share your product needs and our team can follow up. No
                        prices or delivery commitments are implied by submitting
                        this form.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container quotegrid">
                    <QuoteForm />
                    <aside className="contactaside">
                        <h3>Speak with our team</h3>
                        <p>
                            General Manager
                            <br />
                            <strong>{company.manager}</strong>
                        </p>
                        <h4>Phone</h4>
                        {company.phones.map((p) => (
                            <a key={p} href={"tel:" + p}>
                                {p}
                            </a>
                        ))}
                        <h4>WhatsApp</h4>
                        {company.whatsapp.map((p) => (
                            <a
                                key={p}
                                target="_blank"
                                rel="noreferrer"
                                href={"https://wa.me/" + p}
                            >
                                +{p}
                            </a>
                        ))}
                        <h4>Email</h4>
                        <a href={"mailto:" + company.email}>{company.email}</a>
                    </aside>
                </div>
            </section>
        </main>
    );
}
