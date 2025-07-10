
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    title: "AgriImpact",
    description: "An innovative full-stack solution to optimize crop planning for farmers using ML-driven predictions.",
    impact: "Reduced manual farm planning effort by 40%.",
    image: "/agriImpact.jpeg",
    imageHint: "admin dashboard",
    tags: ["Full Stack", "AI", "ML"],
    github: "https://github.com/hyderabad25/Team-9"
  },
  {
    title: "Anti Spoofing Detection",
    description: "A robust system to enhance facial recognition security by detecting and preventing spoofing attacks.",
    impact: "Achieved 98% accuracy in identifying spoofing attempts.",
    image: "/spoofdetect.png",
    imageHint: "face recognition",
    tags: ["AI", "ML", "Security"],
    github: "https://github.com/Poojaaaa27/spoofDetect"
  },
  {
    title: "Student Stress Level Prediction",
    description: "An analytical tool that predicts student stress levels based on academic and personal factors, enabling timely intervention.",
    impact: "Provided actionable insights for improving student wellness programs.",
    image: "/studentstress.png",
    imageHint: "student stress analytics",
    tags: ["Data Science", "ML"],
    github: "https://github.com/Poojaaaa27/Sentiment-Analysis-for-Mental-Health"
  },
  {
    title: "ResQbite",
    description: "A platform using AI to tackle food waste by connecting donors with NGOs, featuring waste prediction and optimized delivery routes.",
    impact: "Facilitates efficient food redistribution to support communities in need.",
    image: "/resqbites.png",
    imageHint: "food donation logistics",
    tags: ["AI", "ML", "Full Stack", "Data Science"],
    github: "https://github.com/Poojaaaa27/ResQbites"
  }
];


export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="absolute top-1/2 -left-16 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Featured Projects</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Bringing ideas to life with code.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="glassmorphism flex flex-col overflow-hidden group hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </CardHeader>
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30">{tag}</Badge>
                ))}
              </div>
              <CardDescription className="flex-grow">{project.description}</CardDescription>
              <p className="text-sm font-semibold text-accent mt-4 font-code">{project.impact}</p>
            </div>
            <CardFooter>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  View Project on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
