import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToTop() {
  const { pathname, key } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, key]);
}
