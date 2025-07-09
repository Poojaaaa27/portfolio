'use client';

import { useState, useTransition } from 'react';
import { getEasterEgg } from '@/app/actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Terminal, BotMessageSquare } from 'lucide-react';

export function EasterEggTrigger() {
  const [prompt, setPrompt] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    startTransition(async () => {
      const result = await getEasterEgg(prompt);
      if (result.message) {
        toast({
          title: (
            <div className="flex items-center gap-2 font-headline">
              <BotMessageSquare className="h-5 w-5 text-accent" />
              <span>A Wild Message Appears!</span>
            </div>
          ),
          description: <p className="font-body">{result.message}</p>,
          duration: 10000,
        });
      }
      setPrompt('');
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[250px] items-center gap-2"
    >
      <Input
        name="prompt"
        type="text"
        placeholder="Enter secret phrase..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isPending}
        className="bg-background/20 h-9 border-primary/20 text-xs focus:ring-accent font-code"
        autoComplete="off"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        disabled={isPending}
        className="h-9 w-9"
      >
        <Terminal className="h-4 w-4 text-accent hover:text-primary transition-colors" />
        <span className="sr-only">Submit</span>
      </Button>
    </form>
  );
}
