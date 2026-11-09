import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import PageHero, { Breadcrumb } from "@/components/PageHero";
import Expandable, { ExpandableList } from "@/components/Expandable";
import ContactBand from "@/components/ContactBand";
import SupplyChain from "@/components/SupplyChain";

export const metadata: Metadata = pageMetadata({
  title: "Chemical Importer & Distributor in Ethiopia",
  description:
    "Ethiopian importer and distributor of high-purity surfactants, alkalis, glycerin and mineral oils, sourced direct from verified international manufacturers.",
  path: "/our-business",
});

const approaches = [
  {
    title: "Tier-1 Manufacturer Partnerships",
    description:
      "We work exclusively with named, verified overseas chemical manufacturers, ensuring batch-to-batch consistency and high purity across all surfactant, alkali, and liquid mineral oil product lines.",
  },
  {
    title: "Strict Quality Verification",
    description:
      "Every shipment undergoes batch testing for active content, color values, viscosity, and purity standards before distribution.",
  },
  {
    title: "Fair Pricing & Regulatory Compliance",
    description:
      "We are committed to offering our premium chemical portfolio at exceptionally fair, competitive prices to keep local manufacturing affordable. By importing directly from top-tier international manufacturers without speculative middlemen, we eliminate unnecessary supply chain markups and pass those direct savings to you. Every shipment fully complies with national quality testing standards and complete Certificate of Analysis (COA) verification, delivering verified high-active raw materials at transparent market rates.",
  },
];

export default function OurBusinessPage() {
  return (
    <main>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Our Business" }]} />

      <PageHero
        eyebrow="Our Business"
        title="Empowering Local Industry Through Premium Chemical Sourcing"
        media={<SupplyChain />}
      >
        <div className="sgt-copy">
          <p>
            Established in 2026, <strong>Safe General Trading PLC</strong> is a
            premier importer and distributor driving growth across
            Ethiopia&apos;s manufacturing sector. We supply high-purity
            surfactants, industrial alkalis, refined mineral oils, and organic
            solvents essential for detergent formulation, personal care, soap
            making, pharmaceuticals, and chemical processing.
          </p>
          <p>
            We partner directly with world-class, verified international
            manufacturers to guarantee high-active formulations, strict COA
            compliance, and reliable local stock. By eliminating middleman
            markups, we deliver uncompromised chemical quality at exceptionally
            fair prices, giving local formulators the maximum yield and
            competitive edge they need to thrive.
          </p>
        </div>
      </PageHero>

      <section className="sgt-section sgt-section--tight" aria-labelledby="background-title">
        <div className="sgt-wrap sgt-background" data-reveal>
          <span className="sgt-eyebrow">Corporate Background</span>
          <h2 id="background-title" className="sgt-section-title">
            A reliable trade partner for local manufacturers.
          </h2>
          <div className="sgt-copy">
            <p>
              Established in 2026, Safe General Trading PLC has built a solid
              reputation as a reliable trade partner for local manufacturers in
              Ethiopia. We bridge the gap between global chemical producers and
              local manufacturing plants.
            </p>
          </div>
        </div>
      </section>

      <section className="sgt-section sgt-section--grey" aria-labelledby="quality-title">
        <div className="sgt-wrap">
          <div className="sgt-section-head" data-reveal>
            <span className="sgt-eyebrow">Quality Commitment</span>
            <h2 id="quality-title" className="sgt-section-title">
              Sourcing Policy &amp; Fair Pricing
            </h2>
          </div>

          <ExpandableList>
            {approaches.map((item) => (
              <Expandable key={item.title} title={item.title}>
                <p>{item.description}</p>
              </Expandable>
            ))}
          </ExpandableList>
        </div>
      </section>

      <ContactBand
        eyebrow="Work With Us"
        title="Let's Grow Together."
        text="Looking for chemical raw materials for your business? Contact our team to discuss your requirements."
        buttonLabel="Contact Us"
      />

      <div className="sgt-wrap sgt-pagefoot">
        <Link href="/products" className="sgt-pagefoot-link">
          Explore Our Products
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}
