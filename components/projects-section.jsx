import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="section-frame rounded-[2.25rem] px-6 py-10 md:px-10 md:py-12">
          <Reveal>
            <p className="eyebrow accent-dot">Portfolio</p>
            <h2 className="mt-5 font-display text-4xl tracking-[-0.04em] text-foreground md:text-5xl">
              Selected systems and delivery work.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <article className="group">
                  <div className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white p-3 shadow-[0_18px_45px_rgba(18,18,18,0.06)]">
                    <ProjectVisual variant={index} />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-medium text-foreground">
                        {project.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {project.summary}
                      </p>
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="soft-pill flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:-translate-y-1 hover:border-black/20"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-black/10 ink-surface px-8 py-12 md:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/55">Consulting / Leadership</p>
            <h3 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white md:text-5xl">
              Need a cleaner decision layer, not more dashboard noise?
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              Advisory support across analytics engineering, KPI design, reporting
              transformation, stakeholder alignment, and operating model cleanup.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm text-foreground hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
