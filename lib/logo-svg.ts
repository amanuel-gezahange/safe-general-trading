// Single source for the SGT logo geometry. Plain TypeScript (no JSX) so the asset
// script can import it with Node and regenerate app/icon.svg, app/apple-icon.png
// and lib/logo-png.ts:  node scripts/build-logo.mts

// Molecular "C" mark: atoms as [x, y, radius], bonds as pairs of atom keys.
const ATOMS: Record<string, [number, number, number]> = {
  a: [35.8, 7.0, 3.6], b: [25.8, 22.7, 5.5], c: [44.5, 27.6, 3.6], d: [53.9, 10.0, 5.5],
  e: [63.6, 27.6, 3.3], f: [72.1, 7.0, 4.8], g: [83.6, 22.1, 5.8], h: [31.2, 41.2, 3.3],
  i: [10.6, 32.7, 4.8], j: [15.2, 50.9, 5.5], k: [31.2, 60.6, 3.3], l: [10.6, 68.5, 4.5],
  m: [26.1, 77.9, 5.8], n: [36.4, 94.5, 4.8], o: [44.5, 73.9, 3.3], p: [53.9, 91.2, 5.8],
  q: [63.6, 73.9, 3.3], r: [72.7, 93.9, 4.8], s: [83.6, 78.8, 6.1],
};
const BONDS = ["ab", "bc", "cd", "df", "fg", "de", "bh", "bi", "ij", "jk", "jl", "lm", "mn", "np", "po", "pq", "qs", "sr"];

// "SGT" wordmark: wide, squared letters drawn on a 100-unit cap height.
const LETTER_S =
  "M117 0V23H28A5 5 0 0 0 23 28V33.5A5 5 0 0 0 28 38.5H91A26 26 0 0 1 117 64.5V74A26 26 0 0 1 91 100H0V77H89A5 5 0 0 0 94 72V66.5A5 5 0 0 0 89 61.5H26A26 26 0 0 1 0 35.5V26A26 26 0 0 1 26 0Z";
const LETTER_G =
  "M124 0V23H28A5 5 0 0 0 23 28V72A5 5 0 0 0 28 77H96A5 5 0 0 0 101 72V63H55V40H124V74A26 26 0 0 1 98 100H26A26 26 0 0 1 0 74V26A26 26 0 0 1 26 0Z";
const LETTER_T = "M0 0H127V23H80A5 5 0 0 0 75 28V100H52V28A5 5 0 0 0 47 23H0Z";

const INK = "#2f2f2f";

function molecule(dx: number, dy: number) {
  const bonds = BONDS.map(([u, v]) => {
    const [x1, y1] = ATOMS[u];
    const [x2, y2] = ATOMS[v];
    return `<line x1="${x1 + dx}" y1="${y1 + dy}" x2="${x2 + dx}" y2="${y2 + dy}"/>`;
  });
  const atoms = Object.values(ATOMS).map(([x, y, r]) => `<circle cx="${x + dx}" cy="${y + dy}" r="${r}"/>`);
  return bonds.join("") + atoms.join("");
}

function markContent(id: string) {
  const paint = `url(#${id})`;
  return (
    `<defs><linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="5" y1="0" x2="90" y2="0">` +
    `<stop offset="0" stop-color="#5b3dd3"/><stop offset="0.55" stop-color="#4f6be0"/><stop offset="1" stop-color="#4a98e6"/>` +
    `</linearGradient></defs>` +
    `<g fill="${paint}" stroke="${paint}" stroke-width="1.3" opacity="0.28">${molecule(-1.8, -1.6)}</g>` +
    `<g fill="${paint}" stroke="${paint}" stroke-width="1.3">${molecule(0, 0)}</g>`
  );
}

function wordmarkContent() {
  // Cap height 46.8 units, vertically centred slightly above the mark's middle.
  // Built with array join, not template literals: Next's production minifier
  // folds constant template strings and dropped this group's transform attribute,
  // which made "SGT" invisible on the live site.
  return [
    '<g fill="', INK, '" transform="translate(99 23.6) scale(0.468)">',
    '<path d="', LETTER_S, '"/>',
    '<path transform="translate(136 0)" d="', LETTER_G, '"/>',
    '<path transform="translate(271 0)" d="', LETTER_T, '"/>',
    "</g>",
  ].join("");
}

export const MARK_VIEWBOX = "-2.5 1 100 100";
export const LOCKUP_VIEWBOX = "2 0 287 102";

/** Inner SVG markup of the square molecule mark (favicon, app icon). */
export function markInner(id = "sgt-mark") {
  return markContent(id);
}

/** Inner SVG markup of the full logo: molecule mark + "SGT". */
export function lockupInner(id = "sgt-logo") {
  return markContent(id) + wordmarkContent();
}

export function markSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}">${markInner()}</svg>\n`;
}

export function lockupSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${LOCKUP_VIEWBOX}">${lockupInner()}</svg>\n`;
}
