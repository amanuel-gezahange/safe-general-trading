import type { LucideIcon } from "lucide-react";
import { Cog, Droplets, Pill, Sparkles, SprayCan } from "lucide-react";
import { businessFields } from "@/lib/data";
import "./SupplyChain.css";
import "./ProductLineup.css";

const icons: Record<string, LucideIcon> = {
  detergents: SprayCan,
  "personal-care": Sparkles,
  pharmaceuticals: Pill,
  soaps: Droplets,
  industrial: Cog,
};

/**
 * Brand graphic: the business fields as icon tiles.
 * Each tile jumps to (and opens) that field further down the page.
 */
export default function SectorGrid() {
  return (
    <div className="sgt-chain sgt-lineup">
      <ul className="sgt-lineup-grid" aria-label="Industries we serve">
        {businessFields.map((field, index) => {
          const Icon = icons[field.slug] ?? Cog;
          const count = field.products.length;

          return (
            <li key={field.slug}>
              {/* plain anchor: same-page jump, fires "hashchange" for OpenOnHash */}
              <a
                href={`#${field.slug}`}
                className="sgt-lineup-tile"
                aria-label={`${field.title} — ${count} products`}
              >
                <span className="sgt-lineup-top" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{count} products</span>
                </span>
                <span className="sgt-lineup-icon" aria-hidden="true">
                  <Icon size={30} strokeWidth={1.5} />
                </span>
                <span className="sgt-lineup-name" aria-hidden="true">
                  {field.shortTitle}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
