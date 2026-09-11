import React, { useCallback, useEffect, useState } from "react";
import PixelSwapSplash from "./PixelSwapSplash";

export const SplashScreen = ({ onFinish }) => {
  // Animation phases: "entry" -> "bounce" -> "swallow" -> "slide" -> "text" -> "exit"
  const [phase, setPhase] = useState("entry");
  const [pixelActive, setPixelActive] = useState(false);
  const [isDarkMode] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") !== "light" : true
  );

  useEffect(() => {
    // Stage 1: Entrance & multi-stage bounce/spin at dead center
    const timer1 = setTimeout(() => setPhase("bounce"), 50);

    // Stage 2: Swallow 'J' with smooth elastic pop & spring rebound
    const timer2 = setTimeout(() => setPhase("swallow"), 1100);

    // Stage 3: Smooth spring slide to the left
    const timer3 = setTimeout(() => setPhase("slide"), 1700);

    // Stage 4: Text reveal
    const timer4 = setTimeout(() => setPhase("text"), 2200);

    // Stage 5: Exit trigger
    const timer5 = setTimeout(() => {
      setPhase("exit");
      setPixelActive(true);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handlePixelComplete = useCallback(
    (active) => {
      if (active) onFinish();
    },
    [onFinish]
  );

  const isExiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center select-none ${
        isDarkMode ? "text-black" : "text-white"
      }`}
    >
      {/* Dynamic Smooth Keyframe Physics */}
      <style>{`
        /* Physics-based initial spring bounce & rotation */
        @keyframes ultraBounceRotate {
          0% {
            transform: scale(0.1) rotate(-180deg);
            opacity: 0;
          }
          35% {
            transform: scale(1.22) rotate(14deg);
            opacity: 1;
          }
          55% {
            transform: scale(0.92) rotate(-8deg);
          }
          72% {
            transform: scale(1.06) rotate(3deg);
          }
          88% {
            transform: scale(0.98) rotate(-1deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        /* Swallow / Pulse Effect */
        @keyframes swallowElastic {
          0% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.32) rotate(-4deg);
          }
          70% {
            transform: scale(0.92) rotate(2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        .smooth-bounce {
          animation: ultraBounceRotate 1050ms cubic-bezier(0.22, 1.25, 0.36, 1) forwards;
          will-change: transform, opacity;
        }

        .smooth-swallow {
          animation: swallowElastic 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          will-change: transform;
        }
      `}</style>

      {/* PixelSwapSplash Background */}
      <div className="absolute inset-0 z-0">
        <PixelSwapSplash
          firstContent={
            <div className={`relative w-full h-full ${isDarkMode ? "bg-white" : "bg-[#000a07]"}`}>
              <div
                className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
                  phase === "slide" || phase === "text"
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

      {/* Splash Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex items-center justify-center min-h-[96px]">
          {/* Yellow Square Badge */}
          <div
            className={`bg-[#ffc01d] rounded-sm shadow-xl flex items-center justify-center z-20 transition-all duration-750 ${
              phase === "entry" ? "opacity-0 scale-0" : ""
            } ${phase === "bounce" ? "smooth-bounce" : ""} ${
              phase === "swallow" ? "smooth-swallow" : ""
            } ${
              phase === "slide" || phase === "text" || phase === "exit"
                ? "w-14 h-14 sm:w-20 sm:h-20 opacity-100 relative translate-x-0"
                : "w-16 h-16 sm:w-24 sm:h-24 absolute"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform, width, height, opacity",
            }}
          >
            {/* The 'J' character swallowed inside */}
            <span
              className={`text-[#06070a] font-black text-2xl sm:text-4xl tracking-tighter transition-all duration-400 ${
                phase === "swallow" || phase === "slide" || phase === "text" || phase === "exit"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              J
            </span>
          </div>

          {/* Hidden/Revealing Text Drawer */}
          <div
            className={`overflow-hidden flex items-center transition-all duration-800 ${
              phase === "slide" || phase === "text" || phase === "exit"
                ? "max-w-[400px] opacity-100 ml-3 sm:ml-4"
                : "max-w-0 opacity-0 ml-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "max-width, opacity",
            }}
          >
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-widest flex items-center whitespace-nowrap">
              {/* EDT */}
              <span
                className={`transition-all duration-700 ${
                  phase === "text" || phase === "exit"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{
                  WebkitTextStroke: isDarkMode ? "1.5px black" : "1.5px white",
                  color:
                    phase === "text" || phase === "exit"
                      ? isDarkMode
                        ? "black"
                        : "white"
                      : "transparent",
                  transitionProperty: "color, transform, opacity",
                  transitionDuration: "800ms, 700ms, 700ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                EDT
              </span>

              {/* .FOLIO */}
              <span
                className={`font-light text-[#ffc01d] transition-all duration-700 ${
                  phase === "text" || phase === "exit"
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{
                  transitionDelay: "0.15s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                .FOLIO
              </span>
            </h1>
          </div>
        </div>

        {/* Subtitle Name */}
        <div
          className={`mt-10 flex flex-col items-center gap-2.5 overflow-hidden transition-all duration-1000 ${
            phase === "text" || phase === "exit"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: "0.3s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            className={`text-xs sm:text-sm font-medium tracking-[0.4em] sm:tracking-[0.5em] uppercase ${
              isDarkMode ? "text-neutral-700" : "text-neutral-300"
            }`}
          >
            Jon Eric Tripulca
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;