import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  X,
  ChevronDown,
  Layers,
  Check,
} from "lucide-react";

// Import your certificate images here
import JobReadinessImg from "../assets/cert/JobReadinessTraining.jpg";
import ROTCImg from "../assets/cert/ROTCCert2023_page-0001.jpg";
import TechnicalImg from "../assets/cert/Certificate_ComputerSystemsServicing.jpg";
import TechnicalImg1 from "../assets/cert/Certificate_InstallingandConfiguringComputerSystems.jpg";
import TechnicalImg2 from "../assets/cert/Certificate_IntroductiontoCSS.jpg";
import TechnicalImg3 from "../assets/cert/Certificate_MaintainingComputerSystemsandNetworks.jpg";
import TechnicalImg4 from "../assets/cert/Certificate_SettingUpComputerServers.jpg";
import TechnicalImg5 from "../assets/cert/Certificate_Wi-Fi 101 and Digital Thumbprint Program.jpg";
import Leadership2019Img from "../assets/cert/VicePresCert2019_page-0001.jpg";
import Leadership2022Img from "../assets/cert/LeadershipTrainingandTeambuildingCert 2022_page-0001.jpg";
import CertofAppreciation from "../assets/cert/CertofAppreciation.jpg";
import CertofCompletion from "../assets/cert/CertofCompletion.jpg";
import DiplomaCollege from "../assets/cert/Diploma College 2026.jpg"
import DiplomaSHS from "../assets/cert/Diploma SHS 2022.png"
import DiplomaJHS from "../assets/cert/Diploma JHS 2020.png"
import ITCustomerSupportBasicsImg from "../assets/cert/IT_Customer_Support_Basics_certificate_jedt.png"

const certificates = [
  {
    id: 1,
    title: "Leadership Certificate of Distinction",
    issuer: "Oro Site High School",
    category: "leadership",
    categoryLabel: "Leadership Distinction",
    img: Leadership2019Img,
  },
  {
    id: 2,
    title: "Junior High School Diploma",
    issuer: "Oro Site High School",
    category: "diploma",
    categoryLabel: "Diploma",
    img: DiplomaJHS,
  },
  {
    id: 3,
    title: "Leadership Training & Teambuilding",
    issuer: "Oro Site High School",
    category: "leadership",
    categoryLabel: "Leadership Distinction",
    img: Leadership2022Img,
  },
  {
    id: 4,
    title: "Senior High School Diploma",
    issuer: "Oro Site High School",
    category: "diploma",
    categoryLabel: "Diploma",
    img: DiplomaSHS,
  },
  {
    id: 5,
    title: "Wi-Fi 101 & Digital Thumbprint",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg5,
  },
  {
    id: 6,
    title: "Setting Up Computer Servers",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg4,
  },
  {
    id: 7,
    title: "Maintaining Systems & Networks",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg3,
  },
  {
    id: 8,
    title: "Introduction to CSS",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg2,
  },
  {
    id: 9,
    title: "Installing & Configuring Computer Systems",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg1,
  },
  {
    id: 10,
    title: "Computer Systems Servicing",
    issuer: "TESDA Online Program",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: TechnicalImg,
  },
  {
    id: 11,
    title: "ROTC NSTP Completion",
    issuer: "Bicol University ROTC Unit",
    category: "training",
    categoryLabel: "Training Completion",
    img: ROTCImg,
  },
  {
    id: 12,
    title: "Job Readiness Training",
    issuer: "Children International Bicol Inc.",
    category: "training",
    categoryLabel: "Job Readiness",
    img: JobReadinessImg,
  },
  {
    id: 13,
    title: "Certificate of Completion",
    issuer: "Bicol University",
    category: "training",
    categoryLabel: "Training Completion",
    img: CertofCompletion,
  },
  {
    id: 14,
    title: "Certificate of Appreciation",
    issuer: "Bicol University",
    category: "recognition",
    categoryLabel: "Recognition",
    img: CertofAppreciation,
  },
  {
    id: 15,
    title: "Diploma in Information Technology",
    issuer: "Bicol University",
    category: "diploma",
    categoryLabel: "Diploma",
    img: DiplomaCollege,
  },
  {
    id: 16,
    title: "IT Customer Support Basics",
    issuer: "CISCO Network Academy",
    category: "technical",
    categoryLabel: "Technical Instruction",
    img: ITCustomerSupportBasicsImg,
  },
];

const PAGE_SIZE = 12;

