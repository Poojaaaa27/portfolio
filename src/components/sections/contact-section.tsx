'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { generateProjectImage } from '@/app/actions';
import { Skeleton } from '../ui/skeleton';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

type ContactFormValues = z.infer<typeof formSchema>;

function ContactImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const hint = 'AI assistant robot illustration';

  useEffect(() => {
    async function loadImage() {
      try {
        const { url } = await generateProjectImage(hint);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to generate contact image:", error);
        setImageUrl("https://placehold.co/600x600.png");
      }
    }
    loadImage();
  }, [hint]);

  if (!imageUrl) {
    return <Skeleton className="w-full h-[400px] md:h-full rounded-lg" />;
  }

  return (
    <div className="relative w-full h-[400px] md:h-full">
        <Image
            src={imageUrl}
            alt="AI illustration"
            fill
            className="rounded-lg object-cover"
            data-ai-hint={hint}
        />
    </div>
  );
}


export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    const to = 'poojaa1627@gmail.com';
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    
    toast({
        title: "Redirecting to your email client...",
        description: "Please use your email application to send the message.",
    });

    form.reset();
  };

  return (
    <section id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline">Get In Touch</h2>
        <p className="text-base md:text-lg text-muted-foreground mt-2">Let's collaborate and build something amazing!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block">
            <ContactImage />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="glassmorphism h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} className="glassmorphism h-12" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Subject" {...field} className="glassmorphism h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Your Message" rows={5} {...field} className="glassmorphism" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
              <Send className="mr-2 h-5 w-5" />
              {form.formState.isSubmitting ? "Redirecting..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
