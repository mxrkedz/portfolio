'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mx-3 md:flex md:flex-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tighter"
          >
            <Image
              src="/mxrkedz logo-black.svg"
              alt="Logo"
              width={30}
              height={30}
              className="dark:invert"
            />
            <span>MXRKEDZ</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex md:flex-1 justify-end items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="#contact" className="no-underline">
            <Button size="lg" className="cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
