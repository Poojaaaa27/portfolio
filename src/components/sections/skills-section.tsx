import { BrainCircuit, Code, Wrench, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.values(skills).map((category) => (
          <Card key={category.title} className="glassmorphism flex flex-col group hover:border-accent transition-all duration-300 transform hover:-translate-y-1">
            <CardHeader className="flex-row items-center gap-4 space-y-0 pb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <category.icon className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center">
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 cursor-default transition-colors">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
