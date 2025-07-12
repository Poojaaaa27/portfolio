'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from '@/components/ui/sheet';
import { Menu, Bot } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center group">
            <Bot className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-xl w-[250px] sm:w-[300px]">
                 <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">A list of navigation links to sections of the page.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full py-6">
                  <nav className="flex flex-col items-start gap-4">
                    {navLinks.map((link) => (
                      <Button key={link.href} variant="link" className="text-lg text-foreground" asChild>
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </nav>
                  <div className='mt-auto flex justify-center'>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
