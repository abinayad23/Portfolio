import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

export function ContactSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-mono text-primary mb-4">04. What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} className="text-primary" />
              <a href="mailto:abinayadurai152@gmail.com">abinayadurai152@gmail.com</a>
            </div>
            {/* <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} className="text-primary" />
              <span>+91 9025048298</span>
            </div> */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          <Button variant="glow" size="lg" asChild>
            <a href="mailto:abinayadurai152@gmail.com" className="gap-2">
              <Send size={18} />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
