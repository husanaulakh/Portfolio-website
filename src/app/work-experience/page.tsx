import type { Metadata } from 'next';
import WorkExperienceAccordion from '@/components/work-experience/WorkExperienceAccordion';

export const metadata: Metadata = { title: 'Work Experience', description: 'Professional experience in software engineering, machine learning, and robotics.', alternates: { canonical: '/work-experience' } };

export default function WorkExperiencePage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">Work Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A detailed overview of my professional journey across engineering, software development, and applied machine learning.  
        </p>
      </section>

      
      <WorkExperienceAccordion />
    </div>
  );
}
