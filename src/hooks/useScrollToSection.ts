"use client";

import { useCallback, type MouseEvent } from "react";

const HEADER_OFFSET = 96;

type ScrollToSectionOptions = {
  offset?: number;
};

/**
 * Smoothly scrolls to a section and emits a custom event so motion wrappers can
 * re-run their reveal animations on anchor navigation.
 */
export function useScrollToSection(options: ScrollToSectionOptions = {}) {
  const offset = options.offset ?? HEADER_OFFSET;

  return useCallback(
    (sectionId: string, event?: MouseEvent<HTMLAnchorElement>) => {
      if (event) {
        event.preventDefault();
      }

      const section = document.getElementById(sectionId);
      if (!section) return;

      const top =
        section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });

      window.setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent("section:reveal", { detail: { sectionId } })
        );
      }, 200);
    },
    [offset]
  );
}
