import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-zinc-950 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid items-center justify-items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="mx-auto lg:mx-0 flex w-fit items-center gap-2 rounded-full border border-green-600 bg-green-50/50 dark:border-zinc-800 dark:bg-zinc-900/50 px-3 py-1 text-xs font-medium text-green-400 pointer-events-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new projects!
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300 sm:text-3xl">
                Hi, I&apos;m
              </h2>
              <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-zinc-900 text-white dark:bg-clip-text dark:bg-gradient-to-r dark:from-red-300 dark:to-red-600 sm:text-5xl xl:text-6xl/none">
                John Mark Pabelico
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-300 sm:text-3xl">
                Full Stack Web Developer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                I craft modern, responsive web applications with a focus on
                clean design and seamless user experiences. Let&apos;s build
                something amazing together!
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg">
                <Link href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] aspect-square lg:mr-0">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent"></div>
    </section>
  );
}
