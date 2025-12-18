import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to #hash targets after route navigation.
 * - Works for "/page#section"
 * - Also works if you're already on the same route and only hash changes
 */
export default function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // If no hash, go to top on route change
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Wait a tick for the next page to render (cards, motion, etc.)
    const timeout = window.setTimeout(() => {
      const id = decodeURIComponent(hash.replace("#", ""));
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
}
