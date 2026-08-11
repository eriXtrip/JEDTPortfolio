import { ArrowUpRight } from "lucide-react";
import { GlareHover } from "@/components/ui/glare-hover"

export const SkillsSection = () => {
  const services = [
    {
      number: "01",
      title: "Full-Stack & Mobile Dev",
      description:
        "Architecting robust, end-to-end web systems and cross-platform mobile apps. Proficient in engineering secure backends with Node.js and Laravel, designing databases with MySQL, and crafting fluid layouts with React Native and Tailwind CSS.",
      isInverted: true,
    },
    {
      number: "02",
      title: "IT Support & Systems",
      description:
        "Providing technical support, hardware/software diagnostics, system maintenance, and remote assistance. Experienced in network setup, troubleshooting, and user support.",
      isInverted: false,
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Designing user-centered structures, interactive wireframes, and prototypes in Figma. Emphasizing typography contrast, fluid grid layouts, and meticulous responsive design.",
      isInverted: false,
    },
    {
      number: "04",
      title: "Graphic & Branding",
      description:
        "Creating premium publication materials (pubmats), vectors, and event banners using Photoshop, Illustrator, and Canva. Focused on harmonic palettes and stark visual storytelling.",
      isInverted: false,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-3 md:px-10 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10">
        {/* Services Header */}
        <div className="mb-12 md:mb-16">
          {/* Pre-title tag matching Works section */}
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            SERVICES & EXPERTISE
          </span>

          {/* Subtitle / Description */}
          <p className="mt-4 max-w-2xl text-base text-neutral-400">
            Delivering the perfect balance of robust engineering, intuitive interfaces, and premium visuals across web, mobile, and technical operations.
          </p>
        </div>

        {/* Stark 4-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <GlareHover
              key={idx}
              background="transparent"
              className={`flex flex-col justify-between p-6 md:p-8 rounded-3xl border text-left transition-all duration-300 hover:translate-y-[-6px] ${service.isInverted
                ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-900 dark:border-neutral-800"
                : "bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-900/60 dark:text-white dark:border-neutral-800"
                }`}
            >
              <div className="space-y-6">
                {/* Top-aligned number */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase ${service.isInverted
                      ? "text-neutral-400"
                      : "text-neutral-400 dark:text-neutral-500"
                      }`}
                  >
                    Service
                  </span>
                  <span
                    className={`text-lg font-bold tracking-tighter ${service.isInverted
                      ? "text-neutral-400"
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
                      ? "text-neutral-350"
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
                    ? "text-white hover:text-neutral-300"
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

