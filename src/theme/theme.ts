export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_COLORS = { light: "#ffffff", dark: "#17191c" } as const;

type ReadableStorage = Pick<Storage, "getItem">;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function resolveTheme(stored: unknown, prefersDark: boolean): Theme {
  return isTheme(stored) ? stored : prefersDark ? "dark" : "light";
}

export function readStoredTheme(storage: ReadableStorage): Theme | null {
  try {
    const value = storage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme: Theme, targetDocument: Document): void {
  const root = targetDocument.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  for (const meta of targetDocument.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  )) {
    const belongsToTheme = meta.content.toLowerCase() === THEME_COLORS[theme];
    meta.media = belongsToTheme ? "all" : "not all";
  }
}

export const THEME_BOOTSTRAP_SCRIPT = String.raw`
(() => {
  const key = "portfolio-theme";
  const colors = { light: "#ffffff", dark: "#17191c" };
  let stored = null;

  try {
    const value = localStorage.getItem(key);
    stored = value === "light" || value === "dark" ? value : null;
  } catch {}

  const prefersDark =
    typeof matchMedia === "function" && matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored ?? (prefersDark ? "dark" : "light");
  const root = document.documentElement;

  root.dataset.theme = theme;
  root.dataset.themeSource = stored === null ? "system" : "user";
  root.style.colorScheme = theme;

  for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
    meta.media = meta.content.toLowerCase() === colors[theme] ? "all" : "not all";
  }
})();`;
