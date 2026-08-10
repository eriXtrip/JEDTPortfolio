import { ArrowRight } from 'lucide-react';
import profileImg2 from "../assets/2.png";
import bucsmcc from "../assets/works/BUCSMCC.png";
import GlareHover from './GlareHover';
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"


export function CombinedHero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center pt-27 sm:pb-0 md:pb-25 px-6 md:px-12 items-center bg-background max-md:border-b max-md:dark:border-emerald-700 max-md:border-gray-700 "
        >

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[190%] skew-y-12"
                )}
            />

            {/* Top Banner Typography */}
            <div className="w-full max-w-6xl flex justify-between items-end mb-[-56px] z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase leading-none">
                    Full-Stack <span className="font-black italic text-emerald-700 dark:text-emerald-400">Dev</span>
                </h1>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white uppercase text-right leading-none">
                    IT <span className="font-black italic text-emerald-700 dark:text-emerald-400">Specialist</span>
                </h1>
            </div>

            {/* Anchor Wrapper: anchors both card and photo to the bottom */}
            <div className="relative w-full max-w-6xl mt-15 md:mt-20">

                {/* Main Container Card */}
                <div className="relative w-full bg-emerald-800  dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/55 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl min-h-[520px] sm:min-h-[600px] md:min-h-[220px] flex flex-col justify-between">

                    {/* Decorative Abstract Background Strokes */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center overflow-hidden rounded-[2.5rem]">
                        <div className="w-[800px] h-[300px] bg-white dark:bg-emerald-950 rounded-full blur-2xl transform -rotate-12"></div>
                    </div>

                    {/* Hero Section Content Grid */}
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-center">

                        {/* Left Column: Headline & Action */}
                        <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase opacity-90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full w-fit border border-white/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                                Portfolio — 2026
                            </span>

                            <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95] mb-5">
                                Jon Eric<br />
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent italic font-black">Tripulca</span>
                                    <svg className="absolute -bottom-2 left-0 w-full text-emerald-400" viewBox="0 0 200 12" fill="none">
                                        <path d="M2 9C60 3 140 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </h2>

                            <p className="text-sm md:text-base opacity-85 max-w-xs leading-relaxed">
                                IT graduate and developer building web apps with React & Laravel.
                            </p>

                            {/* <div className="pt-2 flex md:flex-col lg:flex-row sm:flex-row items-start lg:items-center sm:gap-3">
                                <a href="#works" className="inline-flex items-center space-x-3 transition-all px-5 py-3 font-bold group">
                                    <AnimatedShinyText className="text-white">
                                        View Projects
                                    </AnimatedShinyText>
                                    <div className="text-white/50 p-1 group-hover:translate-x-1 transition-transform">
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                                <a href="#contact" className="lg:inline-flex items-center px-5 py-3 font-semibold text-gray/90 dark:text-white/50 hover:text-white/50 transition-all">
                                    Let's Talk
                                </a>
                            </div> */}


                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <a href="#works" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400 transition-all duration-300 hover:text-white">
                                    <span>View Projects</span>
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5"><ArrowRight /></span>
                                </a>
                            </div>

                        </div>

                        {/* Center Column: spacer (photo lives in the anchor wrapper below) */}
                        <div className="hidden lg:block lg:col-span-4"></div>

                        {/* Right Column: Domains & Featured Terminal Card */}
                        <div className="md:col-span-4 flex flex-col items-start md:items-end gap-8 z-20 md:-mt-45 md:mb-20 lg:mt-0 lg:mb-0 sm:mb-0 sm:-mt-0">

                            {/* Featured Project Mini-Showcase */}
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.6}
                                glareAngle={-30}
                                glareSize={300}
                                transitionDuration={1550}
                                playOnce={false}
                                className="text-zinc-300 rounded-3xl shadow-xl w-full md:w-80 flex flex-col border border-white/20 overflow-hidden bg-white/5 backdrop-blur-md"
                            >
                                <div className="px-4 py-2.5 flex items-center justify-between border-b border-white/20">
                                    <span className="text-white/50 text-[11px]">Featured Project</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                <div className="relative aspect-[12/10] overflow-hidden">
                                    <img
                                        src={bucsmcc}
                                        alt="BUCS MCC Specimen Tracking System"
                                        className="w-full h-full object-cover object-top "
                                    />
                                    <span className="absolute top-2 left-2 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Live Demo</span>
                                </div>
                                <div className="p-4 flex flex-col gap-2.5">
                                    <h3 className="text-sm font-bold text-white leading-snug">BUCS MCC</h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        <span className="bg-emerald-400/15 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-400/20">React</span>
                                        <span className="bg-emerald-400/15 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-400/20">Laravel</span>
                                        <span className="bg-emerald-400/15 text-emerald-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-400/20">MySQL</span>
                                    </div>
                                    <p className="text-[11px] text-white/70 leading-relaxed">
                                        Automated microbial specimen workflows across multiple labs, replacing manual logs and reducing tracking errors.
                                    </p>
                                </div>
                            </GlareHover>

                        </div>

                    </div>
                </div>

                {/* Center Column: Profile Photo Cutout (in-flow on mobile, pop-out anchored above card on md+) */}
                <div className="flex justify-center mt-8 md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:z-30 pointer-events-none md:-ml-30 lg:ml-0 lg:-mb-0 sm:-ml-0 sm:-mb-25">
                    <img
                        src={profileImg2}
                        alt="Jon Eric Tripulca"
                        className="sm:h-[250px] md:h-[570px] lg:h-[660px] w-auto object-cover object-top filter drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
}
