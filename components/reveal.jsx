"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [mounted, setMounted] = useState(false);
  const shouldAnimate = mounted && !prefersReducedMotion;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={shouldAnimate ? { opacity: 0, y } : false}
      animate={
        !shouldAnimate
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
