import { ExternalLink, Github, Folder, Award } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const featuredProjects = [
  {
    title: "BookSwap - Secondhand Book Trading Platform",
    description:
      "A full-stack campus-focused platform especially for GCT enabling students to buy, sell, exchange and donate second-hand books securely.",
    features: [
      "Secure authentication with JWT and OTP email verification",
      // "Role-based access for users and admins",
      "Real-time chat and notifications",
      "Marketplace for listing and purchasing books",
      "File uploads for book images"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL", "JWT", "REST API"],
    github: "https://github.com/abinayad23/Second_hand_book_trading_platform",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
    period: "Aug 2025 - Nov 2025",
  },
  {
    title: "AI Meeting Scheduler",
    description:
      "An AI-powered scheduling platform that uses a chatbot to profile users, connect them with professionals, and automate meeting scheduling. It is a academic lab team project and I implemented the frontend using Next.js, TypeScript, and SCSS to create responsive and user-friendly interfaces.",
    features: [
      "Chatbot-driven user interaction and profiling",
      "Connects users with relevant professionals",
      "Automated meeting scheduling based on responses",
      "Dashboard displaying profile and meetings",
      "Responsive and accessible UI"
    ],
    tech: ["Next.js", "TypeScript", "SCSS", "AI Integration"],
    github: "https://github.com/aleena-joseph-86/AI_meeting_scheduler",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    period: "Feb 2025 - May 2025",
  },
];


const internships = [
 {
  title: "Frontend Development Intern",
  company: "Haqto Technologies Pvt. Ltd., Coimbatore",
  description:
    "Learned and applied frontend development concepts by building and styling responsive user interfaces using HTML, CSS, and JavaScript. Gained hands-on experience with React.js for component-based development and Redux for basic state management. Worked on UI design and layout creation using Canva, while following standard SDLC practices and understanding real-world frontend development workflows.",
  tech: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Canva", "SDLC"],
  period: "July 2025 - August 2025",
}
,
  {
  title: "Python Development Intern",
  company: "Auro Tech Solutions Pvt. Ltd., Thanjavur",
  description:
    "Completed a one-month Python development internship with hands-on experience in building mini projects such as an ATM Simulation System, QR Code Generator, and Timer application, focusing on core Python concepts, object-oriented programming,problem-solving, and practical application of software development concepts in a remote learning-based environment..",
  tech: ["Python", "OOP", "Problem Solving"],
  period: "May 2024 - June 2024",
}
,
  
  {
  title: "Full Stack Development Intern",
  company: "NoviTech R&D Private Limited, Coimbatore",
  description:
    "Gained foundational knowledge of full stack web development through guided learning and hands-on practice. Worked with HTML, CSS, and JavaScript to build responsive user interfaces, explored React.js for component-based frontend development, and learned backend fundamentals using Node.js and MongoDB. Developed an understanding of client–server architecture, RESTful concepts, and basic database operations while following structured development workflows.",
  tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
  period: "April 2024 - May 2024",
}

  ,
];

const otherProjects = [
  {
    title: "Task Management API",
    description: "RESTful API for task management with authentication, real-time updates, and team collaboration features.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with 7-day forecasts, location search, and interactive maps.",
    tech: ["React", "OpenWeather API", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers with dark mode and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com",
  },
  {
    title: "Blog CMS",
    description: "Headless CMS for managing blog content with markdown support and image optimization.",
    tech: ["Next.js", "Sanity", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const certificates = [
  "HTML, CSS, JavaScript, DevOps, Agile SDLC | Infosys Springboard",
  "UI/UX Workshop | Government College of Technology",
  "Artificial Intelligence | NaanMudhalvan",
  "Volleyball Zonal Runners | Anna University",
];

export function ProjectsSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="projects" className="py-10 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-mono text-primary mb-4">03. Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Some things I've built
          </h3>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid md:grid-cols-12 gap-8 items-center transition-all duration-700 ${
                  index % 2 === 1 ? "md:text-right" : ""
                } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1 text-left" : ""}`}>
                  <p className="text-primary font-mono text-sm mb-2">{project.period}</p>
                  <h4 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">{project.title}</h4>
                  <div className="glass rounded-xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mb-4">
    <p className="text-sm px-6 font-semibold mb-2">Key Features</p>
    <ul className="list-disc px-6 list-inside text-sm text-muted-foreground space-y-1">
      {project.features.map((feature) => (
        <li key={feature} className="hover:text-primary transition-colors">{feature}</li>
      ))}
    </ul>
  </div>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

           {/* Other Projects*/}
          {/* <h4 className="text-xl font-semibold text-center mb-8 mt-20">Other Noteworthy Projects</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`glass rounded-xl p-6 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary group-hover:scale-110 transition-transform duration-300" size={40} />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h5>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* Internships
          <h4 className="text-xl font-semibold text-center mb-8 mt-20">Internship Experience</h4>
          <div className="grid-cols-2 gap-6 mb-16 ">
            {internships.map((internship, index) => (
              <div
                key={internship.title}
                className={`glass rounded-xl p-6 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <p className="text-primary font-mono text-xs mb-2">{internship.period}</p>
                <h5 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {internship.title}
                </h5>
                <p className="text-sm text-muted-foreground mb-3">{internship.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {internship.description}
                </p>
                <div className="">
                  {internship.tech.map((tech) => (
                    <span key={tech} className={`text-xs font-mono text-muted-foreground hover:text-primary  ${
                  index % 2 === 1 ? "md:text-right pl-2" : "pr-2"}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* Certificates */}
          {/* <h4 className="text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Award className="text-primary" size={24} />
            Certifications & Achievements
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <div
                key={cert}
                className={`glass rounded-lg p-4 hover:border-primary/50 transition-all duration-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <p className="text-sm text-muted-foreground">{cert}</p>
              </div>
            ))}
          </div>  */}
        </div>
      </div>
    </section>
  );
}
