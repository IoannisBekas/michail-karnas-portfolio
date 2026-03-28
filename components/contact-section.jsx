"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 page-gutter py-16 md:scroll-mt-36 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="section-frame rounded-[2.25rem] px-6 py-12 md:px-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow accent-dot">Contact</p>
              <h2 className="mt-5 max-w-md font-display text-4xl tracking-[-0.04em] text-foreground text-balance md:text-5xl">
                Got a vision? Let’s build the decision layer for it.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                Open to senior analytics roles, advisory work, and focused system
                redesigns.
              </p>

              <div className="mt-10 space-y-3">
                <Link
                  href="mailto:Michail_Karnas@hotmail.com"
                  className="contact-detail break-words hover:text-accent"
                >
                  Michail_Karnas@hotmail.com
                </Link>
                <p className="break-words text-lg leading-7 text-muted md:text-xl">
                  +44 7519 273839
                </p>
                <p className="text-sm leading-7 text-muted">
                  LinkedIn, portfolio references, and certifications are now
                  available directly.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/michail-k-a4b76a318/"
                    target="_blank"
                    rel="noreferrer"
                    className="soft-pill inline-flex items-center rounded-full px-4 py-2.5 text-base font-medium text-foreground hover:-translate-y-0.5 hover:border-black/20"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
