"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToHome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToHome}
      aria-label="Scroll to home"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
        w-12 h-12 rounded-full
        flex items-center justify-center
        bg-primary text-primary-foreground
        shadow-lg transition-all duration-300
        hover:scale-110
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
}
