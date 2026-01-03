import Link from 'next/link';
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandDiscord,
} from '@tabler/icons-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image
              src="/mxrkedz logo-black.svg"
              alt="MXRKEDZ.DEV Logo"
              width={24}
              height={24}
              className="h-6 w-6 invert"
            />
            <span className="text-lg font-bold tracking-tight text-zinc-100">
              MXRKEDZ
            </span>
          </div>
          <nav className="flex gap-x-8">
            <div className="ml-4 flex gap-4 pl-4">
              <Link
                href="https://github.com/mxrkedz"
                className="text-zinc-500 hover:text-white"
              >
                <IconBrandGithub className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/mxrkedz"
                className="text-zinc-500 hover:text-white"
              >
                <IconBrandX className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/john-mark-pabelico/"
                className="text-zinc-500 hover:text-white"
              >
                <IconBrandLinkedin className="h-4 w-4" />
              </Link>
              <Link
                href="discord://discordapp.com/users/274468525056458753"
                className="text-zinc-500 hover:text-white"
              >
                <IconBrandDiscord className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-12 border-t border-zinc-900 pt-8">
          <p className="text-center text-xs leading-5 text-zinc-600">
            &copy; Copyright {new Date().getFullYear()}. Made by{' '}
            <span className="font-bold underline">John Mark Pabelico</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
