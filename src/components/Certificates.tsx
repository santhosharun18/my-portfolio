import { Award, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      name: "Data Analytics with Python",
      issuer: "NPTEL",
      date: "March 2024"
    },
    {
      name: "Machine Learning With Python",
      issuer: "IBM",
      date: "August 2024"
    },
    {
      name: "Google Professional Advanced Data Analytics",
      issuer: "Google",
      date: "November 2024"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-hover group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight">{cert.name}</h3>
                  <Badge variant="secondary" className="bg-secondary/50">
                    {cert.issuer}
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
