"use client";

import { useEffect } from "react";

export function HomeEnhancements() {
  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-target"));

    if (revealElements.length === 0) {
      return;
    }

    revealElements.forEach((element) => element.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
