import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookMarked, TrendingUp } from "lucide-react";

const researchData = [
  {
    publication: "IEEE CONFERENCE PUBLICATION",
    title: "Anti Spoofing Detection for Face Recognition using Image Quality Assessment and Deep Learning",
    summary: "This research introduces a novel two-step model combining image quality assessment and a fine-tuned MobileNetV2 architecture to effectively combat face spoofing attacks. Our method demonstrates high accuracy and robustness across various spoofing techniques.",
    link: "#",
    metricValue: "96.5%",
    metricLabel: "F1 Score",
  },
  {
    publication: "IEEE International Conference on Research and Technology",
    title: "Accuracy Improvement in Diabetic Retinopathy Detection",
    summary: "This work compares four high-performing machine learning models to develop a robust prediction model for Diabetic Retinopathy, achieving high precision and recall with CNN, Transfer Learning, and Ensemble models.",
    link: "https://ieeexplore.ieee.org/document/10895961",
    metricValue: "97%",
    metricLabel: "Precision",
  },
];


export default function ResearchSection() {
  return (
    <section id="research">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Research & Publications</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Contributing to the field of AI.</p>
      </div>

      <div className="space-y-8">
        {researchData.map((research, index) => (
          <Card key={index} className="glassmorphism">
            <div className="grid md:grid-cols-3 gap-6 items-center p-8">
              <div className="md:col-span-2">
                <CardHeader className="p-0">
                  <CardDescription className="font-semibold text-accent">{research.publication}</CardDescription>
                  <CardTitle className="text-2xl md:text-3xl font-headline mt-2">
                    {research.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-foreground/80">
                    {research.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    <Button asChild disabled={research.link === '#'}>
                      <Link href={research.link} target="_blank" rel="noopener noreferrer">
                        <BookMarked className="mr-2 h-4 w-4" />
                        {research.link === '#' ? 'Publication Pending' : 'View Publication'}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-secondary/50 border border-border">
                  <TrendingUp className="w-12 h-12 text-accent mb-2"/>
                  <p className="text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{research.metricValue}</p>
                  <p className="text-muted-foreground font-semibold">{research.metricLabel}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
