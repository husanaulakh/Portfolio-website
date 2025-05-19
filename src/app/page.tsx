import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center px-4 py-8"> {/* Adjusted min-height */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
        Let&apos;s make it
        <br />
        <span className="italic text-primary">move.</span>
      </h1>
      
      <div className="my-10 w-full max-w-lg h-60 sm:h-72 md:h-80 bg-card/30 rounded-xl flex items-center justify-center shadow-2xl shadow-primary/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
        <Image 
          src="https://placehold.co/400x200.png" 
          alt="3D Shelf Graphic Placeholder" 
          width={400} 
          height={200}
          data-ai-hint="shelf abstract product"
          className="rounded-md object-contain z-10 transform group-hover:scale-105 transition-transform duration-300"
        />
         <div className="absolute -bottom-1 left-0 w-full h-1/4 bg-gradient-to-t from-card/50 to-transparent"></div> {/* Shelf shadow/reflection */}
      </div>

      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Innovative solutions in software, electronics, and mechanical engineering. Explore my work and let&apos;s collaborate on your next big idea.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-shadow">
          <Link href="/projects">
            View Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-shadow">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </div>
  );
}
