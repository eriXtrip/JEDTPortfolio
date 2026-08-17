import { ArrowUpRight } from "lucide-react";
import { GlareHover } from "@/components/ui/glare-hover"

export const SkillsSection = () => {
  const services = [
    {
      number: "01",
      title: "Full-Stack & Mobile Dev",
      description:
        "E-commerce stores, school enrollment systems, inventory and rental management software, Android e-learning apps. Built with PHP, React Native, C#, and Python, backed by MySQL and SQLite.",
      isInverted: true,
    },
    {
      number: "02",
      title: "IT Support & Systems",
      description:
        "On-site IT support for COMELEC's election systems — hardware and software diagnostics, network setup, server configuration, and remote troubleshooting that keeps operations running.",
      isInverted: false,
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Figma wireframes and interactive prototypes that translate directly into responsive screens. Typography, spacing, and grid layouts refined for every breakpoint.",
      isInverted: false,
    },
    {
      number: "04",
      title: "Graphic & Branding",
      description:
        "Pubmats, vectors, and event banners for organizations and clients. Produced in Photoshop, Illustrator, and Canva and delivered on brand.",
      isInverted: false,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-3 md:px-10 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10">
        {/* Services Header */}
        <div className="mb-12 md:mb-16">
          {/* Pre-title tag matching Works section */}
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            SERVICES & EXPERTISE
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
            What i {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 underline">
              Do
            </span>
          </h2>
        </div>

        {/* Stark 4-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <GlareHover
              key={idx}
              className={`flex flex-col justify-between p-6 md:p-8 rounded-3xl border text-left transition-all duration-300 hover:translate-y-[-6px] ${service.isInverted
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-neutral-200"
                : "bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-900/60 dark:text-white dark:border-neutral-800"
                }`}
            >
              <div className="space-y-6">
                {/* Top-aligned number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${service.isInverted
                      ? "text-neutral-400 dark:text-neutral-500"
                      : "text-neutral-400 dark:text-neutral-500"
                      }`}
                  >
                    Service
                  </span>
                  <span
                    className={`text-lg font-bold tracking-tighter ${service.isInverted
                      ? "text-neutral-400 dark:text-neutral-500"
                      : "text-neutral-400 dark:text-neutral-500"
                      }`}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Service Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-extrabold tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm leading-relaxed ${service.isInverted
                      ? "text-neutral-350 dark:text-neutral-600"
                      : "text-neutral-600 dark:text-neutral-400"
                      }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Icon Link */}
              <div className="pt-6">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${service.isInverted
                    ? "text-white hover:text-neutral-300 dark:text-neutral-900 dark:hover:text-neutral-500"
                    : "text-neutral-900 dark:text-white hover:text-neutral-500"
                    } transition-colors`}
                >
                  Hire Me <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

