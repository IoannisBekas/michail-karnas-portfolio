"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const shouldAnimate = mounted && !prefersReducedMotion;
  const mediaY = useTransform(scrollY, [0, 500], [0, prefersReducedMotion ? 0 : 80]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-28 px-4 pb-14 pt-6 md:scroll-mt-36 md:px-8 md:pb-20 md:pt-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="device-shell px-6 pb-8 pt-14 md:px-12 md:pb-12 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-8 text-sm text-muted"
              >
                <div>
                  <span className="block font-display text-3xl leading-none text-foreground md:text-4xl">
                    10+
                  </span>
                  Years delivering analytics at scale
                </div>
                <div>
                  <span className="block font-display text-3xl leading-none text-foreground md:text-4xl">
                    100+
                  </span>
                  Stakeholders enabled through BI systems
                </div>
              </motion.div>

              <motion.p
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                className="mt-14 text-sm text-muted"
              >
                Senior Analytics Engineer
              </motion.p>

              <motion.h1
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: "easeOut", delay: 0.14 }}
                className="mt-3 font-display text-[clamp(3.5rem,9vw,6.8rem)] leading-[0.9] tracking-[-0.05em] text-foreground"
              >
                Michail Karnas
              </motion.h1>

              <motion.p
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.22 }}
                className="mt-7 max-w-xl text-2xl leading-tight text-foreground md:text-[2rem]"
              >
                Turning raw data into strategic insight, measurable growth, and
                systems leaders can actually use.
              </motion.p>

              <motion.p
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: "easeOut", delay: 0.3 }}
                className="mt-8 max-w-xl text-base leading-8 text-muted"
              >
                Analytics engineering, reporting systems, and commercial decision
                design across retail, supply chain, CRM, product, and fraud.
              </motion.p>

              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.38 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-black bg-foreground px-6 py-3 text-sm text-background hover:scale-[1.03]"
                >
                  View My Work
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm text-foreground hover:scale-[1.03]"
                >
                  Explore Experience
                  <ArrowDownRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.46 }}
                className="mt-12 flex items-center gap-6 text-sm text-muted"
              >
                <span className="accent-dot">Based in the UK</span>
                <span>Open to senior analytics and data leadership roles</span>
              </motion.div>
            </div>

            <motion.div
              style={{ y: shouldAnimate ? mediaY : 0 }}
              initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: "easeOut", delay: 0.18 }}
              className="relative"
            >
              <div className="relative rounded-[2rem] border border-black/10 bg-[#efe9e1] p-5 shadow-[0_24px_50px_rgba(20,20,20,0.08)]">
                <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1.5 text-[11px] uppercase tracking-[0.28em] text-muted md:left-8 md:top-8 md:px-4 md:py-2 md:text-xs">
                  Analytics Systems
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#e7e0d6]">
                  <img
                    src={`${basePath}/michail-karnas-photo.png`}
                    alt="Portrait of Michail Karnas"
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-[52%_28%]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted md:flex-nowrap md:gap-2 md:justify-between">
                  <span className="leading-tight">Product, Retail, Supply Chain, CRM, Fraud</span>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-center">
                    Portfolio
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
