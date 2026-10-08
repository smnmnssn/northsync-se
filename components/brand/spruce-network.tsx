/**
 * Hero version of the Northsync mark. Same construction as the compact
 * mark (trunk + drooping branch levels), extended with five levels and
 * secondary branchlets: 29 nodes in total, three of them accent nodes.
 */

const X = 240;
const APEX = 40;
const BASE = 520;

// [junction y, tip dx, tip y]
const TIERS = [
  [92, 38, 130],
  [152, 72, 204],
  [218, 108, 284],
  [290, 144, 366],
  [366, 180, 452],
] as const;

type Point = [number, number];

// Branchlets hang from the midpoint of the three lowest levels.
const TWIGS: { from: Point; to: Point }[] = TIERS.slice(2).flatMap(([jy, dx, ty]) => {
  const my = (jy + ty) / 2;
  return [-1, 1].map((side) => {
    const mx = X + (side * dx) / 2;
    return { from: [mx, my] as Point, to: [mx + side * -8, my + 36] as Point };
  });
});

const ACCENT = new Set(["312,204", "168,328", "322,445"]);
const key = ([x, y]: Point) => `${x},${y}`;

const tips: Point[] = TIERS.flatMap(([, dx, ty]) => [
  [X - dx, ty] as Point,
  [X + dx, ty] as Point,
]);

const SIGNAL_PATH = `M${X} ${APEX} V${TIERS[1][0]} L${X + TIERS[1][1]} ${TIERS[1][2]}`;

export function SpruceNetwork({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 560"
      className={className}
      fill="none"
      role="img"
      aria-label="Northsyncs symbol: en gran uppbyggd som ett nätverk av linjer och noder"
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
      </defs>

      {/* technical ground: dot grid + registration marks */}
      <rect width="480" height="560" fill="url(#ns-dots)" mask="url(#ns-fade-mask)" />
      <g stroke="#C9CEC9" strokeWidth="1" vectorEffect="non-scaling-stroke">
        <path d="M12 28V12h16M452 12h16v16M12 532v16h16M452 548h16v-16" />
        <line x1={X} y1="4" x2={X} y2="18" />
        <line x1={X} y1="542" x2={X} y2="556" />
      </g>

      {/* structure */}
      <g
        stroke="#111315"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="hero-enter-slow"
      >
        <line x1={X} y1={APEX} x2={X} y2={BASE} vectorEffect="non-scaling-stroke" />
        {TIERS.map(([jy, dx, ty]) => (
          <g key={jy}>
            <line x1={X} y1={jy} x2={X - dx} y2={ty} vectorEffect="non-scaling-stroke" />
            <line x1={X} y1={jy} x2={X + dx} y2={ty} vectorEffect="non-scaling-stroke" />
          </g>
        ))}
        {TWIGS.map(({ from, to }) => (
          <line
            key={key(from)}
            x1={from[0]}
            y1={from[1]}
            x2={to[0]}
            y2={to[1]}
            stroke="#646A6F"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>

      {/* signal travelling from the apex to one accent node */}
      <path
        d={SIGNAL_PATH}
        pathLength={100}
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="8 200"
        strokeDashoffset="8"
        opacity="0"
        className="signal"
        vectorEffect="non-scaling-stroke"
      />

      {/* nodes */}
      <g className="hero-enter-slow">
        {/* junctions on the trunk */}
        {TIERS.map(([jy]) => (
          <circle key={jy} cx={X} cy={jy} r="3.5" fill="#111315" />
        ))}
        <circle cx={X} cy={APEX} r="7" fill="#111315" />
        <circle cx={X} cy={BASE} r="4" fill="#111315" />

        {/* branch tips */}
        {tips.map((p) =>
          ACCENT.has(key(p)) ? (
            <AccentNode key={key(p)} p={p} r={6.5} delay={0} />
          ) : (
            <circle
              key={key(p)}
              cx={p[0]}
              cy={p[1]}
              r="6"
              fill="#F6F7F4"
              stroke="#111315"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          ),
        )}

        {/* branchlets */}
        {TWIGS.map(({ from, to }, i) => (
          <g key={key(from)}>
            {ACCENT.has(key(from)) ? (
              <AccentNode p={from} r={4.5} delay={2.7} />
            ) : (
              <circle cx={from[0]} cy={from[1]} r="3" fill="#646A6F" />
            )}
            {ACCENT.has(key(to)) ? (
              <AccentNode p={to} r={4.5} delay={5.3} />
            ) : (
              <circle
                cx={to[0]}
                cy={to[1]}
                r="4"
                fill="#F6F7F4"
                stroke="#646A6F"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                className={i < 2 ? "node-breathe" : undefined}
                style={i < 2 ? { animationDelay: `${i * 4.5}s` } : undefined}
              />
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

function AccentNode({ p, r, delay }: { p: Point; r: number; delay: number }) {
  return (
    <g>
      <circle
        cx={p[0]}
        cy={p[1]}
        r={r * 2.6}
        fill="#2563EB"
        opacity="0"
        className="node-pulse"
        style={{ animationDelay: `${delay}s` }}
      />
      <circle cx={p[0]} cy={p[1]} r={r} fill="#2563EB" />
    </g>
  );
}
