import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BarChart, Calendar, Trophy } from 'lucide-react';

const experiences = [
    {
        icon: Award,
        title: "Event Organizer",
        description: "Organized and managed multiple coding contests and workshops for the university community, fostering a culture of competitive programming."
    },
    {
        icon: Trophy,
        title: "Competitive Programmer",
        description: "Actively participated in CodeChef contests, achieving a 3-star rating and consistently solving complex algorithmic challenges."
    },
    {
        icon: BarChart,
        title: "Leaderboard Performance",
        description: "Regularly ranked among the top performers in university-level contests, demonstrating strong problem-solving skills under pressure."
    },
    {
        icon: Calendar,
        title: "Challenge Streaks",
        description: "Maintained long streaks of daily problem-solving on platforms like LeetCode and GeeksforGeeks, showcasing dedication and consistency."
    }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative">
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse animation-delay-2000"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Competitive Programming</h2>
        <p className="text-lg text-muted-foreground mt-2">Thriving in the world of algorithms and challenges.</p>
      </div>

      <Card className="glassmorphism p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 text-center">
                <h3 className="text-2xl font-bold font-headline">CodeChef University Club</h3>
                <p className="text-muted-foreground">SRMIST Chapter</p>
                <div data-ai-hint="codechef logo" className="mt-4 w-40 h-40 rounded-lg bg-secondary/50 flex items-center justify-center mx-auto">
                   <Trophy className="w-20 h-20 text-primary"/>
                </div>
            </div>
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6">
                {experiences.map(exp => (
                    <div key={exp.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-accent">
                            <exp.icon className="w-8 h-8"/>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg font-headline">{exp.title}</h4>
                            <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Card>
    </section>
  );
}
