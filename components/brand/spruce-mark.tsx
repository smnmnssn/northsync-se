/**
 * Compact Northsync mark: a spruce silhouette formed by a network diagram.
 * Trunk + three drooping branch levels, 8 nodes, one accent node.
 * app/icon.svg is a heavier-stroked copy tuned for favicon sizes.
 */

const X = 16;
const TOP = 3.5;
const BOTTOM = 28.5;
const ACCENT = "#2563EB";

// [junction y, tip dx, tip y] — spread and droop grow towards the base,
// so the silhouette tapers like a spruce rather than forming a flat triangle.
const TIERS = [
  [8, 3.5, 11.5],
  [14, 7, 18.5],
  [20, 11.75, 26.5],
] as const;

const LIGHT = { ink: "#111315", fill: "#F6F7F4" };
const DARK = { ink: "#F6F7F4", fill: "#0E1114" };

/**
 * The mark as SVG markup. Used both for the inline component and for
 * generated images (OG image, app icons), so the geometry lives in one place.
 */
export function spruceMarkSvg({ inverted = false }: { inverted?: boolean } = {}) {
  const { ink, fill } = inverted ? DARK : LIGHT;
  const node = (cx: number, cy: number, accent: boolean) =>
    accent
      ? `<circle cx="${cx}" cy="${cy}" r="2.4" fill="${ACCENT}"/>`
      : `<circle cx="${cx}" cy="${cy}" r="2" fill="${fill}" stroke="${ink}" stroke-width="1.6"/>`;

  return [
    `<g stroke="${ink}" stroke-width="1.8" stroke-linecap="round">`,
    `<line x1="${X}" y1="${TOP}" x2="${X}" y2="${BOTTOM}"/>`,
    ...TIERS.map(
      ([jy, dx, ty]) =>
        `<line x1="${X}" y1="${jy}" x2="${X - dx}" y2="${ty}"/><line x1="${X}" y1="${jy}" x2="${X + dx}" y2="${ty}"/>`,
    ),
    `</g>`,
    `<circle cx="${X}" cy="${TOP}" r="2.3" fill="${ink}"/>`,
    `<circle cx="${X}" cy="${BOTTOM}" r="1.5" fill="${ink}"/>`,
    // The narrow top level uses small solid nodes so it stays open at header size.
    ...TIERS.map(([, dx, ty], i) =>
      i === 0
        ? `<circle cx="${X - dx}" cy="${ty}" r="1.6" fill="${ink}"/><circle cx="${X + dx}" cy="${ty}" r="1.6" fill="${ink}"/>`
        : node(X - dx, ty, false) + node(X + dx, ty, i === 1),
    ),
  ].join("");
}

/** Standalone SVG document, e.g. for an <img> data URI in generated images. */
export function spruceMarkDocument(options?: Parameters<typeof spruceMarkSvg>[0]) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">${spruceMarkSvg(options)}</svg>`;
}

type SpruceMarkProps = {
  className?: string;
  /** Use on dark backgrounds. */
  inverted?: boolean;
};

export function SpruceMark({ className, inverted = false }: SpruceMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden
      dangerouslySetInnerHTML={{ __html: spruceMarkSvg({ inverted }) }}
    />
  );
}
