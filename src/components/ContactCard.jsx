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
import PropTypes from "prop-types";
import html2canvas from "html2canvas-pro";
import profileImg2 from "../assets/Profile5.png";
import qrcode from "../assets/qrcode_jedt-portfolio.vercel.app.png";
import TiltedCard from "./TiltedCard";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100093856429551", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/by.jet_/", Icon: Instagram },
  { label: "GitHub", href: "https://github.com/eriXtrip", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jon-eric-tripulca-2b87ab417", Icon: Linkedin },
];

const contacts = [
  {
    label: "Email",
    value: "jonerictripulca@gmail.com",
    href: "mailto:jonerictripulca@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 905 420 5568",
    href: "tel:+639054205568",
    Icon: Phone,
  },
  {
    label: "Location",
    value: "Legazpi City, Albay, PH",
    href: "https://maps.google.com/?q=Legazpi+City,+Albay",
    Icon: MapPin,
  },
];

export const CallingCardFace = ({ forceLandscape = false }) => {
  const gridClass = forceLandscape
    ? "relative grid grid-cols-12 gap-6 p-8"
    : "relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 p-6 md:p-8";

  const leftClass = forceLandscape
    ? "col-span-9 space-y-6"
    : "md:col-span-9 space-y-6";

  const rightClass = forceLandscape
    ? "col-span-3 flex flex-col items-center justify-center gap-6 border-l border-neutral-200/80 dark:border-neutral-800 pl-7"
    : "md:col-span-3 flex flex-row md:flex-col items-center justify-between md:justify-center gap-6 md:border-l md:border-neutral-200/80 dark:md:border-neutral-800 md:pl-7";

  const qrLabelClass = forceLandscape ? "block" : "hidden md:block";
  const qrTextClass = forceLandscape
    ? "text-left"
    : "text-center md:text-left";
  const footerClass = forceLandscape ? "px-10" : "px-6 md:px-10";

  return (
    <TiltedCard
      altText="Jon Eric Tripulca — Digital Calling Card"
      containerWidth="100%"
      containerHeight="auto"
      imageWidth="100%"
      imageHeight="auto"
      scaleOnHover={1.015}
      rotateAmplitude={4}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={false}
    >
      <div className="relative w-full rounded-[2rem] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xl overflow-hidden text-left">
        <div className={gridClass}>
          {/* Left — Identity */}
          <div className={leftClass}>
            {/* Name Block */}
            <div className="space-y-2">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[0.95]">
                Jon Eric D.{" "}
                <span className="text-[#ffc01d]">Tripulca</span>
              </h3>
              <p className="text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                Full-Stack Developer · IT Specialist · Graphic Designer
              </p>
            </div>

            {/* Contact Rows */}
            <div className="space-y-2.5">
              {contacts.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm transition-colors"
                >
                  <span className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-[#ffc01d] dark:text-[#ffc01d] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      {label}
                    </span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 break-all group-hover:text-[#ffc01d] dark:group-hover:text-[#ffc01d] transition-colors">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Socials + CTA */}
            <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
              <div className="flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/40 dark:border-neutral-800/40 text-neutral-400 dark:text-neutral-500 hover:text-[#ffc01d] dark:hover:text-[#ffc01d] hover:border-[#ffc01d]/30 hover:scale-115 transition-all duration-300 shadow-xs"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — QR Scan Block */}
          <div className={rightClass}>
            <div className="flex items-center gap-3">
              <img
                src={qrcode}
                alt="Portfolio QR Code"
                className="h-26 w-26 shrink-0 object-contain rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white shadow-sm"
              />
              <span className={`text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 [writing-mode:vertical-rl] ${qrLabelClass}`}>
                Portafolio
              </span>
            </div>
            <p className={`text-[11px] text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider leading-relaxed max-w-[8rem] ${qrTextClass}`}>
              Scan to view the full portfolio &amp; work
            </p>
          </div>
        </div>

        {/* Footer Strip */}
        <div className={`relative border-t border-neutral-200/80 dark:border-neutral-800 py-4 flex items-center justify-between flex-wrap gap-2 ${footerClass}`}>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Available for collaborations &amp; hiring
          </p>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#ffc01d] dark:text-[#ffc01d]">
            Open to Work
          </p>
        </div>
      </div>
    </TiltedCard>
  );
};

CallingCardFace.propTypes = {
  forceLandscape: PropTypes.bool,
};

export const ContactCard = () => {
  const { toast } = useToast();
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef(null);

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
        className="py-24 px-3 md:px-10 bg-background/50 relative overflow-hidden"
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
                <span className="hidden md:inline-flex items-center gap-2 bg-[#ffc01d]/10 border border-[#ffc01d]/50 dark:border-[#ffc01d]/30 px-4 py-2 rounded-xl text-xs font-bold text-[#ffc01d] whitespace-nowrap shadow-xs">
                  Open to Work
                </span>
              </div>

              {/* Calling Card */}
              <div className="space-y-6">
                <CallingCardFace />
                <div className="flex justify-center">
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
            </div>
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

export default ContactCard;
