import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeToggle } from "./ThemeToggle";
import LineSidebar from "./LineSidebar";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Pubmats", href: "#pubmats" },
  { name: "Services", href: "#skills" },
  { name: "Stack", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ isDarkMode, onThemeToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when side panel is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const activeIndex = navItems.findIndex(
    (item) => item.href.substring(1) === activeSection
  );

  const handleLineItemClick = (index) => {
    const targetItem = navItems[index];
    if (targetItem) {
      setIsSidebarOpen(false);
      window.location.href = targetItem.href;
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "py-4 bg-white/80 dark:bg-neutral-950/30 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-xs"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Brand Badge */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-neutral-900 dark:text-white transition-colors"
          >
            <span className="w-3 h-3 bg-indigo-600 dark:bg-indigo-500 transition-transform duration-300 group-hover:rotate-45" />
            <span className="text-lg font-black tracking-tight uppercase">
              JEDT
              <span className="text-neutral-400 dark:text-neutral-500 font-normal">
                .folio
              </span>
            </span>
          </a>

          {/* Right Actions Trigger Bar */}
          <div className="flex items-center gap-3 md:gap-5">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all duration-300 cursor-pointer"
              aria-label="Open Navigation Drawer"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-800 dark:text-neutral-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Menu
              </span>
              <div className="flex flex-col gap-1 w-4">
                <span className="w-full h-0.5 bg-neutral-800 dark:bg-neutral-200 group-hover:bg-indigo-500 transition-all duration-300 group-hover:translate-x-0.5" />
                <span className="w-3/4 h-0.5 bg-neutral-800 dark:bg-neutral-200 group-hover:bg-indigo-500 transition-all duration-300 self-end" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-neutral-950/30 backdrop-blur-xs z-50 transition-opacity duration-500 ease-in-out",
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sliding Side-Panel Drawer */}
      <aside
        data-lenis-prevent
        className={cn(
          "fixed top-0 right-0 h-screen w-full max-w-md bg-white dark:bg-neutral-950 border-l border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl z-[150] flex flex-col justify-between p-8 md:p-12 transition-transform duration-500 ease-in-out text-left",
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 dark:border-neutral-800/80 flex-shrink-0">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Navigation
            </span>
            <h3 className="text-xl font-black text-neutral-900 dark:text-white uppercase tracking-tight">
              Index
            </h3>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-indigo-500/40 transition-all cursor-pointer"
            aria-label="Close Navigation Drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Interactive React-Bits LineSidebar Component */}
        <div className="flex-1 overflow-y-auto py-6 flex items-center">
          <LineSidebar
            items={navItems.map((item) => item.name)}
            accentColor="#6366f1"
            textColor={isDarkMode ? "#9ca3af" : "#4b5563"}
            markerColor={isDarkMode ? "#374151" : "#d1d5db"}
            showIndex
            showMarker
            proximityRadius={100}
            maxShift={24}
            falloff="smooth"
            markerLength={100}
            markerGap={12}
            tickScale={0.5}
            scaleTick
            itemGap={18}
            fontSize={1.2}
            smoothing={100}
            defaultActive={activeIndex >= 0 ? activeIndex : 0}
            onItemClick={handleLineItemClick}
            className="w-full"
          />
        </div>

        {/* Drawer Footer Status */}
        <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Open to Work
          </div>
          <span className="text-xs text-neutral-400 dark:text-neutral-600 font-mono">
            © 2025 JEDT
          </span>
        </div>
      </aside>
    </>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default Navbar;
