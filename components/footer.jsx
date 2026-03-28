import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="page-gutter pb-8 md:pb-10">
      <div className="mx-auto max-w-[1280px] rounded-[2rem] border border-black/10 ink-surface px-6 py-7 md:px-10 md:py-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-3 pt-1"
          >
            <Link
              href="#hero"
              className="text-sm text-white/68 transition-colors hover:text-white"
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/68 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="max-w-sm">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/45 md:text-right">
              Contact
            </p>
            <div className="mt-4 flex flex-col items-start md:items-end">
              <Link
                href="mailto:Michail_Karnas@hotmail.com"
                className="block max-w-[15ch] break-words font-display text-[1.55rem] leading-[1.08] tracking-[-0.03em] text-white transition-colors hover:text-white/82 md:max-w-none md:text-right md:text-[1.85rem]"
              >
                Michail_Karnas@hotmail.com
              </Link>
              <a
                href="https://www.linkedin.com/in/michail-k-a4b76a318/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-fit text-sm text-white/58 transition-colors hover:text-white/82 md:ml-auto"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-4 md:flex-row md:items-center md:justify-end">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/38">
            Website by
          </span>
          <a
            href="https://bisolutions.group/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-white/72 transition-colors hover:border-white/18 hover:text-white md:self-auto"
            aria-label="Visit BI Solutions Group"
          >
            <img
              src={`${basePath}/bi-solutions-transparent.png`}
              alt=""
              aria-hidden="true"
              className="h-4 w-6 object-contain opacity-90"
            />
            <span className="text-sm font-medium tracking-tight">BI Solutions Group</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
