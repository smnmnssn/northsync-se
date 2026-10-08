import { Fragment, type ComponentProps, type ReactNode } from "react";

export function Arrow({ direction = "right", className = "" }: { direction?: "right" | "down"; className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`size-4 shrink-0 transition-transform duration-200 ease-out ${
        direction === "right" ? "group-hover:translate-x-[3px]" : "group-hover:translate-y-[2px]"
      } ${className}`}
    >
      {direction === "right" ? <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" /> : <path d="M8 2.5v11M3.5 9 8 13.5 12.5 9" />}
    </svg>
  );
}

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "secondary-dark";
  arrow?: "right" | "down";
};

const buttonVariants = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-ink/80 text-ink hover:bg-ink/[0.04] hover:border-ink",
  "secondary-dark": "border border-white/40 text-white hover:border-white hover:bg-white/[0.06]",
};

export function ButtonLink({ variant = "primary", arrow, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-button px-5 text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors duration-200 ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && <Arrow direction={arrow} />}
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-label flex items-center gap-2.5 ${className}`}>
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

/** Mono metadata line; separators stay attached so wrapped lines never start with "·". */
export function MetaList({
  items,
  size = "label",
  className = "",
}: {
  items: readonly string[];
  size?: "label" | "meta";
  className?: string;
}) {
  return (
    <p className={`${size === "meta" ? "text-meta" : "text-label"} flex flex-wrap gap-x-2 ${className}`}>
      {items.map((item, i) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap">
            {item}
            {i < items.length - 1 && <span aria-hidden> ·</span>}
          </span>{" "}
        </Fragment>
      ))}
    </p>
  );
}
