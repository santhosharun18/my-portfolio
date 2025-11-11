import { Mail, Github, Linkedin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-5xl mx-auto text-center z-10 space-y-8 fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Santhosh D</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            Data Scientist & AI Engineer
          </p>
        </div>

        <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
          B.Tech AI & Data Science graduate specializing in Machine Learning, Deep Learning, and GenAI. 
          Passionate about building intelligent solutions with Python, TensorFlow, PyTorch, and cutting-edge LLM frameworks.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/50 transition-all hover:shadow-xl hover:shadow-primary/60"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="https://github.com/santhosharun18" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="https://www.linkedin.com/in/santhosh-d-2a6ba3221" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a href="tel:+918248095186">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
