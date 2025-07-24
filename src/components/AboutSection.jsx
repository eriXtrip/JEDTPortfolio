import { Smartphone, Code, Monitor } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Versatile Developer & Creative Designer
            </h3>

            <p className="text-muted-foreground text-justify">
              I have experience with a wide range of programming languages and frameworks, 
              including React Native, Node.js, HTML, CSS, PHP, C++, C#, Java, and Python. 
              I also work with tools such as MySQL, SQLite, and applying techniques like Exploratory Data Analysis (EDA).
            </p>

            <p className="text-muted-foreground text-justify">
              I have developed web-app, software applications and Android application, 
              including e-learning application, e-commerce platforms, enrollment systems, and management tools.
            </p>

            <p className="text-muted-foreground text-justify">
              Additionally, I design publication materials (pubmats) for promotions and events using tools like Canva, Adobe Photoshop, and Illustrator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/public/assets/doc/Resume2025.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">E-Learning App</h4>
                  <p className="text-muted-foreground">
                    Developed an interactive e-learning app to facilitate online education and enhance student engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">E-Commerce Web App</h4>
                  <p className="text-muted-foreground">
                    Developed a full-featured online store application for seamless product browsing, shopping, and checkout.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Rental Management Program</h4>
                  <p className="text-muted-foreground">
                    Developed an executable application to streamline and manage rental business operations efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
