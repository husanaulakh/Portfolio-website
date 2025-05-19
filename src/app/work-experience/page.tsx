import WorkExperienceAccordion from '@/components/work-experience/WorkExperienceAccordion';
import WorkHistoryEditor from '@/components/work-experience/WorkHistoryEditor';
import { Separator } from '@/components/ui/separator';

export default function WorkExperiencePage() {
  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4">Work Experience</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A detailed overview of my professional journey and accomplishments, enhanced with AI assistance.
        </p>
      </section>

      <Separator className="bg-border/50" />

      <WorkHistoryEditor />
      
      <Separator className="bg-border/50" />
      
      <WorkExperienceAccordion />
    </div>
  );
}
