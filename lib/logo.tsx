import { LOGO_RING_PNG } from "./logo-png";

export function LogoMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="#ffffff" stroke="#00806d" strokeWidth="4" />
      <circle cx="50" cy="50" r="38.5" fill="none" stroke="#e0a526" strokeWidth="1.5" />
      <text
        x="49"
        y="56"
        textAnchor="middle"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="27"
        fontWeight="900"
        letterSpacing="-1.5"
        fill="#00806d"
      >
        SGT
      </text>
      <rect x="33" y="61.5" width="13" height="3.6" rx="1.8" fill="#e0a526" />
    </svg>
  );
}

/** Logo for next/og images, which cannot render bold SVG text. */
export function LogoBadge({ size }: { size: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={LOGO_RING_PNG} width={size} height={size} alt="" />;
}
