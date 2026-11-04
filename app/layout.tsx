import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import { company } from "@/lib/data";
import Header from "@/components/Header";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
    verification: {
        google: "FDTFft03l_Z7C9iqSSGtBclHd_sV1Y79CVMp1OotcKY",
    },
    metadataBase: new URL("https://safe-general-trading.netlify.app"),
    title: {
        default: "SGT PLC | Industrial Chemical Supplier",
        template: "%s | SGT PLC",
    },
    description:
        "SAFE GENERAL TRAINING PLC supplies LABSA 96%, SLES 70%, caustic soda flakes, soda ash light, paraffin and glycerin. Request a quotation.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "SGT PLC | Industrial Chemical Supplier",
        description: "Industrial chemicals and ingredients for manufacturing.",
        url: "https://safe-general-trading.netlify.app",
        siteName: "SGT PLC",
        type: "website",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />

                {children}

                <footer className="footer">
                    <div className="container footergrid">
                        <div className="footer-brand">
                            <b>
                                SGT<span className="accent">.</span> PLC
                            </b>

                            <p>
                                Reliable industrial chemical sourcing for
                                manufacturers and businesses.
                            </p>
                        </div>

                        <nav
                            className="footer-links"
                            aria-label="Footer navigation"
                        >
                            <b>Explore</b>

                            <Link href="/products">Products</Link>

                            <Link href="/#industries">Industries</Link>

                            <Link href="/quote">Request a quote</Link>
                        </nav>

                        <div className="footer-contact">
                            <b>Contact</b>

                            <a href={`mailto:${company.email}`}>
                                {company.email}
                            </a>

                            {company.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                >
                                    {phone}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="container footnote">
                        <p>
                            © {new Date().getFullYear()} SAFE GENERAL TRAINING
                            PLC.
                        </p>

                        <p>
                            Product images are conceptual illustrations, not
                            photographs of inventory.
                        </p>
                    </div>
                </footer>

                <Chat />
            </body>
        </html>
    );
}
