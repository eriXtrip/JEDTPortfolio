import React, { useEffect, useRef, useState } from "react";

import Pubmat1 from "../assets/pubmats/Adolescent Health Awareness 3x4.png";
import Pubmat2 from "../assets/pubmats/APINO.png";
import Pubmat3 from "../assets/pubmats/HappyBirthday.jpg";
import Pubmat4 from "../assets/pubmats/Daily Lesson Log (1).jpg";
import Pubmat5 from "../assets/pubmats/Christening.png";
import Pubmat6 from "../assets/pubmats/MAGNACARTA3x4.png";
import Pubmat7 from "../assets/pubmats/Child's Rights and Responsibilities.png";
import Pubmat8 from "../assets/pubmats/GENDER  SENSITIVITY TRAINING.png";
import Pubmat9 from "../assets/pubmats/GravelandSandConcreteHollowblocks3x4.png";
import Pubmat10 from "../assets/pubmats/JuvenileJustice3x4.png";
import Pubmat11 from "../assets/pubmats/PRAISE.jpg";

const pubmats = [
  { src: Pubmat1, alt: "Adolescent Health Awareness" },
  { src: Pubmat2, alt: "APINO" },
  { src: Pubmat3, alt: "Juvenile Justice" },
  { src: Pubmat4, alt: "Daily Lesson Log" },
  { src: Pubmat5, alt: "Christening" },
  { src: Pubmat6, alt: "MAGNA CARTA" },
  { src: Pubmat7, alt: "Child's Rights and Responsibilities" },
  { src: Pubmat8, alt: "Gender Sensitivity Training" },
  { src: Pubmat9, alt: "Gravel and Sand Concrete Hollowblocks" },
  { src: Pubmat10, alt: "Happy Birthday" },
  { src: Pubmat11, alt: "PRAISE" },
];

export const PubmatsGallery = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pubmats" ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Pubmats</span>
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {pubmats.map((pubmat, idx) => (
            <div
              key={idx}
              className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-md bg-card transition-shadow duration-300 hover:shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${idx * 0.2}s, transform 0.8s ease ${idx * 0.2}s`,
              }}
            >
              <img
                src={pubmat.src}
                alt={pubmat.alt}
                className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PubmatsGallery;
