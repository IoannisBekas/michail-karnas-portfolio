"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/site-data";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px] section-frame rounded-[2.25rem] px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow accent-dot">Experience</p>
            <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
              A design-for-decisions journey through analytics leadership.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-muted">
              Roles structured around adoption, metric clarity, and systems teams can
              actually operate.
            </p>
            <Link
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-black px-5 py-3 text-sm text-foreground hover:scale-[1.02]"
            >
              Book A Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="divide-y divide-black/8">
            {experience.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal key={`${item.company}-${item.role}`} delay={index * 0.05}>
                  <article className="py-6">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="grid w-full gap-5 text-left md:grid-cols-[0.85fr_1.15fr_auto]"
                    >
                      <div>
                        <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{item.company}</p>
                        <p className="mt-2 text-sm text-muted">{item.period}</p>
                      </div>

                      <div>
                        <p className="text-base leading-8 text-muted">{item.summary}</p>
                      </div>

                      <div className="flex items-start justify-end">
                        <span className="soft-pill flex h-10 w-10 items-center justify-center rounded-full">
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.span>
                        </span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 grid gap-3 border-t border-black/8 pt-5 md:ml-[36%]">
                            {item.highlights.map((highlight) => (
                              <div key={highlight} className="flex gap-3 text-sm leading-7 text-muted">
                                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-foreground" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
