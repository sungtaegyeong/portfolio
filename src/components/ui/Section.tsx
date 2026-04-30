import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold text-[var(--accent)]">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-normal text-[var(--foreground)] sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
