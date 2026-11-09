import Link from "next/link";
import { products } from "@/lib/data";
import "./SupplyChain.css";
import "./ProductLineup.css";

/**
 * Brand graphic: the full product range as periodic-table-style tiles.
 * Each tile links to its product page.
 */
export default function ProductLineup() {
  return (
    <div className="sgt-chain sgt-lineup">
      <ul className="sgt-lineup-grid" aria-label="Our products">
        {products.map((product, index) => (
          <li key={product.slug}>
            <Link
              href={`/products/${product.slug}`}
              className="sgt-lineup-tile"
              aria-label={`${product.name} — ${product.fullName}`}
            >
              <span className="sgt-lineup-top" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{product.badge}</span>
              </span>
              <span className="sgt-lineup-symbol" aria-hidden="true">
                {product.symbol}
              </span>
              <span className="sgt-lineup-name" aria-hidden="true">
                {product.shortName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
