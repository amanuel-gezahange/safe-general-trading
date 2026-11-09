import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import "../quote.css";

export const metadata: Metadata = {
    title: "Inquiry Submitted | SGT PLC",
    robots: {
        index: false,
        follow: false,
    },
};

export default function QuoteSuccessPage() {
    return (
        <main className="quote-success-page">
            <section className="quote-success-card">
                <div className="quote-success-check">
                    <CheckCircle2
                        size={44}
                        strokeWidth={1.7}
                        aria-hidden="true"
                    />
                </div>

                <h1>Inquiry submitted successfully</h1>

                <p className="quote-success-description">
                    Thank you for contacting SGT PLC. Your quotation request has
                    been sent to our team.
                </p>

                <div className="quote-success-next">
                    <h2>What happens next?</h2>

                    <p>
                        Our team will review your product requirements and
                        contact you using the email address provided in your
                        inquiry.
                    </p>
                </div>

                <div className="quote-success-actions">
                    <Link href="/" className="sgt-btn">
                        <Home size={17} aria-hidden="true" />
                        Back to home
                    </Link>

                    <Link href="/products" className="sgt-btn sgt-btn--outline">
                        Browse products
                        <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
