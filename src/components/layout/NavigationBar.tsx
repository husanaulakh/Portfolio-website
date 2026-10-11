'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NAV_LINKS } from '@/lib/constants';

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={100}>
      <nav
        aria-label='Primary'
        className='fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-background/95 p-2 shadow-lg backdrop-blur md:inset-y-0 md:left-0 md:right-auto md:h-full md:w-16 md:rounded-r-xl md:rounded-t-none md:border-r md:border-t-0 md:p-2'
      >
        <Link
          href='/'
          aria-label='Husan Aulakh – home'
          className='hidden shrink-0 items-center justify-center rounded-xl transition-transform hover:scale-105 focus-visible:scale-105 md:mx-auto md:mb-2 md:mt-2 md:flex md:h-11 md:w-11'
        >
          <Image src='/logo.svg' alt='' width={44} height={44} className='h-11 w-11 rounded-xl' priority />
        </Link>
        <ul className='flex flex-1 items-center justify-around gap-1 md:flex-col md:justify-center md:gap-4 md:py-4'>
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.href} className='flex-1 md:flex-none'>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'relative flex items-center justify-center rounded-lg px-3 py-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:bg-primary/10 md:min-h-12 md:min-w-12',
                        isActive && 'bg-primary/10 text-primary'
                      )}
                    >
                      <item.icon className='h-6 w-6' aria-hidden='true' />
                      <span className='sr-only'>{item.label}</span>
                      {isActive && (
                        <span className='absolute bottom-0 left-1/2 h-1.5 w-6 -translate-x-1/2 rounded-t-full bg-primary shadow-sm shadow-primary/30 md:left-0 md:top-1/2 md:h-6 md:w-1.5 md:-translate-y-1/2 md:translate-x-0 md:rounded-r-full md:rounded-t-none' />
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side='right' className='hidden border-border bg-card text-card-foreground shadow-lg md:block'>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </nav>
    </TooltipProvider>
  );
}
