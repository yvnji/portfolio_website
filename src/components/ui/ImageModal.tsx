'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  alt: string;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

export default function ImageModal({ isOpen, images, currentIndex, alt, onClose, onNavigate }: ImageModalProps) {
  const [localIndex, setLocalIndex] = useState(currentIndex);

  useEffect(() => {
    setLocalIndex(currentIndex);
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    setLocalIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLocalIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrevious, handleNext]);

  // 부모에 인덱스 변경 통지 (렌더 중 setState 방지)
  useEffect(() => {
    if (!isOpen) return;
    onNavigate?.(localIndex);
  }, [isOpen, localIndex, onNavigate]);

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4'
        >
          {/* 닫기 버튼 */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={onClose}
            className='absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
          >
            <X size={24} />
          </motion.button>

          {/* 이전 버튼 */}
          {images.length > 1 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className='absolute top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            >
              <ChevronLeft size={24} />
            </motion.button>
          )}

          {/* 다음 버튼 */}
          {images.length > 1 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className='absolute top-1/2 right-4 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
            >
              <ChevronRight size={24} />
            </motion.button>
          )}

          {/* 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className='relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg'
          >
            <AnimatePresence mode='wait'>
              <motion.div
                key={localIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={images[localIndex]}
                  alt={`${alt} ${localIndex + 1}`}
                  width={800}
                  height={600}
                  className='h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain'
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* 이미지 인덱스 표시 */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm'
            >
              {localIndex + 1} / {images.length}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
