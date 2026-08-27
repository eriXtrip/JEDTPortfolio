import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CardLong({ categories }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!categories || categories.length === 0) return null;

  const midIndex = (categories.length - 1) / 2;

  return (
    <div
      className="relative flex items-center justify-center h-[28rem] sm:h-[36rem] w-full cursor-pointer max-w-6xl mx-auto overflow-hidden sm:overflow-visible"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {categories.map((cat, index) => {
        const offset = index - midIndex; // e.g. [-3, -2, -1, 0, 1, 2, 3]

        // Dynamic multipliers based on total length and screen size
        let xOffsetCollapsed = 30;
        let xOffsetExpanded = categories.length > 5 ? 70 : 110;

        if (windowWidth < 640) {
          xOffsetCollapsed = 12;
          xOffsetExpanded = categories.length > 5 ? 35 : 50;
        } else if (windowWidth < 1024) {
          xOffsetCollapsed = 20;
          xOffsetExpanded = categories.length > 5 ? 50 : 80;
        }

        return (
          <motion.div
            key={index}
            className="absolute w-44 sm:w-64 lg:w-72 h-[18rem] sm:h-[26rem] bg-white dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-800/55 rounded-3xl overflow-hidden group text-left origin-bottom shadow-lg backdrop-blur-sm"
            animate={{
              x: isExpanded ? offset * xOffsetExpanded : offset * xOffsetCollapsed,
              y: isExpanded ? 0 : Math.abs(offset) * 12 - 10,
              rotate: isExpanded ? offset * 2 : offset * 6,
              scale: isExpanded ? 1.05 : 1,
            }}
            whileHover={{
              y: isExpanded ? -20 : (Math.abs(offset) * 12 - 25),
              scale: isExpanded ? 1.1 : 1.05,
              zIndex: 50,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            style={{
              zIndex: isExpanded ? index : categories.length - Math.abs(offset), // Center cards higher z-index when collapsed
            }}
          >
            <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 h-full flex flex-col pointer-events-none group-hover:pointer-events-auto">
              <h3 className="text-sm sm:text-lg font-extrabold text-neutral-900 dark:text-white group-hover:text-[#ffc01d] transition-colors leading-tight">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 overflow-y-auto no-scrollbar pb-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-neutral-100/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-[9px] sm:text-[11px] font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-[#ffc01d]/10 hover:text-[#ffc01d] hover:border-[#ffc01d]/40 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
