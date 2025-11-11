import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Mail className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Get In Touch</h2>
        </div>

        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
          I'm currently seeking opportunities as a Data Scientist or Data Analyst. 
          Let's connect and discuss how I can contribute to your team!
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:santhosharun31@gmail.com"
            className="flex items-center gap-4 p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 card-hover group"
          >
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground/90">santhosharun31@gmail.com</p>
            </div>
          </a>

          <a 
            href="tel:+918248095186"
            className="flex items-center gap-4 p-6 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 card-hover group"
          >
            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold text-foreground/90">+91 8248095186</p>
            </div>
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            asChild
          >
            <a href="https://github.com/santhosharun18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all"
            asChild
          >
            <a href="www.linkedin.com/in/santhosh-d-2a6ba3221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
