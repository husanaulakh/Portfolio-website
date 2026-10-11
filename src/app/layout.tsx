import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NavigationBar } from '@/components/layout/NavigationBar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Husan Aulakh | Portfolio',
  description:
    'Portfolio of Husan Aulakh, Engineering Physics student at UBC, showcasing projects in AI, Robotics, and Software Development.',
    metadataBase: new URL('http://localhost:9002'),
  icons: {
    icon: '/logo.svg',
    apple: '/apple-icon.svg',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Husan Aulakh | Portfolio',
    description: 'Projects and experience in AI, robotics, and software development.',
    type: 'website',
    images: ['/logo-full.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-foreground',
          inter.variable,
          playfairDisplay.variable
        )}
      >
        <a href='#main-content' className='skip-link'>
          Skip to main content
        </a>
        <div className='relative flex min-h-screen flex-col'>
          <NavigationBar />
          <main
            id='main-content'
            className='flex flex-1 flex-col items-center px-4 pb-24 pt-6 md:px-6 md:pb-6 md:pl-20'
          >
            <div className='container mx-auto w-full max-w-6xl py-2 md:py-6'>
              {children}
            </div>
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
