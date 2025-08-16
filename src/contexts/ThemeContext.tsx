'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 로컬 스토리지에서 테마 불러오기
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // 기본값: 다크 모드
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  useEffect(() => {
    if (!mounted) return;

    // HTML 요소에 클래스 적용
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    html.style.colorScheme = theme;

    // 로컬 스토리지에 테마 저장
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  if (!mounted) {
    return <ThemeContext.Provider value={{ theme: 'dark', toggleTheme }}>{children}</ThemeContext.Provider>;
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
