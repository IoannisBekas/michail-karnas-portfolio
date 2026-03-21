import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { getProjectSummaries } from "@/lib/mdx";

export default async function HomePage() {
  const projects = await getProjectSummaries();

  return (
    <div className="relative overflow-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
