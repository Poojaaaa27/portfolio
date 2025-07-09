import { GraduationCap, School, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const educationData = [
  {
    icon: GraduationCap,
    institution: "SRM University, Chennai",
    degree: "B.Tech, CSE (AI/ML)",
    duration: "2021-2025",
    details: "CGPA: 9.81. Deeply engaged in AI/ML research and application, actively participating in hackathons and competitive programming.",
  },
  {
    icon: School,
    institution: "Modern School, Nagpur",
    degree: "Higher Secondary (CBSE)",
    duration: "2021",
    details: "Achieved 95% in Higher Secondary Certificate examinations, laying a strong foundation in science and mathematics.",
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
       <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
       <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse animation-delay-4000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">About Me</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">My journey into the world of technology.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-6 text-base text-foreground/80 text-left">
          <p>
            From my first "Hello, World!" program to developing complex machine learning models, my passion for technology has been a journey of constant learning and creation. As a final-year Computer Science student specializing in AI, I'm driven by the challenge of turning complex problems into elegant, impactful solutions.
          </p>
          <p>
            Whether it's through research, building full-stack applications, or competing in hackathons, I thrive on pushing the boundaries of what's possible with code. My goal is to leverage technology to build a smarter, more efficient future.
          </p>
          <Card className="glassmorphism mt-4">
            <CardHeader className='flex-row items-center gap-4 space-y-0 pb-2'>
              <Sparkles className="w-8 h-8 text-accent" />
              <CardTitle className="font-headline text-2xl">Fun Fact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-foreground/90'>
                When I'm not coding, I'm an avid keyboardist! I love recreating symphony pieces and exploring new melodies—it's my own version of algorithmic composition.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-6 relative">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-1"></div>
            {educationData.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-primary flex items-center justify-center mt-1">
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold font-headline">{item.institution}</h3>
                        <p className="text-md font-semibold text-accent">{item.degree}</p>
                        <p className="text-sm text-muted-foreground mb-2">{item.duration}</p>

                        <p className="text-base text-foreground/80">{item.details}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
