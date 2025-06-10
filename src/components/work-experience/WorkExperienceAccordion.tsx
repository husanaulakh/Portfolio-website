
"use client";
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
    company: "TRIUMF Innovations Inc.",
    title: "Business Specialist",
    dates: "April – Aug 2024",
    summary: [
      "Leading the creation of a comprehensive business plan for the Institute for Advanced Medical Isotopes (IAMI), aligning financial, operational, and market strategies with TRIUMF’s long-term objectives.",
      "Performing in-depth market research and competitive analysis to assess industry trends for IAMI.",
      "Defining key operational workflows, resource allocation, and execution timelines to ensure seamless implementation."
    ],
  },
  {
    id: "work2",
    company: "Novarc Technologies",
    title: "Machine Learning Developer Intern",
    dates: "April – Aug 2024",
    summary: [
      "Fine-tuned state-of-the-art vision models like DINO and SegFormer for welding tasks, enhancing detection and segmentation accuracy by 15%.",
      "Improved model convergence and achieved 95% accuracy through hyper-parameter tuning using Weights and Biases sweeps.",
      "Experimented with Segment Anything Model 2 (SAMv2) architecture, exploring modifications to generate robust embeddings, leading to better feature extraction."
    ],
  },
  {
    id: "work3",
    company: "Cyberium Group",
    title: "Software Engineer Intern",
    dates: "Sept – Dec 2023",
    summary: [
      "Led the design and implementation of an AI application leveraging GPT-4 API and LLM-based NLP models to automate company cybersecurity compliance audits (ISO 27001) with 91% accuracy, reducing manual review time by 90%.",
      "Built and deployed containerized Flask backend and React frontend on Azure, allowing real-time analytics.",
      "Integrated PostgreSQL for robust data storage & query performance across compliance datasets.",
      "Designed interactive, user-centric dashboards visualizing compliance results, adopted internally for company assessments.",
    ],
  },
  {
    id: "work4",
    company: "Centre for Heart Lung Innovation",
    title: "Data Science Intern",
    dates: "May – Sept 2023",
    summary: [
      "Performed differential expression analysis using Python and R on over 62,000 gene expressions, identifying significant variations and extracting insights from a dataset of 24 unique samples",
      "Created a Docker container for EagleImp software to enhance genotyping workflow efficiency by 85%.",
      "Developed an RNA-sequencing pipeline using portable Bash scripts on a high-performance computing cluster at UBC ARC Sockeye, reducing processing times by 30%."
    ],
  },
  {
    id: "work5",
    company: "Cenovus Energy",
    title: "Process and Performance Intern",
    dates: "Jan – Apr 2022",
    summary: [
      "Automated prospective supplier data extraction using Python, processing over 500+ data files monthly.",
      "Led a project that ensured the supplier’s compliance with WorkSafe BC, resulting in cost savings of $27 million.",
      "Analyzed supplier performance and crafted industry benchmarking reports using Excel and Power BI."
    ],
  }
];

