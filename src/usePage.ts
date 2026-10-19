import { useCallback, useEffect, useState } from "react";
import { pageFromPath, PAGE_PATHS, type PageId } from "./router";

export function usePage() {
  const [page, setPage] = useState<PageId | null>(() =>
    pageFromPath(window.location.pathname),
  );

  useEffect(() => {
    const onPop = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((next: PageId) => {
    const path = PAGE_PATHS[next];
    window.history.pushState({}, "", path);
    setPage(next);
    window.scrollTo({ top: 0 });
  }, []);

  return { page, navigate };
}
