'use client';

import { useEffect, useRef, useState } from 'react';

import { useTheme } from '@/contexts/ThemeContext';

export default function MouseSpotlight() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 300, y: 200 });
  const [velocity, setVelocity] = useState({ x: 3.5, y: 2.8 });
  const animationRef = useRef<number | null>(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // 화면 크기 초기화 및 리사이즈 감지
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (screenSize.width === 0 || screenSize.height === 0) return;

    const animate = () => {
      setPosition((prevPosition) => {
        setVelocity((prevVelocity) => {
          const newPosition = {
            x: prevPosition.x + prevVelocity.x,
            y: prevPosition.y + prevVelocity.y,
          };

          const newVelocity = { ...prevVelocity };

          // 좌우 경계 충돌
          if (newPosition.x <= 0) {
            newVelocity.x = Math.abs(prevVelocity.x); // 항상 양수로
            newPosition.x = 1; // 경계 안쪽으로 위치 조정
          } else if (newPosition.x >= screenSize.width) {
            newVelocity.x = -Math.abs(prevVelocity.x); // 항상 음수로
            newPosition.x = screenSize.width - 1; // 경계 안쪽으로 위치 조정
          }

          // 상하 경계 충돌
          if (newPosition.y <= 0) {
            newVelocity.y = Math.abs(prevVelocity.y); // 항상 양수로
            newPosition.y = 1; // 경계 안쪽으로 위치 조정
          } else if (newPosition.y >= screenSize.height) {
            newVelocity.y = -Math.abs(prevVelocity.y); // 항상 음수로
            newPosition.y = screenSize.height - 1; // 경계 안쪽으로 위치 조정
          }

          return newVelocity;
        });

        return {
          x: Math.max(1, Math.min(screenSize.width - 1, prevPosition.x + velocity.x)),
          y: Math.max(1, Math.min(screenSize.height - 1, prevPosition.y + velocity.y)),
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity.x, velocity.y, screenSize]);

  return (
    <div
      className='pointer-events-none fixed inset-0 z-100 transition-none lg:absolute'
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255, 55, 162, 0.1), transparent 80%)`,
      }}
    />
  );
}
