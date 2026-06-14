import { ArrowUpRight } from "lucide-react";

export const AboutSection = () => {
  const steps = [
    {
      number: "Step 1",
      title: "Research & Discovery",
      description:
        "Understanding project constraints, target audience expectations, and technical goals to build a reliable strategic blueprint.",
    },
    {
      number: "Step 2",
      title: "Architecture & Wireframing",
      description:
        "Drafting responsive layouts, content structure, and sleek user journeys using minimalist highfidelity mockups before diving into code.",
    },
    {
      number: "Step 3",
      title: "Backend & Business Logic",
      description:
        "Understanding backend systems and seamlessly integrating business rules to ensure robust, secure, and scalable data flows.",
    },
    {
      number: "Step 4",
      title: "Pixel-Perfect Development",
      description:
        "Writing clean, semantic, and highly performant code with React and Tailwind CSS, prioritizing modularity and page speed.",
    },
    {
      number: "Step 5",
      title: "Testing & Deployment",
      description:
        "Validating visual design integrity, responsive behavior, and accessibility across diverse devices and screens before going live.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading and Background Summary */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                My Framework
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                About My <br />
                <span className="text-neutral-500 dark:text-neutral-400">
                  Creative Process
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
              <p>
                I am an IT undergraduate specializing in Full Stack Development
                and Graphic Design. My focus lies at the intersection of
                technical engineering and visual aesthetic—building fast,
                scalable, and responsive web systems that are a joy to use.
              </p>

              <p>
                Whether building responsive layouts or designing intuitive
                interfaces, I prioritize user-first interaction and seamless UX,
                combining a systematic analytical approach with a sharp, modern
                eye for clean typography and accessible design.
              </p>
            </div>

            <div className="flex flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button whitespace-nowrap">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/uc?id=1CF_F642k5VVjtOxvY5Czd75YxhE5bota&export=download"
                className="outline-button whitespace-nowrap"
              >
                Download CV <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Timeline / Stepper Process */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative pl-6 md:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group text-left">
                  {/* Circle dot on the border */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white transition-all duration-300 group-hover:scale-125" />

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-neutral-500 dark:group-hover:text-neutral-400">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
