
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  MessageCircle,
  Factory,
  FlaskConical,
  Droplets,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { company, products, industries } from "@/lib/data";

const industryImages = [
  "/industries/detergent.jpg",
  "/industries/paint.jpg",
  "/industries/springWater.jpg",
  "/industries/waterTreatment.jpg",
  "/industries/Beverages.jpg",
  "/industries/Cosmetics.jpg",
];

const industryLinks = [
  "/industries/detergent",
  "/industries/paint",
  "/industries/spring-water",
  "/industries/water-treatment",
  "/industries/beverages",
  "/industries/cosmetics",
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container heroinner">
          <div className="herotext">
            <span className="pill">
              <span className="dot" />
              YOUR PARTNER IN INDUSTRIAL CHEMICALS
            </span>

            <h1>
              Essential chemicals.
              <br />
              <em>Endless possibilities.</em>
            </h1>

            <p>
              Supplying quality-focused industrial raw
              materials for manufacturers, processors,
              and growing businesses. Explore our
              product range and request a tailored
              quotation.
            </p>

            <div className="actions">
              <Link
                href="/products"
                className="btn primary"
              >
                Explore products
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/quote"
                className="btn ghost"
              >
                Request a quote
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="herofoot">
              <span>
                <Globe2 size={18} />
                International inquiries welcome
              </span>

              <span>
                <MessageCircle size={18} />
                Direct sales assistance
              </span>
            </div>
          </div>

          <div className="heroart">
            <div className="heroglow" />

            <div className="arttile tile1">
              <FlaskConical size={45} />
              <b>Industrial chemicals</b>
              <small>Essential inputs</small>
            </div>

            <div className="arttile tile2">
              <Droplets size={46} />
              <b>Trusted sourcing</b>
              <small>Business inquiries</small>
            </div>

            <div className="artstamp">
              SGT
              <br />
              <small>PLC</small>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container statsinner">
          <span>
            <strong>07</strong> Core products
          </span>

          <span>
            <strong>06</strong> Industries served
          </span>

          <span>
            <strong>24/7</strong> AI product assistant
          </span>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <div className="container">
          <div className="sectionhead">
            <div>
              <span className="eyebrow green">
                OUR PRODUCT PORTFOLIO
              </span>

              <h2>
                Materials that move
                <br />
                industries forward.
              </h2>
            </div>

            <p>
              Explore our core chemical range.
              Ask us about available grades,
              packaging, documentation,
              and quotations.
            </p>
          </div>

          <div className="productsgrid">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>

          <div className="center">
            <Link
              className="btn dark"
              href="/products"
            >
              Browse all products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section
        className="section pale"
        id="industries"
      >
        <div className="container">
          <div className="sectionhead">
            <div>
              <span className="eyebrow green">
                APPLICATIONS
              </span>

              <h2>
                Supporting the industries
                <br />
                that shape everyday life.
              </h2>
            </div>

            <p>
              Our portfolio serves a broad range
              of manufacturers. Suitability
              depends on each product&apos;s
              verified grade and specification.
            </p>
          </div>

          <div className="industries-photo-grid">
            {industries.map((name, index) => (
              <Link
                href={industryLinks[index]}
                className="industry-photo-card"
                key={name}
                aria-label={`Explore ${name}`}
              >
                <div
                  className="industry-photo-background"
                  style={{
                    backgroundImage: `url("${industryImages[index]}")`,
                  }}
                />

                <div className="industry-photo-overlay" />

                <h3>{name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="section about"
        id="about"
      >
        <div className="container aboutgrid">
          <div className="aboutart">
            <div className="aboutorb">
              <Factory
                size={110}
                strokeWidth={1}
              />
            </div>

            <span className="aboutcaption">
              Built around your business needs.
            </span>
          </div>

          <div>
            <span className="eyebrow green">
              ABOUT SGT PLC
            </span>

            <h2>
              More than a supplier.
              <br />
              A partner in progress.
            </h2>

            <p>
              SAFE GENERAL TRAINING PLC (SGT PLC)
              is a chemical supply business serving
              industrial and manufacturing customers.
              We focus on clear communication,
              straightforward inquiries, and
              helping buyers find relevant
              product information.
            </p>

            <div className="checks">
              <span>
                <CheckCircle2 />
                Product-focused support
              </span>

              <span>
                <CheckCircle2 />
                Direct customer communication
              </span>

              <span>
                <CheckCircle2 />
                Quotations for international inquiries
              </span>
            </div>

            <Link
              className="btn dark"
              href="/quote"
            >
              Contact our team
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <div className="container ctacontent">
          <span className="eyebrow">
            LET&apos;S WORK TOGETHER
          </span>

          <h2>
            Looking for a dependable
            <br />
            chemical supply partner?
          </h2>

          <p>
            Tell us what you need. Our team
            will review your inquiry and
            follow up with the next steps.
          </p>

          <Link
            href="/quote"
            className="btn white"
          >
            Request a quotation
            <ArrowUpRight size={18} />
          </Link>

          <div className="ctacontact">
            General Manager: {company.manager}
            {" · "}
            <a href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
