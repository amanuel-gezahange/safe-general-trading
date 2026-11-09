import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./Expandable.css";

type ExpandableProps = {
  title: string;
  /** One-line teaser shown under the title while collapsed. */
  teaser?: string;
  defaultOpen?: boolean;
  id?: string;
  children: ReactNode;
};

/**
 * Grey title bar that opens to show details.
 * Built on native <details>/<summary>: keyboard and screen-reader
 * accessible with no client JavaScript.
 */
export default function Expandable({
  title,
  teaser,
  defaultOpen = false,
  id,
  children,
}: ExpandableProps) {
  return (
    <details className="sgt-expand" open={defaultOpen} id={id}>
      <summary className="sgt-expand-summary">
        <span className="sgt-expand-heading">
          <span className="sgt-expand-title">{title}</span>
          {teaser && <span className="sgt-expand-teaser">{teaser}</span>}
        </span>

        <ChevronDown className="sgt-expand-icon" size={22} aria-hidden="true" />
      </summary>

      <div className="sgt-expand-body">{children}</div>
    </details>
  );
}

export function ExpandableList({ children }: { children: ReactNode }) {
  return (
    <div className="sgt-expand-list" data-reveal="stagger">
      {children}
    </div>
  );
}
