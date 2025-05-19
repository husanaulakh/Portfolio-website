
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const softwareSkills: string[] = [
  'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 
  'React', 'TensorFlow', 'PyTorch', 'OpenCV', 'REST API', 
  'Flask', 'Pandas', 'MATLAB', 'Docker', 'Git', 'Blender (Scripting)'
];

const eeSkills: string[] = [
  'Circuit Design', 'PCB Design', 'ESP32', 'BluePill (STM32)', 
  'Arduino UNO', 'Oscilloscope'
];

const meSkills: string[] = [
  'SolidWorks', 'OnShape', '3D Printing', 'Laser Cutter', 
  'Water Jet', 'Lathe'
];

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="font-serif text-4xl font-bold text-center text-primary">Skills Proficiency</h2>
      
      <div className="max-w-4xl mx-auto space-y-10 px-4 sm:px-0">
        {/* Software & AI Skills */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary mb-5">Software & AI</h3>
          <div className="flex flex-wrap gap-3">
            {softwareSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm shadow-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Electrical Engineering Skills */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary mb-5">Electrical Engineering</h3>
          <div className="flex flex-wrap gap-3">
            {eeSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm shadow-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Mechanical Engineering Skills */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-primary mb-5">Mechanical Engineering</h3>
          <div className="flex flex-wrap gap-3">
            {meSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm shadow-sm font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
