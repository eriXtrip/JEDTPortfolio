import { useState } from "react";
import { Download, Code, Wrench, Palette, Eye, X } from "lucide-react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [cvOpen, setCvOpen] = useState(false);

  const devSteps = [
    {
      number: "Step 1",
      title: "Research & Discovery",
      description:
        "Before touching code, I talk with the people who'll actually use the system. During the BUCS-MCC internship, sitting down with lab staff and watching how they logged specimen records by hand is what shaped the whole build.",
    },
    {
      number: "Step 2",
      title: "Architecture & Wireframing",
      description:
        "I draw the layout on paper first to get the structure down fast. Once it feels right, I move straight into a high-fidelity prototype and let the code act as the main wireframe — skipping throwaway mockups and cutting the back-and-forth time.",
    },
    {
      number: "Step 3",
      title: "Backend & Business Logic",
      description:
        "I build the backend around the data the app actually has to insert and display. I start by listing the major data that has to exist in the database, then use the front end to group related fields visually — and those groupings become the tables.",
    },
    {
      number: "Step 4",
      title: "Pixel-Perfect Development",
      description:
        "I build React and Tailwind components to match the design, wire them to the API, then test on real devices — a layout that looks fine on desktop can fall apart on a phone. From here I keep polishing the logic and improving the flow.",
    },
    {
      number: "Step 5",
      title: "Testing & Deployment",
      description:
        "Before going live, I walk through the core user paths myself, check responsiveness and accessibility, then deploy and keep an eye on the logs for the first few days.",
    },
  ];

  const designSteps = [
    {
      number: "Step 1",
      title: "Briefing & Requirements Gathering",
      description:
        "I start by asking what the design is for and who it's speaking to, so I'm not guessing at the brief before I even open Photoshop or Figma.",
    },
    {
      number: "Step 2",
      title: "Inspiration & Moodboard Research",
      description:
        "I pull references from Behance and Dribbble to see what's already working in that space, then filter it down to what actually fits the brand instead of copying trends.",
    },
    {
      number: "Step 3",
      title: "Concept Sketching & Composition",
      description:
        "I rough out compositions first, playing with focal points, hierarchy, and placement before committing to a direction — it's cheaper to throw away a sketch than a finished piece.",
    },
    {
      number: "Step 4",
      title: "Refinement & Asset Generation",
      description:
        "I tighten color harmony, typography contrast, and spacing until the piece holds up at both small and large sizes, then clean up the vectors and export-ready assets.",
    },
    {
      number: "Step 5",
      title: "Client Feedback & Final Delivery",
      description:
        "I present the concept, take the revision notes without taking them personally, and export high-resolution assets in the right formats for print or web.",
    },
  ];

  const supportSteps = [
    {
      number: "Step 1",
      title: "Inquiry & Initial Assessment",
      description:
        "I listen to how the user describes the problem first, including what they've already tried — half of support is getting the full picture before touching anything.",
    },
    {
      number: "Step 2",
      title: "Technical Diagnosis",
      description:
        "I work through system logs and error messages to figure out whether it's a hardware or software fault, instead of firing off fixes at random.",
    },
    {
      number: "Step 3",
      title: "Resolution & Escalation",
      description:
        "I handle repairs, configs, and re-installs on the spot, and escalate fast when the issue is beyond my scope so the user isn't left waiting around.",
    },
    {
      number: "Step 4",
      title: "User Communication & Support",
      description:
        "I explain the cause and the fix in plain language, share tips to stop it happening again, and make sure they know they're not being left hanging.",
    },
    {
      number: "Step 5",
      title: "Documentation & Knowledge Base",
      description:
        "I log the full resolution in the ticketing system, so the next person who hits the same issue doesn't have to rediscover the fix from scratch.",
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
      <div className="container max-w-7xl mx-auto px-0 space-y-16">
        {/* Section Header & Ultra-Modern Workflow Switcher Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Methodologies & Workflows
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
              How I {" "}
              <span className="font-black text-emerald-600 dark:text-emerald-400 italic">
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
                  id: "support",
                  label: "Tech Support",
                  shortLabel: "Support",
                  count: "05 Steps",
                  icon: Wrench,
                },
                {
                  id: "design",
                  label: "Graphic Design",
                  shortLabel: "Design",
                  count: "05 Steps",
                  icon: Palette,
                },

              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative inline-flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer flex-1 sm:flex-initial ${isActive
                      ? "bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                      }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-emerald-400" : "text-neutral-400 group-hover:text-emerald-500"
                        }`}
                    />
                    <span className="hidden md:inline">{tab.label}</span>
                    <span className="md:hidden">{tab.shortLabel}</span>
                    <span
                      className={`hidden lg:inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${isActive
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
            <div className="relative rounded-3xl p-6 md:p-8 bg-linear-to-br from-neutral-100/80 via-emerald-50/50 to-white/40 dark:from-neutral-900/80 dark:via-emerald-950/20 dark:to-neutral-950/40 overflow-hidden">
              {/* Decorative gradient glows */}
              <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald-300/25 dark:bg-emerald-300/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-12 h-52 w-52 rounded-full bg-green-400/20 dark:bg-green-500/10 blur-3xl pointer-events-none" />
              <div className="absolute top-6 right-8 w-16 h-16 border border-emerald-300/40 dark:border-emerald-500/20 rotate-12 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-8 left-6 w-3 h-3 rounded-full bg-emerald-300/70 dark:bg-emerald-500/40 animate-pulse pointer-events-none" />

              <span className="relative inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Personal Background
              </span>

              <h3 className=" font-black relative mt-4 text-2xl md:text-3xl text-neutral-900 dark:text-white tracking-tight uppercase">
                Career Profile
              </h3>

              <div className="relative mt-5 space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm md:text-base">
                <p>
                  IT graduate with hands-on experience in full-stack development,
                  technical support, networking, and Linux system administration.
                  Experienced in React, Laravel, MySQL, TCP/IP networking, and
                  troubleshooting through internship, academic projects, and field
                  support roles.
                </p>

                <p>
                  Seeking an entry-level Software Development and Full-Stack
                  position where I can apply my technical skills and
                  problem-solving mindset to deliver impactful solutions — with
                  hands-on IT support, networking, and systems administration
                  as a strong secondary foundation.
                </p>
              </div>

              <div className="relative flex flex-row flex-nowrap items-center gap-2 sm:gap-4 pt-6 mt-2 w-full">
                <a href="#contact" className="cosmic-button whitespace-nowrap text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 flex-1 text-center justify-center">
                  Get In Touch
                </a>
                <button
                  onClick={() => setCvOpen(true)}
                  className="outline-button whitespace-nowrap text-xs sm:text-sm px-3 sm:px-6 py-2.5 sm:py-3 flex-1 text-center justify-center inline-flex items-center gap-1.5 cursor-pointer"
                >
                  View CV <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Workflow Cards */}
          <div className="lg:col-span-7 space-y-6">

            <div className="relative lg:pl-0 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10 lg:gap-y-14">
              {/* Desktop S-Curve Flow Connector Line */}
              <svg
                className="block absolute inset-0 w-full h-full pointer-events-none stroke-emerald-500/60 dark:stroke-emerald-400/50 fill-none z-0 overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ strokeDasharray: "3 3" }}
              >
                <path
                  d="M 25,6 C 75,6 75,28 75,28 C 75,48 25,48 25,52 C 25,72 75,72 75,76 C 75,90 50,90 50,94"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {currentSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`relative group text-left ${idx % 2 === 1 ? "lg:translate-y-12" : ""
                    } ${idx === currentSteps.length - 1 && currentSteps.length % 2 !== 0 ? "lg:col-span-2 lg:max-w-md lg:mx-auto lg:w-full lg:translate-y-6" : ""}`}
                >

                  {/* Compact Card Body */}
                  <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-xl p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 shadow-xs space-y-1.5 h-full z-0 relative">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40 rounded-md">
                      {step.number}
                    </span>
                    <h3 className="text-base md:text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-xs md:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal (in-page, no new tab) */}
      {cvOpen && (
        <div className="fixed inset-0 z-50">
          <iframe
            src="https://drive.google.com/file/d/1nRWuFgGzzmHxZDKoLaMx3yk2Bmt26C1t/preview"
            title="Resume Preview"
            className="w-full h-full border-0 bg-transparent"
            allow="autoplay"
          />
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <a
              href="https://drive.google.com/uc?id=1nRWuFgGzzmHxZDKoLaMx3yk2Bmt26C1t&export=download"
              className="inline-flex items-center justify-center gap-1.5 h-10 w-10 sm:w-auto sm:px-4 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors text-sm font-semibold"
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download CV</span>
            </a>
            <button
              onClick={() => setCvOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-200 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};


