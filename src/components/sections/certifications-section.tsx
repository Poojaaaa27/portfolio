import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certifications = [
    {
        title: "Database Management System",
        issuer: "NPTEL",
        date: "Mar 2024",
        skills: ["DBMS"],
    },
    {
        title: "Python for Data science",
        issuer: "NPTEL",
        date: "Mar 2024",
        skills: ["Data Science", "Python", "Pandas", "NumPy"],
    },
    {
        title: "Data Science Tools",
        issuer: "Coursera",
        date: "Dec 2023",
        skills: ["Jupyter", "RStudio", "Git", "Watson Studio"],
    },
    {
        title: "AI Digital Skills",
        issuer: "Accenture",
        date: "Dec 2023",
        skills: ["Artificial Intelligence", "AI Ethics"],
    },
    {
        title: "Introduction to Deep Learning",
        issuer: "Great Learning",
        date: "Dec 2023",
        skills: ["Deep Learning", "Neural Networks"],
    },
    {
        title: "Python Programming",
        issuer: "HCL GUVI",
        date: "Dec 2023",
        skills: ["Python"],
    },
    {
        title: "Python for Data Science & AI",
        issuer: "IBM",
        date: "Dec 2023",
        skills: ["Data Science", "Python", "AI Development"],
    },
    {
        title: "Supervised Machine Learning",
        issuer: "Stanford University",
        date: "Dec 2023",
        skills: ["Machine Learning", "Regression", "Classification"],
    },
    {
        title: "Java Tools",
        issuer: "Infosys Springboard",
        date: "Sep 2023",
        skills: ["Java", "Development Tools"],
    },
    {
        title: "AICTE Parakh Assessment",
        issuer: "AICTE",
        date: "Aug 2023",
        skills: ["Operating Systems", "Databases", "OOP"],
    },
    {
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "Jul 2023",
        skills: ["SQL", "Databases"],
    },
    {
        title: "Python (Basic)",
        issuer: "HackerRank",
        date: "Jun 2023",
        skills: ["Python"],
    },
];


export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative">
       <div className="absolute top-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Certifications</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Recognized achievements and validated skills.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="glassmorphism flex flex-col group hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
             <CardHeader className="flex-row items-start gap-4 pb-4">
               <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                 <Award className="w-6 h-6 text-primary" />
               </div>
               <div>
                <CardTitle className="font-headline text-lg leading-tight">{cert.title}</CardTitle>
                <p className="text-sm font-semibold text-muted-foreground">{cert.issuer} &bull; {cert.date}</p>
               </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {cert.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
