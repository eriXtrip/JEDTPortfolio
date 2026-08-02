import { useState } from "react";
import { ArrowUpRight, Code, Wrench, Palette } from "lucide-react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("development");

  const devSteps = [
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

  const designSteps = [
    {
      number: "Step 1",
      title: "Briefing & Requirements Gathering",
      description:
        "Discussing goals, target audience, dimensions, branding guidelines, and key visual assets required for the project.",
    },
    {
      number: "Step 2",
      title: "Inspiration & Moodboard Research",
      description:
        "Browsing platforms like Pinterest, Behance, and Dribbble to explore typography trends, color palettes, visual themes, and layout ideas.",
    },
    {
      number: "Step 3",
      title: "Concept Sketching & Composition",
      description:
        "Creating rough layout drafts, experimenting with focal points, hierarchy, and element positioning in Photoshop, Illustrator, or Figma.",
    },
    {
      number: "Step 4",
      title: "Refinement & Asset Generation",
      description:
        "Fine-tuning visual assets, color harmony, typography contrast, lighting, and vector graphics to craft high-impact publication materials.",
    },
    {
      number: "Step 5",
      title: "Client Feedback & Final Delivery",
      description:
        "Presenting concepts to the client, incorporating requested revisions, and exporting high-resolution assets in optimal formats for print or web.",
    },
  ];

  const supportSteps = [
    {
      number: "Step 1",
      title: "Inquiry & Initial Assessment",
      description:
        "Actively communicate with the user to identify the exact problem and learn about any initial troubleshooting steps they have already taken.",
    },
    {
      number: "Step 2",
      title: "Technical Diagnosis",
      description:
        "Analyze system behaviors and error diagnostics to determine whether the root cause is hardware or software related.",
    },
    {
      number: "Step 3",
      title: "Resolution & Escalation",
      description:
        "Execute appropriate repair, configuration, or software procedures. If the issue is highly complex, escalate to senior support engineers smoothly.",
    },
    {
      number: "Step 4",
      title: "User Communication & Support",
      description:
        "Explain the cause and fix clearly to the user, offering tips to prevent minor issues, and reassuring them of ongoing engineer availability.",
    },
    {
      number: "Step 5",
      title: "Documentation & Knowledge Base",
      description:
        "Record step-by-step resolution logs in the ticketing/support system to streamline future troubleshooting and team reference.",
    },
  ];

  const getSteps = () => {
    switch (activeTab) {
      case "design":
        return designSteps;
      case "support":
        return supportSteps;
      case "development":
      default:
        return devSteps;
    }
  };

  const currentSteps = getSteps();

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto px-3 md:px-10 space-y-16">
        {/* Section Header & Ultra-Modern Workflow Switcher Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Methodologies & Workflows
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              How I Execute & <br />
              <span className="text-neutral-500 dark:text-neutral-400">
                Solve Problems
              </span>
            </h2>
          </div>

          {/* Segmented Floating Control Switcher (Fully Responsive) */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none self-start lg:self-end">
            <div className="flex items-center gap-1.5 p-1.5 bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xs min-w-max sm:min-w-0">
              {[
                {
                  id: "development",
                  label: "Development",
                  shortLabel: "Dev",
                  count: "05 Steps",
                  icon: Code,
                },
                {
                  id: "design",
                  label: "Graphic Design",
                  shortLabel: "Design",
                  count: "05 Steps",
                  icon: Palette,
                },
                {
                  id: "support",
                  label: "Tech Support",
                  shortLabel: "Support",
                  count: "05 Steps",
                  icon: Wrench,
                },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative inline-flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer flex-1 sm:flex-initial ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white shadow-xs"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-colors ${
                        isActive ? "text-emerald-400" : "text-neutral-400 group-hover:text-emerald-500"
                      }`}
                    />
                    <span className="hidden md:inline">{tab.label}</span>
                    <span className="md:hidden">{tab.shortLabel}</span>
                    <span
                      className={`hidden lg:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Personal Background */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 text-left">
            <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Engineering & Support Mindset
              </h3>

              <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                <p>
                  IT graduate with hands-on experience in full-stack development,
                  technical support, networking, and Linux system administration.
                  Experienced in React, Laravel, MySQL, TCP/IP networking, and
                  troubleshooting through internship, academic projects, and field
                  support roles.
                </p>

                <p>
                  Seeking an entry-level IT Support, Systems Administration,
                  Network Support, or Software Development position where I can
                  apply my technical skills and problem-solving mindset to
                  deliver impactful solutions.
                </p>
              </div>

              <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 pt-2 w-full">
                <a href="#contact" className="cosmic-button whitespace-nowrap text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 flex-1 text-center justify-center">
                  Get In Touch
                </a>
                <a
                  href="https://drive.google.com/uc?id=1nRWuFgGzzmHxZDKoLaMx3yk2Bmt26C1t&export=download"
                  className="outline-button whitespace-nowrap text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 flex-1 text-center justify-center inline-flex items-center gap-1.5"
                >
                  Download CV <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 md:pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-6">
              {currentSteps.map((step, idx) => (
                <div key={idx} className="relative group text-left">
                  {/* Stepper Node Dot */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-4 flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white transition-all duration-300 group-hover:scale-125 group-hover:border-emerald-500 dark:group-hover:border-emerald-400" />

                  {/* Card Body */}
                  <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-2xl p-6 transition-all duration-300 hover:translate-x-1.5 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 shadow-xs space-y-2">
                    <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40 rounded-md">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
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


