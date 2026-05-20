import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  X,
  Info,
  AlertCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

// Import your project images from assets
import EcoLocalImg from "../assets/works/EcoLocalE-commerce.png";
import MQuestImg from "../assets/works/MQuest E-learning.png";
import MQuest1 from "../assets/works/MQuest/MQuest E-learning (1).png";
import MQuest2 from "../assets/works/MQuest/MQuest E-learning (2).png";
import MQuest3 from "../assets/works/MQuest/MQuest E-learning (3).png";
import MQuest4 from "../assets/works/MQuest/MQuest E-learning (4).png";
import MQuest5 from "../assets/works/MQuest/MQuest E-learning (5).png";
import MQuest6 from "../assets/works/MQuest/MQuest E-learning (6).png";
import MQuest7 from "../assets/works/MQuest/MQuest E-learning (7).png";
import MQuest8 from "../assets/works/MQuest/MQuest E-learning (8).png";
import MQuest9 from "../assets/works/MQuest/MQuest E-learning (9).png";
import MQuest10 from "../assets/works/MQuest/MQuest E-learning (10).png";
import MQuest11 from "../assets/works/MQuest/MQuest E-learning (11).png";
import MQuest12 from "../assets/works/MQuest/MQuest E-learning (12).png";
import MQuest13 from "../assets/works/MQuest/MQuest E-learning (13).png";
import MQuest14 from "../assets/works/MQuest/MQuest E-learning (14).png";
import MQuest15 from "../assets/works/MQuest/MQuest E-learning (15).png";
import MQuest16 from "../assets/works/MQuest/MQuest E-learning (16).png";
import MQuest17 from "../assets/works/MQuest/MQuest E-learning (17).png";
import MQuest18 from "../assets/works/MQuest/MQuest E-learning (18).png";
import MQuest19 from "../assets/works/MQuest/MQuest E-learning (19).png";
import MQuest20 from "../assets/works/MQuest/MQuest E-learning (1).jpg";
import MQuest21 from "../assets/works/MQuest/MQuest E-learning (2).jpg";
import MQuest22 from "../assets/works/MQuest/MQuest E-learning (3).jpg";
import MQuest23 from "../assets/works/MQuest/MQuest E-learning (4).jpg";
import MQuest24 from "../assets/works/MQuest/MQuest E-learning (5).jpg";
import MQuest25 from "../assets/works/MQuest/MQuest E-learning (6).jpg";
import MQuest26 from "../assets/works/MQuest/MQuest E-learning (7).jpg";
import MQuest27 from "../assets/works/MQuest/MQuest E-learning (8).jpg";
import MQuest28 from "../assets/works/MQuest/MQuest E-learning (9).jpg";
import MQuest29 from "../assets/works/MQuest/MQuest E-learning (10).jpg";

import OroSiteTeachersPortalImg from "../assets/works/OroSiteTeachersPortal.png";
import OroSiteTeachersPortal1 from "../assets/works/OroSiteTeachersPortal/OroSiteTeachersPortal (1).png";
import OroSiteTeachersPortal2 from "../assets/works/OroSiteTeachersPortal/OroSiteTeachersPortal (2).png";
import OroSiteTeachersPortal3 from "../assets/works/OroSiteTeachersPortal/OroSiteTeachersPortal (3).png";
import OroSiteTeachersPortal4 from "../assets/works/OroSiteTeachersPortal/OroSiteTeachersPortal (4).png";
import OroSiteTeachersPortal5 from "../assets/works/OroSiteTeachersPortal/OroSiteTeachersPortal (5).png";

import RentalManagementSystemImg from "../assets/works/RentalManagmentSystem.png";
import RentalManagmentSystem1 from "../assets/works/RentalManagmentSystem/RentalManagmentSystem (1).png";
import RentalManagmentSystem2 from "../assets/works/RentalManagmentSystem/RentalManagmentSystem (2).png";
import RentalManagmentSystem3 from "../assets/works/RentalManagmentSystem/RentalManagmentSystem (3).png";
import RentalManagmentSystem4 from "../assets/works/RentalManagmentSystem/RentalManagmentSystem (4).png";
import RentalManagmentSystem5 from "../assets/works/RentalManagmentSystem/RentalManagmentSystem (5).png";

