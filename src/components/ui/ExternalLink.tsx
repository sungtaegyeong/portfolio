import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ExternalLink({ className = "", children, ...props }: ExternalLinkProps) {
  return (
    <a
      className={`text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--foreground)] ${className}`}
      target={props.href?.startsWith("http") ? "_blank" : props.target}
      rel={props.href?.startsWith("http") ? "noreferrer" : props.rel}
      {...props}
    >
      {children}
    </a>
  );
}
