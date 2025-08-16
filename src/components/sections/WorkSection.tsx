'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import ImageCarousel from '@/components/ui/ImageCarousel';
import { Work } from '@/types/portfolio';

interface WorkSectionProps {
  work: Work[];
}

export default function WorkSection({ work }: WorkSectionProps) {
  return (
    <div className='space-y-12 lg:space-y-16'>
      {work.map((workItem, index) => (
        <motion.div
          key={workItem.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='group relative'
        >
          <div className='grid sm:grid-cols-8 md:gap-4'>
            {/* Left: timeline/year */}
            <div className='mt-1 flex-shrink-0 text-xs font-medium text-slate-900/60 sm:col-span-2 sm:w-32 dark:text-slate-400'>
              {workItem.year}
            </div>

            {/* Right: content */}
            <div className='flex-1 sm:col-span-6'>
              <div className='mb-3 lg:mb-4'>
                <h3 className='text-lg font-semibold whitespace-pre-wrap text-slate-900 dark:text-slate-100'>
                  {workItem.title}
                </h3>
                <p className='text-base font-medium text-slate-700 dark:text-slate-400'>
                  at <span className='font-semibold text-slate-800 dark:text-slate-200'>{workItem.company}</span>
                </p>
              </div>

              <p className='text-sm leading-relaxed whitespace-pre-wrap text-slate-700 sm:text-base dark:text-slate-300'>
                {workItem.description}
              </p>

              {/* Related projects */}
              {workItem.projects && workItem.projects.length > 0 && (
                <div className='mt-4 space-y-3'>
                  {workItem.projects.map((project) => (
                    <a
                      key={project.id}
                      href={project.liveUrl ?? project.githubUrl ?? '#'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group/link relative flex items-start gap-3 rounded-xl bg-white/30 pt-3 pr-4 pb-4 pl-4 ring-1 ring-slate-900/10 backdrop-blur-md transition-colors hover:bg-white/50 dark:bg-white/10 dark:ring-white/10 dark:hover:bg-white/15'
                    >
                      <div className='relative h-14 w-14 flex-shrink-0 overflow-hidden rounded border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800'>
                        {project.imageUrl ? (
                          <Image src={project.imageUrl} alt={project.title} fill className='object-cover' />
                        ) : (
                          <div className='from-primary to-accent flex h-full w-full items-center justify-center bg-gradient-to-br font-bold text-white'>
                            {project.title.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className='min-w-0 flex-1'>
                        <div className='flex items-center gap-2'>
                          <h4 className='truncate text-base font-semibold text-slate-900 group-hover/link:text-indigo-700 dark:text-slate-100 dark:group-hover/link:text-indigo-300'>
                            {project.title}
                          </h4>
                          <span className='rounded-full bg-rose-400/15 px-2 py-0.5 text-[11px] font-medium text-rose-700 dark:bg-violet-400/20 dark:text-violet-300'>
                            Project
                          </span>
                        </div>
                        <p className='mt-1 text-sm text-slate-700 opacity-80 dark:text-slate-300'>
                          {project.description}
                        </p>
                        <div className='mt-2 flex flex-wrap gap-2'>
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='inline-flex items-center rounded-full bg-slate-100/80 px-2 py-0.5 text-[11px] font-medium text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Experience images */}
            {workItem.imageUrls && workItem.imageUrls.length > 0 && (
              <div className='sm:col-span-8'>
                <div className='mt-3'>
                  <ImageCarousel
                    images={workItem.imageUrls}
                    alt={`${workItem.company}`}
                    autoSlideInterval={4000}
                    className='h-48 w-full sm:h-56 lg:h-50'
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
