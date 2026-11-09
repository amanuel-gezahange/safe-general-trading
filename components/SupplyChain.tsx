import { Factory, FileCheck2, Globe2, Warehouse } from "lucide-react";
import "./SupplyChain.css";

const steps = [
  { icon: Globe2, title: "Verified manufacturers", text: "Tier-1 international producers" },
  { icon: FileCheck2, title: "Import & COA check", text: "Every batch tested before release" },
  { icon: Warehouse, title: "Local stock", text: "Held and ready in Ethiopia" },
  { icon: Factory, title: "Ethiopian manufacturers", text: "Fair prices, no middlemen" },
];

type SupplyChainProps = {
  /** "full" for hero areas, "compact" for small cards. */
  variant?: "full" | "compact";
};

/**
 * Brand graphic showing how the business works, used where a company
 * photo would normally go. Replace with real photography when available.
 */
export default function SupplyChain({ variant = "full" }: SupplyChainProps) {
  return (
    <div className={`sgt-chain sgt-chain--${variant}`}>
      <ol className="sgt-chain-steps" aria-label="How we supply">
        {steps.map(({ icon: Icon, title, text }, index) => (
          <li key={title} className="sgt-chain-step">
            <span className="sgt-chain-icon" aria-hidden="true">
              <Icon size={variant === "compact" ? 22 : 26} strokeWidth={1.6} />
            </span>
            <span className="sgt-chain-text">
              <span className="sgt-chain-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="sgt-chain-title">{title}</span>
              {variant === "full" && <span className="sgt-chain-desc">{text}</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

const facts = [
  { value: "Est. 2026", label: "Ethiopian importer" },
  { value: "Direct", label: "From verified manufacturers" },
  { value: "COA", label: "Verified every shipment" },
];

/** Compact brand graphic with three company facts (for cards). */
export function CompanyFacts() {
  return (
    <div className="sgt-chain sgt-chain--facts">
      <ul className="sgt-facts">
        {facts.map((fact) => (
          <li key={fact.value}>
            <span className="sgt-facts-value">{fact.value}</span>
            <span className="sgt-facts-label">{fact.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
