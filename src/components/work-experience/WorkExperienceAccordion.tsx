
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
    id: "work0",
    company: "Amazon",
    title: "Software Development Engineer",
    dates: "Jul 2025 – Present",
    summary: [
      "Supported an internal system that regulated pricing, product availability, and shipping for 300M+ users.",
      "Developed testing tools used by 1,000+ engineering teams to test code changes before they reached customers.",
      "Created an AI development framework that increased engineer output by 3x, which enabled the team to complete quarterly goals a month early.",
      "Created onboarding resources and led new-hire training, which reduced ramp-up time from 8 weeks to 1 week.",
      "Designed and rolled out a regression testing framework across 1,000+ production pipelines, which reduced pre/post-deployment regressions and improved change safety at scale.",
      "Monitored and optimized workflows that consumed 10B+ seconds of CPU time, which improved observability and enabled early detection of performance regressions.",
      "Led the design and delivery of a Datapath View Discovery Search platform, which enabled engineers to discover and reuse existing business logic views and drove cross-team alignment on view metadata, ownership, and discoverability.",
      "Targeted cost and efficiency improvements within Datapath, one of Amazon's highest-cost infrastructure platforms.",
      "Developed distributed backend services on AWS (Bedrock, EC2, Lambda, DynamoDB, SQS, S3, Kendra, OpenSearch) with a focus on reliability, cost awareness, and operational simplicity.",
    ],
  },
   {
    id: "work1",
    company: "TRIUMF Innovations Inc.",
    title: "Business Specialist",
    dates: "Dec 2024 – Sep 2025",
    summary: [
      "Worked directly with TRIUMF Innovations' CEO to lead research and business planning for the Institute for Advanced Medical Isotopes, a state-of-the-art research facility for medical-isotope and radiopharmaceutical research.",
      "Developed a comprehensive business plan by conducting market research, predicting costs, and identifying operational needs.",
      "Consulted with technical and business stakeholders, which ensured diverse perspectives were consolidated into a practical launch plan."
    ],
  },
  {
    id: "work2",
    company: "Novarc Technologies",
    title: "Machine Learning Developer Intern",
    dates: "Apr – Aug 2024",
    summary: [
      "Designed computer-vision models (DINO, SegFormer) to ensure consistent welding joints for welding robots.",
      "Collaborated with welders and robotics engineers to identify points of failure during real-world robot use and increased model accuracy from 70% to 92%.",
      "Tuned hyperparameters with Weights and Biases sweeps, which improved model convergence and accuracy.",
      "Architected reusable training and testing workflows, which reduced development time by 40%.",
      "Evaluated the Segment Anything Model 2 (SAMv2) architecture and presented recommendations to leadership to guide future development."
    ],
  },
  {
    id: "work3",
    company: "Cyberium Group",
    title: "Software Engineer Intern",
    dates: "Sep – Dec 2023",
    summary: [
      "Owned the design and implementation of an AI-powered client-facing tool that automated cybersecurity compliance audits (ISO 27001) with 91% accuracy and reduced manual review time by 90%.",
      "Built and deployed a containerized Flask backend and React frontend on Azure, which enabled real-time analytics.",
      "Integrated PostgreSQL for robust data storage and query performance across compliance datasets, which improved lookup time by 40%.",
      "Interviewed clients to gather their needs and translated them into product decisions.",
      "Facilitated weekly meetings to present progress, gather feedback, and align priorities.",
      "Designed interactive, user-centric dashboards that visualized compliance results and improved user experience, which were adopted internally for company assessments."
    ],
  },
  {
    id: "work4",
    company: "Centre for Heart Lung Innovation",
    title: "Data Science Intern",
    dates: "May – Sep 2023",
    summary: [
      "Investigated genetic heart disease with patient-specific, stem cell-derived heart tissue to better understand disease mechanisms and treatment approaches.",
      "Performed differential expression analysis with Python and R on 62,000+ gene expressions, which identified significant variations across 24 unique samples.",
      "Created a Docker container for EagleImp software, which improved genotyping workflow efficiency by 85%.",
      "Crafted a reproducible RNA-sequencing and data-analysis pipeline with portable Bash scripts on UBC ARC Sockeye, which reduced data-processing time by 30%.",
      "Collaborated with researchers across biology, medicine, and engineering to interpret sequencing results and synthesized findings into a research poster that was presented to staff at the annual Centre for Heart Lung Innovation Research Day."
    ],
  },
  {
    id: "work6",
    company: "Real Estate",
    title: "BC Licensed Real Estate Representative",
    dates: "2021 – Present",
    summary: [
      "Became certified as a BC Licensed Real Estate Representative to help newcomer families settle in Canada.",
      "Worked with immigrant families to understand their unique circumstances and priorities and recommended suitable homes.",
      "Prioritized each family's best interests and supported them in making informed decisions during a major life transition.",
      "Ran workshops that explained the BC house-buying process and distributed relevant resources."
    ],
  },
  {
    id: "work7",
    company: "Private Tutoring",
    title: "Mathematics and Science Tutor",
    dates: "2019 – Present",
    summary: [
      "Tutored 12 high school students in mathematics and science.",
      "Tailored explanations to each student's base knowledge and learning style, which fostered curiosity and independent learning skills.",
      "Developed digital tools that helped students limit distractions and increased studying efficiency.",
      "Empowered young students to build confidence in material they had previously found intimidating."
    ],
  },
  {
    id: "work5",
    company: "Cenovus Energy",
    title: "Process and Performance Intern",
    dates: "Jan – Apr 2022",
    summary: [
      "Consulted oil and gas suppliers to identify recurring challenges in Cenovus' intake and compliance process.",
      "Used feedback to update and clarify compliance requirements, which shortened the process from 3 days to 1 day.",
      "Automated the review of 500+ files with Python that contained supplier information each month.",
      "Analyzed supplier performance and crafted industry benchmarking reports with Excel and Power BI.",
      "Led a review of WorkSafeBC compliance that identified a significant cost issue and contributed to $27M in savings."
    ],
  }
];

