import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl section-frame rounded-[2.25rem] px-6 py-8 md:px-10 md:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-muted hover:border-black/20 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="mt-10 border-b border-black/8 pb-8">
          <p className="eyebrow">
            Case Study
          </p>
          <h1 className="mt-4 font-display text-4xl text-foreground md:text-6xl">
            {frontmatter.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {frontmatter.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="soft-pill rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-muted">
            <span>{frontmatter.period}</span>
            <span>{frontmatter.company}</span>
            {frontmatter.liveUrl && frontmatter.liveUrl !== "#" && (
              <Link
                href={frontmatter.liveUrl}
                className="inline-flex items-center gap-2 text-foreground hover:text-accent"
              >
                Live demo <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </header>

        <article className="prose mt-12 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted prose-a:text-accent prose-strong:text-foreground prose-code:font-mono prose-code:text-accent prose-pre:rounded-3xl prose-pre:border prose-pre:border-black/10 prose-pre:bg-white prose-blockquote:border-accent/30 prose-blockquote:text-foreground">
          {content}
        </article>
      </div>
    </main>
  );
}
