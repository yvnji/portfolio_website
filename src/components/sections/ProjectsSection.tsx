'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <>
      <div className='space-y-10 lg:space-y-14' onMouseLeave={() => setHoveredProject(null)}>
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: hoveredProject && hoveredProject !== project.id ? 0.5 : 1,
            }}
            transition={{
              y: { duration: 0.5, delay: index * 0.1 },
              opacity: { duration: 0.3, delay: 0 },
            }}
            href={project.liveUrl ?? project.githubUrl ?? '#'}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Open ${project.title} in new tab`}
            className='group relative grid cursor-pointer px-2 pb-1 outline-none focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-indigo-400/50 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:px-3'
            onMouseEnter={() => setHoveredProject(project.id)}
          >
            <div className='z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:order-1 sm:col-span-2 dark:text-slate-400'>
              <div className='relative h-24 w-30 overflow-hidden rounded border-2 border-slate-200 bg-slate-100 sm:w-full dark:border-slate-700 dark:bg-slate-800'>
                {project.imageUrl ? (
                  <Image src={project.imageUrl} alt={project.title} fill className='object-cover' />
                ) : (
                  <div className='from-primary to-accent flex h-full w-full items-center justify-center bg-gradient-to-br font-bold text-white'>
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            <div className='z-10 sm:order-2 sm:col-span-6'>
              <h3>
                <p className='inline-flex items-baseline text-base leading-tight font-semibold text-slate-900 dark:text-slate-100'>
                  <span>{project.title}</span>
                  <svg
                    className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </p>
              </h3>

              <p className='mt-2 text-sm leading-normal whitespace-pre-wrap text-slate-700 dark:text-slate-300'>
                {project.description}
              </p>

              <div className='mt-3 flex flex-wrap gap-2'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='inline-flex items-center rounded-full bg-rose-400/15 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:bg-violet-400/20 dark:text-violet-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </>
  );
}
