import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="sgt-breadcrumb sgt-wrap" aria-label="Breadcrumb">
      <JsonLd data={breadcrumbJsonLd(items)} />
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            {index > 0 && <ChevronRight size={13} aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

type PageHeroProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  image?: string;
  imagePriority?: boolean;
  /** Custom visual (e.g. a graphic) shown in the curved frame instead of a photo. */
  media?: ReactNode;
  /** Body copy and/or action buttons. */
  children?: ReactNode;
};

/** Page heading: large green title and copy on the left, curved image on the right. */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imagePriority = true,
  media,
  children,
}: PageHeroProps) {
  const hasVisual = Boolean(image || media);

  return (
    <section
      className={hasVisual ? "sgt-pagehero" : "sgt-pagehero sgt-pagehero--noimage"}
    >
      <div className="sgt-pagehero-text">
        {eyebrow && <span className="sgt-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="sgt-pagehero-subtitle">{subtitle}</p>}
        {children}
      </div>

      {media && <div className="sgt-pagehero-image sgt-pagehero-media">{media}</div>}

      {!media && image && (
        <div className="sgt-pagehero-image">
          <Image
            src={image}
            alt=""
            fill
            priority={imagePriority}
            sizes="(max-width: 900px) 90vw, 58vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
    </section>
  );
}
