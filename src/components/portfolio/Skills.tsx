import ScrollReveal from "./ScrollReveal";

const categories = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { title: "Frontend", items: ["Angular", "AngularJS", "Ionic", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
  { title: "Tools & Concepts", items: ["JWT", "WebSockets", "Sequelize ORM", "Git"] },
];

const Skills = () => (
  <section id="skills" className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-primary text-lg">✦</span>
          <span className="text-xs text-primary uppercase tracking-[0.2em] font-semibold">My Skills</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.05]">
          Let's Explore My
          <br />
          <span className="font-display italic text-gradient">Skills & Experience</span>
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={0.08 * i}>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-sm transition-all duration-300 h-full">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="inline-block rounded-full bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
