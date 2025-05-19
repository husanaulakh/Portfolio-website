"use client";

import * as React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Eye, ExternalLink } from "lucide-react";
import type { Project } from '@/data/projects';
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef(0);

  const prevProject = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, [projects.length]);

  const nextProject = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, [projects.length]);

  React.useEffect(() => {
    if (carouselRef.current) {
      // Ensures that each item takes full width of the container
      const itemWidth = carouselRef.current.parentElement?.clientWidth || 0;
      carouselRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }, [currentIndex, projects]); // Add projects dependency to re-calc on resize if itemWidth changes
  
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevProject, nextProject]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) { // Swipe left
      nextProject();
    } else if (touchEndX - touchStartX.current > 50) { // Swipe right
      prevProject();
    }
  };


  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No featured projects available.</p>;
  }

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects"
    >
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${projects.length * 100}%` }} 
      >
        {projects.map((project) => (
          <div key={project.slug} className="w-full flex-shrink-0" style={{ width: `${100 / projects.length}%`}}> {/* Each item takes its proportional width */}
             <div className="px-2 md:px-4"> {/* Padding for spacing between items if visible */}
                <Card className="bg-card/60 backdrop-blur-sm shadow-xl overflow-hidden h-full flex flex-col border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden bg-secondary/30 group">
                      <Image
                        src={project.imageUrl || "https://placehold.co/600x338.png"}
                        alt={`${project.title} preview`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint={project.imageAiHint || "product 3d device"}
                        className="p-2 sm:p-4 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 left-0 w-full h-1/4 bg-gradient-to-t from-card/70 to-transparent"></div>
                    </div>
                    <CardTitle className="font-serif text-2xl sm:text-3xl text-center text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-center h-12 line-clamp-2">{project.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                    <p className="text-foreground/80 text-center line-clamp-3 text-sm sm:text-base">{project.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                      <Link href={`/projects/${project.slug}`}>
                        <Eye className="mr-2 h-4 w-4" /> View Project
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-10 bg-card/50 hover:bg-card/80 text-primary rounded-full h-10 w-10 backdrop-blur-sm"
            aria-label="Previous project"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-10 bg-card/50 hover:bg-card/80 text-primary rounded-full h-10 w-10 backdrop-blur-sm"
            aria-label="Next project"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </>
      )}
       <div className="flex justify-center mt-6 space-x-2" aria-label="Carousel navigation dots">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-all duration-300",
                currentIndex === index ? "bg-primary scale-125" : "bg-muted hover:bg-primary/50"
              )}
            />
          ))}
        </div>
    </div>
  );
}
