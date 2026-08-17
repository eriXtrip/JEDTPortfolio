import React, { useState, useRef, useEffect } from "react";
import { X, Eye, ArrowUpRight } from "lucide-react";

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
import Pubmat23 from "../assets/pubmats/GRADtarp TEMPLATE-oli 4x3.png";

const pubmats = [
  {
    src: Pubmat1,
    title: "Adolescent Health Awareness",
    desc: "Designed for public health informational seminars.",
  },
  {
    src: Pubmat2,
    title: "Election Poster",
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
    title: "Livelihood Training",
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
    title: "Graduation Tarp",
    desc: "Graduation tarpaulin for us sibling.",
  },
  {
    src: Pubmat21,
    title: "Graduation Tarp",
    desc: "Graduation tarpaulin for Jay-R.",
  },
  {
    src: Pubmat22,
    title: "Graduation Tarp",
    desc: "Graduation tarpaulin for Kyle.",
  },
  {
    src: Pubmat23,
    title: "Graduation Tarp",
    desc: "Graduation tarpaulin for Oliver.",
  },
];

const featuredIndexes = [1, 0, 3, 11, 9, 10, 19, 15, 14];
const morePubmats = pubmats.filter((_, i) => !featuredIndexes.includes(i));

const skeletonAspects = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
];

const SkeletonCard = ({ aspect }) => (
  <div className="break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800/55 bg-white dark:bg-neutral-900/40 shadow-xs">
    <div
      className={`relative w-full ${aspect} overflow-hidden bg-neutral-200/70 dark:bg-neutral-800/60`}
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-neutral-300/60 to-transparent dark:via-neutral-700/50" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="h-2.5 w-24 rounded-full bg-neutral-300/80 dark:bg-neutral-700 animate-pulse" />
        <div className="mt-2 h-3.5 w-32 rounded-full bg-neutral-300/80 dark:bg-neutral-700 animate-pulse" />
      </div>
    </div>
  </div>
);

