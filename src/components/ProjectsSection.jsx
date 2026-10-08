import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  X,
  AlertCircle,
  FileText,
  ExternalLink,
  Download,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
} from "lucide-react";
import { projects } from "../data/projectsData";
import { AllWorksModal } from "./AllWorksModal";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const featuredProjects = projects.filter((project) => project.featured);
const archiveProjects = projects.filter((project) => !project.featured);

const badgeClass =
  "inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#ffc01d]";

const SectionLabel = ({ icon: Icon, children }) => (
  <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#ffc01d]">
    <Icon className="h-3.5 w-3.5" />
    {children}
  </h4>
);

SectionLabel.propTypes = {
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

const getFirstVideoUrl = (project) => {
  if (!project) return null;
  if (Array.isArray(project.videoUrls) && project.videoUrls.length) {
    return project.videoUrls[0];
  }
  if (Array.isArray(project.videoUrl) && project.videoUrl.length) {
    return project.videoUrl[0];
  }
  if (typeof project.videoUrls === "string" && project.videoUrls) {
    return project.videoUrls;
  }
  if (typeof project.videoUrl === "string" && project.videoUrl) {
    return project.videoUrl;
  }
  return null;
};

const FeaturedPreview = ({
  project,
  hoverImage,
  onImageEnter,
  onImageLeave,
}) => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const video = getFirstVideoUrl(project);
  const gif = project.Gif;

  useEffect(() => {
    const el = containerRef.current;
    if (!el || (!video && !gif)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.80 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [video, gif]);

  useEffect(() => {
    if (!inView || !gif) return;
    const showTimer = setTimeout(() => setShowGif(true), 2000);
    return () => clearTimeout(showTimer);
  }, [inView, gif]);

  useEffect(() => {
    if (!showGif || !gif) return;
    const hideTimer = setTimeout(() => setShowGif(false), 30000);
    return () => clearTimeout(hideTimer);
  }, [showGif, gif]);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[260px] lg:min-h-[420px] rounded-[1.5rem] overflow-hidden cursor-pointer"
      onMouseEnter={() => onImageEnter(project)}
      onMouseLeave={onImageLeave}
    >
      {inView && gif && showGif ? (
        <div className="relative w-full h-full overflow-hidden pointer-events-none">
          <img
            key={gif}
            src={gif}
            alt={`${project.title} gif`}
            className="absolute left-0 w-full h-full object-contain border-0 animate-fade-in"
            loading="lazy"
          />
        </div>
      ) : (
        <img
          key={hoverImage?.id === project.id ? hoverImage.src : project.image}
          src={hoverImage?.id === project.id ? hoverImage.src : project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain animate-fade-in"
        />
      )}
      <span className={`absolute top-4 left-4 z-10 ${badgeClass}`}>
        {project.year} · {project.category}
      </span>
    </div>
  );
};

FeaturedPreview.propTypes = {
  project: PropTypes.object.isRequired,
  hoverImage: PropTypes.object,
  onImageEnter: PropTypes.func.isRequired,
  onImageLeave: PropTypes.func.isRequired,
};

export const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [demoProject, setDemoProject] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);

  const openProjectPage = (project) => {
    window.location.hash = `#works/${project.id}`;
  };

  const handleImageEnter = (project) => {
    if (!project.images || project.images.length < 2) return;
    const others = project.images.filter((img) => img !== project.image);
    const random = others[Math.floor(Math.random() * others.length)];
    setHoverImage({ id: project.id, src: random });
  };

  const handleImageLeave = () => setHoverImage(null);

  const renderActionLinks = (project) => (
    <>
      {project.demoModal ? (
        <button
          onClick={() => setDemoProject(project)}
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ffc01d] dark:text-[#ffc01d]-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 cursor-pointer"
        >
          Live Demo
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      ) : project.demoUrl ? (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ffc01d] dark:text-[#ffc01d]-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-300"
        >
          Live Demo
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      ) : null}
      {project.blogUrl ? (
        <a
          href={project.blogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 hover:text-[#ffc01d] dark:hover:text-[#ffc01d]-400 transition-all duration-300"
        >
          Blog
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      ) : null}

      <button
        onClick={() => openProjectPage(project)}
        className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 hover:text-[#ffc01d] dark:hover:text-[#ffc01d]-400 transition-all duration-300 cursor-pointer"
      >
        Full Details
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </>
  );

  return (
    <section
      id="works"
      className="py-24 px-6 md:px-12 relative"
    >
      <div className="container max-w-7xl mx-auto p-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-neutral-200/80 dark:border-neutral-800/80 mb-14">
          <div className="space-y-4 max-w-2xl text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
              Works &amp;{" "}
              <span className="text-transparent bg-clip-text bg-[#ffc01d] underline">
                Archive
              </span>
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Selected software, desktop tools, and web systems built for real-world use.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="cosmic-button whitespace-nowrap"
          >
            Explore Archive ({projects.length})
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </button>
        </div>

        {/* PHASE 2: Spotlight Works — Zero-Click Unfolded Spec */}
        <ScrollStack useWindowScroll>
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <ScrollStackItem
                key={project.id}
                itemClassName="h-full my-0 pt-5 rounded-none shadow-none bg-transparent"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                  {/* Image Preview */}
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <FeaturedPreview
                      project={project}
                      hoverImage={hoverImage}
                      onImageEnter={handleImageEnter}
                      onImageLeave={handleImageLeave}
                    />
                  </div>

                  {/* Technical Spec */}
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="h-full flex flex-col p-6 md:p-8 shadow-xs">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                        {project.subtitle}
                      </p>

                      <div className="mt-6 space-y-5">
                        <div className="space-y-2">
                          <SectionLabel icon={FileText}>
                            Overview
                          </SectionLabel>
                          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {project.overview}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <SectionLabel icon={Layers}>Technical Architecture</SectionLabel>
                          <ul className="space-y-2">
                            {project.architecture.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffc01d] flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <SectionLabel icon={Cpu}>Environment</SectionLabel>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[10px] font-semibold text-[#ffc01d] flex items-center gap-1"
                              >
                                <span className="text-zinc-400 dark:text-zinc-600 font-normal">/</span>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        {renderActionLinks(project)}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

        {/* PHASE 3: Secondary Archive Grid */}
        <div className="mt-20 mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#ffc01d] animate-pulse" />
          <h3 className="text-xs font-bold tracking-widest text-[#ffc01d] dark:text-[#ffc01d]-400 uppercase">
            Secondary Works
          </h3>
          <div className="h-px flex-1 bg-neutral-200/80 dark:bg-neutral-800/80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {archiveProjects.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#ffc01d]/30 dark:hover:border-[#ffc01d]/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-3 left-3 ${badgeClass}`}>
                  {project.year} · {project.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1 text-left space-y-2 bg-white dark:bg-neutral-900/40">
                <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] dark:group-hover:text-[#ffc01d]-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                  {project.subtitle}
                </p>
                <button
                  onClick={() => openProjectPage(project)}
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffc01d] dark:text-[#ffc01d]-400 transition-colors cursor-pointer self-start"
                >
                  View Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Archive Modal Trigger */}
        <div className="relative z-10 mt-12 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="outline-button whitespace-nowrap cursor-pointer"
          >
            Open Complete Archive ({projects.length})
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      {/* Demo App Instructions Modal */}
      {demoProject && demoProject.demoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" data-lenis-prevent>
          <div
            className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs"
            onClick={() => setDemoProject(null)}
          />
          <div className="relative w-full max-w-lg bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 pb-4 flex-shrink-0 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <div className="text-left space-y-2">
                <span className={badgeClass}>
                  {demoProject.demoModal.kind === "app" ? (
                    <>
                      <Smartphone className="h-3.5 w-3.5" /> Demo App
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </>
                  )}
                </span>
                <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white tracking-tight pr-8">
                  {demoProject.title}
                </h2>
              </div>
              <button
                onClick={() => setDemoProject(null)}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close demo instructions"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Instructions */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-5 text-left">
              {/* Instructions */}
              <div className="space-y-2 pt-4">
                <SectionLabel icon={FileText}>Instructions</SectionLabel>
                <ol className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-2">
                  {demoProject.demoModal.instructions.map((instr, idx) => (
                    <li key={idx}>
                      {idx + 1}){" "}
                      {instr.type === "credentials" ? (
                        <>
                          {instr.title}
                          <div className="mt-2 space-y-1 bg-neutral-100 dark:bg-neutral-900/40 p-3 rounded-2xl border border-neutral-200/50 dark:border-neutral-800/55 text-sm">
                            {instr.credentials.map((cred) => (
                              <p key={cred.label}>
                                <span className="font-semibold text-neutral-900 dark:text-white">
                                  {cred.label}:
                                </span>{" "}
                                <span className="text-neutral-600 dark:text-neutral-300">
                                  {cred.value}
                                </span>
                              </p>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          {instr.parts.map((part, j) =>
                            typeof part === "string" ? (
                              <span key={j}>{part}</span>
                            ) : (
                              <span
                                key={j}
                                className="font-semibold text-neutral-900 dark:text-white break-all"
                              >
                                {part.bold}
                              </span>
                            ),
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Notice */}
              <div className="space-y-2 bg-amber-50 dark:bg-amber-950/20 p-5 rounded-2xl border border-amber-100 dark:border-amber-900/40">
                <h3 className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  <AlertCircle className="h-3.5 w-3.5" /> Notice
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-200/90 leading-relaxed">
                  {demoProject.demoModal.notice.intro}
                </p>
                <ul className="text-sm text-amber-700 dark:text-amber-200/90 leading-relaxed list-disc pl-5 space-y-1">
                  {demoProject.demoModal.notice.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-amber-700 dark:text-amber-200/90 leading-relaxed">
                  {demoProject.demoModal.notice.outro}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex-shrink-0 space-y-2">
              <a
                href={demoProject.demoModal.url}
                target={demoProject.demoModal.kind === "web" ? "_blank" : undefined}
                rel={demoProject.demoModal.kind === "web" ? "noopener noreferrer" : undefined}
                className="cosmic-button w-full whitespace-nowrap"
              >
                {demoProject.demoModal.kind === "app" ? (
                  <Download className="h-3.5 w-3.5" />
                ) : (
                  <ExternalLink className="h-3.5 w-3.5" />
                )}{" "}
                {demoProject.demoModal.kind === "app"
                  ? "Download Demo App"
                  : "Open Live Demo"}
              </a>
              <button
                onClick={() => setDemoProject(null)}
                className="outline-button w-full whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Archive Modal */}
      <AllWorksModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
