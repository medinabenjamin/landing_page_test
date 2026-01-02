"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  sectionId?: string;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  once = false,
  sectionId
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (!sectionId) return;

    const handleReveal = (event: Event) => {
      const detail = (event as CustomEvent<{ sectionId?: string }>).detail;

      if (detail?.sectionId === sectionId) {
        setResetKey((prev) => prev + 1);
      }
    };

    window.addEventListener("section:reveal", handleReveal);
    return () => window.removeEventListener("section:reveal", handleReveal);
  }, [sectionId]);

  const motionKey = sectionId ? `${sectionId}-${resetKey}` : undefined;

  return (
    <motion.div
      key={motionKey}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
