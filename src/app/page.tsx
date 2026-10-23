import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Orbit, Github, Linkedin } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/button';

const featuredSlugs = ['lexli-reading-tools', '3d-image-similarity-capstone', 'ml-simulated-robot-competition'];
const featuredProjects = featuredSlugs.map(slug => projectsData.find(p => p.slug === slug)).filter((p): p is (typeof projectsData)[number] => Boolean(p));

const signals = [
  { label: 'curiosity', value: 'always on' },
  { label: 'current mode', value: 'building dependable systems' },
  { label: 'base', value: 'Vancouver, BC' },
];

export default function HomePage() {
  return (
    <div className="space-y-14 py-4 md:space-y-24 md:py-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-earth-text/10 bg-[#f3ecdd] px-6 py-10 shadow-sm sm:px-10 md:min-h-[620px] md:px-14 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,.72),transparent_34%),linear-gradient(115deg,transparent_58%,rgba(201,132,116,.08))]" />
        <div className="relative z-10 grid items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)]">
          <div className="max-w-xl text-left">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-earth-secondary">
              <Orbit className="h-4 w-4" aria-hidden="true" />
              Software Engineering · Applied AI · Robotics
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] text-earth-text sm:text-6xl md:text-7xl">
              Husan <span className="italic text-primary">Aulakh</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-earth-text/75">
              Engineering Physics graduate and software engineer. I build reliable software and intelligent systems, from large-scale infrastructure at Amazon to applied computer vision for robots.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">Explore the work <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">About me</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden rounded-3xl md:min-h-[500px]" aria-label="Editorial collage showing a profile, orbital diagrams, technical sketches, a laptop, camera, headphones, and compass.">
            <Image
              src="/images/husan-mind-collage.png"
              alt="Editorial collage of a profile surrounded by orbital diagrams, technical sketches, a laptop, camera, headphones, and compass"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-center mix-blend-multiply"
            />
          </div>
        </div>
        <div className="relative z-10 mt-10 grid gap-3 border-t border-earth-text/15 pt-5 text-left sm:grid-cols-3">
          {signals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-3 text-sm">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              <span><span className="block text-xs uppercase tracking-wider text-earth-text/80">{signal.label}</span><span className="text-earth-text/80">{signal.value}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="selected-work" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4"><h2 id="selected-work" className="font-serif text-4xl text-earth-text md:text-5xl">Selected engineering projects</h2><Link href="/projects" className="inline-flex items-center gap-2 underline underline-offset-4">All projects <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        <div className="grid gap-5 md:grid-cols-3">{featuredProjects.map(project => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm hover:shadow-md">
            <div className="relative aspect-[4/3]"><Image src={project.imageUrl} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
            <div className="space-y-2 p-5"><h3 className="font-serif text-2xl font-semibold">{project.title}</h3><p className="text-sm text-muted-foreground">{project.tagline}</p><span className="inline-flex items-center gap-1 text-sm font-semibold">View case study <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></div>
          </Link>
        ))}</div>
        <div className="flex flex-wrap gap-5 text-sm"><a className="inline-flex items-center gap-1 underline" href="https://github.com/husanaulakh" target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" />GitHub</a><a className="inline-flex items-center gap-1 underline" href="https://www.linkedin.com/in/husan-aulakh/" target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" aria-hidden="true" />LinkedIn</a><a className="underline" href="/resume.pdf" download="Husan_Aulakh_Resume.pdf" type="application/pdf">Download résumé (PDF)</a></div>
      </section>
      <section className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-secondary">The short version</p>
          <h2 className="font-serif text-4xl text-earth-text md:text-5xl">From prototypes to production.</h2>
        </div>
        <div className="flex items-start gap-4 text-left text-lg leading-relaxed text-muted-foreground">
          <Compass className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <p>My work spans production software at Amazon, machine-learning systems for robotics, and hardware experiments. Explore the projects to see what I built and why.</p>
        </div>
      </section>
    </div>
  );
}
