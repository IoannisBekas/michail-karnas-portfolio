"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  amount = 0.25,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y }
      }
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