const consolidatedWorkExperienceData = [
  {
    company: "Amazon",
    roles: [
      {
        id: "amazon-sde",
        title: "Software Development Engineer",
        dates: "Jul 2025 – Present",
        summary: [
          "Supported an internal system that regulated pricing, product availability, and shipping for 300M+ users.",
          "Developed testing tools used by 1,000+ engineering teams to test code changes before they reached customers.",
          "Created an AI development framework that increased engineer output by 3x, which enabled the team to complete quarterly goals a month early.",
          "Created onboarding resources and led new-hire training, which reduced ramp-up time from 8 weeks to 1 week.",
          "Designed and rolled out a regression testing framework across 1,000+ production pipelines, which reduced pre/post-deployment regressions and improved change safety at scale.",
          "Monitored and optimized workflows that consumed 10B+ seconds of CPU time, which improved observability and enabled early detection of performance regressions.",
          "Led the design and delivery of a Datapath View Discovery Search platform, which enabled engineers to discover and reuse existing business logic views and drove cross-team alignment on view metadata, ownership, and discoverability.",
          "Targeted cost and efficiency improvements within Datapath, one of Amazon's highest-cost infrastructure platforms.",
          "Developed distributed backend services on AWS (Bedrock, EC2, Lambda, DynamoDB, SQS, S3, Kendra, OpenSearch) with a focus on reliability, cost awareness, and operational simplicity.",
        ],
      },
    ],
  },
  {
    company: "UBC Agrobot",
    roles: [
      {
        id: "agrobot-ai-lead",
        title: "AI Lead",
        dates: "May 2024 – Present",
        summary: ["Led Agrobot's Applied ML division of 20+ developers and managed 4 ongoing projects that covered weed detection, maize detection, blueberry picker, and system architecture."],
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
        dates: "Dec 2024 – Sep 2025",
        summary: [
          "Worked directly with TRIUMF Innovations' CEO to lead research and business planning for the Institute for Advanced Medical Isotopes, a state-of-the-art research facility for medical-isotope and radiopharmaceutical research.",
          "Developed a comprehensive business plan by conducting market research, predicting costs, and identifying operational needs.",
          "Consulted with technical and business stakeholders, which ensured diverse perspectives were consolidated into a practical launch plan.",
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
          "Designed computer-vision models (DINO, SegFormer) to ensure consistent welding joints for welding robots.",
          "Collaborated with welders and robotics engineers to identify points of failure during real-world robot use and increased model accuracy from 70% to 92%.",
          "Tuned hyperparameters with Weights and Biases sweeps, which improved model convergence and accuracy.",
          "Architected reusable training and testing workflows, which reduced development time by 40%.",
          "Evaluated the Segment Anything Model 2 (SAMv2) architecture and presented recommendations to leadership to guide future development.",
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
          "Owned the design and implementation of an AI-powered client-facing tool that automated cybersecurity compliance audits (ISO 27001) with 91% accuracy and reduced manual review time by 90%.",
          "Built and deployed a containerized Flask backend and React frontend on Azure, which enabled real-time analytics.",
          "Integrated PostgreSQL for robust data storage and query performance across compliance datasets, which improved lookup time by 40%.",
          "Interviewed clients to gather their needs and translated them into product decisions.",
          "Facilitated weekly meetings to present progress, gather feedback, and align priorities.",
          "Designed interactive, user-centric dashboards that visualized compliance results and improved user experience, which were adopted internally for company assessments.",
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
          "Investigated genetic heart disease with patient-specific, stem cell-derived heart tissue to better understand disease mechanisms and treatment approaches.",
          "Performed differential expression analysis with Python and R on 62,000+ gene expressions, which identified significant variations across 24 unique samples.",
          "Created a Docker container for EagleImp software, which improved genotyping workflow efficiency by 85%.",
          "Crafted a reproducible RNA-sequencing and data-analysis pipeline with portable Bash scripts on UBC ARC Sockeye, which reduced data-processing time by 30%.",
          "Collaborated with researchers across biology, medicine, and engineering to interpret sequencing results and synthesized findings into a research poster that was presented to staff at the annual Centre for Heart Lung Innovation Research Day.",
        ],
      },
    ],
  },
  {
    company: "Real Estate",
    roles: [
      {
        id: "work6",
        title: "BC Licensed Real Estate Representative",
        dates: "2021 – Present",
        summary: [
          "Became certified as a BC Licensed Real Estate Representative to help newcomer families settle in Canada.",
          "Worked with immigrant families to understand their unique circumstances and priorities and recommended suitable homes.",
          "Prioritized each family's best interests and supported them in making informed decisions during a major life transition.",
          "Ran workshops that explained the BC house-buying process and distributed relevant resources.",
        ],
      },
    ],
  },
  {
    company: "Private Tutoring",
    roles: [
      {
        id: "work7",
        title: "Mathematics and Science Tutor",
        dates: "2019 – Present",
        summary: [
          "Tutored 12 high school students in mathematics and science.",
          "Tailored explanations to each student's base knowledge and learning style, which fostered curiosity and independent learning skills.",
          "Developed digital tools that helped students limit distractions and increased studying efficiency.",
          "Empowered young students to build confidence in material they had previously found intimidating.",
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
          "Consulted oil and gas suppliers to identify recurring challenges in Cenovus' intake and compliance process.",
          "Used feedback to update and clarify compliance requirements, which shortened the process from 3 days to 1 day.",
          "Automated the review of 500+ files with Python that contained supplier information each month.",
          "Analyzed supplier performance and crafted industry benchmarking reports with Excel and Power BI.",
          "Led a review of WorkSafeBC compliance that identified a significant cost issue and contributed to $27M in savings.",
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