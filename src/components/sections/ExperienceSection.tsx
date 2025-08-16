'use client';

import { motion } from 'framer-motion';

import ImageCarousel from '@/components/ui/ImageCarousel';
import { Experience } from '@/types/portfolio';

interface ExperienceSectionProps {
  experience: Experience[];
  // isModalOpen: boolean;
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div className='space-y-10 lg:space-y-14'>
      {experience.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className='flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-8'>
            <div className='mt-1 flex-shrink-0 text-xs font-medium text-slate-900/60 sm:w-32 dark:text-slate-400'>
              {exp.year}
            </div>

            {/* 내용 */}
            <div className='flex-1'>
              <div className='mb-2'>
                <h3 className='text-base font-semibold whitespace-pre-wrap text-slate-900 dark:text-slate-100'>
                  {exp.title}
                </h3>
                <p className='text-sm font-medium text-slate-700 dark:text-slate-400'>
                  at <span className='text-sm font-semibold text-slate-800 dark:text-slate-200'>{exp.company}</span>
                </p>
              </div>

              <p className='text-sm leading-relaxed whitespace-pre-wrap text-slate-700 dark:text-slate-300'>
                {exp.description}
              </p>
            </div>
          </div>

          {exp.imageUrls && exp.imageUrls.length > 0 && (
            <div>
              <ImageCarousel
                images={exp.imageUrls}
                alt={`${exp.company}`}
                autoSlideInterval={4000}
                className='h-48 w-full sm:h-56 lg:h-50'
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
