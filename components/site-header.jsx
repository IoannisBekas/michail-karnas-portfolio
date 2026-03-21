"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? "bg-[rgba(245,242,236,0.82)] shadow-[0_16px_48px_rgba(18,18,18,0.08)] backdrop-blur-xl"
            : "bg-[rgba(255,252,248,0.68)] backdrop-blur-md"
        }`}
      >
        <Link href="#hero" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-medium text-foreground">
            MK
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            Michail Karnas
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full border border-black bg-foreground px-5 py-3 text-sm text-background hover:scale-[1.03]"
          >
            Book A Call
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
            className="mx-auto mt-3 flex max-w-[1280px] flex-col gap-3 rounded-[1.5rem] border bg-[rgba(255,252,248,0.95)] p-4 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-muted hover:bg-black/[0.04] hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
