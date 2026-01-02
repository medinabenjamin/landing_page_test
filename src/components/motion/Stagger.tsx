"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
  once?: boolean;
  as?: "div" | "ol" | "ul";
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function Stagger({
  children,
  className,
  delayChildren = 0,
  stagger = 0.12,
  once = true,
  as = "div"
}: StaggerProps) {
  const MotionTag = as === "ol" ? motion.ol : as === "ul" ? motion.ul : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: stagger
          }
        }
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div"
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </MotionTag>
  );
}
