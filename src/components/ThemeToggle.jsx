import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ isDarkMode, onToggle }) => (
  <button
    onClick={onToggle}
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

ThemeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};