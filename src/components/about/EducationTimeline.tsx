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
    title: 'M.S. in Robotics',
    institution: 'Carnegie Mellon University',
    date: '2020 - 2022',
    description: 'Focused on AI, machine learning, and autonomous systems. Thesis on multi-agent path planning.',
  },
  {
    id: 'award1',
    type: 'award',
    title: 'Siebel Scholar',
    institution: 'Carnegie Mellon University',
    date: '2021',
    description: 'Recognized for outstanding academic achievement and leadership in graduate studies.',
  },
  {
    id: 'edu2',
    type: 'education',
    title: 'B.S. in Mechanical Engineering',
    institution: 'Massachusetts Institute of Technology',
    date: '2016 - 2020',
    description: 'Concentration in Controls, Instrumentation & Robotics. Minor in Computer Science.',
  },
   {
    id: 'award2',
    type: 'award',
    title: 'MIT $100K Launch Competition Finalist',
    institution: 'Massachusetts Institute of Technology',
    date: '2020',
    description: 'Finalist for an innovative assistive robotics startup concept.',
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
