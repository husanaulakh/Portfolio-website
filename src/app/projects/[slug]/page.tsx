
import { projectsData } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Husan Aulakh Portfolio`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h1 className="font-serif text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-10 py-8">
      <header className="text-center">
        <Button asChild variant="ghost" size="sm" className="mb-4 text-muted-foreground hover:text-primary">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
          </Link>
        </Button>
        <h1 className="font-serif text-5xl font-bold mb-2 text-primary">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.tagline}</p>
      </header>

      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg max-h-[500px] mx-auto group bg-background/50">
        <Image
          src={project.imageUrl || "https://placehold.co/1200x675.png"}
          alt={`${project.title} main image`}
          layout="fill"
          objectFit="cover"
          data-ai-hint={project.imageAiHint || "project showcase"}
          priority
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-text/40 to-transparent"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <main className="lg:col-span-2 space-y-6">
          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="font-serif text-3xl text-primary">Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="space-y-4 text-foreground/90 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-primary [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.longDescription }}
              />
            </CardContent>
          </Card>
        </main>

        <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-primary">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </CardContent>
          </Card>

          {(project.repoUrl || project.liveUrl) && (
            <Card className="bg-card shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {project.repoUrl && (
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Repository
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
           {project.detailsImageUrl && (
            <Card className="bg-card shadow-md">
                <CardHeader>
                    <CardTitle className="font-serif text-2xl text-primary">Details</CardTitle>
                    <CardDescription className="text-muted-foreground">Visual Aid / Schematic</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-background/30">
                         <Image
                            src={project.detailsImageUrl}
                            alt="Project detail graphic"
                            layout="fill"
                            objectFit="contain"
                            data-ai-hint={project.detailsImageAiHint || "technical detail diagram"}
                            className="p-2"
                          />
                    </div>
                </CardContent>
            </Card>
           )}
        </aside>
      </div>
    </div>
  );
}
