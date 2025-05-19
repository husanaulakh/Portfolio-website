
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NAV_LINKS } from '@/lib/constants';

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={100}>
      <nav className="fixed left-0 top-0 h-full w-16 bg-background/90 backdrop-blur-md p-2 flex flex-col items-center justify-center shadow-md z-50 rounded-r-xl border-r border-border/30">
        <ul className="space-y-4">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-center p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors relative group',
                        isActive && 'text-primary bg-primary/10'
                      )}
                      aria-label={item.label}
                    >
                      <item.icon className="w-6 h-6" />
                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-primary rounded-r-full shadow-sm shadow-primary/30"></span>
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-card text-card-foreground border-border shadow-lg">
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
