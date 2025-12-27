import { ArrowDown, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 🔹 LEFT WIDER THAN RIGHT */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p
                className="text-primary font-mono text-sm mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hi, My name is
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-foreground">Abinaya Durai</span>
              </h1>

              {/* Animated Roles */}
              {/* 🔹 PRIMARY: Animated Roles */}
              <div
                className="h-10 overflow-hidden mb-4 animate-fade-up text-center"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="role-slider text-2xl md:text-3xl font-semibold text-primary tracking-wide">
                  <span>Full-Stack Developer</span>
                  <span>Java & Spring Boot Enthusiast</span>
                  <span>AI / ML Explorer</span>
                </div>
              </div>

              <h2
                className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground mb-8 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                I build things for the web.
              </h2>

              <p
                className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                I'm a{" "}
                <span className="text-primary">Computer Science Engineering</span>{" "}
                student crafting modern, scalable web applications. Focused on{" "}
                <span className="text-primary">Full Stack development</span> with a
                growing interest in{" "}
                <span className="text-primary">AI & Machine Learning</span>.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-10 animate-fade-up"
                style={{ animationDelay: "0.5s" }}
              >
                <Button variant="glow" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              {/* Social Links */}
              <div
                className="flex items-center justify-center md:justify-start gap-6 animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                <a
                  href="https://github.com/abinayad23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/abinaya-durai-447298280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:abinayadurai152@gmail.com"
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div
              className="order-1 md:order-2 flex justify-center animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-primary/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-500">
                  <img
                    src="/myphoto1.jpg"
                    alt="Abinaya Durai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute -inset-2 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
