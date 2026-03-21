"use client";

import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const prefersReducedMotion = useReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const offset = scrollY + 160;
      let currentSection = "";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (section && offset >= section.offsetTop) {
          currentSection = item.href;
        }
      }

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 md:px-8 md:pt-5">
      <div className="-mx-4 mb-4 border-y border-black/5 bg-[linear-gradient(180deg,rgba(243,247,251,0.95),rgba(251,252,253,0.82))] py-2 md:-mx-8 md:mb-5">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-3 px-4 md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#5f87b3] md:text-[11px]">
            Website by
          </span>
          <a
            href="https://bisolutions.group/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d6e0ec] bg-white/88 px-3 py-1.5 text-[#14558f] shadow-[0_6px_14px_rgba(92,128,168,0.08)] backdrop-blur-sm transition-colors hover:border-[#bfd0e4] hover:text-[#0f4e8c]"
            aria-label="Visit BI Solutions Group"
          >
            <img
              src={`${basePath}/bi-solutions-transparent.png`}
              alt=""
              aria-hidden="true"
              className="h-4.5 w-7 object-contain"
            />
            <span className="text-[0.98rem] font-semibold tracking-tight">
              BI Solutions Group
            </span>
          </a>
        </div>
      </div>

      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-[2rem] border px-3 py-2.5 transition-all duration-300 md:px-4 ${
          scrolled
            ? "border-black/8 bg-[rgba(250,247,242,0.88)] shadow-[0_18px_44px_rgba(18,18,18,0.08)] backdrop-blur-xl"
            : "border-black/8 bg-[rgba(255,252,248,0.72)] backdrop-blur-md"
        }`}
      >
        <Link href="#hero" className="flex items-center gap-3 rounded-full px-1 py-1">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white font-display text-[1.1rem] tracking-[-0.08em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            MK
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-medium tracking-tight text-foreground">
              Michail Karnas
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted lg:block">
              Senior Analytics Engineer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                activeSection === item.href
                  ? "bg-black/[0.05] text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="mailto:Michail_Karnas@hotmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-foreground px-4 py-2.5 text-sm text-background transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" />
            Email Michail
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 flex max-w-[1280px] flex-col gap-2 rounded-[1.5rem] border border-black/8 bg-[rgba(255,252,248,0.95)] p-3 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm ${
                  activeSection === item.href
                    ? "bg-black/[0.05] text-foreground"
                    : "text-muted hover:bg-black/[0.04] hover:text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="mailto:Michail_Karnas@hotmail.com"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-black bg-foreground px-4 py-3 text-sm text-background"
              onClick={() => setOpen(false)}
            >
              <Mail className="h-4 w-4" />
              Email Michail
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
