import ScrollReveal from "./ScrollReveal";

const categories = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "C", "C++"] },
  { title: "Frontend", items: ["Angular", "AngularJS", "Ionic", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { title: "Database", items: ["PostgreSQL", "MySQL"] },
  { title: "Tools & Concepts", items: ["JWT", "WebSockets", "Sequelize ORM", "Git"] },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Technologies I work with
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={0.08 * i}>
            <h3 className="text-sm font-semibold text-foreground mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-md bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
