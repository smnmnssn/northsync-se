/**
 * Canonical Northsync mark: a geometric N whose upper-right corner carries a
 * blue north marker. Every placement (header, footer, hero graphic, favicon,
 * app icon, Open Graph image) is built from the shapes below.
 *
 * Coordinates are in a 64×64 box. The shapes were traced from
 * docs/references/northsync-geometric-n-reference.png: one black polygon
 * (left stem + diagonal + right foot, with the diagonal's lower edge cut
 * into the stem) and one blue triangle pointing up-left.
 */

export const NORTH_BLUE = "#2563EB";
export const NORTH_INK = "#111315";
export const NORTH_LIGHT = "#F6F7F4";

export const N_POINTS = "7,18 57,51 57,64 52,64 20.5,42 20.5,64 7,64";
export const MARKER_POINTS = "57,0 34,18.5 57,43.5";

/** Inner SVG markup for the mark in its 64×64 box. */
export function northMarkShapes({ inverted = false }: { inverted?: boolean } = {}) {
  const structure = inverted ? NORTH_LIGHT : NORTH_INK;
  return `<polygon points="${N_POINTS}" fill="${structure}"/><polygon points="${MARKER_POINTS}" fill="${NORTH_BLUE}"/>`;
}

/** Standalone SVG document for <img> data URIs and the favicon route. */
export function northMarkDocument({
  inverted = false,
  tile,
}: { inverted?: boolean; tile?: string } = {}) {
  if (!tile) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">${northMarkShapes({ inverted })}</svg>`;
  }
  // Tile version: mark sits at 70% of the tile, optically centred.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="14" fill="${tile}"/><g transform="translate(10.4 10.4) scale(0.675)">${northMarkShapes({ inverted })}</g></svg>`;
}

export function northMarkDataUri(options?: Parameters<typeof northMarkDocument>[0]) {
  return `data:image/svg+xml;base64,${Buffer.from(northMarkDocument(options)).toString("base64")}`;
}

type NorthMarkProps = {
  className?: string;
  /** Use on dark backgrounds. */
  inverted?: boolean;
};

export function NorthMark({ className, inverted = false }: NorthMarkProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden>
      <polygon points={N_POINTS} fill={inverted ? NORTH_LIGHT : NORTH_INK} />
      <polygon points={MARKER_POINTS} fill={NORTH_BLUE} />
    </svg>
  );
}
