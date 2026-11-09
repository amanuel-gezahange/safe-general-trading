"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-reveal for any element with a `data-reveal` attribute.
 *
 * - Elements are only hidden once this script has run (`html.reveal-ready`),
 *   so content stays visible if JavaScript fails to load.
 * - On first load, anything already on screen is marked revealed immediately
 *   (no flicker); everything below the fold animates in as it scrolls into view.
 * - Re-runs on every route change for newly rendered pages.
 * - Styles live in app/motion.css and are disabled for reduced-motion users.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
    );

    const reveal = (el: Element) => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(reveal);
      return;
    }

    if (!root.classList.contains("reveal-ready")) {
      const viewportHeight = window.innerHeight;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) reveal(el);
      });
      root.classList.add("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    elements.filter((el) => !el.classList.contains("is-revealed")).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
