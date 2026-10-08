import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ChevronLeft,
  ChevronRight,
  X,
  AlertCircle,
  FileText,
  CheckCircle2,
  MonitorCog,
  Target,
  Maximize2,
  ExternalLink,
  Download,
  Smartphone,
  ArrowLeft,
  ArrowUpRight,
  Image as ImageIcon,
  Play,
  Cpu,
  Layers,
} from "lucide-react";
import { projects } from "../data/projectsData";

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

const getEmbedUrl = (url, autoplay = false) => {
  if (!url || typeof url !== "string") return null;
  let embed;
  if (url.includes("/preview")) {
    embed = url;
  } else {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      embed = `https://drive.google.com/file/d/${match[1]}/preview`;
    } else {
      return url;
    }
  }
  const sep = embed.includes("?") ? "&" : "?";
  const params = [];
  if (autoplay) params.push("autoplay=1");
  if (autoplay) params.push("mute=1");
  return params.length ? `${embed}${sep}${params.join("&")}` : embed;
};

const getProjectVideos = (project) => {
  if (Array.isArray(project.videoUrls)) return project.videoUrls;
  if (Array.isArray(project.videoUrl)) return project.videoUrl;
  if (typeof project.videoUrls === "string" && project.videoUrls)
    return [project.videoUrls];
  if (typeof project.videoUrl === "string" && project.videoUrl)
    return [project.videoUrl];
  return [];
};

