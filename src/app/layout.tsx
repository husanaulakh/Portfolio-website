import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NavigationBar } from '@/components/layout/NavigationBar';
import { siteUrl } from '@/lib/site-url';
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
  title: { default: 'Husan Aulakh | Software Engineering & Applied AI', template: '%s | Husan Aulakh' },
  description:
    'Portfolio of Husan Aulakh, Engineering Physics graduate from UBC, showcasing projects in AI, Robotics, and Software Development.',
    metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo.svg',
    apple: '/apple-icon.svg',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Husan Aulakh | Software Engineering & Applied AI',
    description: 'Projects and experience in AI, robotics, and software development.',
    type: 'website',
    url: siteUrl,
    siteName: 'Husan Aulakh',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Husan Aulakh — Software Engineering, AI and Robotics' }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Husan Aulakh', url: siteUrl, jobTitle: 'Software Engineer', alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of British Columbia' }, sameAs: ['https://github.com/husanaulakh', 'https://www.linkedin.com/in/husan-aulakh/'] }) }} />
        <Toaster />
      </body>
    </html>
  );
}
