import { Code2, Database, Wrench, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL", "HTML & CSS", "JavaScript"]
    },
    {
      title: "ML/AI Frameworks",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Keras", "GENAI", "Langgraph"]
    },
    {
      title: "Data Analysis",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Preprocessing", "Feature Engineering", "EDA"]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Power BI", "Windsurf", "MySQL", "MongoDB", "AWS S3"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Code2 className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-8 bg-card border border-border/50 rounded-xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Communication & Presentation",
              "Teamwork",
              "Critical Thinking",
              "Data-driven Decision Making",
              "Project Ownership",
              "Learning Agility",
              "Problem-Solving",
              "Cross-functional Collaboration",
              "Adaptability"
            ].map((skill) => (
              <Badge 
                key={skill}
                className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border-primary/30 transition-all"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
