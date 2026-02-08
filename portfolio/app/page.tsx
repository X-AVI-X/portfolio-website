import Navigation from "@/components/navigation";
import TerminalHero from "@/components/terminal-hero";
import SkillsMatrix from "@/components/skills-matrix";
import ExperienceTimeline from "@/components/experience-timeline";
import BentoGrid from "@/components/bento-grid";
import Education from "@/components/education";
import { Contact, Footer } from "@/components/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TerminalHero />
      <SkillsMatrix />
      <ExperienceTimeline />
      <BentoGrid />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
