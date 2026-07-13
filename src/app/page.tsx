import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, Orbit } from 'lucide-react';
import { Button } from '@/components/ui/button';

const signals = [
  { label: 'curiosity', value: 'always on' },
  { label: 'current mode', value: 'building + learning' },
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
              A work in progress
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] text-earth-text sm:text-6xl md:text-7xl">
              Husan <span className="italic text-primary">Aulakh</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-earth-text/75">
              Engineering Physics student, builder, and curious generalist. I like finding the thread between ambitious ideas and things that actually work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/projects">Explore the work <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Get the context</Link>
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
              <span><span className="block text-xs uppercase tracking-wider text-earth-text/50">{signal.label}</span><span className="text-earth-text/80">{signal.value}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-secondary">The short version</p>
          <h2 className="font-serif text-4xl text-earth-text md:text-5xl">Ideas are better when they can leave the page.</h2>
        </div>
        <div className="flex items-start gap-4 text-left text-lg leading-relaxed text-muted-foreground">
          <Compass className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
          <p>This is a living record of experiments across software, hardware, strategy, and the questions that connect them.</p>
        </div>
      </section>
    </div>
  );
}
