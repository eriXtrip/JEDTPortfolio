import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Award,
  Copy,
  Check,
  Maximize2,
  X,
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
    category: "job-readiness",
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
];

export const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Define descriptive labels for our categories
  const categories = [
    { key: "all", label: "All" },
    { key: "diploma", label: "Diploma" },
    { key: "technical", label: "Technical Instruction" },
    { key: "leadership", label: "Leadership Distinction" },
    { key: "job-readiness", label: "Job Readiness" },
    { key: "training", label: "Training Completion" },
    { key: "recognition", label: "Recognition" },
  ];

  // Filter certificates based on active tab
  const filteredCertificates = (activeCategory === "all"
    ? [...certificates]
    : certificates.filter((cert) => cert.category === activeCategory)
  ).sort((a, b) => b.id - a.id);
  const activeCert =
    activeCertIndex !== null ? filteredCertificates[activeCertIndex] : null;

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

  return (
    <section
      id="certificates"
      className="py-24 px-6 md:px-12 bg-neutral-50 dark:bg-neutral-950/40 relative"
    >
      <div className="container max-w-7xl mx-auto px-1">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-emerald-500 dark:text-emerald-400 uppercase">
            Accreditation & Awards
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            My Certificates
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
            Verified academic, leadership, and highly technical certifications
            issued by TESDA and Bicol University.
          </p>
        </div>

        {/* Category Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const count =
              cat.key === "all"
                ? certificates.length
                : certificates.filter((c) => c.category === cat.key).length;

            // Only render categories that have items (or 'all')
            if (count === 0) return null;

            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setActiveCertIndex(null); // Reset modal index when switching categories
                }}
                className={cn(
                  "px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-2xs border",
                  isActive
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white scale-102"
                    : "bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-800 dark:hover:text-neutral-200",
                )}
              >
                {cat.label}
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full",
                    isActive
                      ? "bg-white/20 dark:bg-neutral-900/10 text-white dark:text-neutral-900 font-extrabold"
                      : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 font-semibold",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 mid:px-2">
          {filteredCertificates.map((cert, index) => {
            const isCopied = copiedId === cert.id;
            return (
              <div
                key={cert.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/80 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image Container with Badges */}
                <div
                  className="w-full aspect-[1.414/1] overflow-hidden bg-neutral-50 dark:bg-neutral-950/80 border-b border-neutral-100 dark:border-neutral-800/80 relative cursor-pointer"
                  onClick={() => setActiveCertIndex(index)}
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103 filter grayscale-[10%] group-hover:grayscale-0"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  {/* Floating Left Category Tag */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-lg bg-neutral-900/80 text-white dark:bg-white/80 dark:text-neutral-900 shadow-sm backdrop-blur-xs">
                    {cert.categoryLabel}
                  </span>

                  {/* Floating Right Verified Tag */}
                  <span className="absolute top-4 right-4 px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-xs flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>

                  {/* Hover Frosted Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-350 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-neutral-900 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Maximize2 className="h-3.5 w-3.5" />
                      Quick View
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                  {/* Title & Issuer */}
                  <div className="space-y-1">
                    <h3
                      className="text-base font-extrabold text-neutral-900 dark:text-white line-clamp-2 leading-snug cursor-pointer group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
                      onClick={() => setActiveCertIndex(index)}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 pt-0.5">
                      <Award className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Action View Button */}
                  <button
                    onClick={() => setActiveCertIndex(index)}
                    className="w-full py-3 text-[11px] font-bold uppercase tracking-widest bg-neutral-50 hover:bg-neutral-900 dark:bg-neutral-850 dark:hover:bg-white text-neutral-700 hover:text-white dark:text-neutral-800 dark:hover:text-neutral-900 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 border border-neutral-200/50 dark:border-neutral-800/80 cursor-pointer shadow-2xs"
                  >
                    View Details
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Immersive Detail Modal */}
      {activeCertIndex !== null && activeCert && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setActiveCertIndex(null)}
        >
          {/* Main Modal Shell Container */}
          <div
            className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] overflow-hidden relative border border-neutral-200 dark:border-neutral-800 transition-all duration-300 flex flex-col md:flex-row z-10 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              onClick={() => setActiveCertIndex(null)}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-850 dark:hover:bg-neutral-500 text-neutral-600 dark:text-neutral-900 transition-all cursor-pointer shadow-xs"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Side: Premium High-Fi Certificate Image Viewer */}
            <div className="md:w-3/5 bg-neutral-950 dark:bg-neutral-950/90 flex items-center justify-center p-6 relative border-b md:border-b-0 md:border-r border-neutral-200 dark:border-neutral-800 min-h-[250px] md:min-h-[400px] select-none">
              {/* Floating Carousel Arrows */}
              <button
                onClick={handleModalPrev}
                className="absolute left-4 p-3 border border-white/10 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer z-20 backdrop-blur-xs"
                aria-label="Previous Certificate"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="w-full h-full flex items-center justify-center max-h-[50vh] md:max-h-[70vh]">
                <img
                  src={activeCert.img}
                  alt={activeCert.title}
                  className="max-h-full max-w-full object-contain rounded-xl shadow-md cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => window.open(activeCert.img, "_blank")}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://images.unsplash.com/photo-1589330694653-ded6df53f6ee?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>

              <button
                onClick={handleModalNext}
                className="absolute right-4 p-3 border border-white/10 bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer z-20 backdrop-blur-xs"
                aria-label="Next Certificate"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Bottom Centered Page Indicator */}
              <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white backdrop-blur-xs">
                {activeCertIndex + 1} of {filteredCertificates.length}
              </span>
            </div>

            {/* Right Side: Detailed Metadata Sheet */}
            <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto space-y-6 max-h-[40vh] md:max-h-[85vh] text-left">
              <div className="space-y-5">
                {/* Tags Block */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800">
                    {activeCert.categoryLabel}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="h-3 w-3" />
                    Verified Credential
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl md:text-2xl font-black text-neutral-900 dark:text-white leading-tight">
                  {activeCert.title}
                </h3>

                {/* Metadata Cards */}
                <div className="space-y-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/40 dark:border-neutral-800/45">
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                      Issuing Organization
                    </h5>
                    <p className="text-sm font-extrabold text-neutral-800 dark:text-neutral-200 mt-1 flex items-center gap-2">
                      <Award className="h-4 w-4 text-emerald-500" />
                      {activeCert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              {/* External Tab / Verification Button */}
              <div className="pt-4 space-y-3">
                <a
                  href={activeCert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-xs font-bold uppercase tracking-widest bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  View Original Certificate{" "}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                {copiedId === activeCert.id && (
                  <p className="text-center text-[10px] font-bold text-emerald-500 animate-pulse">
                    ✓ Credential ID Copied to Clipboard!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
