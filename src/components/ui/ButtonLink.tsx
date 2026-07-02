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
    "inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition-all duration-200";
  const variants = {
    primary:
      "bg-(--accent) text-white shadow-[0_10px_24px_rgba(49,130,246,0.24)] hover:-translate-y-0.5 hover:bg-(--accent-hover) hover:shadow-[0_14px_30px_rgba(49,130,246,0.28)]",
    secondary:
      "border border-(--border) bg-white text-(--foreground) hover:-translate-y-0.5 hover:bg-(--surface)",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
