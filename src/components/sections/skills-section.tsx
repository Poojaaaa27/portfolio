import { Code, Cpu, Database, GanttChartSquare, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  languages: {
    icon: Code,
    title: "Languages",
    skills: ["Python", "C/C++", "JavaScript", "SQL", "HTML/CSS"]
  },
  frameworks: {
    icon: GanttChartSquare,
    title: "Frameworks & Databases",
    skills: ["Node.js", "Express", "Flask", "FastAPI", "Streamlit", "MongoDB"]
  },
  mlLibraries: {
    icon: Cpu,
    title: "AI/ML Libraries",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "OpenCV"]
  },
  tools: {
    icon: Wrench,
    title: "Developer Tools",
    skills: ["Git", "GCP", "Anaconda", "PyCharm", "VS Code"]
  }
};

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Technical Skills</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">My developer toolkit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.values(skillsData).map((category) => (
          <Card key={category.title} className="glassmorphism group hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="flex-row items-center gap-4">
              <category.icon className="w-10 h-10 text-accent group-hover:text-primary transition-colors" />
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="px-4 py-2 rounded-full bg-secondary/50 border border-transparent group-hover:border-secondary transition-colors font-code text-sm font-medium text-foreground/80 group-hover:text-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
