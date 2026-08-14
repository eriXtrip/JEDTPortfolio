import { useEffect, useState } from "react";

import img1 from "../assets/SplashImg/Splash (1).png";
import img2 from "../assets/SplashImg/Splash (2).png";
import img3 from "../assets/SplashImg/Splash (3).png";
import img4 from "../assets/SplashImg/Splash (4).png";
import img5 from "../assets/SplashImg/Splash (5).png";
import img6 from "../assets/SplashImg/Splash (6).png";
import img7 from "../assets/SplashImg/Splash (7).png";
import img8 from "../assets/SplashImg/Splash (8).png";
import img9 from "../assets/SplashImg/Splash (9).png";
import img10 from "../assets/SplashImg/Splash (10).png";
import img11 from "../assets/SplashImg/Splash (11).png";

const repeat = (items, count) => Array.from({ length: count }, () => items).flat();

const gridRows = [
  {
    height: "h-27 md:h-47",
    gap: "gap-3 md:gap-6",
    delay: 0.35,
    items: repeat(
      [
        { src: img7, width: "w-59 md:w-83" },
        { src: img8, width: "w-15 md:w-25" },
        { src: img9, width: "w-59 md:w-85" },
        { src: img10, width: "w-59 md:w-85" },
      ],
      3
    ),
  },
  {
    height: "h-35 md:h-55",
    gap: "gap-4 md:gap-7",
    delay: 0.6,
    items: repeat(
      [
        { src: img11, width: "w-65 md:w-99" },
        { src: img3, width: "w-65 md:w-99" },
        { src: img4, width: "w-17 md:w-29" },
        { src: img5, width: "w-65 md:w-99" },
        { src: img6, width: "w-17 md:w-29" },
      ],
      3
    ),
  },
  {
    height: "h-36 md:h-60",
    gap: "gap-5 md:gap-8",
    delay: 0.85,
    items: repeat(
      [
        { src: img1, width: "w-72 md:w-112" },
        { src: img2, width: "w-16 md:w-30" },
      ],
      6
    ),
  },
];

export const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter");

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

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 3600);
    const finishTimer = setTimeout(() => onFinish(), 4900);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  const exiting = phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-background select-none transition-opacity duration-[1100ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${exiting ? "opacity-0" : "opacity-100"
        }`}
    >
      <div
        className={`absolute inset-0 will-change-transform transition-all duration-[1100ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${exiting
          ? "opacity-0 blur-2xl scale-110 -translate-y-4 translate-x-2 rotate-[0.5deg]"
          : "opacity-100 blur-0 scale-100 translate-y-0 translate-x-0 rotate-0"
          }`}
      >

        {/* Branding — top-left */}
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 z-30 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] mb-5">
            JEDT<br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent font-black">PORTFOLIO{" "}</span>
            </span>
          </h2>
        </div>

        {/* Isometric angled grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[60%] top-[70%] w-[200%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] skew-x-[-5deg]">
            <div className="flex flex-col items-center gap-8 md:gap-10">
              {gridRows.map((row, r) => (
                <div key={r} className={`flex items-center ${row.gap}`}>
                  {row.items.map((item, i) => (
                    <div
                      key={i}
                      className={`relative ${item.width} ${row.height} shrink-0 overflow-hidden shadow-[0_18px_45px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/15 dark:ring-white/10`}
                      style={{
                        opacity: 0,
                        animation: `fade-in 0.8s cubic-bezier(0.22,1,0.36,1) ${row.delay + i * 0.12
                          }s forwards`,
                      }}
                    >
                      <img
                        src={item.src}
                        alt=""
                        draggable={false}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};