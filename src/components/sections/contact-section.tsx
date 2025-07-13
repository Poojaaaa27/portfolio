
'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

type ContactFormValues = z.infer<typeof formSchema>;


export default function ContactSection() {
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

      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
            <Card className="glassmorphism overflow-hidden">
             <div className="relative aspect-square w-full">
               <Image
                 src="/photo.jpeg"
                 alt="Pooja J"
                 fill
                 className="rounded-t-lg object-cover"
                 data-ai-hint="Pooja J smiling portrait"
               />
             </div>

              <CardContent className="p-6 text-center">
                <h3 className="font-headline text-2xl font-bold">Pooja J</h3>
                <p className="text-accent font-semibold text-sm">AI Innovator & Creative Technologist</p>
                <div className="flex justify-center gap-4 mt-4">
                  {socials.map((social) => (
                    <Button key={social.label} asChild variant="outline" size="icon" className="rounded-full w-10 h-10 hover:bg-accent/20 hover:text-accent hover:border-accent">
                      <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
        <div className="md:col-span-3">
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
      </div>
    </section>
  );
}
