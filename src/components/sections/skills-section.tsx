'use client';

import { Bar, BarChart, YAxis, XAxis } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillsData = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'C/C++', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL', level: 80 },
    { name: 'JavaScript', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'GCP', level: 70 },
    { name: 'Anaconda', level: 85 },
    { name: 'PyCharm', level: 80 },
    { name: 'VS Code', level: 95 },
  ],
  frameworks: [
    { name: 'Streamlit', level: 80 },
    { name: 'Flask', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'FastAPI', level: 75 },
  ],
  libraries: [
    { name: 'Pandas', level: 90 },
    { name: 'Numpy', level: 90 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'OpenCV', level: 80 },
  ],
};

const chartConfig = {
  level: {
    label: 'Proficiency',
  },
} satisfies ChartConfig;

const SkillChart = ({ data, color }: { data: { name: string; level: number }[]; color: string }) => (
  <ChartContainer config={chartConfig} className="h-[300px] w-full">
    <BarChart
      accessibilityLayer
      data={data}
      layout="vertical"
      margin={{
        left: 10,
      }}
    >
      <YAxis
        dataKey="name"
        type="category"
        tickLine={false}
        axisLine={false}
        tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
        width={80}
      />
      <XAxis dataKey="level" type="number" hide />
      <ChartTooltip
        cursor={{ fill: 'hsl(var(--secondary))' }}
        content={<ChartTooltipContent hideLabel />}
      />
      <Bar dataKey="level" layout="vertical" radius={5} fill={color} />
    </BarChart>
  </ChartContainer>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-1/2 -right-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Skills</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">My technical toolbox.</p>
      </div>

      <Card className="glassmorphism w-full">
        <CardContent className="p-4 sm:p-6">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks & Databases</TabsTrigger>
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="mt-6">
              <SkillChart data={skillsData.languages} color="hsl(var(--primary))" />
            </TabsContent>
            <TabsContent value="frameworks" className="mt-6">
              <SkillChart data={skillsData.frameworks} color="hsl(var(--accent))" />
            </TabsContent>
            <TabsContent value="libraries" className="mt-6">
              <SkillChart data={skillsData.libraries} color="hsl(var(--primary))" />
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <SkillChart data={skillsData.tools} color="hsl(var(--accent))" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
