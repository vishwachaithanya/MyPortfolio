import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useProjects } from "../../hooks/use-projects";

export function Projects() {
  const { data: projects, isLoading, error } = useProjects();
  // console.log("Projects data:", projects, "Loading:", isLoading, "Error:", error);
  const sampleProjects = [
    {
      title: "Cyepro B2B CRM Platform",
      description:
        "Full-stack development on a mobile-first automotive CRM platform. Built scalable React front-end modules, Spring Boot REST APIs, and integrated MySQL schemas for lead management, dashboards, and real-time task tracking. Enhanced mobile capabilities using React Native.",
      link: "https://www.cyepro.com/",
      techStack: ["React", "React Native", "Redux", "Spring Boot", "MySQL"],
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Mini LMS",
      description: "A comprehensive Learning Management System built for mobile users, featuring course tracking and student progress monitoring.",
      link: "https://github.com/vishwachaithanya/LMS",
      techStack: ["React Native", "JavaScript", "Redux", "CSS"],
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Employee Management System",
      description: "A secure Java-based application with role-based access control. Managers can add, edit, and delete employees, while employees can manage their own profiles.",
      link: "https://github.com/vishwachaithanya/JavaServletProject",
      techStack: ["Java", "Spring Boot", "MySQL"],
      imageUrl: "https://images.unsplash.com/photo-1454165205770-355438837767?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Product Management System",
      description: "A feature-rich dashboard for managing inventory with search functionality and Firebase Analytics integration for event tracking.",
      link: "https://product-mangement-new.vercel.app/",
      techStack: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of my recent projects, demonstrating my expertise in modern web technologies and user-centric design.
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : false ? (
          <div className="p-6 bg-destructive/10 text-destructive rounded-2xl border border-destructive/20">
            <p>Failed to load projects. Please try again later.</p>
          </div>
        ) : !sampleProjects?.length ? (
          <div className="p-12 text-center bg-card rounded-3xl border border-border shadow-sm">
            <p className="text-muted-foreground text-lg">New projects are currently brewing. Check back soon!</p>
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sampleProjects.map((project: any) => (
              <motion.div
                key={project.id}
                variants={item}
                className="group relative flex flex-col bg-card rounded-3xl overflow-hidden border border-border/60 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Placeholder or Actual Image */}
                <div className="aspect-video w-full bg-secondary relative overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest opacity-50">
                        No Image
                      </span>
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>

                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {project.techStack.map((tech: any, idx: any) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
