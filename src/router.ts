export type PageId = "home" | "features" | "about" | "contact";

export type Navigate = (page: PageId) => void;

export const PAGE_PATHS: Record<PageId, string> = {
  home: "/",
  features: "/features",
  about: "/about",
  contact: "/contact",
};

const PATH_TO_PAGE: Record<string, PageId> = {
  "/": "home",
  "/features": "features",
  "/about": "about",
  "/contact": "contact",
};

export function pageFromPath(pathname: string): PageId | null {
  return PATH_TO_PAGE[pathname] ?? null;
}
