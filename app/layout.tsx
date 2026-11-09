import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import "./motion.css";

import { company } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideTabs from "@/components/SideTabs";
import Chat from "@/components/Chat";
import RevealObserver from "@/components/RevealObserver";
import JsonLd from "@/components/JsonLd";
import { siteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
    verification: {
        google: "FDTFft03l_Z7C9iqSSGtBclHd_sV1Y79CVMp1OotcKY",
    },
    metadataBase: new URL(company.domain),
    title: {
        default: "Safe General Trading PLC | Chemical Importer in Ethiopia",
        template: "%s | SGT PLC",
    },
    description:
        "Addis Ababa importer of high-purity LABSA, SLES, caustic soda, soda ash, refined glycerin and liquid paraffin for manufacturers in Ethiopia. COA-verified.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Safe General Trading PLC | Chemical Importer in Ethiopia",
        description:
            "Essential Chemicals. Endless possibilities. Trusted importer of high-purity industrial chemicals and specialty raw materials.",
        url: "/",
        siteName: "Safe General Trading PLC",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
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
                <JsonLd data={siteJsonLd} />

                <Header />

                {children}

                <Footer />

                <SideTabs />

                <Chat />

                <RevealObserver />
            </body>
        </html>
    );
}
