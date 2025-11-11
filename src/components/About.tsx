import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <User className="h-8 w-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">About Me</h2>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-8 sm:p-12 shadow-xl backdrop-blur-sm">
          <p className="text-lg leading-relaxed text-foreground/90 mb-6">
            I'm a highly motivated B.Tech Artificial Intelligence and Data Science graduate (2025 batch), 
            seeking opportunities as a Data Scientist and Data Analyst. With a strong foundation in Python, 
            Machine Learning, and Deep Learning frameworks including TensorFlow, PyTorch, and scikit-learn, 
            I bring hands-on experience in building, deploying, and monitoring predictive models.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90">
            My passion lies in applying analytical thinking and problem-solving skills to tackle complex 
            business challenges through data-driven solutions. I thrive in collaborative, geographically 
            distributed team environments and am eager to contribute to innovative projects that leverage 
            the power of AI and data science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
