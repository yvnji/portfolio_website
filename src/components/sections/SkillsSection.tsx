'use client';

import { motion } from 'framer-motion';

import { Skills } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skills;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className='space-y-8'>
      {skills.categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='group pl-0.5'
        >
          <div className='mb-4 flex items-center'>
            <motion.h3
              className='text-sm font-semibold tracking-wide whitespace-nowrap text-slate-900 uppercase dark:text-slate-100'
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
            >
              {category.name}
            </motion.h3>
            <motion.div
              className='ml-4 h-px flex-1 bg-slate-900/20 dark:bg-slate-50/20'
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            />
          </div>

          {/* Skills Tags */}
          <div className='flex flex-wrap gap-2'>
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.1 },
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1 + skillIndex * 0.03,
                  type: 'spring',
                  stiffness: 400,
                }}
                className='relative inline-flex items-center rounded-lg bg-slate-100/60 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-900/5 transition-all hover:bg-slate-200/80 hover:text-slate-900 hover:shadow-md dark:bg-slate-800/60 dark:text-slate-200 dark:ring-white/5 dark:hover:bg-slate-700/80 dark:hover:text-slate-100'
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
