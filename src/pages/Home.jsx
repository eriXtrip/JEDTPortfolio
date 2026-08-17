import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
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
import PixelSwap from "../components/PixelSwap";
// import { CombinedHero } from "../components/TestSection";

const getInitialTheme = () =>
  typeof window !== "undefined" && localStorage.getItem("theme") !== "light";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* PixelSwap background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <PixelSwap
          firstContent={<div className="w-full h-full bg-[#f5fffc]" />}
          secondContent={<div className="w-full h-full bg-[#000a07]" />}
          active={isDarkMode}
          duration={1400}
          pixelSize={56}
          gap={2}
          pixelRadius={4}
          pattern="random"
          fade
          className="h-full"
          style={{ aspectRatio: "auto" }}
        />
      </div>

      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />

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
        <Footer />
      </main>

    </div>
  );
};