
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string; 
  longDescription: string; 
  imageUrl: string;
  imageAiHint?: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  detailsImageUrl?: string; 
  detailsImageAiHint?: string;
}

export const projectsData: Project[] = [
  {
    slug: "investment-memo-cdl",
    title: "Investment Memo Project – CDL Course",
    tagline: "Secured $50K investment for a CDL-admitted venture.",
    shortDescription: "Pitched to investment bankers and VCs, securing $50,000 for 'Puter'. Conducted market sizing, competitor analysis, and risk mapping, designing a full go-to-market strategy.",
    longDescription: `
      <p>As part of the Creative Destruction Lab (CDL) course, this project involved a deep dive into venture evaluation and strategy for the CDL-admitted venture "Puter".</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Activities & Outcomes:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Pitched to a panel of investment bankers and VCs, successfully securing a $50,000 investment.</li>
        <li>Conducted in-depth market sizing (TAM/SAM/SOM), competitor analysis, and risk mapping to evaluate commercial potential.</li>
        <li>Designed a comprehensive go-to-market strategy, including value proposition, pricing model, sales channels, and beachhead market approach.</li>
        <li>Worked iteratively with founders and CDL mentors to refine the pitch, roadmap milestones, and investment narrative.</li>
      </ul>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "investment business",
    technologies: ["Venture Capital", "Market Analysis", "Pitching", "Go-to-Market Strategy", "Financial Modeling"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "strategy diagram"
  },
  {
    slug: "venture-strategy-cdl",
    title: "Venture Strategy Project – CDL Course",
    tagline: "Strategic analysis and go-to-market planning for a CDL venture.",
    shortDescription: "Conducted situational analysis for a CDL-admitted venture, identifying market opportunities, risks, and competition. Developed a go-to-market plan and report, influencing mentor and investor decisions.",
    longDescription: `
      <p>This project involved strategic analysis and planning for a venture participating in the Creative Destruction Lab (CDL) program.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Contributions:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Conducted a situational analysis, identifying market opportunities, potential risks, and the competitive landscape.</li>
        <li>Developed a tailored go-to-market plan.</li>
        <li>Produced a comprehensive report to support the venture, which directly influenced mentor and investor decisions.</li>
        <li>Collaborated closely with the venture team and CDL mentors to refine strategies and recommendations.</li>
      </ul>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "business strategy",
    technologies: ["Strategic Planning", "Market Research", "Competitive Analysis", "Venture Development"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "market analysis chart"
  },
  {
    slug: "ubc-agrobot-ai-lead",
    title: "UBC Agrobot Applied AI Lead",
    tagline: "Leading AI development for agricultural robotics.",
    shortDescription: "Leading a team of 20+ students in developing AI-driven solutions for agricultural robotics, managing project timelines, delegating tasks, and fostering a collaborative environment.",
    longDescription: `
      <p>As the Applied AI Lead for the UBC Agrobot team, I oversee the development and implementation of artificial intelligence solutions for our agricultural robot.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Responsibilities & Achievements:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Leading a team of over 20 students.</li>
        <li>Managing project timelines and delegating tasks effectively.</li>
        <li>Fostering a collaborative and innovative team environment.</li>
        <li>Guiding the development of AI-driven solutions for various agricultural tasks.</li>
      </ul>
      <p>This role started in May 2024 and is ongoing.</p>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "robotics team agriculture",
    technologies: ["Team Leadership", "Project Management", "AI Development", "Robotics", "Python"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "robot arm schematic"
  },
  {
    slug: "ubc-agrobot-ai-member",
    title: "UBC Agrobot Applied AI Team Member",
    tagline: "Fine-tuned YOLOv8 for maize detection with 95% accuracy.",
    shortDescription: "Fine-tuned a YOLOv8 model for maize detection using Python and ARC Sockeye (HPC), achieving 95% accuracy. Deployed the real-time video processing system on Nvidia Jetson.",
    longDescription: `
      <p>Prior to leading the AI team, I was an active member contributing to specific AI model development for the UBC Agrobot project.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Contributions:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Fine-tuned a YOLOv8 model for maize detection using Python and UBC's ARC Sockeye high-performance computing cluster, achieving 95% accuracy.</li>
        <li>Deployed the real-time video processing system on the Nvidia Jetson platform for sequential frame analysis in an agricultural setting.</li>
      </ul>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "ai agriculture computer",
    technologies: ["Computer Vision", "YOLOv8", "Python", "PyTorch", "Nvidia Jetson", "HPC"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "object detection diagram"
  },
  {
    slug: "3d-image-similarity-capstone",
    title: "3D Image Similarity Capstone Project",
    tagline: "Developing a 3D model similarity detection system.",
    shortDescription: "Leveraging Python, Blender, and distributed computing (Ray, GCP) to process 3D models and fine-tune Recon++ for similarity detection, achieving a 12x improvement in processing time.",
    longDescription: `
      <p>This ongoing capstone project focuses on building a system to detect similarities between complex 3D models. It involves a significant data processing pipeline and machine learning model fine-tuning.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Aspects:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Utilized Python and Blender to inspect, process, and perform augmentations on complex 3D models.</li>
        <li>Implemented distributed rendering using Ray—a high-performance distributed execution framework.</li>
        <li>Deployed a scalable data pipeline on Google Cloud Platform (GCP) using virtual instances for parallel processing and containerized workflows.</li>
        <li>Enhanced the Blender processing workflow, reducing per-asset processing time from 6 minutes to 30 seconds (a 12x improvement), saving significant time and resources.</li>
        <li>Currently fine-tuning the Recon++ model for detecting 3D image similarity, aiming to exceed 85% accuracy.</li>
      </ul>
      <p>Project duration: Sep 2023 – Present.</p>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "3d model abstract",
    technologies: ["Python", "Blender", "Ray", "GCP", "Docker", "Machine Learning", "3D Computer Vision", "Recon++"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "3d model wireframe"
  },
  {
    slug: "ml-simulated-robot-competition",
    title: "Machine Learning Simulated Robot Competition",
    tagline: "Trained a robot for navigation and license plate recognition in Gazebo.",
    shortDescription: "Developed a robot using Python, Computer Vision, and Reinforcement Learning to navigate and capture license plates in a Gazebo ROS simulator, achieving 90% navigation and 96% character recognition accuracy.",
    longDescription: `
      <p>This project involved training a simulated robot for a competitive task within the Gazebo ROS environment.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Project Highlights:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Trained a robot using Python, Computer Vision, and Reinforcement Learning techniques.</li>
        <li>The robot was tasked to navigate a simulated environment and capture license plates.</li>
        <li>Recorded approximately 10,000 images for training navigation and character recognition models.</li>
        <li>Developed Convolutional Neural Networks (CNNs) achieving 90% navigation accuracy and 96% character recognition accuracy.</li>
      </ul>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "robot simulation game",
    technologies: ["Python", "Computer Vision", "Reinforcement Learning", "Gazebo", "ROS", "CNNs", "TensorFlow"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "robot path algorithm"
  },
  {
    slug: "engphys-robot-competition",
    title: "Engineering Physics Robot Competition",
    tagline: "Designed and built a treasure-retrieving robot.",
    shortDescription: "In a team of four, designed and built a robot for navigation and treasure retrieval. Implemented arm functionality using C++ and a BluePill microcontroller. Utilized OnShape and fabrication tools.",
    longDescription: `
      <p>This was a hands-on robotics competition focused on mechanical design, electrical integration, and basic control.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Contributions & Technologies:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Worked in a team of four to design and construct a robot for navigation and treasure retrieval tasks.</li>
        <li>Implemented arm functionality using C++ on a BluePill (STM32) microcontroller.</li>
        <li>Utilized OnShape for CAD design.</li>
        <li>Employed fabrication tools such as Water Jet Cutter and 3D Printer for robot development.</li>
      </ul>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "robot hardware competition",
    technologies: ["C++", "Microcontrollers (STM32)", "OnShape", "CAD", "3D Printing", "Robotics"],
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "custom robot design"
  }
];
