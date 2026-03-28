import { ArrowUpRight, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 page-gutter py-16 md:scroll-mt-36 md:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="section-frame rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow accent-dot">About Me</p>
            <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
              Analytics leadership with an engineering backbone.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-muted">
              Michail Karnas builds analytics systems that convert fragmented data
              into operating clarity. His work spans commercial reporting, product
              measurement, KPI governance, and fraud intelligence.
            </p>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              The emphasis is always the same: make the signal trustworthy, make the
              system usable, and make the output decision-ready.
            </p>
            <div className="mt-10 inline-flex items-center gap-2 text-sm text-foreground">
              See selected systems
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal className="section-frame rounded-[2rem] p-6">
              <p className="eyebrow">Featured Metric</p>
              <div className="mt-8">
                <p className="font-display text-6xl leading-none tracking-[-0.05em]">
                  100+
                </p>
                <p className="mt-5 max-w-xs text-base leading-7 text-muted">
                  Tableau users enabled through implementation, onboarding, and
                  operating standards.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="section-frame rounded-[2rem] p-6">
              <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="eyebrow">Operator Notes</p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Delivery style shaped by systems thinking, stakeholder fluency,
                    and technical rigor.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Built reporting and KPI systems used across five markets.",
                    "Led analytics across CRM, marketing performance, and fraud prevention.",
                    "Designed product measurement frameworks that influenced roadmap decisions."
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-7 text-muted">
                      <CircleCheck className="mt-1 h-4 w-4 text-foreground" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