import BUCSMCC from "../assets/works/BUCSMCC.png";
import BUCSMCCimg1 from "../assets/works/BUCSMCC/BUCSMCC (1).png";
import BUCSMCCimg3 from "../assets/works/BUCSMCC/BUCSMCC (3).png";
import BUCSMCCimg4 from "../assets/works/BUCSMCC/BUCSMCC (4).png";
import BUCSMCCimg5 from "../assets/works/BUCSMCC/BUCSMCC (5).png";
import BUCSMCCimg6 from "../assets/works/BUCSMCC/BUCSMCC (6).png";
import BUCSMCCimg7 from "../assets/works/BUCSMCC/BUCSMCC (7).png";
import BUCSMCCimg8 from "../assets/works/BUCSMCC/BUCSMCC (8).png";
import BUCSMCCimg9 from "../assets/works/BUCSMCC/BUCSMCC (9).png";
import BUCSMCCimg10 from "../assets/works/BUCSMCC/BUCSMCC (10).png";
import BUCSMCCimg11 from "../assets/works/BUCSMCC/BUCSMCC (11).png";
import BUCSMCCimg12 from "../assets/works/BUCSMCC/BUCSMCC (12).png";
import BUCSMCCimg13 from "../assets/works/BUCSMCC/BUCSMCC (13).png";
import BUCSMCCimg14 from "../assets/works/BUCSMCC/BUCSMCC (14).png";

