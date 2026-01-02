import { ArrowDown, Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p
                className="text-primary font-mono text-sm mb-6 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Hello, I'm
              </p>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-foreground">Abinaya Durai</span>
              </h1>

              {/* 🔹 Animated Roles with "I'm a" */}
              

              <h2
                className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground mb-8 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Building things for the web.
              </h2>

              <div
  className="mb-6 animate-fade-up flex justify-center md:justify-start gap-2 flex-col sm:flex-row items-center"
  style={{ animationDelay: "0.25s" }}
>
  <span className="text-xl md:text-2xl font-medium text-muted-foreground">
    I'm a
  </span>

  <div className="role-slider font-bold text-primary tracking-wide flex flex-col text-xl md:text-2xl">
    <span>Full-Stack Developer</span>
    <span>Java & Spring Boot Enthusiast</span>
    <span>AI / ML Explorer</span>
  </div>


              </div>

              <p
                className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed animate-fade-up mx-auto md:mx-0"
                style={{ animationDelay: "0.4s" }}
              >
                And a{" "}
                <span className="text-primary">Computer Science Engineering</span>{" "}
                student crafting modern, scalable web applications with a focus on{" "}
                Full Stack Development and a
                growing interest in{" "}
                AI & Machine Learning.
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

            {/* ================= RIGHT AVATAR ================= */}
            <div
              className="order-1 md:order-2 flex justify-center animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-purple-500/30 to-pink-500/40 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition duration-500" />

                {/* Avatar */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 via-background to-primary/30 flex items-center justify-center border border-primary/40 backdrop-blur-xl group-hover:scale-105 transition-all duration-500">
 <img
                    src="/myphoto1.jpg"
                    alt="Abinaya Durai"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />                </div>

                {/* Rotating ring */}
                <div className="absolute -inset-2 rounded-full border-x-4 border-double border-primary/80 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute sm:items bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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
