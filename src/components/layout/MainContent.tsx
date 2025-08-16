'use client';

import { motion } from 'framer-motion';

import { About, Skills, Work } from '@/types/portfolio';

import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import WorkSection from '../sections/WorkSection';

interface MainContentProps {
  about: About;
  skills: Skills;
  work: Work[];
}

export default function MainContent({ about, skills, work }: MainContentProps) {
  const sections = [
    { id: 'about', title: 'About', component: <AboutSection about={about} /> },
    { id: 'skills', title: 'Skills', component: <SkillsSection skills={skills} /> },
    { id: 'work', title: 'Work', component: <WorkSection work={work} /> },
  ];

  return (
    <main
      id='content'
      className='scrollbar-hide pt-24 lg:h-full lg:w-[52%] lg:overflow-x-hidden lg:overflow-y-auto lg:py-24 lg:pr-4'
    >
      {sections.map((section, index) => (
        <div key={section.id}>
          <motion.section
            id={section.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='mb-20 scroll-mt-16 md:mb-30 lg:scroll-mt-24'
          >
            {/* Mobile/Tablet Section Title - Hidden on lg+ */}
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className='mb-8 text-lg font-bold tracking-tight text-slate-900 lg:hidden dark:text-slate-100'
            >
              {section.title}
            </motion.h2>

            {section.component}
          </motion.section>

          {/* Divider between sections - only for mobile/tablet */}
          {/* {index < sections.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              className='mb-20 h-px bg-slate-900/10 lg:hidden dark:bg-slate-50/10'
            />
          )} */}
        </div>
      ))}
    </main>
  );
}
