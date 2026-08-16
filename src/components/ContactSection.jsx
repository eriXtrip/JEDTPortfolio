import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
} from "lucide-react";
import { useRef, useState } from "react";
import profileImg2 from "../assets/Profile5.png";
import qrcode from "../assets/qrcode_jedt-portfolio.vercel.app.png";
import html2canvas from "html2canvas-pro";
import { CallingCardFace } from "./CallingCard";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ccerilac", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/ccerilac/", Icon: Instagram },
  { label: "GitHub", href: "https://github.com/eriXtrip", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jon-eric-tripulca-2b87ab417", Icon: Linkedin },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef(null);

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

  const handleDownloadCard = async () => {
    if (!cardRef.current) return;

    setDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = "Jon-Eric-Tripulca-Calling-Card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();

      toast({
        title: "Calling card downloaded!",
        description: "Your calling card has been saved as a PNG image.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Download failed",
        description: "Could not render the calling card. Please try again.",
      });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-24 px-3 md:px-10 bg-white dark:bg-neutral-900 relative overflow-hidden"
      >

        <div className="container max-w-7xl mx-auto relative z-10">
          {/* Horizontal / Landscape Layout Grid — Left Visual (40%) · Right Content (60%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 lg:min-h-[680px]">

            {/* ============ LEFT COLUMN — Visual / Portrait ============ */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Full-Height Portrait Photo */}
              <div className="relative flex-1 min-h-[380px] sm:min-h-[520px] lg:min-h-0 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-800">
                <img
                  src={profileImg2}
                  alt="Jon Eric Tripulca"
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
              </div>
            </div>

            {/* ============ RIGHT COLUMN — Content ============ */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-3">
                  <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-none">
                    Contact
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
                    Currently open to full-time roles, internships, and freelance technical projects. Feel free to reach out via email or phone.
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30 px-4 py-2 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse" />
                  Open to Work
                </span>
              </div>

              {/* Contact Details Strip — Phone · Email · Location */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="tel:+639054205568"
                  className="group flex items-start gap-3 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20"
                >
                  <span className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Phone No.
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      +63 905 420 5568
                    </span>
                  </span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="group flex items-start gap-3 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 text-left cursor-pointer"
                >
                  <span className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Email Address
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 break-all">
                      {copied ? "Copied to clipboard!" : emailAddress}
                    </span>
                  </span>
                </button>

                <a
                  href="https://maps.google.com/?q=Legazpi+City,+Albay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4 transition-all duration-300 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20"
                >
                  <span className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Legazpi City, Albay, PH
                    </span>
                  </span>
                </a>
              </div>

              {/* Middle Section — Full Name Block + Portfolio QR Code */}
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex items-center justify-between gap-8 flex-wrap">
                {/* Full Name (left) + QR Code (right) */}
                <div className="w-full flex items-center justify-between gap-8 flex-wrap">
                  {/* Full Name — left side */}
                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-widest font-bold text-neutral-400 dark:text-neutral-500">
                      Full Name
                    </p>
                    <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
                      Jon Eric{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
                        Tripulca
                      </span>
                    </h3>
                  </div>

                  {/* QR Code — right side */}
                  <div className="flex items-center gap-3 shrink-0">
                    <img
                      src={qrcode}
                      alt="Portfolio QR Code"
                      className="h-28 w-28 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 [writing-mode:vertical-rl]">
                      Portafolio
                    </span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="flex items-center gap-8 shrink-0 pr-1">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-2.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-400 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 hover:scale-115 transition-all duration-300 shadow-xs"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calling Card — View & Download */}
        <div className="container max-w-5xl mx-auto relative z-10 mt-16 md:mt-20">
          <div className="text-center space-y-3 mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Digital Calling Card
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
              Grab My{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400">
                Card
              </span>
            </h3>
          </div>

          <CallingCardFace />

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDownloadCard}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              {downloading ? "Rendering..." : "Download Calling Card"}
            </button>
          </div>
        </div>
      </section>

      {/* Hidden light-mode capture copy (off-screen) for the PNG download */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-9999px] top-0 w-[900px] max-w-none"
      >
        <div ref={cardRef} className="bg-white dark:bg-neutral-900">
          <CallingCardFace forceLandscape />
        </div>
      </div>
    </>
  );
};