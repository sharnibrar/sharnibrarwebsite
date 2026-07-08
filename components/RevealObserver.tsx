"use client";

import { useEffect } from "react";

/**
 * Watches every element with class="reveal" and adds "in-view"
 * when it scrolls into the viewport. Mount once in the root layout.
 */
export default function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
