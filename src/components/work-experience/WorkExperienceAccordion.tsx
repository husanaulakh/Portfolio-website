"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Briefcase, CalendarDays, Building, CheckCircle } from 'lucide-react';

interface WorkExperienceItem {
  id: string;
  company: string;
  title: string;
  dates: string;
  summary: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    id: "work1",
    company: "Innovatech Solutions",
    title: "Senior Robotics Engineer",
    dates: "Jan 2022 - Present",
    summary: [
      "Led a team of 5 engineers in developing a new generation of autonomous warehouse robots, improving picking efficiency by 25%.",
      "Designed and implemented advanced SLAM algorithms for robust navigation in dynamic environments.",
      "Integrated AI-powered vision systems for object recognition and manipulation, reducing error rates by 15%.",
      "Mentored junior engineers and fostered a culture of innovation and continuous improvement."
    ],
  },
  {
    id: "work2",
    company: "Cyberdyne Systems",
    title: "Mechatronics Engineer",
    dates: "Jun 2020 - Dec 2021",
    summary: [
      "Developed and maintained firmware for robotic arms used in precision manufacturing.",
      "Contributed to the mechanical design and electrical integration of new robotic end-effectors.",
      "Collaborated with cross-functional teams to deliver projects on schedule and within budget.",
      "Implemented automated testing procedures, reducing QA time by 40%."
    ],
  },
  {
    id: "work3",
    company: "Stark Industries",
    title: "Engineering Intern (R&D)",
    dates: "May 2019 - Aug 2019",
    summary: [
      "Assisted in the research and development of advanced prosthetic limbs with neural interface technology.",
      "Developed simulation models in MATLAB/Simulink to test and validate control algorithms.",
      "Collected and analyzed sensor data to improve prosthetic performance and user comfort.",
      "Presented findings and contributed to patent applications for novel design features."
    ],
  },
];

export default function WorkExperienceAccordion() {
  return (
    <section id="professional-history">
      <h2 className="font-serif text-4xl font-bold text-center mb-8">Professional History</h2>
      <Accordion type="single" collapsible className="w-full space-y-4 max-w-4xl mx-auto">
        {workExperienceData.map((job) => (
          <AccordionItem value={job.id} key={job.id} className="bg-card/50 border-border rounded-lg shadow-md overflow-hidden hover:border-primary/30 transition-colors">
            <AccordionTrigger className="p-6 hover:no-underline data-[state=open]:bg-primary/5">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-left gap-2">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary flex items-center">
                    <Briefcase className="h-5 w-5 mr-2.5 flex-shrink-0" />
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground flex items-center mt-1 text-sm">
                    <Building className="h-4 w-4 mr-2 flex-shrink-0" />
                    {job.company}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground flex items-center flex-shrink-0 md:pl-4">
                  <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
                  {job.dates}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 pt-0 bg-card/20">
              <ul className="space-y-3 text-foreground/90">
                {job.summary.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
