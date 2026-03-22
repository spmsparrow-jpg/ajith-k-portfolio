import ScrollReveal from "./ScrollReveal";

const About = () => (
  <section id="about" className="section-padding bg-card">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">About Me</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground" style={{ textWrap: "balance" }}>
          A bit about who I am
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl" style={{ textWrap: "pretty" }}>
          I am a Senior Full Stack Developer with 3 years of experience working in a solution-based company. I hold a BSc in Computer Science from NGM College under Bharathiar University. I specialize in building modern, scalable web applications using both frontend and backend technologies, with a strong focus on performance and clean architecture.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
