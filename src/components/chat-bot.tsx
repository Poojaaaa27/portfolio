'use client';

import { useState, useTransition, useRef, useEffect } from 'react';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askPortfolioAssistant } from '@/app/actions';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || isPending) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      const { response } = await askPortfolioAssistant(input);
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages]);


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="chatbot-trigger-button"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 h-16 w-16 rounded-full shadow-lg"
          size="icon"
        >
          <Bot className="h-8 w-8" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] grid-rows-[auto_1fr_auto] p-0 max-h-[90vh]">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Bot className="h-6 w-6 text-primary" />
            Pooja's AI Assistant
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[50vh] w-full" ref={scrollAreaRef}>
          <div className="p-4 space-y-4">
            <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border border-primary">
                    <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%]">
                    <p>Hello! I'm an AI assistant for Pooja's portfolio. Ask me anything about her skills, projects, or experience!</p>
                </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'justify-end' : ''
                }`}
              >
                {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 border border-primary">
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
                 <div
                  className={`rounded-lg p-3 text-sm max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p>{message.content}</p>
                </div>
                {message.role === 'user' && (
                    <Avatar className="h-8 w-8 border">
                        <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                )}
              </div>
            ))}
            {isPending && (
                <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 border border-primary">
                        <AvatarFallback><Bot className="h-4 w-4" /></AvatarFallback>
                    </Avatar>
                    <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%] flex items-center">
                       <Loader2 className="h-4 w-4 animate-spin mr-2"/> Thinking...
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a project..."
              className="pr-12 h-12"
              disabled={isPending}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
              disabled={isPending || !input}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Or try the easter egg in the footer! (Hint: `reveal easter egg`)
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
