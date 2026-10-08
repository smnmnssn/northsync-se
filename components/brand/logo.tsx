import { SpruceMark } from "./spruce-mark";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <SpruceMark inverted={inverted} className="size-8 shrink-0" />
      <span className="text-[0.9375rem] leading-none font-semibold tracking-[0.16em]">
        NORTHSYNC
      </span>
    </span>
  );
}
