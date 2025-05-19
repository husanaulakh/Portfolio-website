import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { NavigationBar } from '@/components/layout/NavigationBar';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '700', '900'], 
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Neon Canvas',
  description: 'A portfolio by John Doe, built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Force dark theme */}
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-foreground',
          geistSans.variable,
          geistMono.variable,
          playfairDisplay.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <NavigationBar />
          <main className="flex-1 flex flex-col items-center pl-16"> {/* Add pl-16 for fixed sidebar */}
            <div className="container mx-auto max-w-6xl w-full px-4 py-8">
              {children}
            </div>
          </main>
          {/* Optional: A simple footer could be added here */}
          {/* <footer className="py-6 text-center text-sm text-muted-foreground pl-16">
            © {new Date().getFullYear()} Neon Canvas. All rights reserved.
          </footer> */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
