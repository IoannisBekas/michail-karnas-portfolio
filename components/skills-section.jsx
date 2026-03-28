import { skills } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 page-gutter py-8 md:scroll-mt-36 md:py-12"
    >
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="section-frame rounded-[2rem] px-6 py-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow accent-dot">Core Stack</p>
              <p className="mt-3 max-w-md text-base leading-7 text-muted">
                A delivery stack shaped by BI enablement, analytics engineering,
                commercial reporting, and KPI governance across product, retail,
                CRM, and fraud.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="soft-pill rounded-full px-4 py-2 text-sm text-foreground hover:-translate-y-0.5 hover:border-black/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
