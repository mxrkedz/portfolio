import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navbar() {
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
            <span>
              MXRKEDZ<span className="text-blue-900">.DEV</span>
            </span>
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
          <Link href="#contact" className="no-underline">
            <Button size="lg" type="button" className="cursor-pointer">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
