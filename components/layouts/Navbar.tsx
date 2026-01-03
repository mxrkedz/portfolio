'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tighter"
            onClick={() => setIsOpen(false)}
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
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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
        <div className="hidden md:flex items-center gap-2">
          <Link href="#contact" className="no-underline">
            <Button size="lg" className="cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </div>
        <button
          className="flex items-center justify-center p-2 md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 left-0 w-full border-b bg-background md:hidden">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Contact Me</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
