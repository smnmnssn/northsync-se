import { SpruceMark } from "./spruce-mark";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <SpruceMark inverted={inverted} className="size-9 shrink-0 lg:size-10" />
      <span className="text-base leading-none font-semibold tracking-[0.15em] lg:text-lg">
        NORTHSYNC
      </span>
    </span>
  );
}
