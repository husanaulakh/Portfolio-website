export interface Project {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  highlights: string[];
  role?: string;
  challenge?: string;
  approach?: string[];
  outcome?: string;
  imageUrl: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  detailsImageUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'lexli-reading-tools',
    role: 'Developer and activity-system designer',
    challenge: 'Make tutor-led structured literacy sessions reusable without losing specialized teaching interactions.',
    approach: [
      'Separate activity contracts and shared lesson services from teaching-specific interfaces.',
      'Support lesson assembly, concept selection, offline use, and privacy-conscious state management.',
    ],
    title: 'Lexli — Dyslexia Tutoring Tools',
    tagline: 'Modular tutor-led reading activities with a reusable lesson builder.',
    shortDescription: 'Built web-based literacy activities for tutor-led Orton-Gillingham lessons, including concept selection, activity ordering, and lesson review.',
    overview: 'Lexli is a browser-based collection of activities for structured literacy tutoring. I developed reusable tools and a lesson builder to help tutors prepare materials, organize activities, and guide sessions.',
    highlights: [
      'Designed an extensible activity system with reusable settings and lesson planning.',
      'Implemented reading and phonological-awareness tools for tutor-led practice.',
      'Worked on accessible keyboard and touch interactions, offline use, and privacy-conscious architecture.',
    ],
    imageUrl: '/images/lexli-project.svg',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Accessibility', 'Frontend Architecture'],
    repoUrl: 'https://github.com/husanaulakh/dyslexia-tutoring-app',
    liveUrl: 'https://dyslexia-tutoring-app.vercel.app',
  },
  {
    slug: 'ubc-agrobot-vision',
    role: 'AI Lead; formerly Machine Learning Engineer',
    challenge: 'Detect crops reliably and integrate the inference process with a resource-constrained robotics platform.',
    approach: [
      'Train and evaluate maize object detection on agricultural imagery.',
      'Integrate inference with a C++ video pipeline deployed on a Jetson Orin edge device.',
    ],
    title: 'UBC Agrobot — Agricultural Computer Vision',
    tagline: 'Machine learning for agricultural robotics.',
    shortDescription: 'Developed maize-detection computer vision and supported real-time inference for a student agricultural robotics team.',
    overview: 'At UBC Agrobot, I worked on visual perception for maize detection and helped align ML implementation with robotics goals.',
    highlights: [
      'Built and trained object-detection models for agricultural imagery.',
      'Worked on deployment and C++ integration for edge-device inference.',
      'Led ML planning, mentoring, and cross-team coordination.',
    ],
    imageUrl: '/images/agrobot-project.svg',
    technologies: ['Python', 'Computer Vision', 'YOLO', 'C++', 'Robotics'],
    repoUrl: 'https://github.com/husanaulakh/Agrobot',
  },
  {
    slug: '3d-image-similarity-capstone',
    role: 'Engineering capstone team member',
    challenge: 'Process and compare large collections of 3D models without excessive per-asset rendering costs.',
    approach: [
      'Normalize and render 3D assets through Python and Blender pipelines.',
      'Use parallel processing with Ray and cloud resources to accelerate asset preparation.',
    ],
    title: '3D Image Similarity Capstone Project',
    tagline: 'Built a scalable 3D similarity-processing pipeline.',
    shortDescription: 'Processed 3D assets with Python, Blender, Ray, and GCP, reducing per-asset processing time from six minutes to 30 seconds.',
    overview: 'This engineering capstone investigated how to identify similar 3D models at scale. The work involved 3D asset processing, rendering, and machine-learning representations.',
    highlights: [
      'Built Blender workflows to inspect, normalize, render, and augment 3D assets.',
      'Used Ray and Google Cloud resources to parallelize expensive processing steps.',
      'Reduced per-asset processing time from approximately six minutes to 30 seconds (12× faster).',
      'Explored model representations for downstream similarity detection.',
    ],
    imageUrl: '/images/capstone-preview.svg',
    technologies: ['Python', 'Blender', 'Ray', 'GCP', 'Docker', '3D Computer Vision'],
    repoUrl: 'https://github.com/husanaulakh/Capstone-3D-batches',
  },
  {
    slug: 'ml-simulated-robot-competition',
    role: 'Machine learning and robotics developer',
    challenge: 'Navigate a simulated arena while recognizing visual targets from robot camera input.',
    approach: [
      'Train image models from a custom collection of simulated robot observations.',
      'Integrate CNN-based perception and navigation components with ROS/Gazebo.',
    ],
    title: 'Machine Learning Simulated Robot Competition',
    tagline: 'Robot navigation and license-plate recognition in ROS/Gazebo.',
    shortDescription: 'Built a simulated robot using computer vision and reinforcement learning, with reported navigation and recognition accuracy of 90% and 96%.',
    overview: 'In a simulated robotics challenge, I combined robot navigation with image-based character recognition.',
    highlights: [
      'Implemented robot navigation in ROS and Gazebo with Python and machine-learning techniques.',
      'Collected roughly 10,000 images for training and evaluation.',
      'Developed CNN-based navigation and character recognition pipelines with reported accuracies of 90% and 96%, respectively.',
    ],
    imageUrl: '/images/robot-simulator-preview.svg',
    technologies: ['Python', 'ROS', 'Gazebo', 'Computer Vision', 'Reinforcement Learning', 'TensorFlow'],
    repoUrl: 'https://github.com/husanaulakh/ENPH-353-Competition-Team12',
  },
  {
    slug: 'engphys-robot-competition',
    role: 'Embedded-controls and mechanical integration contributor',
    challenge: 'Design a competition robot that can move, manipulate, and retrieve objects reliably.',
    approach: [
      'Prototype and integrate mechanical assemblies with electronic control.',
      'Write C++ firmware for arm motions on an STM32/BluePill platform.',
    ],
    title: 'Engineering Physics Robot Competition',
    tagline: 'A physical robot designed to navigate and retrieve objects.',
    shortDescription: 'Collaborated on the mechanical design, electronics, and embedded control of a treasure-retrieval robot.',
    overview: 'A four-person engineering team designed, fabricated, and integrated a robot for a hands-on competition.',
    highlights: [
      'Implemented arm functionality in C++ using a BluePill microcontroller.',
      'Contributed to mechanical design, prototyping, and hardware integration.',
      'Applied CAD and fabrication tools to iterate on the competition robot.',
    ],
    imageUrl: '/images/engphys-robot-front.jpg',
    detailsImageUrl: '/images/engphys-robot-back.jpg',
    technologies: ['C++', 'Embedded Systems', 'STM32', 'Onshape', '3D Printing'],
  },
  {
    slug: 'investment-memo-pu',
    role: 'Venture strategy and financial analysis contributor',
    challenge: 'Evaluate the commercial potential and financial assumptions of a browser-based OS concept.',
    approach: [
      'Model the market size, pricing options, and plausible adoption scenarios.',
      'Compare competitors, operating assumptions, and go-to-market tradeoffs.',
    ],
    title: 'Investment Memo Project – Puter',
    tagline: 'Developed an investment case and delivered a successful venture pitch.',
    shortDescription: 'Led market sizing, competitive analysis, financial modeling, pricing, and a narrative pitch for the Puter cloud-OS venture.',
    overview: 'As part of a Creative Destruction Lab course, I developed an investment memo and pitched the business case for Puter, an open-source browser-based operating-system platform.',
    highlights: [
      'Estimated market size and modeled different adoption scenarios.',
      'Analyzed competitors and developed a differentiated pricing and go-to-market narrative.',
      'Built financial forecasts and communicated the venture case to a panel.',
    ],
    outcome: 'Prepared an investor-style memo and presented commercial assumptions for panel discussion.',
    imageUrl: '/images/Puter_main.png',
    detailsImageUrl: '/images/Puter_page1.png',
    technologies: ['Market Analysis', 'Financial Modeling', 'Pricing Strategy', 'Go-to-Market', 'Venture Valuation'],
  },
  {
    slug: 'venture-strategy-northernmost',
    role: 'Venture strategy researcher',
    challenge: 'Evaluate the market, regulatory, and go-to-market complexity of a medical logistics concept.',
    approach: [
      'Assess incumbent organ-transport methods and addressable market assumptions.',
      'Outline an initial pilot, potential pricing model, and commercialization risks.',
    ],
    title: 'Venture Strategy Project – Northernmost',
    tagline: 'Market analysis and go-to-market planning for a kidney-transport venture.',
    shortDescription: 'Developed a venture strategy covering competitive positioning, organ-transport market assumptions, and pilot planning.',
    overview: 'With a classmate, I examined the commercial potential of Northernmost’s portable kidney-transport offering as part of a venture strategy course.',
    highlights: [
      'Estimated addressable markets and benchmarked competing organ-transport approaches.',
      'Proposed a pilot launch strategy, leasing model, and potential logistics partnerships.',
      'Mapped early operational, regulatory, and commercialization risks.',
    ],
    outcome: 'Produced a strategic report supporting further assessment of the venture opportunity.',
    imageUrl: '/images/NorthernMost_main.png',
    detailsImageUrl: '/images/NorthernMost_page1.png',
    technologies: ['Market Research', 'Competitive Benchmarking', 'Go-to-Market', 'Financial Modeling', 'Risk Analysis'],
  },
];
