
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ProjectCarousel from '@/components/projects/ProjectCarousel';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  const featuredProjects = projectsData.slice(0, 3); 

  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">My Works</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my diverse projects, demonstrating skills in software, hardware, and creative engineering.
        </p>
      </section>

      <Separator className="bg-border/50" />

      {featuredProjects.length > 0 && (
        <section>
          <h2 className="font-serif text-4xl font-bold text-center mb-8">Featured Projects</h2>
          <ProjectCarousel projects={featuredProjects} />
        </section>
      )}
      
      <Separator className="bg-border/50" />

      <section>
        <h2 className="font-serif text-4xl font-bold text-center mb-8">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.slug} className="bg-card shadow-lg hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl || "https://placehold.co/600x400.png"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.imageAiHint || "technology abstract"}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-earth-text/30 via-transparent to-transparent"></div>
                </div>
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-serif text-2xl mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2 mb-3">{project.tagline}</CardDescription>
                <CardContent className="p-0 flex-grow mb-4">
                  <p className="text-foreground/90 line-clamp-3">{project.shortDescription}</p>
                </CardContent>
                <CardFooter className="p-0 mt-auto">
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                    <Link href={`/projects/${project.slug}`}>
                      View Details <Eye className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
