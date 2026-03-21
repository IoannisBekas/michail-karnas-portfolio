import { Reveal } from "@/components/reveal";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-accent/90">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
      </Reveal>
    </div>
  );
}
