export const TechStackSection = () => {
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
        "Typescript",
        "Android",
        "iOS",
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
        "MariaDB",
        "PostgreSQL",
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
      title: "Technical Support & IT",
      skills: [
        "On-Site Technical Support",
        "Helpdesk",
        "Networking",
        "Technical Documentation",
        "IT Troubleshooting",
        "Remote Desktop",
        "Software Installation & Configuration",
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

  return (
    <section
      id="techstack"
      className="py-24 px-3 md:px-10 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Capabilities & Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
            Stack &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 italic">
              Skills
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            Technologies and systems I build with in development, networking, and technical support.
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
    </section>
  );
};
