import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      setIsDarkMode(true);
      applyTheme(true);
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      applyTheme(false);
    } else {
      setIsDarkMode(true);
      applyTheme(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2.5 rounded-2xl bg-neutral-100/60 dark:bg-neutral-900/60 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-800/60 text-neutral-600 dark:text-neutral-300 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center shadow-2xs backdrop-blur-xs",
        "focus:outline-none"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-amber-500 animate-pulse" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-500" />
      )}
    </button>
  );
};
