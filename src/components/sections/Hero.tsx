import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      
      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 border border-border/50 shadow-sm">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Vishwachaithanya <br className="hidden md:block" />
            <span className="text-muted-foreground">Shirla.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl"
          >
            Full Stack Developer | Hyderabad, India
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
I build end-to-end web and mobile applications using React, React Native, and Spring Boot. I focus on scalable backend architecture, maintainable frontend systems, and production-ready code that performs under real-world usage.          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-12"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'React Native', 'JavaScript', 'TypeScript', 'Redux', 'HTML', 'CSS', 'Java', 'Spring Boot', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all hover:shadow-xl hover:shadow-foreground/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
             href="/VCResume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all border border-border/50 shadow-sm"
            >
              Download Resume
            </a>
            
            <div className="flex items-center gap-2 ml-4">
              {[
                { icon: Github, href: "https://github.com/vishwachaithanya" },
                // { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vishwachaithanya/" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
