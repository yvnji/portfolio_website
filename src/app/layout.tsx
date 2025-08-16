import type { Metadata } from 'next';

import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Evelyn Kim | Software Engineer (Front End / Back End)',
  description: 'I build thoughtful web services with user experience at the core.',
  keywords: ['Evelyn Kim', 'Evelyn Kim Portfolio', 'Software Engineer', 'Frontend Developer', 'Backend Developer'],
  authors: [{ name: 'Evelyn Kim' }],
  creator: 'Evelyn Kim',
  openGraph: {
    type: 'website',
    title: 'Evelyn Kim | Software Engineer (Front End / Back End)',
    description: 'I build thoughtful web services with user experience at the core.',
    siteName: 'Evelyn Kim Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className='dark' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css'
        />
      </head>
      <body className='h-screen bg-amber-50 leading-relaxed text-slate-900 antialiased selection:bg-rose-300 selection:text-amber-50 lg:overflow-hidden dark:bg-slate-950 dark:text-slate-50 dark:selection:bg-violet-900'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