const consolidatedWorkExperienceData = [
  {
    company: "UBC Agrobot",
    roles: [
      {
        id: "agrobot-ai-lead",
        title: "AI Lead",
        dates: "May 2024 – Present",
        summary: ["Leading Agrobot’s Applied ML division of 20+ developers, managing 4 ongoing projects including weed detection, maize detection, blueberry picker and system architecture."],
      },
      {
        id: "agrobot-ml-engineer",
        title: "Machine Learning Engineer",
        dates: "Sep 2023 – May 2024",
        summary: ["Fine-tuned a YOLOv8 maize-detection model to achieve 98% accuracy using Python and UBC’s ARC Sockeye.", "Deployed a real-time video inference system using C++ on NVIDIA Jetson Orin for sequential frame analysis at 30 FPS"],
      },
    ],
  },
  {
    company: "TRIUMF Innovations Inc.",
    roles: [
      {
        id: "work1",
        title: "Business Specialist",
        dates: "Dec 2024 – Present",
        summary: [
          "Leading the creation of a comprehensive business plan for the Institute for Advanced Medical Isotopes (IAMI), aligning financial, operational, and market strategies with TRIUMF’s long-term objectives.",
          "Performing in-depth market research and competitive analysis to assess industry trends for IAMI.",
          "Defining key operational workflows, resource allocation, and execution timelines to ensure seamless implementation."
        ],
      },
    ],
  },
  {
    company: "Novarc Technologies",
    roles: [
      {
        id: "work2",
        title: "Machine Learning Developer Intern",
        dates: "Apr – Aug 2024",
        summary: [
          "Fine-tuned state-of-the-art vision models (DINO and SegFormer) for specific welding tasks, increasing detection and segmentation accuracy from 70% to 92%",
          "Improved DINO model convergence and accuracy to 93% via hyper-parameter tuning using Weights and Biases sweeps.",
          "Experimented with Segment Anything Model 2 (SAMv2) architecture, exploring modifications to generate robust embeddings, leading to better feature extraction."
        ],
      },
    ],
  },
  {
    company: "Cyberium Group",
    roles: [
      {
        id: "work3",
        title: "Software Engineer Intern",
        dates: "Sep – Dec 2023",
        summary: [
          "Led the design and implementation of an AI application leveraging GPT-4 API and LLM-based NLP models to automate company cybersecurity compliance audits (ISO 27001) with 91% accuracy, reducing manual review time by 90%.",
          "Built and deployed containerized Flask backend and React frontend on Azure, allowing real-time analytics.",
          "Integrated PostgreSQL for data storage & query performance across compliance datasets, improving lookup time by 40%.",
          "Designed interactive, user-centric dashboards visualizing compliance results, adopted internally for company assessments.",
        ],
      },
    ],
  },
  {
    company: "Centre for Heart Lung Innovation",
    roles: [
      {
        id: "work4",
        title: "Data Science Intern",
        dates: "May – Sep 2023",
        summary: [
          "Performed differential expression analysis using Python and R on over 62,000 gene expressions, identifying significant variations and extracting insights from a dataset of 24 unique samples",
          "Created a Docker container for EagleImp software to enhance genotyping workflow efficiency by 85%.",
          "Developed an RNA-sequencing pipeline using portable Bash scripts on a high-performance computing cluster at UBC ARC Sockeye, reducing processing times by 30%."
        ],
      },
    ],
  },
  {
    company: "Cenovus Energy",
    roles: [
      {
        id: "work5",
        title: "Process and Performance Intern",
        dates: "Jan – Apr 2022",
        summary: [
          "Automated prospective supplier data extraction using Python, processing over 500+ data files monthly.",
          "Led a project that ensured the supplier’s compliance with WorkSafe BC, resulting in cost savings of $27 million.",
          "Analyzed supplier performance and crafted industry benchmarking reports using Excel and Power BI."
        ],
      },
    ],
  },
];

export default function WorkExperienceAccordion() {
  return (
 <section id="professional-history" className="w-full space-y-4 max-w-4xl mx-auto">
      {/* New Section */}
      <div className="bg-card border border-border rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-3">What I Bring to a Team</h2>
        <p className="text-foreground/90">
          I enjoy fast-paced environments where I can blend my technical depth with creative problem-solving. I love working in teams, asking good questions, and figuring things out even when the answer isn’t obvious (yet).
        </p>
      </div>
      {consolidatedWorkExperienceData.map((companyEntry, companyIndex) => (
        <div key={companyIndex} className="bg-card border border-border rounded-lg shadow-md overflow-hidden mb-6">
           <div className="p-6 bg-primary/5 text-left">
              <h2 className="text-2xl font-bold text-primary flex items-center">
                 <Building className="h-6 w-6 mr-3 flex-shrink-0 text-secondary" />
                {companyEntry.company}
             </h2>
           </div>
           <div className="p-6 pt-4 bg-card/30">
              {companyEntry.roles.map((role, roleIndex) => (
                 <div key={role.id} className={roleIndex > 0 ? "mt-6 pt-4 border-t border-border" : ""}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-2 mb-3">
                       <h3 className="text-xl font-semibold text-primary flex items-center">
                         <Briefcase className="h-5 w-5 mr-2.5 flex-shrink-0 text-primary" />
                         {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-center flex-shrink-0 md:pl-4">
                        <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0 text-secondary" />
                        {role.dates}
                     </p>
                   </div>
                   <ul className="space-y-3 text-foreground/90">
                     {role.summary.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                           <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                           <span>{point}</span>
                        </li>
                      ))}
                   </ul>
                 </div>
              ))}
              </div>
        </div>
      ))}
    </section>
  );
}