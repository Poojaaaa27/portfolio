import { EasterEggTrigger } from './easter-egg-trigger';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 mt-20">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Pooja J. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-1">
            Designed & Built with a touch of AI magic.
          </p>
        </div>
        <EasterEggTrigger />
      </div>
    </footer>
  );
}
