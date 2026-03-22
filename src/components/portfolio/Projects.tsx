import { ExternalLink } from "lucide-react";
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
  <section id="projects" className="section-padding bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Selected work
        </h2>
      </ScrollReveal>

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={0.1 * i}>
            <div className="rounded-xl border border-border bg-background p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm" style={{ textWrap: "pretty" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-primary bg-accent rounded-md px-2.5 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-5">
                <a href={p.links.github} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  GitHub <ExternalLink className="size-3" />
                </a>
                <a href={p.links.linkedin} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  LinkedIn <ExternalLink className="size-3" />
                </a>
                <a href={p.links.portfolio} className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Portfolio <ExternalLink className="size-3" />
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
