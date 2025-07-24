import { ArrowDown } from "lucide-react";
import profileImg from "../assets/94f63a79-5160-429b-8511-5bd4b2508d10.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-7xl mx-auto z-10 mt-1.5">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 ">
            <img
              src={profileImg}
              alt="Jon Eric Tripulca"
              className="w-75 h-75 rounded-full object-cover shadow-lg border-1 border-primary opacity-0 animate-fade-in-delay-2"
            />
          </div>

          {/* Contents */}
          <div className="flex-1 text-left space-y-8">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Jon Eric
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Tripulca
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              Results-driven IT graduate with hands-on technical support experience and graphic design expertise seeking to leverage my problem-solving skills, 
              creativity, and adaptability in a professional IT role. 
            </p>

            <div className="pt-2 opacity-0 animate-fade-in-delay-4">
              <a href="#works" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
