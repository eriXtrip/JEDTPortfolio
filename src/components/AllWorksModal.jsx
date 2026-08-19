import { Fragment, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Search,
  X,
  ArrowUpRight,
  ChevronDown,
  FileText,
  Layers,
  Cpu,
  Image as ImageIcon,
  Maximize2,
  Play,
  AlertCircle,
  Download,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { categories, projects } from "../data/projectsData";

const badgeClass =
  "inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-300 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200/60 dark:border-indigo-800/40 rounded-full";

const SectionLabel = ({ icon: Icon, children }) => (
  <h4 className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
    <Icon className="h-3.5 w-3.5" />
    {children}
  </h4>
);

SectionLabel.propTypes = {
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

const getVideoEmbed = (url) => {
  const match = url.match(/\/d\/([\w-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
};

const MediaViewer = ({ project, activeIndex, onSelect, onOpenLightbox }) => {
  const media = useMemo(() => {
    const rawVideos = project.videoUrl ?? project.videoUrls ?? [];
    const videoList = Array.isArray(rawVideos) ? rawVideos : [rawVideos];
    return [
      ...(Array.isArray(project.images)
        ? project.images.map((src) => ({ type: "image", src }))
        : []),
      ...videoList
        .filter(Boolean)
        .map((src) => ({ type: "video", src })),
    ];
  }, [project]);

  const active = media[Math.min(activeIndex, media.length - 1)];

  return (
    <div className="space-y-3">
      <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50">
        {active.type === "video" ? (
          active.src.includes("drive.google.com") ? (
            <iframe
              src={getVideoEmbed(active.src)}
              title={`${project.title} demo video`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={active.src}
              controls
              className="w-full h-full object-contain"
            />
          )
        ) : (
          <>
            <img
              src={active.src}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => onOpenLightbox(active.src)}
              className="absolute bottom-2 right-2 p-1.5 bg-neutral-800/70 rounded-full hover:bg-neutral-600 transition-colors cursor-pointer"
              aria-label="View full image"
            >
              <Maximize2 className="h-4 w-4 text-white" />
            </button>
          </>
        )}
      </div>
      {media.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {media.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              className={`relative w-20 aspect-video overflow-hidden border-2 transition-all duration-300 cursor-pointer flex-shrink-0 ${activeIndex === idx
                ? "border-indigo-500 scale-105 shadow-xs dark:border-indigo-400"
                : "border-transparent opacity-50 hover:opacity-100"
                }`}
            >
              {item.type === "video" ? (
                <span className="w-full h-full flex items-center justify-center bg-neutral-900 dark:bg-neutral-800">
                  <Play className="h-6 w-6 text-white" />
                </span>
              ) : (
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

MediaViewer.propTypes = {
  project: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onOpenLightbox: PropTypes.func.isRequired,
};

export const AllWorksModal = ({ open, onClose }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [demoProject, setDemoProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxImage) setLightboxImage(null);
        else if (demoProject) setDemoProject(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, lightboxImage, demoProject]);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setActiveCategory("all");
      setExpandedId(null);
      setActiveImgIndex(0);
      setLightboxImage(null);
      setDemoProject(null);
    }
  }, [open]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        (Array.isArray(project.tech) &&
          project.tech.some((tech) => tech.toLowerCase().includes(query)))
      );
    });
  }, [search, activeCategory]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white flex flex-col" data-lenis-prevent>
      {/* Top Bar */}
      <header className="flex items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 py-3 md:px-8 md:py-4 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Complete Catalogue
          </span>
          <span className="hidden sm:inline text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            ({projects.length} projects)
          </span>
        </div>
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Close archive"
        >
          Close <X className="h-4 w-4" />
        </button>
      </header>

      {/* Controls */}
      <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 md:px-8 py-5 flex-shrink-0 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 dark:text-neutral-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or technology..."
            className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 pl-11 pr-4 py-2.5 rounded-full text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                  : "bg-neutral-100 dark:bg-neutral-900/80 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-4">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-white dark:bg-neutral-950 z-5">
            <tr className="text-left text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              <th className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 pr-4 font-bold">
                Year
              </th>
              <th className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 pr-4 font-bold">
                Project Title
              </th>
              <th className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 pr-4 font-bold">
                Category
              </th>
              <th className="hidden md:table-cell border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 pr-4 font-bold">
                Built With
              </th>
              <th className="border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 font-bold text-right">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredProjects.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="border-b border-neutral-200/60 dark:border-neutral-800/60 py-10 text-center text-neutral-400 dark:text-neutral-500"
                >
                  No projects match your search.
                </td>
              </tr>
            ) : (
              filteredProjects.map((project) => {
                const isExpanded = expandedId === project.id;
                return (
                  <Fragment key={project.id}>
                    <tr className="hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                      <td className="border-b border-neutral-200/60 dark:border-neutral-800/60 py-3 pr-4 text-neutral-500 dark:text-neutral-400">
                        {project.year}
                      </td>
                      <td className="border-b border-neutral-200/60 dark:border-neutral-800/60 py-3 pr-4 font-bold text-neutral-900 dark:text-white">
                        {project.title}
                      </td>
                      <td className="border-b border-neutral-200/60 dark:border-neutral-800/60 py-3 pr-4 text-neutral-500 dark:text-neutral-400">
                        {project.category}
                      </td>
                      <td className="hidden md:table-cell border-b border-neutral-200/60 dark:border-neutral-800/60 py-3 pr-4 text-neutral-600 dark:text-neutral-400">
                        {Array.isArray(project.tech)
                          ? project.tech.slice(0, 3).join(" · ")
                          : "—"}
                      </td>
                      <td className="border-b border-neutral-200/60 dark:border-neutral-800/60 py-3 text-right">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${project.title} details`}
                          className="inline-flex items-center justify-center p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-pointer"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr className="animate-fade-in">
                        <td
                          colSpan={5}
                          className="p-0 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/60 dark:bg-neutral-900/30"
                        >
                          <div className="px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 text-left">
                            {/* Screenshots & Videos */}
                            <div className="lg:col-span-7 space-y-3">
                              <SectionLabel icon={ImageIcon}>
                                Screenshots &amp; Demo Videos
                              </SectionLabel>
                              <MediaViewer
                                project={project}
                                activeIndex={activeImgIndex}
                                onSelect={setActiveImgIndex}
                                onOpenLightbox={setLightboxImage}
                              />
                            </div>
                            {/* Technical Spec */}
                            <div className="lg:col-span-5 space-y-5">
                              <div className="space-y-2">
                                <SectionLabel icon={FileText}>
                                  Overview &amp; Impact
                                </SectionLabel>
                                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                  {project.overview}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <SectionLabel icon={Layers}>
                                  Key Architecture
                                </SectionLabel>
                                <ul className="space-y-2">
                                  {project.architecture.map((item) => (
                                    <li
                                      key={item}
                                      className="flex gap-2.5 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed"
                                    >
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
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
                                      className="font-mono text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-1"
                                    >
                                      <span className="text-zinc-400 dark:text-zinc-600 font-normal">/</span>
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              {project.demoUrl || project.demoModal ? (
                                <div className="space-y-2">
                                  <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
                                    {project.demoModal ? (
                                      <button
                                        onClick={() => setDemoProject(project)}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                                      >
                                        Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                                      </button>
                                    ) : (
                                      <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                      >
                                        Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Demo App Instructions Modal */}
      {demoProject && demoProject.demoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
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

      {/* Fullscreen Image Viewer */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] bg-neutral-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close fullscreen image"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-w-full max-h-full object-contain animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

AllWorksModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
