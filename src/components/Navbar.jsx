import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeToggle } from "./ThemeToggle";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-4 backdrop-blur-md border-b border-border/40 shadow-xs"
          : "py-6 bg-transparent",
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <a
          className="text-xl font-bold tracking-tight text-foreground flex items-center relative z-50"
          href="#hero"
        >
          <span className="relative z-10 font-bold tracking-tighter">
            JEDT
            <span className="font-light text-neutral-400 dark:text-neutral-500">
              .portfolio
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
        </div>

        {/* Mobile Actions (Theme Toggle & Hamburger Menu) */}
        <div className="flex items-center gap-2 md:hidden relative z-50">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        <div
          className={cn(
            "fixed inset-0 h-[100dvh] w-screen bg-background/98 backdrop-blur-md z-40 flex flex-col items-center justify-center overflow-y-auto",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-6 text-2xl font-bold text-center py-20 min-h-full justify-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};
