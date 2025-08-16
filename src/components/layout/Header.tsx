'use client';

import { motion } from 'framer-motion';
import { FileText, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { PersonalInfo, SocialMedia } from '@/types/portfolio';

import ThemeToggle from '../ui/ThemeToggle';

interface HeaderProps {
  personalInfo: PersonalInfo;
  socialMedia: SocialMedia[];
}

export default function Header({ personalInfo, socialMedia }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('about');

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Work' },
  ];

  const socialLinks = [
    // {
    //   href: socialMedia[0].url,
    //   icon: Github,
    //   label: 'GitHub',
    //   show: !!socialMedia[0].url,
    // },
    {
      href: socialMedia[0].url,
      icon: Linkedin,
      label: 'LinkedIn',
      show: !!socialMedia[0].url,
    },
    {
      href: socialMedia[1].url,
      icon: FileText,
      label: 'CV',
      show: !!socialMedia[1].url,
    },
  ].filter((link) => link.show);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'work'];
      const isDesktop = window.innerWidth >= 1024; // lg breakpoint

      let scrollPosition: number;

      if (isDesktop) {
        // 데스크톱: main 컨테이너의 스크롤 사용
        const mainElement = document.getElementById('content');
        if (!mainElement) return;
        scrollPosition = mainElement.scrollTop + 100;
      } else {
        // 모바일: window 스크롤 사용
        scrollPosition = window.scrollY + 100;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          let offsetTop: number;

          if (isDesktop) {
            // 데스크톱: main 컨테이너 기준 상대 위치
            const mainElement = document.getElementById('content');
            if (mainElement) {
              offsetTop = element.offsetTop - mainElement.offsetTop;
            } else {
              offsetTop = element.offsetTop;
            }
          } else {
            // 모바일: document 기준 절대 위치
            offsetTop = element.offsetTop;
          }

          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // 초기 실행
    handleScroll();

    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const mainElement = document.getElementById('content');
      if (mainElement) {
        mainElement.addEventListener('scroll', handleScroll);
        return () => mainElement.removeEventListener('scroll', handleScroll);
      }
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-2 text-4xl font-bold tracking-tight text-slate-900 sm:gap-4 sm:text-5xl dark:text-slate-50'
        >
          <Link href='/'>{personalInfo.name}</Link>
          <ThemeToggle />
        </motion.h1>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-0 text-lg font-medium tracking-tight text-slate-700 sm:mt-1.5 sm:text-xl dark:text-slate-300'
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-2 max-w-xs text-[13px] leading-normal text-slate-600 sm:mt-4 sm:text-sm dark:text-slate-400'
        >
          {personalInfo.description}
        </motion.p>

        <nav className='nav hidden lg:block' aria-label='In-page jump links'>
          <ul className='mt-16 w-max'>
            {navigationItems.map((item, index) => (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link group flex items-center py-3 ${
                    activeSection === item.id ? 'nav-link--active' : 'nav-link--inactive'
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 ${
                      activeSection === item.id ? 'nav-indicator--active' : 'nav-indicator--inactive'
                    }`}
                  />
                  <span className='nav-text text-xs font-bold tracking-widest uppercase'>{item.label}</span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <ul className='ml-1 flex items-center' aria-label='Social media'>
          {socialLinks.map((link, index) => (
            <li key={link.label} className='mr-5 text-xs'>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className='social-link block text-slate-900/60 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50'
                href={link.href}
                target='_blank'
                rel='noreferrer'
                aria-label={`${link.label} (opens in a new tab)`}
              >
                <span className='sr-only'>{link.label}</span>
                <link.icon className='h-5 w-5 sm:h-6 sm:w-6' />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </div>
    </header>
  );
}
