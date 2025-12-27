import { useInView } from "@/hooks/useInView";

const skills = {
  languages: [
    { name: "Java", level: 80 },
    { name: "Python", level: 50 },
    { name: "C", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "TypeScript", level: 70 },
  ],
  web: [
    { name: "React.js", level: 80 },
    { name: "HTML5/CSS", level: 90 },
    { name: "Spring Boot", level: 65 },
    { name: "Tailwind CSS", level: 60 },
    { name: "Node.js", level: 40 },
  ],
  databases: [
    {
      name:"MySQL",level:80},{name: "MongoDB",level:50}],
  tools: ["Git", "VS Code", "Postman", "Canva", "Jupyter Notebook"],
  other: ["Next.js", "SCSS", "Bootstrap", "Redux"],
};

export function SkillsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="skills" className="py-12 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-mono text-primary mb-4">02. Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Technologies I work with
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className={`glass rounded-xl p-8 transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Programming Languages
              </h4>
              <div className="space-y-5">
                {skills.languages.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out hover:-scale-y-125"
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className={`glass rounded-xl p-8 transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Web Technologies
              </h4>
              <div className="space-y-5">
                {skills.web.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out hover:-scale-y-125"
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className={`mt-12 p-8 transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Databases
            </h4>
            <div className="space-y-5">
                {skills.databases.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out hover:-scale-y-125"
                        style={{ 
                          width: isInView ? `${skill.level}%` : '0%',
                          // transitionDelay: `${index * 100 + 300}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
          </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Tools */}
          <div id="skills" className={`mt-8 p-8 transition-all duration-500 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, index) => (
                <span
                  key={tool}
                  className={`px-4 py-2 rounded-lg bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${index * 50 + 500}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Other Technologies */}
          <div className={`mt-8 p-8 transition-all duration-500 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Other Technologies (Basics)
            </h4>
            <div className="flex flex-wrap gap-3">
              {skills.other.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-lg bg-secondary text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${index * 50 + 600}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
