import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            CV
          </button>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                About me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
