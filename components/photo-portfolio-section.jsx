import { Reveal } from "@/components/reveal";
import { photoPortfolio } from "@/lib/site-data";

const fallbackFrames = [
  { id: "frame-01", tone: "from-[#f3ede4] via-[#fbf7f1] to-[#e8ddd0]" },
  { id: "frame-02", tone: "from-[#efe8df] via-[#faf6f0] to-[#e4d8ca]" },
  { id: "frame-03", tone: "from-[#f5efe8] via-[#fcfaf6] to-[#ebe1d5]" },
  { id: "frame-04", tone: "from-[#ede5da] via-[#f8f4ed] to-[#e2d7ca]" },
  { id: "frame-05", tone: "from-[#f2ece3] via-[#fbf8f3] to-[#e7ddcf]" }
];

function resolvePhotoSrc(basePath, src) {
  if (!src) {
    return "";
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return `${basePath}${src}`;
}

export function PhotoPortfolioSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const frames = photoPortfolio.length ? photoPortfolio : fallbackFrames;

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 px-4 py-16 md:scroll-mt-36 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="section-frame overflow-hidden rounded-[2.25rem] px-6 py-10 md:px-10 md:py-12">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="eyebrow accent-dot">Photo Portfolio</p>
                <h2 className="mt-5 max-w-md font-display text-4xl tracking-[-0.04em] text-foreground md:text-5xl">
                  A moving wall reserved for visual work.
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-muted">
                The rail is in place and rotates automatically from left to right.
                When photos are ready, drop them into the shared portfolio array and
                this section will render them without changing the layout.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative mt-10 md:mt-12">
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

                      return (
                        <article
                          key={`${item.id || item.src || index}-${copyIndex}`}
                          className="w-[220px] shrink-0 md:w-[300px]"
                        >
                          <div className="rounded-[1.9rem] border border-black/8 bg-white/80 p-3 shadow-[0_18px_42px_rgba(18,18,18,0.06)]">
                            <div
                              className={`relative aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-white/70 bg-gradient-to-br ${item.tone || "from-[#f1ece4] via-[#faf7f1] to-[#e7ddcf]"}`}
                            >
                              {photoSrc ? (
                                <img
                                  src={photoSrc}
                                  alt={item.alt || ""}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_35%),linear-gradient(180deg,transparent,rgba(24,24,24,0.03))]" />
                                  <div className="absolute inset-5 rounded-[1.1rem] border border-black/[0.06] border-dashed" />
                                </>
                              )}
                            </div>
                          </div>
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
