import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <Card className="group h-full transition-all duration-500 hover:shadow-card-hover border-border bg-card relative overflow-hidden backdrop-blur-sm">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-primary opacity-20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_hsl(280_70%_65%/0.5)] transition-all duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs font-medium bg-gradient-secondary/10 hover:bg-gradient-secondary/20 border border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 group/btn hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            Code
          </Button>
          {demoUrl && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 bg-gradient-primary hover:shadow-[0_0_20px_hsl(280_70%_65%/0.4)] transition-all duration-300"
              onClick={() => window.open(demoUrl, "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
