import { useEffect, useState } from "react";

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#61DAFB" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="2.5" /><ellipse cx="12" cy="12" rx="9" ry="3" /><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-60 12 12)" />
  </svg>
);
const LaravelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#FF2D20">
    <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.2l7 3.5-7 3.5-7-3.5 7-3.5zM4.5 9.5l7 3.5v6.5l-7-3.5V9.5zm15 0v6.5l-7 3.5V13l7-3.5z" />
  </svg>
);
const BracketsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 4L2 12l6 8" /><path d="M16 4l6 8-6 8" />
  </svg>
);
const MySqlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#00758F">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5c-.3.8-.7 1.5-1.2 2-.5.5-1.2.8-2 .8-1.6 0-2.8-1.2-2.8-2.8 0-1.6 1.2-2.8 2.8-2.8.8 0 1.5.3 2 .8.5.5.9 1.2 1.2 2zM12 8c-.8 0-1.5-.7-1.5-1.5S11.2 5 12 5s1.5.7 1.5 1.5S12.8 8 12 8zm3.5 9.5c-.3.8-.7 1.5-1.2 2-.5.5-1.2.8-2 .8-1.6 0-2.8-1.2-2.8-2.8 0-1.6 1.2-2.8 2.8-2.8.8 0 1.5.3 2 .8.5.5.9 1.2 1.2 2z" />
  </svg>
);
const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#38BDF8">
    <path d="M12 2C8 2 5.5 4.5 4.5 7c1-2 2.5-3 4.5-3 3 0 4.5 2.5 4.5 4 0 .8-.3 1.5-.8 2-.5.5-1.2.8-2 .8-2.5 0-4.5-1.5-4.5-4 0-2.5 2-4.5 4.5-4.5S14 5 14 7.5c0 2-1.5 3.5-3 3.5-.8 0-1.5-.3-2-.8-.5-.5-.8-1.2-.8-2 0-1.6 1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8c0 .8-.3 1.5-.8 2-.5.5-1.2.8-2 .8-1.6 0-2.8-1.2-2.8-2.8 0-1.6 1.2-2.8 2.8-2.8z" />
  </svg>
);
const CIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="#00599C" strokeWidth="1.8">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" /><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" />
  </svg>
);
const CSharpIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#239120">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm3 10h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm-6 0c0-2.2 1.8-4 4-4 .7 0 1.4.2 2 .5l-1 1.7c-.3-.2-.6-.2-1-.2-1.1 0-2 .9-2 2s.9 2 2 2c.4 0 .7 0 1-.2l1 1.7c-.6.3-1.3.5-2 .5-2.2 0-4-1.8-4-4z" />
  </svg>
);
const CppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#00599C">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5l7 3.5v7l-7 3.5-7-3.5V8l7-3.5zM9 12c0-1.7 1.3-3 3-3 .5 0 1 .1 1.4.4l.6-.6-.8-.5c-.4-.2-.8-.3-1.2-.3-2.2 0-4 1.8-4 4s1.8 4 4 4c.4 0 .8-.1 1.2-.3l.8-.5-.6-.6c-.4.3-.9.4-1.4.4-1.7 0-3-1.3-3-3zm6 0h-1v-1h-1v1h-1v1h1v1h1v-1h1v-1z" />
  </svg>
);
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#007396">
    <path d="M8.5 2.5S4 4 4 9c0 5 4.5 7.5 4.5 7.5s-2-1.5-2-4.5c0-3 2-6 2-9.5zM16 2.5s4.5 1.5 4.5 6.5c0 5-4.5 7.5-4.5 7.5s2-1.5 2-4.5c0-3-2-6-2-9.5z" />
    <path d="M10 12s.5 1 2 1 2-1 2-1l-.5 3H10l.5-3z" />
  </svg>
);
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
    <path d="M12 2C8 2 7 3.5 7 5v3h7v1H5c-2 0-3 1.5-3 4s1.5 4 3 4h1v-2c0-2 1.5-3 4-3h6c2 0 3-1.5 3-3V7c0-3-2-5-5-5h-3zM9 4.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#306998" />
    <path d="M12 22c4 0 5-1.5 5-3v-3h-7v-1h9c2 0 3-1.5 3-4s-1.5-4-3-4h-1v2c0 2-1.5 3-4 3H8c-2 0-3 1.5-3 3v2c0 3 2 5 5 5h2zM15 19.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
  </svg>
);
const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#339933">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7 3.8v7.8l-7 3.8-7-3.8V8.1l7-3.8zM8.5 9.5v5l2 1V11l2 1v4l2-1V9.5l-2 1v1l-2-1v-1l-2-1z" />
  </svg>
);
const PHPIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#777BB4">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9l-1-6h2l1 6zm4 0h-2l-.5-3h-2l-.5 3h-2l1-6h4l.5 3h2l.5-3h2l-1.5 6z" />
  </svg>
);
const JSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" />
    <path d="M15 16c.5.8 1.2 1.5 2.5 1.5s2.5-.7 2.5-2c0-1.2-1-1.7-2.2-2.2l-.5-.2c-1.3-.6-2.2-1.3-2.2-2.8 0-1.4 1.2-2.8 3-2.8s3 1 3.5 2l-1.5 1c-.3-.5-.8-1.2-2-1.2s-1.8.7-1.8 1.5c0 .8.6 1.2 1.8 1.7l.5.2c1.5.7 2.5 1.4 2.5 3 0 1.5-1.3 2.8-3.5 2.8s-3.3-1.3-3.8-2.5l1.5-1zm-7 0c.3.5.8 1 1.5 1s1.4-.3 1.4-1.5V11h2v4.5c0 2.3-1.5 3.5-3.4 3.5S7 17 6.5 16l1.5-1z" fill="#000" />
  </svg>
);
const GitIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="#F05032">
    <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l5.5 5.5-1.4 1.4L12 8.4 7.9 12.4 6.5 11 12 5.5zM7.9 14.6L12 10.5l4.1 4.1L12 18.7l-4.1-4.1z" />
  </svg>
);

