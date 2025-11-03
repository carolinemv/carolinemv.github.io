import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-commerce ETL Pipeline",
    description: "Complete ETL system for sales data analysis, processing millions of daily records with Apache Airflow and PostgreSQL.",
    technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker", "dbt"],
  },
  {
    title: "Data Lake Architecture",
    description: "Data lake architecture on AWS using S3, Glue, and Athena for centralized analytical data querying.",
    technologies: ["AWS", "S3", "Glue", "Athena", "Python", "Terraform"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Real-time analytics dashboard using Kafka for data streaming and Grafana for visualization.",
    technologies: ["Kafka", "Spark", "Grafana", "Python", "Redis"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="h-1 w-20 mx-auto bg-gradient-primary rounded-full mb-4"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of projects demonstrating expertise in data engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
              className="animate-fade-in-up"
            >
              <ProjectCard 
                {...project} 
                githubUrl="https://github.com/carolinemv"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
