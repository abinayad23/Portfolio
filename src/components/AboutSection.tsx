import { Code2, BrainCircuit,Rocket, GraduationCap,Database } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications with React, Spring Boot, and modern technologies.",
  },
  {
    icon: Database,
    title: "Backend & System Design",
    description: "Designing backend systems using Java and Spring Boot, implementing authentication, role-based access, APIs, and database integrations.",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Exposure",
    description: "Academic experience with machine learning algorithms, neural networks, and data analysis.",
  },
];

const education = [
  {
    institution: "Government College of Technology, Coimbatore",
    degree: "B.E. Computer Science and Engineering",
    score: "CGPA: 8.48",
    period: "Nov 2022 - April 2026",
  },
  {
    institution: "St. Anne's Girls' Hr. Sec School, Cuddalore",
    degree: "PCM with Computer Science",
    score: "HSC: 96.5% | SSLC: 98.2%",
    period: "June 2019 - April 2022",
  },
];

export function AboutSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-mono text-primary mb-4">01. About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Passionate about creating <span className="text-gradient">digital excellence</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Hello! I'm Abinaya, a Computer Science Engineering student at  <span className="font-serif font-extrabold">Government College of Technology, Coimbatore</span>, with a strong academic background and a practical mindset toward software development.
              </p>
              <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
               My journey began with curiosity, experimenting with simple interfaces and gradually evolved into building  <span className="font-serif font-extrabold">full-stack web applications, secure backend systems, and data-driven solutions.</span> I enjoy understanding not just how things work, but why they work.
              </p>
              <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                I’ve gained hands-on experience through internships, hackathons, and academic projects, working with technologies like  <span className="font-serif font-extrabold">React, Spring Boot, MongoDB, MySQL, and Python.</span> Alongside web development, I actively explore  <span className="font-serif font-extrabold">Artificial Intelligence and Machine Learning,</span> applying algorithms to real datasets and real problems.
              </p>
               <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                I strongly believe in <span className="font-serif font-extrabold">learning by building</span> every project I work on improves my understanding of software engineering principles.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
           <div
  className={`transition-all duration-500 delay-400 ${
    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h4 className="text-lg font-semibold my-6 flex items-center gap-2">
    <GraduationCap className="text-primary" size={20} />
    Education
  </h4>

  {/* TWO COLUMN LAYOUT */}
  <div className="grid md:grid-cols-2 gap-12">
    {education.map((edu) => (
      <div
        key={edu.institution}
        className=" border-2 border-l-4 rounded-3xl border-primary/30 border-l-primary/100 p-6 hover:border-primary transition-all duration-300 animate-fade-up hover:scale-105 "
      >
        <p className="text-primary font-mono text-sm mb-2">
          {edu.period}
        </p>
        <h5 className="text-xl font-semibold mb-1">
          {edu.degree}
        </h5>
        <p className="text-muted-foreground text-sm mb-2">
          {edu.institution}
        </p>
        <p className="text-primary text-sm font-mono">
          {edu.score}
        </p>
      </div>
    ))}
  </div>
</div>

          
        </div>
        
      </div>
    </section>
  );
}
