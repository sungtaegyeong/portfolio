import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ExternalLink({ className = "", children, ...props }: ExternalLinkProps) {
  return (
    <a
      className={`text-sm font-semibold text-(--muted) transition-colors duration-200 hover:text-(--accent) ${className}`}
      target={props.href?.startsWith("http") ? "_blank" : props.target}
      rel={props.href?.startsWith("http") ? "noreferrer" : props.rel}
      {...props}
    >
      {children}
    </a>
  );
}
