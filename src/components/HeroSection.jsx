import { ArrowDown, Check, Zap, Sparkles } from "lucide-react";
import profileImg from "../assets/94f63a79-5160-429b-8511-5bd4b2508d10.jpg";
import profileImg2 from "../assets/JUVZ9136.jpg";
import profileImg3 from "../assets/PAU_6201.jpg";

const WireframeMedia = ({ aspectRatio, src, alt = "Jon Eric" }) => {
  return (
    <div
      className={`relative w-full ${aspectRatio} rounded-2xl p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-500 hover:shadow-md hover:translate-y-[-4px]`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center group">
        {/* Minimalist wireframe background overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>

        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale-25 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
          }}
        />
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-25 sm:pb-5 pb-25 px-6 md:px-12 bg-background"
    >
      <div className="container max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Column: Contents */}
          <div className="flex-1 text-left space-y-8 lg:max-w-2xl">
            {/* Tagline */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 animate-fade-in">
              <Sparkles className="h-3 w-3" /> Available For Freelance & Roles
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] animate-fade-in-delay-1">
              Crafting Digital <br />
              <span className="text">Experiences</span> That Elevate Brands
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl animate-fade-in-delay-2">
              Hi, I'm Jon Eric. I build high-performance web applications, clean
              interactive user interfaces, and deliver results-oriented IT
              support fused with premium graphic design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 pt-2 animate-fade-in-delay-3">
              <a
                href="#works"
                className="cosmic-button h-auto whitespace-nowrap"
              >
                View My Work
              </a>
              <a
                href="https://jedtojtthingssss.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button h-auto whitespace-nowrap"
              >
                Read My Blog
              </a>
            </div>

            {/* Bottom Accent: 3 inline pillars */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800/80 animate-fade-in-delay-4">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                  Fast Performance
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                  Clean Code
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
                  Pixel Perfect
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image Staggered Grid Wireframe Graphic */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center animate-fade-in-delay-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full w-full md:max-w-[450px] max-w-[550px]">
              <div className="flex flex-col justify-center h-full">
                <WireframeMedia aspectRatio="aspect-[3/4]" src={profileImg} />
              </div>
              <div className="space-y-4">
                <WireframeMedia aspectRatio="aspect-[3/4]" src={profileImg3} />
                <WireframeMedia aspectRatio="aspect-[3/4]" src={profileImg2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-1">
          <span className="text-xs tracking-widest uppercase font-semibold text-neutral-400 dark:text-neutral-500">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-neutral-400 dark:text-neutral-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
