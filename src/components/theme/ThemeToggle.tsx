"use client";

import { useEffect, useRef, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import {
  applyTheme,
  isTheme,
  readStoredTheme,
  resolveTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/theme/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const explicitThemeRef = useRef<Theme | null>(null);
  const setDocumentTheme = (nextTheme: Theme) => {
    applyTheme(nextTheme, document);
    setTheme(nextTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isCurrent = true;
    let storedTheme: Theme | null = null;

    try {
      storedTheme = readStoredTheme(window.localStorage);
    } catch {}
    const bootstrapTheme = document.documentElement.dataset.theme;
    const resolvedTheme = isTheme(bootstrapTheme)
      ? bootstrapTheme
      : resolveTheme(storedTheme, mediaQuery.matches);

    explicitThemeRef.current = storedTheme;
    applyTheme(resolvedTheme, document);
    queueMicrotask(() => {
      if (isCurrent) {
        setTheme(resolvedTheme);
      }
    });
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (explicitThemeRef.current !== null) {
        return;
      }

      const nextTheme: Theme = event.matches ? "dark" : "light";
      setDocumentTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", followSystemTheme);

    return () => {
      isCurrent = false;
      mediaQuery.removeEventListener("change", followSystemTheme);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    explicitThemeRef.current = nextTheme;
    setDocumentTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {}
  };

  const label = theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환";

  return (
    <button
      type="button"
      className="hidden size-11 cursor-pointer items-center justify-center rounded-2xl md:inline-flex"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <span className="relative inline-flex size-10 items-center justify-center rounded-[14px] border border-(--border) bg-(--surface-strong) text-(--foreground)">
        <span
          className={`absolute inset-0 inline-flex items-center justify-center ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
          <FiMoon size={18} aria-hidden="true" />
        </span>
        <span
          className={`absolute inset-0 inline-flex items-center justify-center ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <FiSun size={18} aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
