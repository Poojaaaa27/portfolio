import { BrainCircuit, Code, Wrench, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  languages: {
    icon: Code,
    title: 'Languages',
    items: ['Python', 'C', 'C++', 'HTML/CSS', 'SQL', 'JavaScript'],
  },
  frameworks: {
    icon: Layers,
    title: 'Frameworks & Databases',
    items: ['Streamlit', 'Flask', 'Node.js', 'Express', 'MongoDB', 'FastAPI'],
  },
  libraries: {
    icon: BrainCircuit,
    title: 'Libraries',
    items: ['Pandas', 'Numpy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV'],
  },
  tools: {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GCP', 'Anaconda', 'PyCharm', 'VS Code'],
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-1/2 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Technical Toolbox</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">The skills and technologies I use to build things.</p>
      </div>

      <Card className="glassmorphism w-full p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(skills).map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <category.icon className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold font-headline">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-base px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-default transition-colors">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
