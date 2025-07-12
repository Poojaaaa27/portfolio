import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const socials = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/Poojaaaa27',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/pooja-j-b72427251/',
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:poojaa1627@gmail.com',
  },
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-4 left-4 z-50 md:top-1/2 md:-translate-y-1/2">
      <TooltipProvider>
        <div className="flex md:flex-col gap-2 p-1 rounded-full glassmorphism">
          {socials.map((social) => (
            <Tooltip key={social.label} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-accent/30 hover:text-accent">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-6 h-6" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="hidden md:block">
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
}