export const ProjectDetailPage = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [useNativeVideo, setUseNativeVideo] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [demoProject, setDemoProject] = useState(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  const handlePrevImg = () => {
    if (!project?.images?.length) return;
    setActiveImgIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImg = () => {
    if (!project?.images?.length) return;
    setActiveImgIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "";
    setActiveImgIndex(0);
    setActiveVideoIndex(0);
    setUseNativeVideo(true);
  }, [projectId]);

  // Keyboard controls for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (lightboxImage === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowLeft") handlePrevImg();
      if (e.key === "ArrowRight") handleNextImg();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxImage, project]);

  if (!project) {
    return (
      <div className="py-32 px-6 text-center">
        <h1 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
          Project not found
        </h1>
        <button
          onClick={() => {
            window.location.hash = "#works";
          }}
          className="mt-6 outline-button cursor-pointer"
        >
          Back to Works
        </button>
      </div>
    );
  }

  const projectVideos = getProjectVideos(project);
  const hasVideo = projectVideos.length > 0;
  const hasImages = project.images && project.images.length > 0;

  return (
    <section className="py-20 md:py-20 px-4 md:px-8 lg:px-20 lg:py-20">
      <div className="w-full h-full flex flex-col gap-3 xl:gap-4 max-w-[1700px] mx-auto">
        {/* Compact Header Bar */}
        <div className="bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 sm:p-4 xl:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 backdrop-blur-md animate-fade-in">
          {/* Left Section: Back Button + Title + Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 min-w-0">
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  window.location.hash = "#works";
                }}
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-[#ffc01d] transition-colors cursor-pointer pr-3 border-r border-neutral-200 dark:border-neutral-800"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back
              </button>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-base sm:text-lg xl:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight truncate">
                  {project.title}
                </h1>
                <span className={`hidden sm:inline-block ${badgeClass}`}>
                  {project.year} · {project.category}
                </span>
              </div>
              <p className="text-xs xl:text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-200/60 dark:border-neutral-800/60 justify-end">
            {project.blogUrl && (
              <a
                href={project.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 sm:px-3.5 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-[#ffc01d] transition-all"
              >
                Blog <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {project.demoModal ? (
              <button
                onClick={() => setDemoProject(project)}
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3.5 sm:px-4 py-2 rounded-xl bg-[#ffc01d] text-neutral-950 font-bold hover:bg-[#e0a816] transition-all cursor-pointer shadow-xs"
              >
                Live Demo <ArrowUpRight className="h-3 w-3" />
              </button>
            ) : project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3.5 sm:px-4 py-2 rounded-xl bg-[#ffc01d] text-neutral-950 font-bold hover:bg-[#e0a816] transition-all shadow-xs"
              >
                Live Demo <ArrowUpRight className="h-3 w-3" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Viewport-Fitting Main Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-5 gap-3 xl:gap-4 flex-1 min-h-0">

          {/* Main Media Showcase (Video / Main Screenshot) */}
          <div className="lg:col-span-6 lg:row-span-5 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3 xl:p-4 flex flex-col justify-between overflow-hidden animate-fade-in" style={{ animationDelay: "0.05s", animationFillMode: "backwards" }}>
            <div className="flex items-center justify-between mb-2 shrink-0">
              <SectionLabel icon={hasVideo ? Play : ImageIcon}>
                {hasVideo ? "Video Demo" : "Gallery Showcase"}
              </SectionLabel>
              {hasVideo && projectVideos.length > 1 && (
                <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg text-[10px] font-bold">
                  {projectVideos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveVideoIndex(idx);
                        setUseNativeVideo(true);
                      }}
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${activeVideoIndex === idx
                        ? "bg-[#ffc01d] text-neutral-950"
                        : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                        }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {hasVideo ? (
              <div className="w-full h-full min-h-65 bg-black rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 relative">
                {isMobile && useNativeVideo ? (
                  <video
                    key={projectVideos[activeVideoIndex]}
                    src={projectVideos[activeVideoIndex]}
                    className="w-full h-full object-contain bg-black"
                    controls
                    playsInline
                    preload="metadata"
                    onError={() => setUseNativeVideo(false)}
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(projectVideos[activeVideoIndex])}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} Video`}
                  />
                )}
              </div>
            ) : hasImages ? (
              <div className="w-full h-[260px] xl:h-[300px] bg-neutral-950 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 relative group shrink-0">
                <img
                  src={project.images[activeImgIndex]}
                  alt=""
                  className="w-full h-full object-contain"
                />

                {/* Prev & Next Controls for Main Screenshot Showcase */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImg}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-neutral-300 dark:border-neutral-700"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNextImg}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-neutral-300 dark:border-neutral-700"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-white text-xs font-mono rounded-full border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs">
                      {activeImgIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}

                <button
                  onClick={() => setLightboxImage(activeImgIndex)}
                  className="absolute bottom-3 right-3 p-2 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg transition-colors cursor-pointer border border-neutral-300 dark:border-neutral-700"
                  aria-label="Maximize screenshot"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Screenshots Thumbnails / Secondary Gallery */}
          {hasImages && hasVideo && (
            <div className="lg:col-span-3 lg:row-span-3 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3 xl:p-4 flex flex-col justify-between overflow-hidden animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "backwards" }}>
              <div className="flex items-center justify-between shrink-0 mb-2">
                <SectionLabel icon={ImageIcon}>Screenshots</SectionLabel>
                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                  {activeImgIndex + 1}/{project.images.length}
                </span>
              </div>

              {/* Fixed-height image wrapper matching the video/main showcase proportional height */}
              <div className="w-full h-[200px] xl:h-[230px] bg-neutral-950 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 relative group shrink-0">
                <img
                  src={project.images[activeImgIndex]}
                  alt=""
                  className="w-full h-full object-contain"
                />

                {/* Prev & Next Controls for Secondary Gallery Preview */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImg}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-neutral-300 dark:border-neutral-700"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNextImg}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-neutral-300 dark:border-neutral-700"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                <button
                  onClick={() => setLightboxImage(activeImgIndex)}
                  className="absolute bottom-2 right-2 p-1.5 bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white rounded-md cursor-pointer border border-neutral-300 dark:border-neutral-700"
                  aria-label="Maximize image"
                >
                  <Maximize2 className="h-3 w-3" />
                </button>
              </div>

              {/* Thumbnail Bar */}
              {project.images.length > 1 && (
                <div className="flex items-center gap-1.5 overflow-x-auto pt-2 scrollbar-none shrink-0">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`h-9 w-14 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${activeImgIndex === idx
                        ? "border-[#ffc01d] opacity-100 scale-105"
                        : "border-transparent opacity-40 hover:opacity-100"
                        }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={`${hasImages && hasVideo ? "lg:col-span-3 lg:row-span-3" : "lg:col-span-6 lg:row-span-3"} bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 xl:p-4 flex flex-col justify-start overflow-hidden animate-fade-in`} style={{ animationDelay: "0.25s", animationFillMode: "backwards" }}>
            {/* Overview Tile */}
            <SectionLabel icon={FileText}>Overview</SectionLabel>
            <div className="mt-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800">
              <p className="text-xs xl:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.overview}
              </p>
            </div>
            <br />

            {/* Tech Environment Badges */}
            <SectionLabel icon={Cpu}>Environment & Tech Stack</SectionLabel>
            <div className="flex flex-wrap gap-1.5 mt-2 overflow-y-auto scrollbar-none">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-1 py-1 font-mono text-[10px] xl:text-xs font-semibold text-[#ffc01d] flex items-center"
                >
                  <span className="text-zinc-400 dark:text-zinc-600 font-normal">/</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Architecture List */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="lg:col-span-6 lg:row-span-2 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 xl:p-4 flex flex-col justify-start overflow-hidden animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "backwards" }}>
              <SectionLabel icon={Layers}>Key Architecture</SectionLabel>
              <ul className="mt-2 space-y-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ffc01d] shrink-0" />
                    <span className="line-clamp-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Problem Statement Tile */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 xl:p-4 flex flex-col justify-start overflow-hidden animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "backwards" }}>
            <SectionLabel icon={AlertCircle}>The Problem</SectionLabel>
            <div className="mt-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800">
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Solution Tile */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 xl:p-4 flex flex-col justify-start overflow-hidden animate-fade-in" style={{ animationDelay: "0.55s", animationFillMode: "backwards" }}>
            <SectionLabel icon={CheckCircle2}>The Solution</SectionLabel>
            <div className="mt-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800">
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact & Outcomes Tile */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white/60 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-3.5 xl:p-4 flex flex-col justify-start overflow-hidden animate-fade-in" style={{ animationDelay: "0.65s", animationFillMode: "backwards" }}>
            <SectionLabel icon={Target}>Outcomes & Impact</SectionLabel>
            <div className="mt-1.5 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800">
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.conclusion}
              </p>
            </div>
          </div>
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
            <div className="flex items-start justify-between p-6 pb-4 shrink-0 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <div className="text-left space-y-2">
                <span className={badgeClass}>
                  {demoProject.demoModal.kind === "app" ? (
                    <><Smartphone className="h-3.5 w-3.5" /> Demo App</>
                  ) : (
                    <><ExternalLink className="h-3.5 w-3.5" /> Live Demo</>
                  )}
                </span>
                <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white tracking-tight pr-8">
                  {demoProject.title}
                </h2>
              </div>
              <button
                onClick={() => setDemoProject(null)}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-5 text-left">
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
                              <span key={j} className="font-semibold text-neutral-900 dark:text-white break-all">
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
            </div>
            <div className="p-6 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 shrink-0 space-y-2">
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
                {demoProject.demoModal.kind === "app" ? "Download Demo App" : "Open Live Demo"}
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

      {/* Fullscreen Image Lightbox with Prev & Next */}
      {lightboxImage !== null && hasImages && (
        <div
          className="fixed inset-0 z-[220] bg-neutral-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 transition-colors cursor-pointer border border-neutral-700"
            aria-label="Close fullscreen view"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Fullscreen Navigation Prev/Next */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImg();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-700"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImg();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-700"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900/80 text-white text-xs font-mono rounded-full border border-neutral-700 backdrop-blur-xs">
                {activeImgIndex + 1} / {project.images.length}
              </div>
            </>
          )}

          <img
            src={project.images[activeImgIndex]}
            alt=""
            className="max-w-full max-h-[85vh] object-contain animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

ProjectDetailPage.propTypes = {
  projectId: PropTypes.string.isRequired,
};
