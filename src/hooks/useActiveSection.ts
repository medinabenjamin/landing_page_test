"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_THRESHOLD = 0.2;

/**
 * Tracks the currently visible section using Intersection Observer so the
 * navigation can highlight the active link while scrolling or jumping via menu.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const ratios = new Map<string, number>();
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;

      let bestId = activeSectionRef.current;
      let bestRatio = DEFAULT_THRESHOLD;

      ratios.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });

      if (bestId && bestId !== activeSectionRef.current) {
        activeSectionRef.current = bestId;
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        if (!frame) {
          frame = window.requestAnimationFrame(updateActiveSection);
        }
      },
      {
        threshold: [DEFAULT_THRESHOLD, 0.4, 0.6],
        rootMargin: "0px 0px -20% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [sectionIds]);

  return activeSection;
}