const projects = [
  {
    id: 1,
    title: "EcoLocal E-commerce",
    description:
      "A full-featured e-commerce platform for local products, supporting user authentication, product management, and secure checkout.",
    image: EcoLocalImg,
    category: ["web-dev"],
    categoryLabel: "Web Dev",
    year: "2023",
    githubUrl: "https://github.com/eriXtrip",
    images: [EcoLocalImg],
    videoUrl:
      "https://drive.google.com/file/d/1B8ZWoWT6EqoGuRJ8V-zI3hgD6n5gzVXG/view?usp=sharing",
    problemStatement:
      "Local merchants and farmers lacked a direct, digital connection to potential retail customers, leading to reliance on third-party intermediaries and reduced net profitability.",
    solution:
      "Built a robust, multi-vendor e-commerce platform that enables local creators to host digital storefronts, list inventory, and receive payments directly from consumers.",
    documentation:
      "Built using React for the front end and an Express-based Node.js back end. The data architecture is managed via MongoDB, featuring secure JWT authentication and Stripe integration for payments.",
    conclusion:
      "Digitized over 50 local vendor storefronts, directly increasing their monthly net profit margins by an average of 22% while providing organic local goods to buyers.",
  },
  {
    id: 2,
    title: "OroSite Teachers Portal",
    description:
      "A web portal for teachers to manage academic classes, student assignments, and cross-departmental communication.",
    image: OroSiteTeachersPortalImg,
    category: ["web-dev"],
    categoryLabel: "Web Dev",
    year: "2023",
    githubUrl: "https://github.com/eriXtrip",
    images: [
      OroSiteTeachersPortalImg,
      OroSiteTeachersPortal1,
      OroSiteTeachersPortal2,
      OroSiteTeachersPortal3,
      OroSiteTeachersPortal4,
      OroSiteTeachersPortal5,
    ],
    videoUrl:
      "https://drive.google.com/file/d/181XF02IEp_50qcNR1MSnWGlp7cwOG0P1/view?usp=sharing",
    problemStatement:
      "Faculty members faced fractured operational overhead due to using disjointed digital apps for daily scheduling, attendance logs, and administrative reporting.",
    solution:
      "Developed OroSite, a single-source educational dashboard uniting grade submissions, live attendance tracking, and cross-departmental message boards under one clean layout.",
    documentation:
      "Created using React, focusing heavily on responsive dashboard layout grids and modular design systems. Integrated robust state handling to support high-frequency scheduling edits.",
    conclusion:
      "Decreased manual faculty administrative overhead by an estimated 5 hours per week per instructor while establishing a unified digital communication hub.",
  },
  {
    id: 3,
    title: "Rental Management System",
    description:
      "A sleek desktop utility application for managing rental business operations, built with C# and packaged as a local executable.",
    image: RentalManagementSystemImg,
    category: ["desktop-dev"],
    categoryLabel: "Desktop Dev",
    year: "2024",
    githubUrl: "https://github.com/eriXtrip",
    images: [
      RentalManagementSystemImg,
      RentalManagmentSystem1,
      RentalManagmentSystem2,
      RentalManagmentSystem3,
      RentalManagmentSystem4,
      RentalManagmentSystem5,
    ],
    videoUrl:
      "https://drive.google.com/file/d/1QuOof0npp9a5SeE6qnPMqfmfNANc04Yc/view?usp=sharing",
    problemStatement:
      "Local rental shops managed active bookings via physical paperwork grids, resulting in frequent booking collisions, inventory mismatches, and untracked late returns.",
    solution:
      "Designed and programmed a standalone local desktop solution featuring auto-scheduling buffers, real-time product tracking states, and automatic invoice generation.",
    documentation:
      "Developed in C# using WPF (Windows Presentation Foundation) with an embedded SQLite local database engine to ensure absolute operational speed and offline support.",
    conclusion:
      "Completely solved inventory overbooking problems, modernized ledger records, and drastically minimized invoicing errors for small-scale local shops.",
  },
  {
    id: 4,
    title: "MQuest E-learning",
    description:
      "A mobile-first e-learning application built with React Native and Node.js, supporting interactive lessons and gamified quizzes.",
    image: MQuestImg,
    category: ["web-dev", "app-dev"],
    categoryLabel: "Web Dev / App Dev",
    year: "2025",
    githubUrl: "https://github.com/eriXtrip",
    images: [
      MQuestImg,
      MQuest28,
      MQuest2,
      MQuest8,
      MQuest4,
      MQuest23,
      MQuest6,
      MQuest7,
      MQuest3,
      MQuest9,
      MQuest10,
      MQuest11,
      MQuest12,
      MQuest13,
      MQuest14,
      MQuest15,
      MQuest16,
      MQuest17,
      MQuest18,
      MQuest19,
      MQuest20,
      MQuest21,
      MQuest22,
      MQuest5,
      MQuest24,
      MQuest25,
      MQuest26,
      MQuest27,
      MQuest1,
      MQuest29,
    ],
    videoUrls: [
      "https://drive.google.com/file/d/1l7EVit0H4eHHKrRduqeVi7cTfwPViyLJ/view?usp=sharing",
      "https://drive.google.com/file/d/1BAOr4JUv7lQec1knzEoRLDrry9SK1sFn/view?usp=sharing",
    ],
    problemStatement:
      "Traditional distance learning platforms suffer from poor student engagement and lack gamified milestones, leading to high drop-out rates.",
    solution:
      "Designed and engineered MQuest, a mobile-first e-learning solution featuring bite-sized interactive learning cards, gamified challenges, and real-time scoreboards.",
    documentation:
      "Leveraged React Native for cross-platform app performance, combined with Tailwind CSS for layout styling. State management uses custom React contexts with a RESTful Node.js backend.",
    conclusion:
      "Enhanced student course engagement rates by 38% and significantly improved micro-learning task completion metrics over traditional learning formats.",
  },
  {
    id: 5,
    title: "BUCS MCC",
    description:
      "A secure React and Laravel web application modernizing microbial culture data infrastructure with automated specimen tracking and RBAC security.",
    image: BUCSMCC,
    category: ["web-dev"],
    categoryLabel: "Web Dev",
    year: "2026",
    githubUrl: "https://github.com/eriXtrip",
    images: [
      BUCSMCC,
      BUCSMCCimg1,
      BUCSMCCimg3,
      BUCSMCCimg4,
      BUCSMCCimg5,
      BUCSMCCimg6,
      BUCSMCCimg7,
      BUCSMCCimg8,
      BUCSMCCimg9,
      BUCSMCCimg10,
      BUCSMCCimg11,
      BUCSMCCimg12,
      BUCSMCCimg13,
      BUCSMCCimg14,
    ],
    videoUrl: [
      "https://drive.google.com/file/d/1_cotwUWiXWVXGR-I2Va4foa_3JGUgL8i/view?usp=sharing",
      "https://drive.google.com/file/d/1TuzlCm4tZxUfllUoa-IS0YNOkO75JKAi/view?usp=sharing",
      "https://drive.google.com/file/d/1Q2xgmSClQLBLykZfsG3lzMZ5Odmecvqa/view?usp=sharing",
      "https://drive.google.com/file/d/1zVKWx8t6sJTYrEsTsiTR9WjWk11iAUcc/view?usp=sharing",
      "https://drive.google.com/file/d/1UG0skwEBd9ka_u5QZSgFaduSrShMQL5q/view?usp=sharing",
    ],
    problemStatement:
      "The BUCS Microbial Culture Collection (BUCS-MCC) operated on a manual, Excel-based registration grid, leading to sluggish search queries, a high probability of data errors, and delays in specimen approvals.",
    solution:
      "Engineered a secure, full-stack React and Laravel web application that replaces legacy sheets with a robust database architecture, real-time availability filters, and automated status mailers.",
    documentation:
      "Programmed on a normalized MySQL database structure. Implemented advanced Role-Based Access Control (RBAC), customized data filters, secure SMTP mail relays, and comprehensive backend API documentation.",
    conclusion:
      "Transitioned the department to a paperless environment, reducing specimen processing turnaround times by 75% while laying a solid foundation for future biotech research.",
  },
];

