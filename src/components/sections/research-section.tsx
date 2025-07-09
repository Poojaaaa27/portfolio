import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookMarked, TrendingUp } from "lucide-react";

export default function ResearchSection() {
  return (
    <section id="research">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Research & Publications</h2>
        <p className="text-lg text-muted-foreground mt-2">Contributing to the field of AI.</p>
      </div>

      <Card className="glassmorphism">
        <div className="grid md:grid-cols-3 gap-6 items-center p-8">
          <div className="md:col-span-2">
            <CardHeader className="p-0">
              <CardDescription className="font-semibold text-accent">IEEE CONFERENCE PUBLICATION</CardDescription>
              <CardTitle className="text-2xl md:text-3xl font-headline mt-2">
                Anti Spoofing Detection for Face Recognition using Image Quality Assessment and Deep Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-foreground/80">
                This research introduces a novel two-step model combining image quality assessment and a fine-tuned MobileNetV2 architecture to effectively combat face spoofing attacks. Our method demonstrates high accuracy and robustness across various spoofing techniques.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Button asChild>
                  <Link href="https://ieeexplore.ieee.org/document/10170461" target="_blank" rel="noopener noreferrer">
                    <BookMarked className="mr-2 h-4 w-4" />
                    View on IEEE Xplore
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
          <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-secondary/50 border border-border">
              <TrendingUp className="w-12 h-12 text-accent mb-2"/>
              <p className="text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">96.5%</p>
              <p className="text-muted-foreground font-semibold">F1 Score</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
