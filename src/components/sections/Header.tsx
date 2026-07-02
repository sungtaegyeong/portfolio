import Link from "next/link";

import { profile } from "@/data/profile";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border)/70 bg-white/82 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="text-base font-bold text-(--foreground) transition-colors hover:text-(--accent)"
          aria-label="홈으로 이동"
        >
          Sung Taegyeong
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-(--muted) transition-colors hover:text-(--foreground)"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={profile.resume}
          className="inline-flex h-10 items-center justify-center rounded-2xl bg-(--accent) px-4 text-sm font-bold text-white transition-colors hover:bg-(--accent-hover)"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
