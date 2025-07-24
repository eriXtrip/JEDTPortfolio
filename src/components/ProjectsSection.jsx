import { ArrowRight, Github } from "lucide-react";

// Import your project images from assets
import EcoLocalImg from "../assets/works/EcoLocalE-commerce.png";
import MQuestImg from "../assets/works/MQuest E-learning.png";
import OroSiteTeachersPortalImg from "../assets/works/OroSiteTeachersPortal.png";
import RentalManagementSystemImg from "../assets/works/RentalManagmentSystem.png";

const projects = [
  {
    id: 1,
    title: "EcoLocal E-commerce",
    description:
      "A full-featured e-commerce platform for local products, supporting user authentication, product management, and secure checkout. Uses MySQL as the database.",
    image: EcoLocalImg,
    tags: [
      { name: "PHP", percent: 46.6, color: "#4F5D95" },
      { name: "HTML", percent: 28.3, color: "#e34c26" },
      { name: "CSS", percent: 15.1, color: "#264de4" },
      { name: "TypeScript", percent: 5.1, color: "#3178c6" },
      { name: "Python", percent: 2.5, color: "#3572A5" },
      { name: "Hack", percent: 2.0, color: "#878787" },
      { name: "JavaScript", percent: 0.4, color: "#f1e05a" },
    ],
    githubUrl: "#", // Replace with your repo if public
    database: "MySQL",
  },
  {
    id: 2,
    title: "MQuest E-learning",
    description:
      "A mobile-first e-learning application built with React Native and Node.js, supporting interactive lessons and quizzes. Uses SQLite and MySQL for data storage.",
    image: MQuestImg,
    tags: [
      { name: "JavaScript", percent: 97.9, color: "#f1e05a" },
      { name: "Kotlin", percent: 2.1, color: "#A97BFF" },
    ],
    githubUrl: "#", // Replace with your repo if public
    database: "SQLite, MySQL",
  },
  {
    id: 3,
    title: "OroSite Teachers Portal",
    description:
      "A web portal for teachers to manage classes, assignments, and communication. Built with HTML, CSS, Bootstrap, PHP, JavaScript, and MySQL.",
    image: OroSiteTeachersPortalImg,
    tags: [
      { name: "HTML", percent: 30, color: "#e34c26" },
      { name: "CSS", percent: 20, color: "#264de4" },
      { name: "Bootstrap", percent: 20, color: "#7952b3" },
      { name: "PHP", percent: 20, color: "#4F5D95" },
      { name: "JavaScript", percent: 5, color: "#f1e05a" },
      { name: "MySQL", percent: 5, color: "#00758F" },
    ],
    githubUrl: "#", // Replace with your repo if public
    database: "MySQL",
  },
  {
    id: 4,
    title: "Rental Management System",
    description:
      "A desktop application for managing rental business operations, built with C# and MySQL. Packaged as an executable with Inno Setup.",
    image: RentalManagementSystemImg,
    tags: [
      { name: "C#", percent: 80, color: "#178600" },
      { name: "MySQL", percent: 15, color: "#00758F" },
      { name: "Inno Setup", percent: 5, color: "#264de4" },
    ],
    githubUrl: "#", // Replace with your repo if public
    database: "MySQL",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="works" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Works</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my real-world projects, each crafted with a focus on usability, performance, and modern technology stacks.
        </p>

        <div className="flex flex-col gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col md:flex-row items-stretch"
            >
              {/* Image on the left */}
              <div className="md:w-1/2 w-full h-72 md:h-auto flex-shrink-0 overflow-hidden flex items-center justify-center bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: "350px" }}
                />
              </div>

              {/* Description on the right */}
              <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-base mb-6">
                    {project.description}
                  </p>
                  {project.database && (
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong>Database:</strong> {project.database}
                    </p>
                  )}
                </div>
                {/* GitHub-style language bar */}
                <div className="mb-2">
                  <div className="flex h-4 w-full rounded overflow-hidden mb-2 border border-secondary">
                    {project.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: `${tag.percent}%`,
                          backgroundColor: tag.color,
                        }}
                        title={`${tag.name}: ${tag.percent}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        style={{
                          borderColor: tag.color,
                        }}
                      >
                        <span
                          className="inline-block w-3 h-3 rounded-full"
                          style={{ backgroundColor: tag.color }}
                        />
                        {tag.name} <span className="ml-1 text-[10px] text-muted-foreground">({tag.percent}%)</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/eriXtrip"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};