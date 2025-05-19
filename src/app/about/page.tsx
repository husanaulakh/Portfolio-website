
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, UserCircle, Award as AwardIconLucide, Users } from 'lucide-react'; // Renamed Award to AwardIconLucide to avoid conflict
import SkillsSection from '@/components/about/SkillsSection';
import EducationTimeline from '@/components/about/EducationTimeline';

const nonTechnicalExperience = [
  {
    id: 'vpsub',
    title: 'Member – UBC Vice-Provost Revenue Diversification Subcommittee - New Ventures',
    date: 'Jan – Apr 2025',
    description: 'Participating in a sub-committee to brainstorm and research the viability of alternative revenue channels for the University. Responsible for making researched recommendations of possible entrepreneurial opportunities.',
    icon: Users,
  },
  {
    id: 'hmsasc',
    title: 'Volunteer – Healthier Masculinities, AMS Sexual Assault Support Centre',
    date: 'Sep 2024 – Present',
    description: 'Coordinated setup and logistics for the Healthier Masculinities initiative, ensuring smooth execution of events. Actively engaged participants in discussions, promoting a supportive environment.',
    icon: Users,
  },
  {
    id: 'epcouncil',
    title: '3rd Year Representative – UBC Engineering Physics Council',
    date: 'Sep 2022 – Apr 2023',
    description: 'Represented third-year students, communicated their needs, and played a key role in organizing student-focused events. Collaborated with faculty and peers to enhance academic and social experiences.',
    icon: Users,
  },
  {
    id: 'bethany',
    title: 'Meal-Time Companion – Bethany Senior Living',
    date: 'Mar 2018 – Apr 2021',
    description: 'Assisted with feeding and providing companionship to elderly residents during meal times, fostering a caring and supportive dining environment.',
    icon: Users,
  },
];


export default function AboutPage() {
  const quickFacts = [
    "Passionate about AI, robotics, and translating novel ideas to real-life applications.",
    "Experienced in software development, machine learning, and engineering design.",
    "Committed to lifelong learning and pushing technological boundaries.",
    "Enjoys collaborative environments and creative problem-solving.",
    "Interests: Entrepreneurship, venture development, biomedical technologies, basketball, volleyball, hiking, and drones."
  ];

  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="font-serif text-5xl font-bold mb-4 text-primary">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          An Engineering Physics student at UBC driven by a passion for innovation at the intersection of physics, mathematics, and engineering.
        </p>
      </section>

      <Separator className="bg-border/50" />

      <section className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
        <div className="md:col-span-2 w-full">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 border-secondary/30 group">
            <Image
              src="/images/Profile Picture.png"
              alt="Husan Aulakh"
              layout="fill"
              objectFit="cover"
              data-ai-hint="portrait technology student"
              className="rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-text/30 to-transparent"></div>
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <UserCircle className="h-10 w-10 text-primary" />
                <CardTitle className="font-serif text-3xl md:text-4xl text-primary">Husan Aulakh</CardTitle>
              </div>
               <CardDescription className="text-lg text-muted-foreground pt-2">
                Engineering Physics Student | AI & Robotics Enthusiast
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-foreground/90">
                <strong>Mission:</strong> To leverage a strong foundation in engineering physics and a passion for cutting-edge technology to develop innovative solutions for real-world challenges. I thrive on integrating software, hardware, and creative problem-solving to contribute to impactful projects, particularly in AI, robotics, and biomedical applications.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                  <AwardIconLucide className="h-5 w-5 mr-2 text-primary"/> Quick Facts & Interests: {/* Using AwardIconLucide to represent a general "highlight" or "star" icon */}
                </h3>
                <ul className="space-y-2.5">
                  {quickFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2.5 mt-0.5 flex-shrink-0" /> {/* Changed from accent to primary */}
                      <span className="text-foreground/90">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="bg-border/50" />

      <SkillsSection />

      <Separator className="bg-border/50" />

      <EducationTimeline />

      <Separator className="bg-border/50" />
      
      <section id="leadership-volunteering" className="space-y-8">
        <h2 className="font-serif text-4xl font-bold text-center text-primary">Leadership & Volunteering</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {nonTechnicalExperience.map((item) => (
            <Card key={item.id} className="bg-card shadow-md hover:shadow-sm transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="font-serif text-xl text-primary">{item.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground pt-1">{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
