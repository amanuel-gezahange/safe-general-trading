import Link from "next/link";
import { MessageCircle, Search } from "lucide-react";
import { whatsappLink } from "@/lib/data";
import "./SideTabs.css";

/** Fixed quick-action tabs on the right edge (large screens only). */
export default function SideTabs() {
  return (
    <aside className="sgt-sidetabs" aria-label="Quick actions">
      <a
        href={whatsappLink(
          "Hello Safe General Trading PLC, I would like to make an inquiry."
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span className="sgt-sidetabs-label">Direct Inquiry</span>
      </a>
      <Link href="/product-search">
        <Search size={20} aria-hidden="true" />
        <span className="sgt-sidetabs-label">Product Search</span>
      </Link>
    </aside>
  );
}
