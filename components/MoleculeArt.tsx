import "./MoleculeArt.css";

/**
 * Homepage hero graphic: line-art molecular structure (fused hexagon rings,
 * an alkyl chain, SO₃H and OH groups) on a light panel. Pure SVG, decorative.
 */

type Point = [number, number];

const R = 46; // ring radius (viewBox units)

const ringCenters: Point[] = [
  [410, 190],
  [489.7, 190],
  [450, 259],
  [529.5, 259],
];

/** Vertices of a pointy-top hexagon. */
function hexagon([cx, cy]: Point): Point[] {
  return [-90, -30, 30, 90, 150, 210].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return [Math.round((cx + R * Math.cos(rad)) * 10) / 10, Math.round((cy + R * Math.sin(rad)) * 10) / 10];
  });
}

const rings = ringCenters.map(hexagon);

// Zigzag alkyl chain leaving the first ring's upper-left atom
const chain: Point[] = [rings[0][5], [330, 144], [290, 167], [250, 144], [210, 167], [170, 144]];

// Functional groups
const sulfonicBond: Point[] = [rings[3][2], [609, 305]];
const hydroxylBond: Point[] = [rings[2][3], [450, 350]];

const toPoints = (pts: Point[]) => pts.map((p) => p.join(",")).join(" ");

// Unique atoms (ring vertices are shared between fused rings)
const atoms = Array.from(
  new Map(
    [...rings.flat(), ...chain.slice(1)].map((p) => [`${Math.round(p[0])},${Math.round(p[1])}`, p] as const)
  ).values()
);

// A few highlighted atoms that pulse
const highlighted = new Set(["450,213", "370,167", "569,282"]);

export default function MoleculeArt() {
  return (
    <div className="sgt-molecule">
      <svg viewBox="0 0 700 500" role="presentation" aria-hidden="true" focusable="false">
        <g className="sgt-molecule-float">
          {/* shifted left so labels stay clear of the fixed side tabs */}
          <g transform="translate(-70 0)">
          {/* soft background circles */}
          <circle cx="450" cy="235" r="190" className="sgt-molecule-halo" />
          <circle cx="450" cy="235" r="120" className="sgt-molecule-halo sgt-molecule-halo--inner" />

          {rings.map((ring, i) => (
            <polygon
              key={i}
              points={toPoints(ring)}
              pathLength={1}
              className="sgt-molecule-bond"
              style={{ animationDelay: `${0.3 + i * 0.25}s` }}
            />
          ))}

          {/* inner aromatic circles */}
          {ringCenters.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={R * 0.55}
              pathLength={1}
              className="sgt-molecule-bond sgt-molecule-bond--thin"
              style={{ animationDelay: `${0.9 + i * 0.2}s` }}
            />
          ))}

          <polyline points={toPoints(chain)} pathLength={1} className="sgt-molecule-bond" style={{ animationDelay: "1.2s" }} />
          <polyline points={toPoints(sulfonicBond)} pathLength={1} className="sgt-molecule-bond" style={{ animationDelay: "1.5s" }} />
          <polyline points={toPoints(hydroxylBond)} pathLength={1} className="sgt-molecule-bond" style={{ animationDelay: "1.5s" }} />

          {atoms.map(([x, y], i) => {
            const key = `${Math.round(x)},${Math.round(y)}`;
            return (
              <circle
                key={key}
                cx={x}
                cy={y}
                r={highlighted.has(key) ? 7 : 4.5}
                className={highlighted.has(key) ? "sgt-molecule-atom sgt-molecule-atom--hot" : "sgt-molecule-atom"}
                style={{ animationDelay: `${0.6 + (i % 8) * 0.08}s` }}
              />
            );
          })}

          <text x="616" y="312" className="sgt-molecule-label">
            SO<tspan dy="6" fontSize="15">3</tspan>
            <tspan dy="-6">H</tspan>
          </text>
          <text x="436" y="378" className="sgt-molecule-label">
            OH
          </text>

          {/* floating ions */}
          <g className="sgt-molecule-ion" style={{ animationDelay: "2s" }}>
            <circle cx="250" cy="320" r="24" />
            <text x="250" y="327">
              Na<tspan dy="-8" fontSize="12">+</tspan>
            </text>
          </g>
          <g className="sgt-molecule-ion sgt-molecule-ion--small" style={{ animationDelay: "2.3s" }}>
            <circle cx="600" cy="120" r="18" />
            <text x="600" y="126">
              H<tspan dy="5" fontSize="11">2</tspan>
              <tspan dy="-5">O</tspan>
            </text>
          </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