const categories = [
  { id: "all", name: "All Works" },
  { id: "web-dev", name: "Web Dev" },
  { id: "desktop-dev", name: "Desktop Dev" },
  { id: "app-dev", name: "App Dev" },
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const openDrawer = (project) => {
    setSelectedProject(project);
    setActiveImgIndex(0);
    setActiveVideoIndex(0);
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 500);
    document.body.style.overflow = "unset";
  };

  const getEmbedUrl = (url) => {
    if (!url || typeof url !== "string") return null;
    if (url.includes("/preview")) return url;
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const filteredProjects = (
    activeTab === "all"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeTab)
            : project.category === activeTab,
        )
  )
    .slice()
    .sort((a, b) => b.id - a.id);

  return (
    <section
      id="works"
      className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-900 relative"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Featured Works
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            Explore a curated selection of my digital products, developed with
            high standard frontend practices and minimal aesthetic.
          </p>
        </div>

        {/* Tabbed Filter Bar */}
        <div className="flex justify-center gap-2 mb-16">
          <div className="inline-flex p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/50 dark:border-neutral-700/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 py-1.5 text-xs md:px-6 md:py-2 md:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  activeTab === category.id
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid: 3-column desktop, collapses to mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-4 transition-all duration-300 hover:translate-y-[-6px] hover:shadow-lg"
            >
              <div className="space-y-4">
                {/* Rounded Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800/40 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  {/* Category / Year Tag - Wireframe Pricing Tag Substitute */}
                  <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-900/90 text-white backdrop-blur-xs">
                    {project.year} / {project.categoryLabel}
                  </span>
                </div>

                {/* Project Details */}
                <div className="text-left px-2 space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* View Project Button */}
              <div className="pt-6 px-2 w-full flex items-center gap-3">
                <button
                  onClick={() => openDrawer(project)}
                  className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-100 cursor-pointer"
                >
                  View Project
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 rounded-full transition-colors"
                  aria-label="GitHub Repo"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/eriXtrip"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            Check My GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      {/* Sliding Drawer for Project Details */}
      <div
        className={`fixed inset-0 bg-neutral-950/60 backdrop-blur-xs z-50 transition-opacity duration-500 ease-in-out ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
      />

      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-2xl bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl z-[150] flex flex-col transition-transform duration-500 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {selectedProject && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
              <div className="text-left space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {selectedProject.year} / {selectedProject.categoryLabel}
                </span>
                <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h2>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 text-left">
              {/* Media Section: Video or Image */}
              {/* Media Section: Video Showcase */}
              {(() => {
                let projectVideos = [];
                if (Array.isArray(selectedProject.videoUrls)) {
                  projectVideos = selectedProject.videoUrls;
                } else if (Array.isArray(selectedProject.videoUrl)) {
                  projectVideos = selectedProject.videoUrl;
                } else if (
                  typeof selectedProject.videoUrls === "string" &&
                  selectedProject.videoUrls
                ) {
                  projectVideos = [selectedProject.videoUrls];
                } else if (
                  typeof selectedProject.videoUrl === "string" &&
                  selectedProject.videoUrl
                ) {
                  projectVideos = [selectedProject.videoUrl];
                }

                if (projectVideos.length === 0) return null;

                return (
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                        Video Showcase{" "}
                        {projectVideos.length > 1 &&
                          `(${activeVideoIndex + 1}/${projectVideos.length})`}
                      </h3>
                      {projectVideos.length > 1 && (
                        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/80 p-0.5 rounded-lg text-[10px] font-bold">
                          {projectVideos.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveVideoIndex(idx)}
                              className={`px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer ${
                                activeVideoIndex === idx
                                  ? "bg-white text-emerald-600 shadow-xs dark:bg-neutral-700 dark:text-emerald-400"
                                  : "text-neutral-500 hover:text-neutral-850 dark:hover:text-neutral-200"
                              }`}
                            >
                              Video {idx + 1}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-full h-[300px] sm:h-auto sm:aspect-video rounded-2xl overflow-hidden bg-black border border-neutral-200/50 dark:border-neutral-800/50 shadow-inner">
                      <iframe
                        src={getEmbedUrl(projectVideos[activeVideoIndex])}
                        className="w-full h-full border-0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title={`${selectedProject.title} Video ${activeVideoIndex + 1}`}
                      />
                    </div>
                  </div>
                );
              })()}

              {/* Media Section: Project Screenshots */}
              {((selectedProject.images && selectedProject.images.length > 0) ||
                selectedProject.image) && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      Project Screenshots
                    </h3>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/50 relative shadow-sm">
                      <img
                        src={
                          selectedProject.images &&
                          selectedProject.images[activeImgIndex]
                            ? selectedProject.images[activeImgIndex]
                            : selectedProject.image
                        }
                        alt={`${selectedProject.title} screenshot ${activeImgIndex + 1}`}
                        className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Thumbnails list */}
                  {selectedProject.images &&
                    selectedProject.images.length > 1 && (
                      <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImgIndex(idx)}
                            className={`relative w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex-shrink-0 ${
                              activeImgIndex === idx
                                ? "border-emerald-600 scale-[1.02] shadow-md dark:border-emerald-400"
                                : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img}
                              alt="thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              )}

              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 font-bold">
                    <AlertCircle className="h-4 w-4 text-primary" /> The Problem
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> The
                    Solution
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Documentation */}
              <div className="space-y-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <h3 className="text-sm uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 font-bold">
                  <FileText className="h-4 w-4 text-primary" /> Technical
                  Architecture
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.documentation}
                </p>
              </div>

              {/* Conclusion */}
              <div className="space-y-2 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <h3 className="text-sm uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5 font-bold">
                  <Info className="h-4 w-4 text-primary" /> Outcomes & Impact
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.conclusion}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-100 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                GitHub Repository <Github className="h-4 w-4" />
              </a>
              <button
                onClick={closeDrawer}
                className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
