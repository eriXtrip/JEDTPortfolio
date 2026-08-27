import React, { useCallback, useEffect, useState } from "react";
import PixelSwapSplash from "./PixelSwapSplash";

export const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading, expand, text, exit
  const [pixelActive, setPixelActive] = useState(false);
  const [isDarkMode] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") !== "light" : true
  );

  useEffect(() => {

    const duration = 2000;
    const interval = 20;
    let current = 0;

    const timer = setInterval(() => {
      current += 100 / (duration / interval);
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        setPhase("expand");

        setTimeout(() => {
          setPhase("text");
        }, 600); // Trigger text reveal after square expands

        setTimeout(() => {
          setPhase("exit");
          setPixelActive(true); // Trigger pixel swap transition
        }, 3200); // Trigger exit fade
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const handlePixelComplete = useCallback(
    (active) => {
      if (active) onFinish();
    },
    [onFinish]
  );

  const isExiting = phase === "exit";

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center select-none ${isDarkMode ? "text-black" : "text-white"}`}>
      {/* PixelSwapSplash Background */}
      <div className="absolute inset-0 z-0">
        <PixelSwapSplash
          firstContent={
            <div className={`relative w-full h-full ${isDarkMode ? "bg-white" : "bg-[#000a07]"}`}>
              <div
                className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${phase === "expand" || phase === "text"
                  ? "opacity-60 scale-100"
                  : "opacity-0 scale-105"
                  }`}
                style={{
                  backgroundImage: isDarkMode
                    ? "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)"
                    : "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "4rem 4rem",
                  backgroundPosition: "center center",
                }}
              />
            </div>
          }
          secondContent={<div className="w-full h-full bg-transparent" />}
          pattern="center out"
          animationDirection="out"
          trigger="active"
          active={pixelActive}
          onComplete={handlePixelComplete}
          duration={2300}
          pixelDuration={200}
          pixelSize={80}
          gap={0}
          pixelRadius={0}
          pixelSpin={0}
          pixelScale={0.35}
          fade={true}
          aspectRatio="auto"
          className="w-full h-full"
          style={{ aspectRatio: "unset" }}
        />
      </div>

      {/* Splash Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${isExiting ? "opacity-0" : "opacity-100"
          }`}
      >
        {/* The Badge & Logo Reveal */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {/* Yellow Square Badge */}
          <div
            className={`bg-[#ffc01d] transition-all duration-700 ease-[cubic-bezier(0.83,0,0.17,1)] flex items-center justify-center overflow-hidden rounded-sm ${phase !== "loading"
              ? "w-14 h-14 sm:w-20 sm:h-20 opacity-100 rotate-0"
              : "w-0 h-0 opacity-0 -rotate-90"
              }`}
          >
            <span
              className={`text-[#06070a] font-black text-2xl sm:text-4xl tracking-tighter transition-opacity duration-500 delay-300 ${phase === "text" ? "opacity-100" : "opacity-0"
                }`}
            >
              J
            </span>
          </div>

          {/* SVG Text Draw Simulation - EDT.FOLIO */}
          <div className="overflow-hidden flex items-center h-20 sm:h-24">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-widest flex items-center">
              {/* Outline / Stroke Text */}
              <span
                className={`transition-all duration-1000 ease-in-out ${phase !== "loading"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                  }`}
                style={{
                  WebkitTextStroke: isDarkMode ? "1.5px black" : "1.5px white",
                  color: phase === "text" ? (isDarkMode ? "black" : "white") : "transparent",
                  transition:
                    "color 1s ease 0.4s, transform 0.8s ease, opacity 0.8s ease",
                }}
              >
                EDT
              </span>
              <span
                className={`font-light text-[#ffc01d] transition-all duration-1000 ease-in-out ${phase === "text"
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
                  }`}
                style={{ transitionDelay: "0.2s" }}
              >
                .FOLIO
              </span>
            </h1>
          </div>
        </div>

        {/* Name */}
        <div
          className={`mt-10 flex flex-col items-center gap-2.5 overflow-hidden transition-all duration-1000 delay-500 ease-out ${phase === "text"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
            }`}
        >
          <div className={`text-xs sm:text-sm font-medium tracking-[0.4em] sm:tracking-[0.5em] uppercase ${isDarkMode ? "text-neutral-700" : "text-neutral-300"}`}>
            Jon Eric Tripulca
          </div>
        </div>
      </div>

      {/* Loader Counter */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 z-20">
        <span className="font-mono text-sm sm:text-base font-light tracking-wider text-[#ffc01d]">
          {progress.toString().padStart(2, "0")}
        </span>
        <span
          className={`w-1.5 h-4 sm:h-5 bg-[#ffc01d] animate-pulse ${progress === 100 ? "hidden" : "block"
            }`}
        ></span>
      </div>
    </div>
  );
};

export default SplashScreen;