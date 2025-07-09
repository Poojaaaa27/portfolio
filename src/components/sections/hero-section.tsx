'use client';

import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Bot } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {

  const openChatBot = () => {
    const trigger = document.getElementById('chatbot-trigger-button');
    if (trigger) {
      trigger.click();
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden -mt-20">
      <div className="absolute inset-0 w-full h-full animated-gradient -z-10"></div>
      <div className="absolute inset-0 w-full h-full bg-background/60 backdrop-blur-sm -z-10"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 dark:from-gray-200 dark:to-gray-400">
            Pooja J
          </h1>
          <p className="text-lg md:text-xl font-medium text-accent font-headline">
            AI Innovator | Creative Technologist | Real-World Problem Solver
          </p>
        </div>
        <p className="max-w-2xl text-base text-foreground/80">
          Final-year B.Tech student at SRM University, passionate about applying AI and ML to solve real-world challenges. Proven experience in research, hackathons, and impactful projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              Let's Collaborate
            </Link>
          </Button>
          <Button size="lg" variant="secondary" onClick={openChatBot}>
            <Bot className="mr-2 h-5 w-5" />
            Chat with my AI
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://drive.google.com/drive/u/0/folders/1elPlKRjzimSpA3p9GtsKlUqZLG-Bp0A2" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              View My Resume
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-8 h-8 text-foreground/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
