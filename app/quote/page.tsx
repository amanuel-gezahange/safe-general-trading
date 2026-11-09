import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

import PageHero, { Breadcrumb } from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { company } from "@/lib/data";
import "./quote.css";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quotation",
  description:
    "Request chemical product pricing and availability from Safe General Trading PLC.",
  path: "/quote",
});

export default function Quote() {
  return (
    <main className="sgt-quote">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <PageHero
        eyebrow="Business Inquiries"
        title={
          <>
            Let&apos;s talk about
            <br />
            your requirements.
          </>
        }
      >
        <div className="sgt-copy">
          <p>
            Share your product needs and our team can follow up. No prices or
            delivery commitments are implied by submitting this form.
          </p>
        </div>
      </PageHero>

      <section className="sgt-section sgt-section--tight">
        <div className="sgt-wrap sgt-quote-grid">
          <QuoteForm />

          <aside className="sgt-quote-aside" aria-labelledby="speak-title">
            <h2 id="speak-title">Speak with our team</h2>

            <p>
              General Manager
              <br />
              <strong>{company.manager}</strong>
            </p>

            <h3>Phone</h3>
            {company.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}

            <h3>WhatsApp</h3>
            {company.whatsapp.map((number) => (
              <a
                key={number}
                href={`https://wa.me/${number}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                +{number}
              </a>
            ))}

            <h3>Email</h3>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
