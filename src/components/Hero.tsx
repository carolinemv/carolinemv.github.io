import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-accent opacity-10 rounded-full blur-3xl animate-glow-pulse"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in-up">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <p className="text-sm sm:text-base font-semibold bg-gradient-primary bg-clip-text text-transparent uppercase tracking-[0.3em] mb-2">
                Data Engineer
              </p>
              <div className="h-0.5 w-3/4 mx-auto bg-gradient-primary rounded-full"></div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              Caroline Vasconcelos
            </h1>
          </div>

          <div className="relative">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming{" "}
              <span className="font-bold text-primary drop-shadow-[0_0_15px_hsl(280_70%_65%/0.8)]">
                data
              </span>{" "}
              into{" "}
              <span className="font-bold text-accent drop-shadow-[0_0_15px_hsl(200_85%_60%/0.8)]">
                decisions
              </span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in data engineering, I develop robust pipelines and scalable architectures that connect information to strategic value.
          </p>

          <div className="pt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group rounded-full bg-gradient-primary hover:shadow-[0_0_30px_hsl(280_70%_65%/0.5)] transition-all duration-500 text-lg px-8 py-6 font-semibold"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
