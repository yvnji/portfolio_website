'use client';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      className='relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white/40 text-slate-700 shadow-lg ring-1 shadow-black/10 ring-slate-900/10 backdrop-blur-xl transition-colors hover:bg-white/60 hover:text-slate-900 sm:h-10 sm:w-10 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/15 dark:hover:text-slate-50'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className='pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent'
        aria-hidden='true'
      />
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'light' ? (
          <Moon className='relative z-10 h-4 w-4 sm:h-5 sm:w-5' />
        ) : (
          <Sun className='relative z-10 h-4 w-4 sm:h-5 sm:w-5' />
        )}
      </motion.div>
    </motion.button>
  );
}
