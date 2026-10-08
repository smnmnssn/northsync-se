/**
 * Small diagrams in the same line/node language as the Northsync mark.
 */

const INK = "#111315";
const MUTED = "#9AA0A5";
const ACCENT = "#2563EB";

function Ring({ x, y, r = 4.5, color = INK }: { x: number; y: number; r?: number; color?: string }) {
  return <circle cx={x} cy={y} r={r} fill="#fff" stroke={color} strokeWidth="1.5" />;
}

function Dot({ x, y, r = 4.5, color = INK }: { x: number; y: number; r?: number; color?: string }) {
  return <circle cx={x} cy={y} r={r} fill={color} />;
}

export function ServiceGlyph({ kind, className }: { kind: "web" | "commerce" | "systems"; className?: string }) {
  return (
    <svg viewBox="0 0 120 72" fill="none" className={className} aria-hidden>
      <g stroke={INK} strokeWidth="1.5" strokeLinecap="round">
        {kind === "web" && (
          <>
            <path d="M60 10v16M20 26h80M20 26v18M60 26v18M100 26v18" />
            <path d="M60 44v18" stroke={MUTED} />
          </>
        )}
        {kind === "commerce" && (
          <>
            <path d="M10 26h100" />
            <path d="M45 26v26h35V26" stroke={MUTED} strokeDasharray="3 4" />
          </>
        )}
        {kind === "systems" && (
          <>
            <path d="M28 36 10 14M28 36 10 58M92 36l18-22M92 36l18 22" />
            <path d="M28 36h64" />
            <path d="M28 36c8-22 56-22 64 0" stroke={MUTED} strokeDasharray="3 4" />
          </>
        )}
      </g>

      {kind === "web" && (
        <>
          <Dot x={60} y={10} />
          <Ring x={20} y={44} />
          <Ring x={60} y={44} />
          <Dot x={100} y={44} color={ACCENT} />
          <Ring x={60} y={62} r={3.5} color={MUTED} />
        </>
      )}
      {kind === "commerce" && (
        <>
          <Ring x={10} y={26} />
          <Ring x={45} y={26} />
          <Ring x={80} y={26} />
          <Dot x={110} y={26} color={ACCENT} />
          <Ring x={62.5} y={52} r={3.5} color={MUTED} />
        </>
      )}
      {kind === "systems" && (
        <>
          <Ring x={10} y={14} />
          <Ring x={10} y={58} />
          <Ring x={110} y={14} />
          <Ring x={110} y={58} />
          <Dot x={28} y={36} />
          <Dot x={92} y={36} />
          <Dot x={60} y={36} r={4} color={ACCENT} />
        </>
      )}
    </svg>
  );
}
