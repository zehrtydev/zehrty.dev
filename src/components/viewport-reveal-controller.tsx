"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-viewport-reveal]";

export function ViewportRevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (targets.length === 0 || reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    root.dataset.motionReady = "true";
    let remainingTargets = targets.length;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          target.dataset.viewportRevealed = "true";
          observer.unobserve(target);
          remainingTargets -= 1;

          if (remainingTargets === 0) {
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.removeAttribute("data-motion-ready");
    };
  }, []);

  return null;
}
