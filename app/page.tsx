import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

import PageHero from "@/components/PageHero";
import SearchForm from "@/components/SearchForm";
import MoleculeArt from "@/components/MoleculeArt";
import { CompanyFacts } from "@/components/SupplyChain";
import { businessFields, company, products, whatsappLink } from "@/lib/data";
import "./home.css";

type OverviewCard = {
  title: string;
  lead: string;
  summary?: string;
  links?: { label: string; detail?: string; href: string }[];
  href: string;
  image: string | null;
};

// Content follows the client brief, homepage sections 1–3.
const overview: OverviewCard[] = [
  {
    title: "Our Business",
    lead: "Empowering Local Industry Through Premium Chemical Sourcing",
    summary:
      "Established in 2026, Safe General Trading PLC is a premier importer and distributor driving growth across Ethiopia\u2019s manufacturing sector.",
    href: "/our-business",
    image: null,
  },
  {
    title: "Business Fields",
    lead: "Our core chemical inputs serve key manufacturing sectors:",
    links: businessFields.map((field) => ({
      label: field.title,
      href: `/business-fields#${field.slug}`,
    })),
    href: "/business-fields",
    image: "/industries/Cosmetics.jpg",
  },
  {
    title: "Featured Products",
    lead: "Quick Access",
    links: products.map((product) => ({
      label: product.name,
      detail: product.chemicalName,
      href: `/products/${product.slug}`,
    })),
    href: "/products",
    image: "/products/soda.jpg",
  },
];

function ViewMore({ href, label, light = false }: { href: string; label: string; light?: boolean }) {
  return (
    <Link href={href} className={light ? "sgt-viewmore sgt-viewmore--light" : "sgt-viewmore"}>
      VIEW MORE
      <span className="visually-hidden"> about {label}</span>
      <span className="sgt-viewmore-icon" aria-hidden="true">
        <ChevronRight size={18} />
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="sgt-home">
      {/* HERO */}
      <PageHero
        title={
          <>
            Essential Chemicals.
            <br />
            Endless possibilities.
          </>
        }
        subtitle={company.name}
        media={<MoleculeArt />}
      >
        <div className="sgt-copy">
          <p>
            Trusted importer of high-purity industrial chemicals and
            specialty raw materials since {company.established}.
          </p>
        </div>

        <div className="sgt-pagehero-actions">
          <Link href="/our-business" className="sgt-btn sgt-btn--viewmore">
            VIEW MORE
            <span className="visually-hidden"> about our business</span>
          </Link>
        </div>
      </PageHero>

      {/* OVERVIEW CARDS */}
      <section className="sgt-home-overview" aria-label="Company overview">
        <div className="sgt-wrap sgt-home-overviewgrid" data-reveal="stagger">
          {overview.map((item) => (
            <article className="sgt-home-card" key={item.href}>
              <div className="sgt-home-cardimage">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <CompanyFacts />
                )}
              </div>

              <div className="sgt-home-cardbar">
                <h2>{item.title}</h2>
                <p className="sgt-home-cardlead">{item.lead}</p>
                {item.summary && <p>{item.summary}</p>}
                {item.links && (
                  <ul className="sgt-home-cardlinks">
                    {item.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>
                          <span>{link.label}</span>
                          {link.detail && <small>{link.detail}</small>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <ViewMore href={item.href} label={item.title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT SEARCH */}
      <section
        className="sgt-section"
        id="product-search"
        aria-labelledby="home-search-title"
      >
        <div className="sgt-wrap">
          <div className="sgt-section-head" data-reveal>
            <span className="sgt-eyebrow">Product Search</span>
            <h2 id="home-search-title" className="sgt-section-title">
              Find the right raw material
            </h2>
          </div>

          <div data-reveal>
            <SearchForm />
          </div>
        </div>
      </section>

      {/* DIRECT INQUIRY BAND */}
      <section className="sgt-home-band" aria-labelledby="home-band-title">
        <Image
          src="/products/glycerin.jpg"
          alt=""
          fill
          sizes="100vw"
          className="sgt-home-bandimage"
        />

        <div className="sgt-home-bandcontent" data-reveal>
          <span className="sgt-eyebrow">Direct Inquiry</span>
          <h2 id="home-band-title">
            Need a quotation or a Certificate of Analysis?
          </h2>

          <div className="sgt-home-bandactions">
            <a
              href={whatsappLink(
                "Hello Safe General Trading PLC, I would like to speak with your sales team."
              )}
              className="sgt-btn sgt-btn--light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Contact Sales via WhatsApp
            </a>

            <ViewMore href="/quote" label="contacting us" light />
          </div>

          <p className="sgt-home-bandcontact">
            General Manager: {company.manager}
            {" · "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
