import {
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import TiltedCard from "./TiltedCard";
import PropTypes from "prop-types";
import qrcode from "../assets/qrcode_jedt-portfolio.vercel.app.png";
import { socials } from "./ContactSection";

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
    ? "relative grid grid-cols-12 gap-6 p-10"
    : "relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 p-6 md:p-10";

  const leftClass = forceLandscape
    ? "col-span-8 space-y-6"
    : "md:col-span-8 space-y-6";

  const rightClass = forceLandscape
    ? "col-span-4 flex flex-col items-center justify-center gap-6 border-l border-neutral-200/80 dark:border-neutral-800 pl-8"
    : "md:col-span-4 flex flex-row md:flex-col items-center justify-between md:justify-center gap-6 md:border-l md:border-neutral-200/80 dark:md:border-neutral-800 md:pl-8";

  const qrLabelClass = forceLandscape
    ? "block"
    : "hidden md:block";

  const qrTextClass = forceLandscape
    ? "text-left"
    : "text-center md:text-left";

  const footerClass = forceLandscape
    ? "px-10"
    : "px-6 md:px-10";

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
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Jon Eric D. Tripulca
              </p>
              <h3 className="text-4xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-[0.95]">
                Full-Stack{" "}
                <span className="italic text-[#ffc01d]">
                  Developer
                </span>
              </h3>
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-300">
                IT Specialist · Graphic Designer · Legazpi City, PH
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
                className="h-32 w-32 shrink-0 object-contain rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white shadow-sm"
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

export const CallingCard = () => {
  return (
    <section
      id="calling-card"
      className="py-24 px-3 md:px-10 bg-neutral-50 dark:bg-neutral-950/40 relative overflow-hidden"
    >
      {/* Decorative Background Accent Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#ffc01d]/5 dark:bg-[#ffc01d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ffc01d]/5 dark:bg-[#ffc01d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#ffc01d] dark:text-[#ffc01d] uppercase">
            <span className="h-2 w-2 rounded-full bg-[#ffc01d] animate-pulse" />
            Calling Card
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight uppercase">
            Keep in{" "}
            <span className="text-[#ffc01d] italic">
              Touch
            </span>
          </h2>
        </div>

        {/* Landscape Calling Card */}
        <CallingCardFace />
      </div>
    </section>
  );
};

export default CallingCard;