
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, CalendarDays } from 'lucide-react';

interface TimelineEvent {
  id: string;
  type: 'education' | 'award';
  title: string;
  institution?: string;
  date: string;
  description?: string;
}

const educationData: TimelineEvent[] = [
  {
    id: 'edu1',
    type: 'education',
    title: 'BASc in Engineering Physics',
    institution: 'University of British Columbia, Vancouver',
    date: '2020 - 2025',
    description: 'Integrates physics, mathematics, and engineering to enable the translation of novel ideas to real-life applications. Key courses: Software construction, quantum mechanics, mechanical and electrical design and experimental techniques.',
  },
  {
    id: 'award1',
    type: 'award',
    title: 'Le Prix Gerry Denault',
    institution: 'Awarded for achievements', // Assuming this is general, can be specified if known
    date: '2017 - 2020', // CV lists 2017-2020, might be a multi-year award or a range
    description: 'Recognized for significant accomplishments.',
  },
  {
    id: 'award2',
    type: 'award',
    title: 'William Aberhart Alumni Scholarship',
    institution: 'Awarded by William Aberhart High School Alumni', // Assuming based on name
    date: '2020',
    description: 'Scholarship awarded for academic excellence and community involvement.',
  },
];

export default function EducationTimeline() {
  return (
    <section id="education" className="space-y-8">
      <h2 className="font-serif text-4xl font-bold text-center">Education & Awards</h2>
      <div className="relative pl-6 border-l-2 border-primary/70 space-y-10 max-w-3xl mx-auto">
        {educationData.map((event) => (
          <div key={event.id} className="relative">
            <div className="absolute -left-[calc(0.75rem+1px)] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm">
              {event.type === 'education' ? (
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
              ) : (
                <Award className="h-3.5 w-3.5 text-primary" />
              )}
            </div>
            <Card className="ml-8 bg-card/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary/90">{event.title}</CardTitle>
                {event.institution && (
                  <CardDescription className="text-muted-foreground flex items-center text-md">
                     {event.type === 'education' ? <GraduationCap className="h-4 w-4 mr-2" /> : <Award className="h-4 w-4 mr-2" />}
                    {event.institution}
                  </CardDescription>
                )}
                 <div className="text-sm text-muted-foreground flex items-center pt-1">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {event.date}
                </div>
              </CardHeader>
              {event.description && (
                <CardContent>
                  <p className="text-foreground/80">{event.description}</p>
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
