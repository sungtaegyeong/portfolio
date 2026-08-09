import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary:
      "bg-(--action) text-(--on-accent) shadow-[0_10px_24px_color-mix(in_srgb,var(--action)_24%,transparent)] hover:-translate-y-0.5 hover:bg-(--action-hover) hover:shadow-[0_14px_30px_color-mix(in_srgb,var(--action)_28%,transparent)]",
    secondary:
      "border border-(--border) bg-(--card) text-(--foreground) hover:-translate-y-0.5 hover:bg-(--surface)",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