export const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const dropdownRef = useRef(null);

  const categories = [
    { key: "all", label: "All Certificates" },
    { key: "diploma", label: "Diploma" },
    { key: "technical", label: "Technical" },
    { key: "leadership", label: "Leadership" },
    { key: "training", label: "Training" },
    { key: "recognition", label: "Recognition" },
  ];

  const categoriesWithCount = categories.map((cat) => ({
    ...cat,
    count:
      cat.key === "all"
        ? certificates.length
        : certificates.filter((c) => c.category === cat.key).length,
  }));

  const activeCategoryLabel =
    categoriesWithCount.find((cat) => cat.key === activeCategory)?.label ||
    "All Certificates";

  const filteredCertificates = (
    activeCategory === "all"
      ? [...certificates]
      : certificates.filter((cert) => cert.category === activeCategory)
  ).sort((a, b) => b.id - a.id);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCertificates.length;

  const activeCert =
    activeCertIndex !== null
      ? activeCertIndex < filteredCertificates.length
        ? filteredCertificates[activeCertIndex]
        : null
      : null;

  // Next/Prev cycle functions inside the lightbox
  const handleModalNext = () => {
    if (activeCertIndex === null) return;
    setActiveCertIndex((activeCertIndex + 1) % filteredCertificates.length);
  };

  const handleModalPrev = () => {
    if (activeCertIndex === null) return;
    setActiveCertIndex(
      (activeCertIndex - 1 + filteredCertificates.length) %
      filteredCertificates.length,
    );
  };

  // Keyboard navigation listener for lightbox cycling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeCertIndex === null) return;
      if (e.key === "ArrowRight") {
        handleModalNext();
      } else if (e.key === "ArrowLeft") {
        handleModalPrev();
      } else if (e.key === "Escape") {
        setActiveCertIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCertIndex, filteredCertificates]);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (activeCertIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCertIndex]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectCategory = (key) => {
    setActiveCategory(key);
    setVisibleCount(PAGE_SIZE);
    setActiveCertIndex(null);
    setFilterOpen(false);
  };

  const openCert = (index) => {
    setActiveCertIndex(index);
    setFilterOpen(false);
  };

  return (
    <section
      id="certificates"
      className="py-24 px-3 md:px-10 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      {/* Decorative Abstract Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-emerald-300/20 dark:bg-emerald-400/10 blur-3xl" />
        <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-green-400/15 dark:bg-green-500/10 blur-3xl" />
      </div>

      <div className="relative container max-w-7xl mx-auto px-0">
        {/* Header — aligned with ProjectsSection principle, redesigned */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 mb-14 border-b border-neutral-200/80 dark:border-neutral-800/80 relative">
          <div className="space-y-4 max-w-2xl text-left">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Accreditation &amp; Awards
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
              Credentials
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A curated wall of verified academic, leadership, and technical
              credentials issued by TESDA, Bicol University, and partner
              institutions.
            </p>
          </div>

          {/* Custom Dropdown Filter */}
          <div ref={dropdownRef} className="relative z-20 self-start lg:self-end">
            <button
              onClick={() => setFilterOpen((open) => !open)}
              className={cn(
                "inline-flex items-center justify-between gap-6 min-w-[200px] w-full lg:w-auto px-5 py-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer shadow-sm border",
                filterOpen
                  ? "bg-white dark:bg-neutral-900 border-emerald-500/40 shadow-emerald-500/10 shadow-lg"
                  : "bg-white dark:bg-neutral-900/70 border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/40",
              )}
            >
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
                <Layers
                  className={cn(
                    "h-4 w-4 shrink-0 transition-colors",
                    filterOpen
                      ? "text-emerald-500"
                      : "text-emerald-600 dark:text-emerald-400",
                  )}
                />
                {activeCategoryLabel}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-neutral-400 transition-transform duration-300",
                  filterOpen && "rotate-180 text-emerald-500",
                )}
              />
            </button>

            {filterOpen && (
              <div className="absolute right-0 top-full mt-2 w-full min-w-[220px] bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xl p-1.5">
                {categoriesWithCount.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => selectCategory(cat.key)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                        isActive
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60 hover:text-neutral-900 dark:hover:text-white",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                        )}
                        {cat.label}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-extrabold px-2 py-0.5 rounded-full",
                          isActive
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400",
                        )}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Uniform Image-First Card Grid — 4 columns, fixed landscape ratio */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleCertificates.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => openCert(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/55 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-lg cursor-pointer"
            >
              <img
                src={cert.img}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600";
                }}
              />

              {/* Hover Frosted Overlay + Verification */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1.5px] flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-neutral-900 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  View Certificate
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount(visibleCount + PAGE_SIZE)
              }
              className="outline-button whitespace-nowrap"
            >
              Load More ({visibleCount} / {filteredCertificates.length})
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Immersive Lightbox */}
      {activeCertIndex !== null && activeCert && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/35 backdrop-blur-md"
          onClick={() => setActiveCertIndex(null)}
        >
          {/* Floating Close Button */}
          <button
            onClick={() => setActiveCertIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer shadow-md"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Full-Screen Image */}
          <div
            className="w-full h-full flex items-center justify-center p-10 md:p-20 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.img}
              alt={activeCert.title}
              className="max-h-full max-w-full object-contain drop-shadow-2xl animate-fade-in"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          {/* Bottom Centered Page Indicator */}
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold bg-black/50 text-white backdrop-blur-xs border border-white/10">
            {activeCertIndex + 1} of {filteredCertificates.length}
          </span>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;