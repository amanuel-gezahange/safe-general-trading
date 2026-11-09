import Link from "next/link";
import "./ContactBand.css";

type ContactBandProps = {
  eyebrow: string;
  title: string;
  text: string;
  buttonLabel: string;
  href?: string;
};

/** Grey call-to-action block used at the bottom of inner pages. */
export default function ContactBand({
  eyebrow,
  title,
  text,
  buttonLabel,
  href = "/quote",
}: ContactBandProps) {
  return (
    <section className="sgt-contactband" aria-label={title}>
      <div className="sgt-wrap sgt-contactband-inner" data-reveal>
        <div>
          <span className="sgt-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <Link href={href} className="sgt-btn">
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
