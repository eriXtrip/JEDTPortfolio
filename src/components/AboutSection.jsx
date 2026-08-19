import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Download,
  Code,
  Wrench,
  Palette,
  Eye,
  X,
  ChevronDown,
  Check,
  GraduationCap
} from "lucide-react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [cvOpen, setCvOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const tabs = [
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
  const ActiveIcon = tabs.find((tab) => tab.id === activeTab)?.icon;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkflowOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectWorkflow = (tabId) => {
    setActiveTab(tabId);
    setWorkflowOpen(false);
  };

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 relative"
    >
      <div className="container max-w-7xl mx-auto px-0 space-y-16">
        {/* Section Header & Ultra-Modern Workflow Switcher Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div className="space-y-4 max-w-2xl text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
              How I {" "}
              <span className="font-black text-indigo-600 dark:text-indigo-400 italic">
                Solve Problems
              </span>
            </h2>
          </div>

          {/* Workflow Switcher — Custom Dropdown */}
          <div
            ref={dropdownRef}
            className="relative z-20 w-full lg:w-auto self-start lg:self-end"
          >
            <button
              onClick={() => setWorkflowOpen((open) => !open)}
              className={cn(
                "inline-flex items-center justify-between gap-6 min-w-[200px] w-full lg:w-auto px-5 py-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer shadow-sm border",
                workflowOpen
                  ? "bg-white dark:bg-neutral-900 border-indigo-500/40 shadow-indigo-500/10 shadow-lg"
                  : "bg-white dark:bg-neutral-900/70 border-neutral-200/80 dark:border-neutral-800 hover:border-indigo-500/40",
              )}
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
                <ActiveIcon
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    workflowOpen
                      ? "text-indigo-500"
                      : "text-indigo-600 dark:text-indigo-400",
                  )}
                />
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-300",
                  workflowOpen && "rotate-180 text-indigo-500",
                )}
              />
            </button>

            {workflowOpen && (
              <div className="absolute right-0 top-full mt-2 w-full min-w-[220px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xl p-1.5">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => selectWorkflow(tab.id)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-white",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0 transition-colors",
                            isActive
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-neutral-400 group-hover:text-indigo-500",
                          )}
                        />
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Main Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Personal Background */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32 text-left">
            <div className="relative rounded-3xl p-6 md:p-8 bg-white/90 dark:bg-neutral-950/40 overflow-hidden">

              <span className="relative inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                Personal Background
              </span>

              <h3 className=" font-black relative text-2xl md:text-3xl text-neutral-900 dark:text-white tracking-tight uppercase">
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
                  Ready to contribute as a Full-Stack Developer or IT Specialist,
                  bringing both modern web engineering skills and
                  practical infrastructure experience to the team.
                </p>
              </div>

              <div className="relative mt-6 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-extrabold text-neutral-900 dark:text-white">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Bicol University Legazpi · 2022-2026
                  </p>
                </div>
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
                className="block absolute inset-0 w-full h-full pointer-events-none stroke-indigo-500/60 dark:stroke-indigo-400/50 fill-none z-0 overflow-visible"
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
                  <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-xl p-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 shadow-xs space-y-1.5 h-full z-0 relative">
                    {/* Left Bar Accent */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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


