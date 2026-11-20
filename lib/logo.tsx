import type { ReactNode } from "react";

const OUTER ="50,6 88.1,28 88.1,72 50,94 11.9,72 11.9,28";
const INNER = "50,15 80.3,32.5 80.3,67.5 50,85 19.7,67.5 19.7,32.5";

/** Hexagon badge without lettering, for image generators that cannot render SVG text. */
export function LogoShape({ size, children }: { size?: number; children?: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sgt-logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b9b80" />
          <stop offset="1" stopColor="#00664f" />
        </linearGradient>
      </defs>
      <polygon
        points={OUTER}
        fill="url(#sgt-logo-g)"
        stroke="url(#sgt-logo-g)"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <polygon
        points={INNER}
        fill="none"
        stroke="#ffffff"
        strokeOpacity=".28"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {children}
      <circle cx="88.1" cy="28" r="7" fill="#e0a526" stroke="#ffffff" strokeWidth="2.5" />
    </svg>
  );
}

export function LogoMark() {
  return (
    <LogoShape>
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif"
        fontSize="27"
        fontWeight="800"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        SGT
      </text>
    </LogoShape>
  );
}

/** Logo for next/og images: SVG shape with the lettering laid over as HTML. */
export function LogoBadge({ size }: { size: number }) {
  return (
    <div style={{ position: "relative", display: "flex", width: size, height: size }}>
      <LogoShape size={size} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: size,
          height: size,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: Math.round(size * 0.27),
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        SGT
      </div>
    </div>
  );
}
