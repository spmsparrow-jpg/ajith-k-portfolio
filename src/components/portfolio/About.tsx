import ScrollReveal from "./ScrollReveal";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">About Me</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
          Senior Full Stack
          <br />
          <span className="font-display italic text-gradient">Developer</span>
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" } as React.CSSProperties}>
            I am a Senior Full Stack Developer with 3 years of experience working in a solution-based company. I hold a BSc in Computer Science from NGM College under Bharathiar University. I specialize in building modern, scalable web applications using both frontend and backend technologies, with a strong focus on performance and clean architecture.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Code, title: "Full Stack Development", desc: "Frontend & Backend expertise" },
              { icon: Briefcase, title: "3+ Years Experience", desc: "Solution-based company" },
              { icon: GraduationCap, title: "BSc Computer Science", desc: "NGM College, Bharathiar University" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-accent">
                  <item.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default About;
