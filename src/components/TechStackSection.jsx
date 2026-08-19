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
      className="py-24 px-3 md:px-10 relative"
    >
      <div className="container max-w-7xl mx-auto px-2 mid:px-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
            Stack &{" "}
            <span className="text-[#ffc01d] italic">
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
                <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 bg-neutral-100/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-[#ffc01d]/10 hover:text-[#ffc01d] hover:border-[#ffc01d]/40 transition-all duration-200 cursor-default"
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
