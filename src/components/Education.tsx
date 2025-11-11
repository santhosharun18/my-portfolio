import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      major: "Artificial Intelligence and Data Science",
      institution: "Rajalakshmi Institute of Technology",
      location: "Chennai, TN",
      period: "Oct 2021 - May 2025",
      score: "CGPA: 7.7"
    },
    {
      degree: "Higher Secondary School",
      major: "Computer & Mathematics",
      institution: "Raj Matriculation Higher Sec School",
      location: "Mayiladuthurai, India",
      period: "July 2020 - July 2021",
      score: "Percentage: 89%"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-foreground/90">{edu.major}</p>
                  <p className="text-base text-foreground/80">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
                
                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
                    <span className="text-primary font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
