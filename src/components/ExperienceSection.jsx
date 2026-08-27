import { BriefcaseBusiness, Calendar } from "lucide-react";
import buLogo from "../assets/bicol-university-logo.svg";
import comelecLogo from "../assets/COMELEC.svg";
import selfEmployedLogo from "../assets/self-employed.svg";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const experiences = [
    {
      logo: buLogo,
      role: "Full-Stack Developer Intern",
      company: "Bicol University College of Science (BUCS-MCC)",
      period: "14-Week Internship",
      bullets: [
        "Developed and deployed a React-Laravel web application that automated specimen management workflows and centralized laboratory records, reducing specimen processing.",
        "Collaborated with faculty and project stakeholders to gather requirements, perform testing, and deliver production-ready system enhancements.",
        "Communicated complex technical solutions and conducted system walkthroughs for non-technical stakeholders.",
      ],
    },
    {
      logo: comelecLogo,
      role: "Technical Support Specialist (DESO)",
      company: "COMELEC Legazpi",
      period: "May 2025 (Election Period)",
      bullets: [
        "Provided on-site IT support for election systems across 5 voting precincts, serving 15+ election personnel and 1,000+ voters.",
        "Set up and configured Automatic Counting Machines (ACMs), preparing batteries and connecting them to all ACMs.",
        "Managed election-day connectivity using Starlink and a local internet provider USB SIM card, ensuring uninterrupted data transmission.",
        "Assisted users with technical issues, ensuring smooth operations",
      ],
    },
    {
      logo: selfEmployedLogo,
      role: "Freelance Graphic Designer",
      company: "Self-Employed",
      period: "2024 – Present",
      bullets: [
        "Designed publicity materials (pubmats) for 30+ clients, including barangay events, Oro Site High School teacher materials, individual requests, and national organizations such as Project Layag from UPLB.",
        "Collaborated with clients to deliver visually appealing content",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-3 md:px-10 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            My{" "}
            <span className="font-black text-[#ffc01d]">
              Experience
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            A history of my engineering, technical support, and creative roles.
          </p>
        </div>

        {/* Timeline Node List */}
        <div className="max-w-4xl mx-auto relative space-y-12 text-left">
          {/* Straight Flow Connector Line */}
          <svg
            className="absolute left-1 top-0 h-full w-8 pointer-events-none stroke-[#ffc01d]/60 fill-none z-0"
            viewBox="0 0 32 100"
            preserveAspectRatio="none"
            style={{ strokeDasharray: "3 3" }}
          >
            <path d="M 16,0 L 16,100" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative group pl-11 md:pl-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
            >
              {/* Timeline node icon */}
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-xs overflow-hidden group-hover:scale-110 group-hover:border-[#ffc01d] transition-all duration-300">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-full w-full object-contain p-1.5 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-[24px] p-6 md:p-8 space-y-4 hover:border-[#ffc01d]/30 hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-450">
                      {exp.company} {" | "} {exp.period}
                    </p>
                  </div>
                </div>

                {exp.bullets ? (
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc01d] mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
