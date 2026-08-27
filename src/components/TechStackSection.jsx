import CardLong from "./ui/CardLong";

export const TechStackSection = () => {
  const skillCategories = [
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
      className="py-24 px-0 md:px-10 relative"
    >
      <div className="container max-w-7xl mx-auto px-0 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Header */}
        <div className="lg:col-span-4 space-y-6 text-left px-5">
          <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
            Stack &{" "}
            <span className="text-[#ffc01d] italic block mt-2">
              Skills
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
            Technologies and systems I build with in development, networking, and technical support.
          </p>
        </div>

        {/* Skill Cards Arc */}
        <div className="lg:col-span-8 pt-0">
          <CardLong categories={skillCategories} />
        </div>
      </div>
    </section>
  );
};
