import { useState } from "react";
import { cn } from "@/lib/utils";

// Import your certificate images here
import JobReadinessImg from "../assets/cert/JobReadinessTraining.jpg";
import ROTCImg from "../assets/cert/ROTCCert2023_page-0001.jpg";
import TechnicalImg from "../assets/cert/Certificate_ComputerSystemsServicing.jpg";
import TechnicalImg1 from "../assets/cert/Certificate_InstallingandConfiguringComputerSystems.jpg";
import TechnicalImg2 from "../assets/cert/Certificate_IntroductiontoCSS.jpg";
import TechnicalImg3 from "../assets/cert/Certificate_MaintainingComputerSystemsandNetworks.jpg";
import TechnicalImg4 from "../assets/cert/Certificate_SettingUpComputerServers.jpg";
import TechnicalImg5 from "../assets/cert/Certificate_Wi-Fi 101 and Digital Thumbprint Program.jpg";
import Leadership2019Img from "../assets/cert/VicePresCert2019_page-0001.jpg";
import Leadership2022Img from "../assets/cert/LeadershipTrainingandTeambuildingCert 2022_page-0001.jpg"

const certificates = [
  {
    title: "Job Readiness Training",
    category: "job-readiness",
    img: JobReadinessImg,
  },
  {
    title: "Computer Systems Servicing (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg,
  },
  {
    title: "ROTC National Service Training Program Completion",
    category: "training",
    img: ROTCImg,
  },
  {
    title: "Installing and Configuring Computer Systems (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg1,
  },
  {
    title: "Leadership Certificate",
    category: "leadership",
    img: Leadership2019Img,
  },
  {
    title: "Introduction to CSS (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg2,
  },
  {
    title: "Leadership Training and Teambuilding",
    category: "leadership",
    img: Leadership2022Img,
  },
  {
    title: "Maintaining Computer Systems and Netcert (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg3,
  },
  {
    title: "SettingUp Computer Servers (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg4,
  },
  {
    title: "Wi-Fi 101 and Digital Thumbprint Program (TESDA Online Program)",
    category: "technical",
    img: TechnicalImg5,
  },
];

const categories = [
  { key: "all", label: "All" },
  { key: "job-readiness", label: "Job Readiness" },
  { key: "training", label: "Training" },
  { key: "leadership", label: "Leadership" },
  { key: "technical", label: "Technical" },
];

export const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="certificates" className="py-5 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-card rounded-lg shadow-md overflow-hidden p-4 gradient-border card-hover"
            >
              <div className="relative w-full h-64 flex items-center justify-center">
                <span className={cn(
                  "absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-semibold z-10",
                  cert.category === "job-readiness" && "bg-blue-200 text-blue-800",
                  cert.category === "training" && "bg-green-200 text-green-800",
                  cert.category === "leadership" && "bg-yellow-200 text-yellow-800",
                  cert.category === "technical" && "bg-purple-200 text-purple-800"
                )}>
                  {categories.find(c => c.key === cert.category)?.label}
                </span>

                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-64 object-contain rounded pt-5 cursor-pointer transition-transform duration-200 hover:scale-105"
                  onClick={() => openModal(cert)}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x250?text=Certificate";
                  }}
                />
              </div>
              <p className="mt-1 text-center font-medium text-muted-foreground">
                {cert.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {modalOpen && selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-background rounded-lg shadow-lg p-4 max-w-3xl w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-primary"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedCert.img}
              alt={selectedCert.title}
              className="w-full max-h-[70vh] object-contain rounded"
              onError={e => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x600?text=Certificate";
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};