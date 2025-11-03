import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/carolinemelovasconcelos/",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/carolinemv",
      color: "hover:text-foreground",
    },
  ];
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-primary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Let's talk?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to new opportunities and collaborations on data projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm hover:shadow-card-hover transition-all duration-500"
                  onClick={() => window.open(link.url, "_blank")}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                  <Icon className={`h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300 ${link.color}`} />
                  <span className="relative z-10 font-semibold">{link.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
