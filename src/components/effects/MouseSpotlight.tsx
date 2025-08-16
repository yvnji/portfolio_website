'use client';

import { useEffect, useState } from 'react';

import { useTheme } from '@/contexts/ThemeContext';

export default function MouseSpotlight() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
      style={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(188, 93, 255, 0.12), transparent 95%)`,
      }}
    />
  );
}
