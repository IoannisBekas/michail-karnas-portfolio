import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PhotoPortfolioSection } from "@/components/photo-portfolio-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <PhotoPortfolioSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
