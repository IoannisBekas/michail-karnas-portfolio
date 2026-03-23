import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { photoPortfolio } from "@/lib/site-data";

const fallbackFrames = [
  { id: "frame-01", size: "landscape", tone: "from-[#f3ede4] via-[#fbf7f1] to-[#e8ddd0]" },
  { id: "frame-02", size: "story", tone: "from-[#efe8df] via-[#faf6f0] to-[#e4d8ca]" },
  { id: "frame-03", size: "poster", tone: "from-[#f5efe8] via-[#fcfaf6] to-[#ebe1d5]" },
  { id: "frame-04", size: "landscape", tone: "from-[#ede5da] via-[#f8f4ed] to-[#e2d7ca]" },
  { id: "frame-05", size: "portrait", tone: "from-[#f2ece3] via-[#fbf8f3] to-[#e7ddcf]" }
];

const frameClasses = {
  landscape: {
    width: "w-[360px] md:w-[540px]",
    aspect: "aspect-[16/10]"
  },
  portrait: {
    width: "w-[250px] md:w-[360px]",
    aspect: "aspect-[4/5]"
  },
  poster: {
    width: "w-[270px] md:w-[380px]",
    aspect: "aspect-[3/4]"
  },
  story: {
    width: "w-[220px] md:w-[300px]",
    aspect: "aspect-[9/16]"
  },
  square: {
    width: "w-[250px] md:w-[360px]",
    aspect: "aspect-square"
  }
};

function resolvePhotoSrc(basePath, src) {
  if (!src) {
    return "";
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return `${basePath}${src}`;
}

function getFrameLayout(size) {
  return frameClasses[size] || frameClasses.portrait;
}

export function PhotoPortfolioSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const tableauPortfolioUrl = "https://public.tableau.com/app/profile/michail.karnas/vizzes";
  const hasPhotos = photoPortfolio.length > 0;
  const frames = hasPhotos ? photoPortfolio : fallbackFrames;

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 px-4 pb-16 pt-4 md:scroll-mt-36 md:px-8 md:pb-24 md:pt-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="section-frame overflow-hidden rounded-[2.25rem] px-6 py-8 md:px-10 md:py-10">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="eyebrow accent-dot">Photo Portfolio</p>
                <h2 className="mt-5 max-w-md font-display text-4xl tracking-[-0.04em] text-foreground md:text-5xl">
                  {hasPhotos
                    ? "A rotating wall of visual storytelling work."
                    : "A moving wall reserved for visual work."}
                </h2>
              </div>

              <div className="flex max-w-2xl flex-col gap-5">
                <p className="text-base leading-8 text-muted">
                  {hasPhotos
                    ? "Infographics, editorial layouts, and mixed-format visual pieces rotate from left to right in one continuous strip."
                    : "The rail is in place and rotates automatically from left to right. It also supports mixed aspect ratios, so portrait, landscape, and tall infographic pieces can sit in the same rotating strip."}
                </p>

                {hasPhotos ? (
                  <a
                    href={tableauPortfolioUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black bg-foreground px-5 py-3 text-sm text-background transition-transform hover:scale-[1.02]"
                  >
                    View Full Tableau Portfolio
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative mt-7 md:mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background via-background/70 to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background via-background/70 to-transparent md:w-24" />

            <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-[rgba(255,252,248,0.72)] px-4 py-5 md:px-6 md:py-6">
              <div className="photo-marquee">
                {[0, 1].map((copyIndex) => (
                  <div
                    key={`track-${copyIndex}`}
                    className="photo-marquee-track"
                    aria-hidden={copyIndex === 1}
                  >
                    {frames.map((item, index) => {
                      const photoSrc = resolvePhotoSrc(basePath, item.src);
                      const layout = getFrameLayout(item.size);
                      const fitClass = item.fit === "cover" ? "object-cover" : "object-contain";
                      const card = (
                        <div className="rounded-[1.9rem] border border-black/8 bg-white/80 p-3 shadow-[0_18px_42px_rgba(18,18,18,0.06)] transition-transform hover:-translate-y-1">
                          <div
                            className={`relative ${layout.aspect} overflow-hidden rounded-[1.45rem] border border-white/70 bg-gradient-to-br ${item.tone || "from-[#f1ece4] via-[#faf7f1] to-[#e7ddcf]"}`}
                          >
                            {photoSrc ? (
                              <img
                                src={photoSrc}
                                alt={item.alt || ""}
                                className={`h-full w-full bg-[#f6f1ea] p-2 ${fitClass}`}
                              />
                            ) : (
                              <>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_35%),linear-gradient(180deg,transparent,rgba(24,24,24,0.03))]" />
                                <div className="absolute inset-5 rounded-[1.1rem] border border-black/[0.06] border-dashed" />
                              </>
                            )}
                          </div>
                        </div>
                      );

                      return (
                        <article
                          key={`${item.id || item.src || index}-${copyIndex}`}
                          className={`${layout.width} shrink-0`}
                        >
                          {hasPhotos ? (
                            <a
                              href={tableauPortfolioUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open Tableau portfolio from ${item.alt || "portfolio preview"}`}
                              tabIndex={copyIndex === 1 ? -1 : 0}
                              className="block"
                            >
                              {card}
                            </a>
                          ) : (
                            card
                          )}
                        </article>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
