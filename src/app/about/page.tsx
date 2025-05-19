import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, UserCircle } from 'lucide-react';
import SkillsSection from '@/components/about/SkillsSection';
import EducationTimeline from '@/components/about/EducationTimeline';

export default function AboutPage() {
  const quickFacts = [
    "Passionate about robotics, AI, and automation.",
    "Experienced in full-stack development and system design.",
    "Loves to tinker with hardware projects and build prototypes.",
    "Committed to lifelong learning and pushing technological boundaries.",
    "Enjoys collaborative environments and creative problem-solving."
  ];

  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A brief introduction to my journey, skills, and aspirations in the world of technology and engineering.
        </p>
      </section>

      <Separator className="bg-border/50" />

      <section className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2 w-full">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-2 border-primary/30 group">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Collage of personal interests or projects"
              layout="fill"
              objectFit="cover"
              data-ai-hint="portrait technology collage"
              className="rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <Card className="bg-card/50 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <UserCircle className="h-10 w-10 text-primary" />
                <CardTitle className="font-serif text-3xl md:text-4xl">John Doe</CardTitle> {/* Replace with actual name */}
              </div>
               <CardDescription className="text-lg text-muted-foreground pt-2">
                Mechatronics Engineer & Software Developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-foreground/90">
                <strong>Mission:</strong> To leverage cutting-edge technology to solve complex problems and create impactful, moving experiences. I thrive at the intersection of software, hardware, and design, constantly seeking new challenges and opportunities for growth. My goal is to contribute to innovative projects that make a tangible difference.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Quick Facts:</h3>
                <ul className="space-y-2.5">
                  {quickFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent mr-2.5 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-border/50" />

      <SkillsSection />

      <Separator className="bg-border/50" />

      <EducationTimeline />
    </div>
  );
}
