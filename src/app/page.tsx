import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4 py-8">
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
        Let&apos;s make it
        <br />
        <span className="italic text-primary hover:tracking-wider transition-all duration-300 ease-in-out cursor-default">move.</span>
      </h1>
      
      <div className="my-10 w-full max-w-2xl relative group">
        <div className="aspect-[16/10] bg-black/50 rounded-lg overflow-hidden shadow-2xl shadow-primary/20 relative border-2 border-neutral-800/70">
          {/* This div acts as the 'dark room' or 'stage' */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
          <Image
            src="https://placehold.co/800x500.png" 
            alt="Vintage computer setup on a desk"
            layout="fill"
            objectFit="cover"
            data-ai-hint="vintage computer desk"
            className="transform group-hover:scale-105 transition-transform duration-700 ease-out z-0"
            priority
          />
          {/* Optional: A subtle glow behind the monitor area */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-2/3 h-2/3 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
        {/* Simulate the shelf */}
        <div 
            className="h-3 md:h-4 bg-gradient-to-b from-[#3a2f28] to-[#2c221c] shadow-lg mt-[-1px] rounded-b-md w-[95%] mx-auto relative z-20 border-x-2 border-b-2 border-neutral-700/50"
            style={{
                boxShadow: '0px 4px 10px rgba(0,0,0,0.5), inset 0px 2px 3px rgba(255,255,255,0.05)'
            }}
        ></div>
      </div>

      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Breathing life into ideas with code, circuits, and creativity. From retro-inspired concepts to cutting-edge tech, let&apos;s build something that truly makes an impact.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-shadow duration-300">
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow duration-300">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  );
}
