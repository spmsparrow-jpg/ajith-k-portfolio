import { ExternalLink, Github, Linkedin, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "AI Voice Chat Assistant",
    description:
      "An AI-powered voice assistant that allows users to interact through speech, ask questions, and receive intelligent responses in real time.",
    tech: ["Node.js", "WebSockets", "JavaScript/TypeScript", "AI APIs"],
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    },
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">Projects</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
          Featured
          <br />
          <span className="font-display italic text-gradient">Projects</span>
        </h2>
      </ScrollReveal>

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={0.1 * i}>
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 hover:border-primary/30 hover:glow-sm transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl" style={{ textWrap: "pretty" } as React.CSSProperties}>
                    {p.description}
                  </p>
                </div>
                <div className="hidden md:block ml-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-2xl">🎙️</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                <a href={p.links.github} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <Github className="size-4" /> GitHub
                </a>
                <a href={p.links.linkedin} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a href={p.links.portfolio} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  <Globe className="size-4" /> Portfolio
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
