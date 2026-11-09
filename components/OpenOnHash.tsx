"use client";

import { useEffect } from "react";

/**
 * When the URL hash points at a <details> element (e.g. /business-fields#soaps),
 * open it and scroll it into view. Works on page load and on in-page links.
 */
export default function OpenOnHash() {
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      const target = document.getElementById(id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return null;
}
