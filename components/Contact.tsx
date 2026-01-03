'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full bg-white dark:bg-zinc-950 py-24"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Let&apos;s Work Together
              </h2>
              <div className="h-1 w-20 rounded bg-black dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400"></div>
              <p className="max-w-md text-zinc-700 dark:text-zinc-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? I&apos;m
                currently open to new opportunities.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-500">
                Connect on Socials
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/mxrkedz"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 text-zinc-600 dark:text-zinc-400"
                >
                  <IconBrandGithub className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/john-mark-pabelico/"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 text-zinc-600 dark:text-zinc-400"
                >
                  <IconBrandLinkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://x.com/mxrkedz"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 text-zinc-600 dark:text-zinc-400"
                >
                  <IconBrandX className="h-4 w-4" />
                </Link>
                <Link
                  href="discord://discordapp.com/users/274468525056458753"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 text-zinc-600 dark:text-zinc-400"
                >
                  <IconBrandDiscord className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/20 p-8 shadow-2xl">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-500">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-zinc-700 dark:text-zinc-400">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="mt-4 border-zinc-100 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300"
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:border-cyan-400 focus:ring-cyan-400/20 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:border-cyan-400 focus:ring-cyan-400/20 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:border-cyan-400 focus:ring-cyan-400/20 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 focus:border-cyan-400 focus:ring-cyan-400/20 text-zinc-900 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
