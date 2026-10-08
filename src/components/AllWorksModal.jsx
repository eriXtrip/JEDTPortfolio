import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Search,
  X,
  ArrowRight,
} from "lucide-react";
import { categories, projects } from "../data/projectsData";

const badgeClass =
  "inline-flex items-center gap-1.5 font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#ffc01d]";

export const AllWorksModal = ({ open, onClose }) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSearch("");
      setActiveCategory("all");
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
    <div
      className="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white flex flex-col"
      data-lenis-prevent
    >
      {/* Top Bar */}
      <header className="flex items-center justify-between gap-4 border-b border-neutral-200/80 dark:border-neutral-800/80 px-4 py-3 md:px-8 md:py-4 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-bold tracking-widest text-[#ffc01d] uppercase">
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
            className="w-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 pl-11 pr-4 py-2.5 rounded-full text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-[#ffc01d]/80 focus:outline-none focus:ring-2 focus:ring-[#ffc01d]/20 transition-all"
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

      {/* Project Cards Grid */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-neutral-400 dark:text-neutral-500">
            No projects match your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredProjects.map((project) => {
              const displayImage =
                project.image ||
                (Array.isArray(project.images) && project.images[0]);

              return (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/40 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#ffc01d]/50 dark:hover:border-[#ffc01d]/50"
                >
                  {/* Thumbnail / Header Media */}
                  <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={displayImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute top-3 left-3 ${badgeClass}`}>
                      {project.year} · {project.category}
                    </span>
                  </div>

                  {/* Card Main Info */}
                  <div className="p-5 flex flex-col flex-1 text-left space-y-2">
                    <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                      {project.subtitle}
                    </p>

                    {/* Tech Tags */}
                    {Array.isArray(project.tech) && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] font-semibold text-[#ffc01d] flex items-center gap-0.5"
                          >
                            <span className="text-neutral-400 dark:text-neutral-600 font-normal">
                              /
                            </span>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer Action */}
                    <div className="mt-auto pt-4 flex items-center justify-end border-t border-neutral-100 dark:border-neutral-800/60">
                      <button
                        onClick={() => {
                          window.location.hash = `#works/${project.id}`;
                          onClose();
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#ffc01d] hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        Full Details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

AllWorksModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};