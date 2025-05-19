
"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart as LucideBarChart, Cog, Cpu, Wrench } from 'lucide-react'; 
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
  // Software
  { name: 'Python', level: 90, category: 'Software' },
  { name: 'Java', level: 80, category: 'Software' },
  { name: 'C/C++', level: 85, category: 'Software' },
  { name: 'R', level: 75, category: 'Software' },
  { name: 'SQL', level: 70, category: 'Software' },
  { name: 'HTML/CSS', level: 80, category: 'Software' },
  { name: 'JavaScript/TS', level: 85, category: 'Software' },
  { name: 'React', level: 90, category: 'Software' },
  { name: 'TensorFlow/PyTorch', level: 80, category: 'Software' },
  { name: 'OpenCV', level: 85, category: 'Software' },
  { name: 'REST API/Flask', level: 80, category: 'Software' },
  { name: 'Pandas', level: 85, category: 'Software' },
  { name: 'MATLAB', level: 75, category: 'Software' },
  { name: 'Linux', level: 80, category: 'Software' },
  { name: 'Docker', level: 85, category: 'Software' },
  { name: 'Azure', level: 70, category: 'Software' },
  { name: 'Git', level: 90, category: 'Software' },
  { name: 'Gazebo ROS', level: 75, category: 'Software' },
  { name: 'Blender (Scripting)', level: 70, category: 'Software' },
  // Electrical Engineering
  { name: 'Circuit Design', level: 80, category: 'EE' },
  { name: 'PCB Design', level: 75, category: 'EE' },
  { name: 'Microcontrollers (ESP32, Arduino)', level: 85, category: 'EE' },
  { name: 'Oscilloscope', level: 70, category: 'EE' },
  // Mechanical Engineering
  { name: 'CAD (SolidWorks, OnShape)', level: 85, category: 'ME' },
  { name: '3D Printing', level: 90, category: 'ME' },
  { name: 'Fabrication (Laser/Water Jet/Lathe)', level: 80, category: 'ME' },
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
          <ChartContainer config={chartConfig} className="h-[300px] w-full"> {/* Increased height for more skills */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ left: 5, right: 25, top:0, bottom:0 }} barSize={12} barGap={2}> {/* Adjusted barSize and barGap */}
                <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={10} width={130} tick={{ fill: 'hsl(var(--foreground))' }} axisLine={false} tickLine={false}/>
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
        {renderSkillChart('Software & AI', softwareSkills, Cog, "Crafting intelligent systems and digital experiences.")}
        {renderSkillChart('Electrical Engineering', eeSkills, Cpu, "Designing circuits and embedded solutions.")}
        {renderSkillChart('Mechanical Engineering', meSkills, Wrench, "Bringing physical concepts to life with precision.")}
      </div>
    </section>
  );
}
