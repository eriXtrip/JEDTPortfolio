import {
  Instagram,
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
  Check,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const emailAddress = "jonerictripulca@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    toast({
      title: "Email address copied!",
      description: "You can now paste it directly into your email client.",
    });
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-white dark:bg-neutral-900 relative overflow-hidden"
    >
      {/* Decorative Background Accent Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10 text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30 px-4 py-2 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse"></span>
            Available for Collaborations & Hiring
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Let's Construct Something Exceptional
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
            Have an exciting project, internship opportunity, or looking to
            build modern web solutions? Select your preferred method below to
            start the conversation!
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6">
          {/* Card 1: Direct Email Hub */}
          <div className="group bg-neutral-50/50 dark:bg-neutral-900/55 border border-neutral-200/40 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg dark:hover:border-emerald-400/50 backdrop-blur-xs">
            <div className="space-y-4 flex flex-col items-center">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Direct Email
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">
                  Primary contact channel
                </p>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-950 px-3.5 py-2 rounded-xl border border-neutral-200/20 dark:border-neutral-800/20 break-all select-all">
                {emailAddress}
              </p>
            </div>

            <div className="w-full space-y-3 pt-6">
              <a
                href={`mailto:${emailAddress}`}
                className=" w-full py-3 text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                Send an Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-950 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    Copied! <Check className="h-3.5 w-3.5 text-emerald-500" />
                  </>
                ) : (
                  <>
                    Copy Address <Copy className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Voice & Messaging */}
          <div className="group bg-neutral-50/50 dark:bg-neutral-900/55 border border-neutral-200/40 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg dark:hover:border-emerald-400/50 backdrop-blur-xs">
            <div className="space-y-4 flex flex-col items-center">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Call & Message
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">
                  Standard mobile call / SMS
                </p>
              </div>
              <p className="text-sm font-semibold text-neutral-850 dark:text-neutral-200 select-all">
                +63 905 420 5568
                <br />
                +63 992 283 0813
              </p>
            </div>

            <div className="w-full space-y-3 pt-6">
              <a
                href="tel:+639054205568"
                className=" w-full py-3 text-xs font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                Call Direct
              </a>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-semibold uppercase tracking-wider">
                Active daily during office hours
              </p>
            </div>
          </div>

          {/* Card 3: Location Hub */}
          <div className="group bg-neutral-50/50 dark:bg-neutral-900/55 border border-neutral-200/40 dark:border-neutral-800/50 rounded-3xl p-8 flex flex-col justify-between items-center text-center transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg dark:hover:border-emerald-400/50 backdrop-blur-xs">
            <div className="space-y-4 flex flex-col items-center">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Location & Availability
                </h3>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">
                  Timezone & Setup
                </p>
              </div>
              <p className="text-sm font-semibold text-neutral-850 dark:text-neutral-200">
                Legazpi City, Albay, PH
              </p>
            </div>

            <div className="w-full space-y-3 pt-6">
              <a
                href="https://maps.google.com/?q=Legazpi+City,+Albay"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-full py-3 text-xs font-bold uppercase tracking-wider border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-950 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                View on Map
              </a>
              <p className="text-[10px] text-emerald-650 dark:text-emerald-450 font-semibold uppercase tracking-wider">
                Remote Worldwide / Hybrid PH
              </p>
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="w-16 h-0.5 bg-neutral-200 dark:bg-neutral-800 mx-auto my-6" />

        {/* Social Channels Row */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
            Let's connect socially
          </p>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/ccerilac"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 hover:scale-115 transition-all duration-300 shadow-xs"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/ccerilac/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 hover:scale-115 transition-all duration-300 shadow-xs"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/eriXtrip"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 hover:scale-115 transition-all duration-300 shadow-xs"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
