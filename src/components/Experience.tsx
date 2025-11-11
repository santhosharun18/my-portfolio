import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent hidden md:block" />

          <div className="space-y-8">
            <div className="relative bg-card border border-border/50 rounded-xl p-6 sm:p-8 ml-0 md:ml-16 card-hover">
              {/* Timeline dot */}
              <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Gen AI Intern</h3>
                    <p className="text-lg font-semibold text-foreground/90">Kochadai Technology</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>August 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Madurai, India</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-foreground/80 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Spearheading full-stack product development using cutting-edge GenAI tools including LangGraph, LangChain, and n8n, delivering intelligent, scalable applications.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Designing and deploying autonomous AI agents powered by LLMs, enabling dynamic task execution, contextual reasoning, and multi-step workflows.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Building end-to-end GenAI solutions integrating prompt engineering, vector databases, and API orchestration for real-world use cases such as content generation, summarization, and decision support.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Architecting modular pipelines for GenAI applications with robust backend logic, frontend interfaces, and seamless cloud deployment.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Collaborating cross-functionally to align GenAI capabilities with business goals, ensuring high-impact delivery and rapid iteration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
