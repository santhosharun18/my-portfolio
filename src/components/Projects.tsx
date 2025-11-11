import { Rocket, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "End-to-end Machine Learning pipeline for real estate price prediction with 94% R2 score using ensemble methods.",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Flask", "Pickle"],
      highlights: [
        "Achieved 94% R2 score using Ridge, Lasso, Random Forest, and XGBoost models",
        "Comprehensive data preprocessing on 4,600-row dataset with Z-score outlier removal",
        "Deployed as Flask API for real-time inference with Pickle model persistence"
      ]
    },
    {
      title: "Healthcare Recommendation Chatbot",
      description: "Conversational AI chatbot providing health and wellness recommendations based on symptoms using NLP and BERT.",
      technologies: ["Python", "NLP", "BERT", "Flask", "Hugging Face", "VectorDB"],
      highlights: [
        "Utilized pre-trained BERT models for contextual understanding",
        "Fine-tuned intent classification using custom symptom datasets",
        "Implemented NER and similarity-based response ranking for enhanced accuracy",
        "Flask-based API integrated with SQLite for user interaction logging"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Rocket className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardHeader className="relative">
                <CardTitle className="text-2xl flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
