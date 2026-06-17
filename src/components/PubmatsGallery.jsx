import React, { useState } from "react";
import { Sparkles, X, Maximize2 } from "lucide-react";

import Pubmat1 from "../assets/pubmats/Adolescent Health Awareness 3x4.png";
import Pubmat2 from "../assets/pubmats/APINO.png";
import Pubmat3 from "../assets/pubmats/HappyBirthday.jpg";
import Pubmat4 from "../assets/pubmats/Daily Lesson Log (1).jpg";
import Pubmat5 from "../assets/pubmats/Christening.png";
import Pubmat6 from "../assets/pubmats/MAGNACARTA3x4.png";
import Pubmat7 from "../assets/pubmats/Child's Rights and Responsibilities.png";
import Pubmat8 from "../assets/pubmats/GENDER  SENSITIVITY TRAINING.png";
import Pubmat9 from "../assets/pubmats/GravelandSandConcreteHollowblocks3x4.png";
import Pubmat10 from "../assets/pubmats/JuvenileJustice3x4.png";
import Pubmat11 from "../assets/pubmats/PRAISE.jpg";
import Pubmat12 from "../assets/pubmats/YearEndAssessment.png";
import Pubmat13 from "../assets/pubmats/ValuesFormationSession 3000x5000.jpg";
import Pubmat14 from "../assets/pubmats/FEEDING ACTIVITY 3000X5000.jpg";
import Pubmat15 from "../assets/pubmats/Barangay 28 Victory Village North Council Barangay Council For The Protection Of Children.jpg";
import Pubmat16 from "../assets/pubmats/PROJECT LAYAG (1).png";
import Pubmat17 from "../assets/pubmats/DiversionProgram.jpg";
import Pubmat18 from "../assets/pubmats/HIVAIDS Poster.jpg";
import Pubmat19 from "../assets/pubmats/HandlingCICLandCAR.jpg";
import Pubmat20 from "../assets/pubmats/GRADtarp TEMPLATE 4x3 (8).png";
import Pubmat21 from "../assets/pubmats/GRADtarp TEMPLATE-jay 4x3.png";
import Pubmat22 from "../assets/pubmats/GRADtarp TEMPLATE-kyle 4x3.png";
import Pubmat23 from "../assets/pubmats/GRADtarp TEMPLATE-oli 4x3.png"

const pubmats = [
  {
    src: Pubmat1,
    title: "Adolescent Health Awareness",
    desc: "Designed for public health informational seminars.",
  },
  {
    src: Pubmat2,
    title: "APINO Brand Identity",
    desc: "Minimalist modern tech company branding layout.",
  },
  {
    src: Pubmat3,
    title: "Happy Birthday Poster",
    desc: "Colorful and warm social card designed for community celebrations.",
  },
  {
    src: Pubmat4,
    title: "Daily Lesson Log",
    desc: "A clean academic documentation layout for instructors.",
  },
  {
    src: Pubmat5,
    title: "Christening Banner",
    desc: "Elegant floral invitation and event banner design.",
  },
  {
    src: Pubmat6,
    title: "Magna Carta for Public Health",
    desc: "Clean informational poster outlining public rights.",
  },
  {
    src: Pubmat7,
    title: "Child's Rights & Responsibilities",
    desc: "Edu-visual graphic for student assemblies and classrooms.",
  },
  {
    src: Pubmat8,
    title: "Gender Sensitivity Training",
    desc: "High-contrast announcement graphic for corporate workshops.",
  },
  {
    src: Pubmat9,
    title: "Gravel & Sand Commercial",
    desc: "Industrial poster design for local construction supplies.",
  },
  {
    src: Pubmat10,
    title: "Juvenile Justice Program",
    desc: "Advocacy and awareness flyer for local youth seminars.",
  },
  {
    src: Pubmat11,
    title: "PRAISE Recognition Ceremony",
    desc: "Formal event layout for academic awarding sessions.",
  },
  {
    src: Pubmat12,
    title: "Year-End Assessment Deck",
    desc: "Professional corporate visual reporting cover template.",
  },
  {
    src: Pubmat13,
    title: "Values Formation Session",
    desc: "Promotional banner designed for youth development events.",
  },
  {
    src: Pubmat14,
    title: "Feeding Activity & Livelihood",
    desc: "Community outreach promotional graphic for local initiatives.",
  },
  {
    src: Pubmat15,
    title: "Council Protection Program",
    desc: "Formal banner branding for child protection councils.",
  },
  {
    src: Pubmat16,
    title: "Project Layag",
    desc: "Formal banner of Linang at Yaman ng Kaalaman sa Agrikultura at Biyoteknolohiya",
  },
  {
    src: Pubmat17,
    title: "Diversion Program",
    desc: "Formal banner branding for child protection councils.",
  },
  {
    src: Pubmat18,
    title: "HIV/AIDS Awareness",
    desc: "Formal banner branding for child protection councils.",
  },
  {
    src: Pubmat19,
    title: "Handling CICL & CAR",
    desc: "Formal banner branding for child protection councils.",
  },
  {
    src: Pubmat20,
    title: "GRADtarp TEMPLATE 4x3 (8)",
    desc: "Graduation tarpaulin for us sibling.",
  },
  {
    src: Pubmat21,
    title: "GRADtarp TEMPLATE-jay 4x3",
    desc: "Graduation tarpaulin for Jay-R.",
  },
  {
    src: Pubmat22,
    title: "GRADtarp TEMPLATE-kyle 4x3",
    desc: "Graduation tarpaulin for Kyle.",
  },
  {
    src: Pubmat23,
    title: "GRADtarp TEMPLATE-oli 4x3",
    desc: "Graduation tarpaulin for Oliver.",
  },
];

