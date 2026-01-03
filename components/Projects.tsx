import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Taguig Linguistic Exchange',
      description:
        'A feature-rich language application boasting real-time chat, AI speech, and gamified progress tracking.',
      image: '/tlexx.png',
      tags: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'Supabase',
        'JWT',
        'Hugging Face',
      ],

      links: {
        demo: 'https://tlex-taupe.vercel.app/',
        github: 'https://github.com/mcodog/Langly',
        caseStudy: '/tlex',
      },
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-white dark:bg-zinc-950 py-24"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Projects
            </h2>
            <div className="h-1 w-20 rounded bg-black dark:bg-gradient-to-r dark:from-cyan-400 dark:to-emerald-400"></div>
            <p className="max-w-2xl text-muted-foreground text-lg">
              A collection of personal experiments and professional client
              projects.
            </p>
          </div>

          {/* <Button
            variant="outline"
            className="border-zinc-800 bg-zinc-950 text-zinc-300 hover:bg-zinc-900 hover:text-cyan-400 hidden md:flex"
          >
            View All Archive
          </Button> */}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-cyan-900/10"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-400 dark:text-zinc-700">
                  <FolderGit2 className="w-12 h-12 opacity-20" />
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      className="rounded-full bg-white p-3 text-zinc-950 transition-transform hover:scale-110 hover:bg-cyan-400"
                      title="View Live Demo"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  )}
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      className="rounded-full bg-zinc-100 dark:bg-zinc-950 p-3 text-zinc-950 dark:text-white border border-zinc-300 dark:border-zinc-700 transition-transform hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
                      title="View Source Code"
                    >
                      <IconBrandGithub className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-500 px-2 py-0.5 text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                  <Link
                    href={project.links.caseStudy}
                    className="inline-flex items-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    Read Case Study
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-12 flex justify-center md:hidden">
          <Button
            variant="outline"
            className="w-full border-zinc-800 bg-zinc-950 text-zinc-300"
          >
            View All Archive
          </Button>
        </div> */}
      </div>
    </section>
  );
}
