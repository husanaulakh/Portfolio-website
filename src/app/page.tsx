
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center px-4 py-8">
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-earth-text">
        Let&apos;s make it
        <br />
        <span className="italic text-primary hover:tracking-wider transition-all duration-300 ease-in-out cursor-default">move.</span>
      </h1>
      
      <div className="my-10 w-full max-w-2xl relative group">
        {/* Simulate the shelf - using earthier tones */}
        <div 
            className="h-3 md:h-4 bg-gradient-to-b from-[#A08C7D] to-[#7A6B5D] shadow-lg mt-[-1px] rounded-b-md w-[95%] mx-auto relative z-20 border-x-2 border-b-2 border-earth-secondary/30"
            style={{
                boxShadow: '0px 4px 10px hsla(25, 15%, 40%, 0.3), inset 0px 2px 3px hsla(40, 50%, 95%, 0.2)'
            }}
        ></div>
      </div>
      <spline-viewer url="https://prod.spline.design/qD2hKSACMskno9kw/scene.splinecode"></spline-viewer>

      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Breathing life into ideas with code, circuits, and creativity. From inspired concepts to cutting-edge tech, let&apos;s build something that truly makes an impact.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary-foreground shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  );
}
