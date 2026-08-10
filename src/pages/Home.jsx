import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CertificatesSection } from "../components/CertificateSection";
import { SkillsSection } from "../components/ServiceSection";
import { TechStackSection } from "../components/TechStackSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { PubmatsGallery } from "../components/PubmatsGallery";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CombinedHero } from "../components/TestSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* <CombinedHero /> */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificatesSection />
        <PubmatsGallery />
        <SkillsSection />
        <TechStackSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