export const PubmatsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const featured = pubmats[activeIndex];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(pubmats.length / itemsPerPage);

  const batches = [];
  for (let i = 0; i < pubmats.length; i += itemsPerPage) {
    batches.push(pubmats.slice(i, i + itemsPerPage));
  }

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const stats = [
    {
      value: "50+",
      label: "Graphics Delivered",
      desc: "For public events, seminars, & municipal campaigns.",
    },
    {
      value: "8x",
      label: "Engagement Increase",
      desc: "Social media reach elevated via clean visual layouts.",
    },
    {
      value: "100%",
      label: "Satisfaction Rate",
      desc: "Strictly aligned with organizational identity goals.",
    },
  ];

  return (
    <section
      id="pubmats"
      className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-900 relative"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Asymmetrical Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: High-contrast Statistics & Introduction */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-12 text-left lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase">
                Visual Art & Media
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.15]">
                Graphic Design <br />
                <span className="text-neutral-500 dark:text-neutral-400">
                  That Inspires
                </span>
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base pt-2">
                Merging typography, composition, and brand messaging. I design
                clean, high-impact publication materials (pubmats) that
                effectively translate complex information into striking visuals.
              </p>
            </div>

            {/* Vertical Stats Deck */}
            <div className="space-y-8 py-4 border-t border-neutral-100 dark:border-neutral-800/80">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tighter w-24 shrink-0">
                    {stat.value}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-450 leading-relaxed">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pinterest Masonry Grid Showcase */}
          <div className="lg:col-span-8 overflow-hidden">
            <div className="relative">
              {/* Sliding Track Wrapper */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {batches.map((batch, batchIdx) => (
                  <div key={batchIdx} className="w-full flex-shrink-0 px-1">
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 [column-fill:_balance]">
                      {batch.map((pubmat, idx) => {
                        const originalIndex = pubmats.findIndex(
                          (p) => p.src === pubmat.src,
                        );
                        return (
                          <div
                            key={idx}
                            onClick={() => {
                              setActiveIndex(originalIndex);
                              openLightbox();
                            }}
                            className="break-inside-avoid relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200/40 dark:border-neutral-850/60 group cursor-pointer hover:border-emerald-500/40 dark:hover:border-emerald-450/40 transition-all duration-300 shadow-xs hover:shadow-md"
                          >
                            <img
                              src={pubmat.src}
                              alt={pubmat.title}
                              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-103"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600";
                              }}
                            />
                            {/* Floating Glassmorphic Details Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 text-left backdrop-blur-[2px]">
                              <div className="space-y-1.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                                  <Maximize2 className="h-2.5 w-2.5 animate-pulse" />{" "}
                                  Inspect Details
                                </span>
                                <h4 className="text-sm font-extrabold text-white leading-tight">
                                  {pubmat.title}
                                </h4>
                                <p className="text-[11px] text-neutral-300 leading-normal line-clamp-2">
                                  {pubmat.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Paginated Navigation Control Bar */}
              {batches.length > 1 && (
                <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-5 sm:gap-y-0 border-t border-neutral-100 dark:border-neutral-800/80 pt-6">
                  {/* Previous Button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(0, prev - 1))
                    }
                    disabled={currentPage === 0}
                    className="order-2 sm:order-1 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 sm:gap-1.5 shadow-xs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Prev
                  </button>

                  {/* Dynamic page indicator dots */}
                  <div className="order-1 sm:order-2 w-full sm:w-auto flex items-center justify-center gap-2">
                    {batches.map((_, pageIdx) => (
                      <button
                        key={pageIdx}
                        onClick={() => setCurrentPage(pageIdx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentPage === pageIdx
                            ? "w-6 bg-emerald-500"
                            : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-450 dark:hover:bg-neutral-500"
                          }`}
                        aria-label={`Go to page ${pageIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(batches.length - 1, prev + 1),
                      )
                    }
                    disabled={currentPage === batches.length - 1}
                    className="order-3 sm:order-3 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1 sm:gap-1.5 shadow-xs"
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Detail Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300">
          {/* Close Area */}
          <div
            className="absolute inset-0 cursor-zoom-out"
            onClick={closeLightbox}
          />

          {/* Lightbox Shell */}
          <div className="relative max-w-4xl w-full flex flex-col items-center justify-center z-10 space-y-6">
            {/* Top Bar Actions */}
            <div className="absolute top-[-48px] right-2 md:right-0 flex items-center gap-4">
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-md"
                aria-label="Close detail view"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Full-Size Image Frame */}
            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl relative p-2 md:p-4 group">
              <img
                src={featured.src}
                alt={featured.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>

            {/* Bottom floating Details overlay */}
            <div className="bg-white/10 dark:bg-black/50 border border-white/10 dark:border-neutral-800/80 rounded-2xl px-6 py-4 max-w-xl text-center backdrop-blur-md space-y-2 select-none shadow-lg">
              <h3 className="text-lg md:text-xl font-extrabold text-white">
                {featured.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-300">
                {featured.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PubmatsGallery;
