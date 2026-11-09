import Link from "next/link";
import { company } from "@/lib/data";
import { navItems } from "@/lib/nav";
import "./Footer.css";

export default function Footer() {
  const links = navItems.filter((item) => item.href !== "/");

  return (
    <footer className="sgt-footer">
      <div className="sgt-footer-band">
        <div className="sgt-footer-grid">
          <div className="sgt-footer-col">
            <b>SGT. PLC</b>
            <p>
              Trusted importer of high-purity industrial chemicals and
              specialty raw materials.
            </p>
          </div>

          <nav className="sgt-footer-col" aria-label="Footer navigation">
            <b>Explore</b>
            {links.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="sgt-footer-col">
            <b>Contact</b>
            <address className="sgt-footer-address">
              {company.address.city}, {company.address.country}
            </address>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((phone) => (
              <a key={phone} href={`tel:${phone}`}>
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="sgt-footer-note">
        <p>© {new Date().getFullYear()} Safe General Trading PLC.</p>
        <p>
          Product images are conceptual illustrations, not photographs of
          inventory.
        </p>
      </div>
    </footer>
  );
}
