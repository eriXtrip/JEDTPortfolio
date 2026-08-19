import { useEffect, useState } from "react";
import { Download, CheckCircle2, FileCode, Layers, ShieldCheck, Terminal, Cpu } from "lucide-react";

import img1 from "../assets/SplashImg/Splash (1).png";
import img2 from "../assets/SplashImg/Splash (2).png";
import img3 from "../assets/SplashImg/Splash (3).png";
import img4 from "../assets/SplashImg/Splash (4).png";
import img5 from "../assets/SplashImg/Splash (5).png";
import img6 from "../assets/SplashImg/Splash (6).png";

const assetFiles = [
  { name: "bucs_mcc_app.spec", size: "4.2 MB", type: "React + Laravel", icon: Layers, img: img1 },
  { name: "comelec_acm.sys", size: "1.8 MB", type: "Network Config", icon: Terminal, img: img2 },
  { name: "pubmats_bundle.zip", size: "8.5 MB", type: "Design Media", icon: FileCode, img: img3 },
  { name: "it_support_suite.iso", size: "3.1 MB", type: "System Tools", icon: Cpu, img: img4 },
  { name: "portfolio_core.v2", size: "2.4 MB", type: "React + Tailwind", icon: ShieldCheck, img: img5 },
  { name: "certifications.pack", size: "1.2 MB", type: "Accreditations", icon: CheckCircle2, img: img6 },
];

export const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const applyTheme = (dark) => {
      if (dark) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }
    };

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      applyTheme(true);
    } else if (storedTheme === "light") {
      applyTheme(false);
    } else {
      applyTheme(true);
    }
  }, []);

  // Downloading files simulation ticker — extended duration (~6s total animation)
  useEffect(() => {
    const fileInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % assetFiles.length);
    }, 850);

    const progressInterval = setInterval(() => {
      setDownloadProgress((prev) => Math.min(100, prev + 1.25));
    }, 70);

    const exitTimer = setTimeout(() => setPhase("exit"), 5600);
    const finishTimer = setTimeout(() => onFinish(), 6500);

    return () => {
      clearInterval(fileInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const activeFile = assetFiles[currentIndex];
  const ActiveIcon = activeFile.icon;
  const exiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-neutral-950 text-white select-none transition-all duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] ${exiting ? "opacity-0 scale-105 filter blur-md" : "opacity-100 scale-100 filter blur-0"
        }`}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ffc01d]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Center Container */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-6 text-center">

        {/* Header Branding */}
        <div className="space-y-1 max-w-lg mb-8">
          <div className="inline-flex items-center gap-2 px-1 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#ffc01d]">
            Initializing...
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            JEDT<span className="text-neutral-500 font-light">.FOLIO</span>
          </h1>
        </div>

        {/* Live File Downloading Terminal Card */}
        <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl text-left space-y-5">
          {/* Card Top Indicator */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Download className="h-4 w-4 text-[#ffc01d] animate-bounce" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-200">
                Fetching Project Assets
              </span>
            </div>
            <span className="text-xs font-mono text-[#ffc01d] font-bold">
              {Math.round(downloadProgress)}%
            </span>
          </div>

          {/* Active File Line Item */}
          <div className="flex items-center gap-4 bg-neutral-950/60 p-3.5 rounded-2xl border border-white/10">
            {/* Image Preview Thumbnail */}
            <div className="relative h-12 w-16 rounded-xl overflow-hidden bg-neutral-800 border border-white/10 shrink-0">
              <img
                src={activeFile.img}
                alt=""
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* File Info */}
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white truncate">
                  {activeFile.name}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 ml-2 shrink-0">
                  {activeFile.size}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-400">
                <ActiveIcon className="h-3 w-3 text-[#ffc01d]" />
                <span className="truncate">{activeFile.type}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-[#ffc01d] rounded-full transition-all duration-150 ease-out"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span>status: downloading assets...</span>
              <span className="text-[#ffc01d]">[{currentIndex + 1}/6]</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SplashScreen;