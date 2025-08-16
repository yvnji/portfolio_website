'use client';

import BackgroundSpotlight from '@/components/effects/BackgroundSpotlight';
import MouseSpotlight from '@/components/effects/MouseSpotlight';
import Header from '@/components/layout/Header';
import MainContent from '@/components/layout/MainContent';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <div id='_next'>
      <div className='relative'>
        <MouseSpotlight />
        <div className='mx-auto h-full max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:h-screen lg:py-0'>
          <div className='h-full lg:flex lg:justify-between lg:gap-4'>
            <Header personalInfo={portfolioData.personalInfo} socialMedia={portfolioData.socialMedia} />
            <MainContent about={portfolioData.about} skills={portfolioData.skills} work={portfolioData.work} />
          </div>
        </div>

        <BackgroundSpotlight />
      </div>
    </div>
  );
}
