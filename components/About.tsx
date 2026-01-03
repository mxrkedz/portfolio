import Link from 'next/link';
import { ArrowRight, Code2, Database, Layout, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="h-4 w-4 text-cyan-400" />,
      items: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'JavaScript',
        'HTML',
        'CSS',
      ],
    },
    {
      category: 'Backend',
      icon: <Database className="h-4 w-4 text-emerald-400" />,
      items: ['Node.js', 'Express.js', 'MongoDB', 'PHP', 'SQL'],
    },
    {
      category: 'Core & Tools',
      icon: <Terminal className="h-4 w-4 text-purple-400" />,
      items: ['Java', 'C++', 'Git', 'Postman'],
    },
  ];
  return (
    <section
      id="about"
      className="relative w-full bg-white dark:bg-zinc-950 py-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                About Me
              </h2>
              <div className="h-1 w-20 rounded bg-zinc-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400"></div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a{' '}
                <strong className="text-zinc-950 dark:text-zinc-100">
                  Bachelor of Science in Information Technology
                </strong>{' '}
                graduate with a passion for building scalable, user-centric web
                applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey involves deep diving into full-stack development,
                from crafting pixel-perfect interfaces with{' '}
                <span className="text-cyan-400">Tailwind & React</span> to
                architecting robust backends using{' '}
                <span className="text-emerald-400">Node.js & SQL</span>. I also
                have a creative background in graphic design and video editing,
                allowing me to bridge the gap between design and engineering.
              </p>
            </div>
            <div className="pt-4">
              <Link href="#contact" className="no-underline">
                <Button size="lg" className="cursor-pointer">
                  Let&apos;s Connect
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Code2 className="h-6 w-6 text-cyan-400" />
                Current Tech Stack
              </h3>
              <p className="text-muted-foreground">
                The technologies and tools I use to bring ideas to life.
              </p>
            </div>

            <div className="grid gap-6">
              {skills.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border bg-white border-zinc-200 dark:bg-zinc-900/30 dark:border-zinc-800 p-6 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-50 p-2 border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                      {group.icon}
                    </div>
                    <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
                      {group.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="bg-zinc-100 border border-zinc-200 text-zinc-700 hover:text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-white transition-colors px-3 py-1 text-sm font-normal cursor-default"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
