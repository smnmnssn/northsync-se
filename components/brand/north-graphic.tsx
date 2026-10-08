import { MARKER_POINTS, NORTH_BLUE, NORTH_INK, N_POINTS } from "./north-mark";

/**
 * Hero graphic. Built from the same N and marker polygons as the logo:
 * the primary mark with a hairline outline echo of the N and construction
 * lines taken from the mark's own edges. Static by design.
 */

// Primary mark: 64-unit box scaled by 5.2 and centred in the 480×560 stage.
const S = 5.2;
const OX = 240 - 32 * S;
const OY = 280 - 32 * S;
// Outline echo of the N: same scale, shifted down-left like a drafting offset.
const EX = OX - 28;
const EY = OY + 28;
const px = (x: number) => OX + x * S;
const py = (y: number) => OY + y * S;

export function NorthGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      fill="none"
      role="img"
      aria-label="Northsyns symbol: ett geometriskt N med en blå markör som pekar uppåt"
    >
      <defs>
        <pattern id="ns-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1" fill="#C9CEC9" />
        </pattern>
        <radialGradient id="ns-fade" cx="50%" cy="48%" r="58%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="ns-fade-mask">
          <rect width="480" height="560" fill="url(#ns-fade)" />
        </mask>
        <clipPath id="ns-clip">
          <rect width="480" height="560" />
        </clipPath>
      </defs>

      <g clipPath="url(#ns-clip)">
        <rect width="480" height="560" fill="url(#ns-dots)" mask="url(#ns-fade-mask)" />


        {/* construction lines taken from the mark's edges */}
        <g stroke="#C9CEC9" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <line x1="20" y1={py(64)} x2="460" y2={py(64)} />
          <line x1={px(7)} y1="40" x2={px(7)} y2="540" />
          <line x1={px(57)} y1="40" x2={px(57)} y2="540" />
          <line x1="20" y1={py(0)} x2="460" y2={py(0)} />
        </g>
        <g stroke="#C9CEC9" strokeWidth="1" vectorEffect="non-scaling-stroke">
          <path d="M12 28V12h16M452 12h16v16M12 532v16h16M452 548h16v-16" />
        </g>

        {/* hairline echo of the N: gives the mark a drafted, systematic frame */}
        <g transform={`translate(${EX} ${EY}) scale(${S})`}>
          <polygon points={N_POINTS} stroke="#C9CEC9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </g>

        {/* primary mark */}
        <g transform={`translate(${OX} ${OY}) scale(${S})`}>
          <polygon points={N_POINTS} fill={NORTH_INK} />
          <polygon points={MARKER_POINTS} fill={NORTH_BLUE} />
        </g>
      </g>
    </svg>
  );
}
