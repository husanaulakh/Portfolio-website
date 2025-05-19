"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart as LucideBarChart, Cog, Cpu, Wrench } from 'lucide-react'; // Changed TrendingUp to Wrench for ME
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface Skill {
  name: string;
  level: number; 
  category: 'Software' | 'EE' | 'ME';
}

const skillsData: Skill[] = [
  { name: 'React/Next.js', level: 90, category: 'Software' },
  { name: 'Node.js/Express', level: 85, category: 'Software' },
  { name: 'Python (Django/Flask)', level: 80, category: 'Software' },
  { name: 'TypeScript', level: 90, category: 'Software' },
  { name: 'Databases (SQL/NoSQL)', level: 75, category: 'Software' },
  { name: 'Circuit Design', level: 75, category: 'EE' },
  { name: 'PCB Layout (KiCad/Altium)', level: 70, category: 'EE' },
  { name: 'Microcontrollers (AVR/ARM)', level: 85, category: 'EE' },
  { name: 'Firmware Development', level: 80, category: 'EE' },
  { name: 'Signal Processing', level: 65, category: 'EE' },
  { name: 'CAD (SolidWorks/Fusion360)', level: 80, category: 'ME' },
  { name: 'FEA/CFD Analysis', level: 65, category: 'ME' },
  { name: '3D Printing/Prototyping', level: 90, category: 'ME' },
  { name: 'Robotics (ROS)', level: 75, category: 'ME' },
  { name: 'Control Systems', level: 70, category: 'ME' },
];

const chartConfig = {
  level: {
    label: "Proficiency",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function SkillsSection() {
  const softwareSkills = skillsData.filter(skill => skill.category === 'Software');
  const eeSkills = skillsData.filter(skill => skill.category === 'EE');
  const meSkills = skillsData.filter(skill => skill.category === 'ME');

  const renderSkillChart = (title: string, data: Skill[], icon: React.ElementType, description: string) => {
    const IconComponent = icon;
    return (
      <Card className="bg-card/50 shadow-lg flex-1 min-w-[300px] md:min-w-[350px]">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconComponent className="h-7 w-7 text-accent" />
              <CardTitle className="text-2xl font-serif">{title}</CardTitle>
            </div>
            <LucideBarChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 5, right: 25, top:0, bottom:0 }} barSize={16}>
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={11} width={120} tick={{ fill: 'hsl(var(--foreground))' }} axisLine={false} tickLine={false}/>
                <ChartTooltip
                  cursor={{ fill: 'hsl(var(--accent)/0.1)' }}
                  content={<ChartTooltipContent indicator="dot" hideLabel nameKey="name" />}
                />
                <Bar dataKey="level" fill="var(--color-level)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="skills" className="space-y-8">
      <h2 className="font-serif text-4xl font-bold text-center">Skills Proficiency</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {renderSkillChart('Software Engineering', softwareSkills, Cog, "Crafting digital experiences and robust backend systems.")}
        {renderSkillChart('Electrical Engineering', eeSkills, Cpu, "Designing intelligent circuits and embedded solutions.")}
        {renderSkillChart('Mechanical Engineering', meSkills, Wrench, "Bringing physical concepts to life with precision design.")}
      </div>
    </section>
  );
}
