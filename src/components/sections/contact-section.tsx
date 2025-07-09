import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mt-2">Let's collaborate and build something amazing!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
            <Image 
                src="https://placehold.co/600x600.png"
                alt="AI illustration"
                width={600}
                height={600}
                className="rounded-lg object-cover"
                data-ai-hint="robot coding"
            />
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" className="glassmorphism h-12" />
            <Input type="email" placeholder="Your Email" className="glassmorphism h-12" />
          </div>
          <Input type="text" placeholder="Subject" className="glassmorphism h-12" />
          <Textarea placeholder="Your Message" rows={6} className="glassmorphism" />
          <Button type="submit" size="lg" className="w-full">
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
