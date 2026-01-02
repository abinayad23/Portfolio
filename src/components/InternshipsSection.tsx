"use client";

import { useEffect, useState } from "react";

const internships = [
  {
    title: "Frontend Development Intern",
    company: "Haqto Technologies Pvt. Ltd., Coimbatore",
    description:
      "Learned and applied frontend development concepts by building and styling responsive user interfaces using HTML, CSS, and JavaScript. Gained hands-on experience with React.js for component-based development and Redux for basic state management. Worked on UI design and layout creation using Canva, while following standard SDLC practices and understanding real-world frontend development workflows.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Canva", "SDLC"],
    period: "July 2025 - August 2025",
    certificate: "/certificates/Haqto.jpg",
  },
  {
    title: "Python Development Intern",
    company: "Auro Tech Solutions Pvt. Ltd., Thanjavur",
    description:
      "Completed a one-month Python development internship with hands-on experience in building mini projects such as an ATM Simulation System, QR Code Generator, and Timer application. Focused on core Python concepts, object-oriented programming, problem-solving, and practical application of software development concepts in a remote learning-based environment.",
    tech: ["Python", "OOP", "Problem Solving"],
    period: "May 2024 - June 2024",
    certificate: "/certificates/AuroTech.png",
  },
  {
    title: "Full Stack Development Intern",
    company: "NoviTech R&D Private Limited, Coimbatore",
    description:
      "Gained foundational knowledge of full stack web development through guided learning and hands-on practice. Worked with HTML, CSS, and JavaScript to build responsive user interfaces, explored React.js for component-based frontend development, and learned backend fundamentals using Node.js and MongoDB. Developed an understanding of client–server architecture, RESTful concepts, and basic database operations while following structured development workflows.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    period: "April 2024 - May 2024",
    certificate: "/certificates/NoviTech.jpg",
  },
];

type ActiveCertificate = {
  src: string;
  title: string;
};

export default function InternshipsSection() {
  const [activeCertificate, setActiveCertificate] =
    useState<ActiveCertificate | null>(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeCertificate ? "hidden" : "auto";
  }, [activeCertificate]);

  return (
    <section id="internship" className="max-w-6xl mx-auto px-4">
      <h4 className="text-2xl md:text-3xl font-bold text-center mb-14 ">
        Internship Experience
      </h4>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {internships.map((internship, index) => (
            
          <div
            key={index}
            className="relative glass rounded-2xl p-6 border border-white/10
            hover:border-primary/60 hover:-translate-y-2 hover:shadow-xl
            transition-all duration-300 group"
          >
            {/* Accent Bar */}
            <span className="absolute left-0 top-0 h-full w-1 bg-primary/40 rounded-l-xl group-hover:bg-primary transition" />

            <p className="text-primary font-mono text-xs mb-2">
              {internship.period}
            </p>

            <h5 className="text-lg font-semibold mb-1 group-hover:text-primary transition">
              {internship.title}
            </h5>

            <p className="text-sm text-muted-foreground mb-4">
              {internship.company}
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground mb-5">
              {internship.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5">
              {internship.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full
                  bg-primary/10 text-primary font-mono
                  border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Certificate Button */}
            <button
              onClick={() =>
                setActiveCertificate({
                  src: internship.certificate,
                  title: internship.title,
                })
              }
              className="text-xs font-mono text-primary hover:underline"
            >
              View Certificate →
            </button>
          </div>
          
        ))}
      </div>

      {/* Certificate Modal */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

            {/* Sticky Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b bg-background">
              <h6 className="text-sm font-semibold">
                {activeCertificate.title} – Certificate
              </h6>
              <button
                onClick={() => setActiveCertificate(null)}
                className="text-sm font-mono text-muted-foreground hover:text-primary"
              >
                ✕ Close
              </button>
            </div>

            {/* Scrollable Image */}
            <div className="overflow-y-auto max-h-[calc(90vh-56px)] p-4 scrollbar-none">
              <img
                src={activeCertificate.src}
                alt={`${activeCertificate.title} Certificate`}
                className="w-full rounded-lg"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
