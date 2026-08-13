import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-850 relative">
      <div className="container max-w-7xl mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-semibold tracking-widest text-neutral-400 dark:text-neutral-500 uppercase text-center md:text-left">
          &copy; 2025 Jon Eric Tripulca. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-3 border border-neutral-300 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all flex items-center justify-center cursor-pointer hover:translate-y-[-2px]"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
};

