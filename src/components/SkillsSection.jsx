import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";

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
      title: "Frontend Development",
      description:
        "Building fast, interactive, and highly responsive web applications. Expertly written using modern React, semantic HTML5, modular JavaScript/TypeScript, and fluid Tailwind CSS layouts.",
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

  const skillCategories = [
    {
      title: "Web & Mobile Development",
      skills: [
        "React",
        "Laravel",
        "React Native",
        "Node.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "PHP",
        "REST API",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases & Analytics",
      skills: [
        "MySQL",
        "SQLite",
        "Data Migration",
        "CRUD Operations",
        "Database Design",
      ],
    },
    {
      title: "Software Engineering",
      skills: [
        "OOP & MVC",
        "JWT Authentication",
        "Git & GitHub",
        "Version Control",
        "System Deployment",
        "Software Testing",
      ],
    },
    {
      title: "Networking & Infrastructure",
      skills: [
        "Cisco Packet Tracer",
        "TCP/IP",
        "DNS & DHCP",
        "VLAN Configuration",
        "Routing & Switching",
        "Firewall",
        "Network Design",
      ],
    },
    {
      title: "System Administration",
      skills: [
        "Ubuntu Server",
        "VirtualBox",
        "Bash / CLI",
        "User & Permission Mgmt",
        "Server Maintenance",
        "Network Services",
      ],
    },
    {
      title: "Design & Media",
      skills: [
        "Canva",
        "Adobe Photoshop",
        "Video / Audio Editing",
        "Publication Materials",
      ],
    },
  ];

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Bicol University College of Science (BUCS-MCC)",
      period: "14-Week Internship",
      description:
        "Modernized the department's data infrastructure by transitioning from a legacy Excel system to a full-stack React and Laravel web application. Engineered features including secure specimen request tracking, automated email notifications, and an administrative dashboard.",
    },
    {
      role: "Technical Support Specialist (DESO)",
      company: "COMELEC Legazpi",
      period: "May 2025 (Election Period)",
      bullets: [
        "Provided on-site IT support for election systems and hardware/software troubleshooting",
        "Assisted users with technical issues, ensuring smooth operations",
      ],
    },
    {
      role: "Self-Employed Freelancer",
      company: "Independent Graphic Designer",
      period: "2024 – Present",
      bullets: [
        "Designed publicity materials (pubmats) for various organizations and events",
        "Collaborated with clients to deliver visually appealing content",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10">
        {/* Services Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
            Services & Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            My Expertise
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            Delivering the perfect balance of robust engineering, intuitive
            interfaces, and premium visuals.
          </p>
        </div>

        {/* Stark 4-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-24" />

        {/* Technical Stack Section */}
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Technical Stack
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
              The languages, frameworks, and creative design suites I work with
              daily to build production-ready products.
            </p>
          </div>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-3xl overflow-hidden hover:translate-y-[-6px] hover:shadow-lg transition-all duration-300 group text-left"
              >
                <div className="p-6 md:p-8 space-y-5">
                  <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800/40 rounded-xl text-xs font-bold text-neutral-700 dark:text-neutral-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400/40 dark:hover:border-emerald-400/30 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-24" />

        {/* Work Experience Timeline */}
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
              Chronology
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Work Experience
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
              A comprehensive chronicle of my engineering roles, technical
              support operations, and creative contracts.
            </p>
          </div>

          {/* Timeline Node List */}
          <div className="max-w-4xl mx-auto relative border-l border-neutral-200 dark:border-neutral-800 pl-6 md:pl-10 space-y-12 text-left">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[37px] md:-left-[53px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-750 dark:text-white shadow-xs group-hover:scale-110 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 transition-all duration-300">
                  <Briefcase className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </div>

                {/* Experience Card */}
                <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-[24px] p-6 md:p-8 space-y-4 hover:border-emerald-500/20 dark:hover:border-emerald-450/20 hover:shadow-xs transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-450">
                        {exp.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-neutral-850 border border-neutral-200/30 dark:border-neutral-700/30 rounded-full text-xs font-bold text-neutral-600 dark:text-neutral-400 self-start md:self-center">
                      <Calendar className="h-3.5 w-3.5 text-emerald-500" />
                      {exp.period}
                    </div>
                  </div>

                  {exp.description ? (
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
