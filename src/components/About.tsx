import { cn } from "@/lib/utils";

export const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="h-1 w-20 mx-auto bg-gradient-primary rounded-full mb-4"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn more about my journey and passion for data
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="space-y-6 text-center">
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Data Engineer dedicated to transforming complex data into actionable insights. With experience in ETL pipelines, scalable data architectures, and modern big data tools, I focus on creating solutions that drive strategic decision-making. I believe that well-structured data is the foundation for innovation and growth.
              </p>
            </div>
            
            {/* Additional decorative elements */}
            <div className="flex justify-center gap-4 pt-4">
              <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
              <div className="h-1 w-8 bg-gradient-accent rounded-full"></div>
              <div className="h-1 w-6 bg-gradient-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

