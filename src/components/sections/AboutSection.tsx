'use client';

import { motion } from 'framer-motion';

import { About } from '@/types/portfolio';

interface AboutSectionProps {
  about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className='prose prose-lg max-w-none'>
        <p className='text-base leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300'>
          {about.content}
        </p>
      </div>
    </motion.div>
  );
}
