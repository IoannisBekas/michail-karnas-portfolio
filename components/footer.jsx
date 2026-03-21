import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Footer() {
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

          <Link
            href="mailto:Michail_Karnas@hotmail.com"
            className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl"
          >
            Michail_Karnas@hotmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