export const PubmatsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isGalleryOpen, setisGalleryOpen] = useState(false);
  const [galleryLoaded, setGalleryLoaded] = useState(false);
  const loadedCount = useRef(0);
  const featured = pubmats[activeIndex];

  useEffect(() => {
    if (!isGalleryOpen) {
      loadedCount.current = 0;
      setGalleryLoaded(false);
      return;
    }

    const imgs = morePubmats.map((pubmat) => new Image());
    imgs.forEach((img, idx) => {
      img.onload = () => {
        loadedCount.current += 1;
        if (loadedCount.current >= morePubmats.length) {
          setGalleryLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount.current += 1;
        if (loadedCount.current >= morePubmats.length) {
          setGalleryLoaded(true);
        }
      };
      img.src = morePubmats[idx].src;
    });
  }, [isGalleryOpen]);

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = isGalleryOpen ? "hidden" : "unset";
  };

  const openGallery = () => {
    setisGalleryOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setisGalleryOpen(false);
    document.body.style.overflow = "unset";
  };

  const Card = ({ pubmat, aspect, className = "" }) => {
    const originalIndex = pubmats.findIndex((p) => p.src === pubmat.src);
    return (
      <div
        onClick={() => {
          setActiveIndex(originalIndex);
          openLightbox();
        }}
        className={`group relative cursor-pointer overflow-hidden rounded-lg lg:rounded-[1.75rem] border border-neutral-200/50 dark:border-neutral-800/55 bg-white dark:bg-neutral-900/40 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-xl ${aspect} ${className}`}
      >
        <img
          src={pubmat.src}
          alt={pubmat.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-100"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800";
          }}
        />
        {/* Gradient Reveal + Title Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
            <Eye className="h-3 w-3 animate-pulse" /> View Design
          </span>
          <h4 className="mt-1 text-sm font-extrabold leading-tight text-white md:text-base">
            {pubmat.title}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <section
      id="pubmats"
      className="relative py-24 px-3 md:px-10"
    >

      <div className="relative container max-w-7xl mx-auto px-2 md:px-10">
        {/* Header — Centered High-Impact Headline */}
        <div className="mx-auto max-w-3xl space-y-5 pb-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Visual Art & Media
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
            My{" "}
            <span className="italic font-black text-emerald-600 dark:text-emerald-400">
              Designs
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Publication materials, posters, and event banners designed for organizations, schools, and local clients
          </p>
        </div>

        {/* 5-Column Asymmetric Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
          {/* Column 1 — Left Split Stack (3:4 top + 4:3 bottom) */}
          <div className="flex flex-col justify-between gap-4 md:gap-5">
            <Card pubmat={pubmats[1]} aspect="aspect-[3/4]" />
            <Card pubmat={pubmats[0]} aspect="aspect-[4/3]" />
          </div>

          {/* Column 2 — Left Mid Full-Height (1:2), bottom baseline aligned */}
          <div className="flex flex-col justify-end gap-4 md:gap-5">
            <Card pubmat={pubmats[3]} aspect="aspect-[1/2]" />
          </div>

          {/* Column 3 — Center Anchor Column (raised main card + floating CTA) */}
          <div className="relative flex flex-col gap-4 md:gap-5 sm:col-span-2 lg:col-span-1">
            <Card pubmat={pubmats[14]} aspect="aspect-[2/1]"
            />
            <Card
              pubmat={pubmats[11]}
              aspect="aspect-[4/3]"
            />
            <Card pubmat={pubmats[15]} aspect="aspect-[2/1]" />
            {/* Floating Pill CTA opening the full portfolio */}
            <button
              onClick={openGallery}
              className="relative z-20 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald-600 dark:bg-emerald-500 px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 dark:hover:bg-emerald-400 cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-6"
            >
              View All Designs <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Column 4 — Right Mid Full-Height (1:2), bottom baseline aligned */}
          <div className="flex-col justify-end gap-4 md:gap-5 hidden lg:block ">
            <Card pubmat={pubmats[10]} aspect="aspect-[1/2]" />
          </div>

          {/* Column 5 — Right Split Stack (3:4 top + 4:3 bottom) */}
          <div className="flex-col justify-between gap-4 md:gap-5 sm:col-span-2 lg:col-span-1 hidden lg:block">
            <Card pubmat={pubmats[19]} aspect="aspect-[3/4]" />
            <Card pubmat={pubmats[9]} aspect="aspect-[4/3]" />
          </div>
        </div>

      </div>

      {/* Full-Screen Portfolio Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-neutral-50 dark:bg-neutral-950">
          {/* Sticky Modal Header */}
          <div className="sticky top-0 z-10 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/90 dark:bg-neutral-950/90 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between gap-6">
              <div className="space-y-1 text-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Explore More
                </span>
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  Design{" "}
                  <span className="text-neutral-500 dark:text-neutral-400">
                    Gallery
                  </span>
                </h3>
              </div>
              <button
                onClick={closeGallery}
                className="shrink-0 p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 transition-all cursor-pointer hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
                aria-label="Close portfolio"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="mx-auto max-w-7xl px-6 md:px-12 py-10">
            {!galleryLoaded ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 [column-fill:_balance]">
                {skeletonAspects.map((aspect, idx) => (
                  <SkeletonCard key={idx} aspect={aspect} />
                ))}
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 [column-fill:_balance]">
                {morePubmats.map((pubmat, idx) => {
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
                      className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800/55 bg-white dark:bg-neutral-900/40 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-xl"
                    >
                      <img
                        src={pubmat.src}
                        alt={pubmat.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                          <Eye className="h-3 w-3 animate-pulse" /> View Design
                        </span>
                        <h4 className="mt-1 text-sm font-extrabold leading-tight text-white">
                          {pubmat.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full-Screen Detail Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/35 backdrop-blur-md p-4 transition-all duration-300">
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
            <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden relative p-2 md:p-4 group">
              <img
                src={featured.src}
                alt={featured.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl select-none drop-shadow-2xl animate-fade-in"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PubmatsGallery;
