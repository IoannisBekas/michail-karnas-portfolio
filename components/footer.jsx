import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="px-4 pb-10 md:px-8 md:pb-14">
      <div className="mx-auto max-w-[1280px] rounded-[2rem] border border-black/10 ink-surface px-6 py-8 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <Link href="#hero" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/72 hover:text-white">
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/72 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:text-right">
            <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/45">
              Contact
            </p>
            <Link
              href="mailto:Michail_Karnas@hotmail.com"
              className="font-display text-xl tracking-[-0.03em] text-white transition-colors hover:text-white/80 break-words md:text-2xl"
            >
              Michail_Karnas@hotmail.com
            </Link>
            <a
              href="https://www.linkedin.com/in/michail-k-a4b76a318/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm text-white/60 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-white/70 md:flex-row md:justify-center md:gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5f87b3]">
            Website by
          </span>
          <a
            href="https://bisolutions.group/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d6e0ec]/70 bg-white/90 px-4 py-2 text-[#14558f] shadow-[0_10px_24px_rgba(92,128,168,0.18)] backdrop-blur-sm transition-all hover:border-[#bfd0e4] hover:text-[#0f4e8c] hover:shadow-[0_14px_26px_rgba(92,128,168,0.22)]"
            aria-label="Visit BI Solutions Group"
          >
            <img
              src={`${basePath}/bi-solutions-transparent.png`}
              alt=""
              aria-hidden="true"
              className="h-5 w-8 object-contain"
            />
            <span className="text-[0.98rem] font-semibold tracking-tight">BI Solutions Group</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
