'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import ImageModal from './ImageModal';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoSlideInterval?: number;
  className?: string;
  pauseAutoSlide?: boolean;
}

export default function ImageCarousel({
  images,
  alt,
  autoSlideInterval = 3000,
  className = 'w-full h-48',
  pauseAutoSlide = false,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 자동 슬라이드
  useEffect(() => {
    if (images.length <= 1 || isHovered || pauseAutoSlide || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval, isHovered, pauseAutoSlide, isModalOpen]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleImageClick = (index: number) => {
    if (index === currentIndex) {
      // 중앙 이미지 클릭 시 모달 열기
      setIsModalOpen(true);
    } else {
      // 다른 이미지 클릭 시 해당 이미지로 이동
      setCurrentIndex(index);
    }
  };

  const handleModalNavigate = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className={`flex items-center justify-center rounded-lg bg-gray-200 ${className}`}>
        <span className='text-gray-400'>No Image</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <>
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
          <div className='absolute inset-0 cursor-pointer' onClick={() => handleImageClick(0)}>
            <Image
              src={images[0]}
              alt={`${alt} 1`}
              fill
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>

        <ImageModal
          isOpen={isModalOpen}
          images={images}
          currentIndex={currentIndex}
          alt={alt}
          onClose={() => setIsModalOpen(false)}
          onNavigate={handleModalNavigate}
        />
      </>
    );
  }

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-lg ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='relative flex h-full w-full'>
          {images.map((imageSrc, index) => {
            // 현재 인덱스를 기준으로 상대적 위치 계산
            let relativePosition = index - currentIndex;

            // 순환을 위한 위치 조정
            if (relativePosition > images.length / 2) {
              relativePosition -= images.length;
            } else if (relativePosition < -images.length / 2) {
              relativePosition += images.length;
            }

            const isCurrent = relativePosition === 0;
            const isVisible = Math.abs(relativePosition) <= 1; // 중앙과 좌우 1개씩만 표시

            return (
              <motion.div
                key={`image-${index}`}
                className='absolute cursor-pointer overflow-hidden rounded-lg'
                style={{
                  width: '30%',
                  height: '80%',
                  top: '10%',
                }}
                animate={{
                  left: `${50 + relativePosition * 35 - 15}%`,
                  opacity: isVisible ? (isCurrent ? 1 : 0.4) : 0,
                  zIndex: isCurrent ? 20 : 10,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={imageSrc}
                  alt={`${alt} ${index + 1}`}
                  fill
                  className='object-cover transition-transform duration-300 hover:scale-105'
                />
              </motion.div>
            );
          })}
        </div>

        {/* 인디케이터 */}
        {images.length > 1 && (
          <div className='absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 space-x-2'>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`h-2 w-2 cursor-pointer rounded-full transition-all ${index === currentIndex ? 'bg-slate-800 dark:bg-slate-200' : 'bg-slate-800/20 dark:bg-slate-200/20'}`}
              />
            ))}
          </div>
        )}
      </div>

      <ImageModal
        isOpen={isModalOpen}
        images={images}
        currentIndex={currentIndex}
        alt={alt}
        onClose={() => setIsModalOpen(false)}
        onNavigate={handleModalNavigate}
      />
    </>
  );
}