const allIcons = [
  { icon: ReactIcon, mobile: { x: "4%", y: "12%" }, desktop: { x: "6%", y: "16%" }, delay: 0.3, speed: 3 },
  { icon: LaravelIcon, mobile: { x: "72%", y: "8%" }, desktop: { x: "75%", y: "12%" }, delay: 0.5, speed: 3.8 },
  { icon: BracketsIcon, mobile: { x: "76%", y: "78%" }, desktop: { x: "83%", y: "70%" }, delay: 0.4, speed: 3.4 },
  { icon: MySqlIcon, mobile: { x: "2%", y: "72%" }, desktop: { x: "3%", y: "66%" }, delay: 0.6, speed: 4.2 },
  { icon: TailwindIcon, mobile: { x: "10%", y: "84%" }, desktop: { x: "12%", y: "78%" }, delay: 0.35, speed: 3.2 },
  { icon: CIcon, mobile: { x: "66%", y: "22%" }, desktop: { x: "71%", y: "24%" }, delay: 0.45, speed: 3.6 },
  { icon: CSharpIcon, mobile: { x: "84%", y: "44%" }, desktop: { x: "88%", y: "46%" }, delay: 0.55, speed: 4 },
  { icon: CppIcon, mobile: { x: "2%", y: "38%" }, desktop: { x: "5%", y: "42%" }, delay: 0.5, speed: 3.5 },
  { icon: JavaIcon, mobile: { x: "60%", y: "82%" }, desktop: { x: "65%", y: "78%" }, delay: 0.4, speed: 3.9 },
  { icon: PythonIcon, mobile: { x: "14%", y: "22%" }, desktop: { x: "17%", y: "26%" }, delay: 0.6, speed: 3.3 },
  { icon: NodeIcon, mobile: { x: "68%", y: "52%" }, desktop: { x: "73%", y: "54%" }, delay: 0.35, speed: 3.7 },
  { icon: PHPIcon, mobile: { x: "20%", y: "6%" }, desktop: { x: "22%", y: "10%" }, delay: 0.45, speed: 4.1 },
  { icon: JSIcon, mobile: { x: "42%", y: "2%" }, desktop: { x: "46%", y: "4%" }, delay: 0.55, speed: 3.1 },
  { icon: GitIcon, mobile: { x: "38%", y: "90%" }, desktop: { x: "42%", y: "86%" }, delay: 0.5, speed: 3.8 },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}

export const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState("enter");
  const isMobile = useIsMobile();

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
    const exitTimer = setTimeout(() => setPhase("exit"), 2800);
    const finishTimer = setTimeout(() => onFinish(), 3500);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (phase === "exit") {
    return (
      <div className="fixed inset-0 z-[9999] bg-background transition-all duration-700 ease-in-out opacity-0 scale-105" />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-background transition-all duration-700 ease-in-out opacity-100 scale-100">
      {/* Scattered tech icons */}
      {allIcons.map((item, i) => {
        const Icon = item.icon;
        const pos = isMobile ? item.mobile : item.desktop;
        return (
          <span
            key={i}
            className="absolute flex items-center justify-center w-7 h-7 md:w-10 md:h-10 bg-white dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 rounded-lg md:rounded-xl shadow-xs"
            style={{
              left: pos.x,
              top: pos.y,
              opacity: 0,
              animation: `fade-in 0.5s ease-out ${item.delay}s forwards, splash-float ${item.speed}s ease-in-out infinite`,
              animationDelay: `${item.delay}s, ${item.delay + 0.6}s`,
            }}
          >
            <Icon />
          </span>
        );
      })}

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-4 md:space-y-6 pointer-events-auto">
          <div className="flex items-center justify-center gap-1.5 md:gap-2">
            {["J", "E", "D", "T"].map((letter, i) => (
              <span
                key={letter}
                className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-primary inline-block"
                style={{
                  opacity: 0,
                  animation: `fade-in 0.5s ease-out ${0.1 + i * 0.15}s forwards`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <div
              className="h-0.5 w-32 sm:w-40 md:w-48 bg-linear-to-r from-transparent via-emerald-400 to-transparent rounded-full origin-center"
              style={{
                transform: "scaleX(0)",
                animation: "expand 1s ease-out 0.8s forwards",
              }}
            />
          </div>

          <p
            className="text-xs sm:text-sm md:text-base font-medium text-neutral-400 dark:text-neutral-500 tracking-wide px-4"
            style={{
              opacity: 0,
              animation: "fade-in 0.6s ease-out 1.2s forwards",
            }}
          >
            Full-Stack Developer, IT Support & Designer
          </p>

        </div>
      </div>
    </div>
  );
};
