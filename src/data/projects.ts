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
    slug: "autonomous-drone-navigation",
    title: "Autonomous Drone Navigation",
    tagline: "AI-powered drone for navigating complex environments.",
    shortDescription: "Developed an AI system enabling a drone to autonomously map and navigate unknown indoor spaces using SLAM and computer vision.",
    longDescription: `
      <p>This project focused on creating a robust autonomous navigation system for quadcopter drones. The core challenge was to enable the drone to operate in GPS-denied environments, relying solely on onboard sensors.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Features:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Real-time 3D mapping using ORB-SLAM2.</li>
        <li>Path planning with A* algorithm on the generated map.</li>
        <li>Obstacle avoidance using depth sensors and reactive control.</li>
        <li>Implemented in ROS (Robot Operating System) with Python and C++.</li>
      </ul>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Challenges & Solutions:</h3>
      <p>One major challenge was computational constraints on the drone's onboard computer. This was addressed by optimizing SLAM parameters and offloading some non-critical processing to a ground station when possible.</p>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "drone futuristic",
    technologies: ["Python", "C++", "ROS", "SLAM", "Computer Vision", "AI"],
    repoUrl: "https://github.com/example/drone-nav",
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "drone schematic"
  },
  {
    slug: "smart-iot-greenhouse",
    title: "Smart IoT Greenhouse",
    tagline: "Automated environmental control for optimal plant growth.",
    shortDescription: "Designed and built an IoT-based greenhouse system that monitors and controls temperature, humidity, soil moisture, and light levels.",
    longDescription: `
      <p>The Smart IoT Greenhouse project aimed to create an affordable and scalable solution for precision agriculture. It utilizes a network of sensors and actuators connected to a central Raspberry Pi controller.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">System Components:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Raspberry Pi as the main controller.</li>
        <li>Sensors: DHT22 (temp/humidity), soil moisture sensors, LDRs (light).</li>
        <li>Actuators: Fans, water pump, LED grow lights.</li>
        <li>Web dashboard for monitoring and remote control (React & Firebase).</li>
      </ul>
      <p>The system can operate autonomously based on predefined setpoints or be controlled manually via the web interface. Data logging and visualization help in optimizing growth conditions.</p>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "greenhouse tech",
    technologies: ["Raspberry Pi", "Python", "IoT", "React", "Firebase", "Sensors"],
    liveUrl: "https://example.com/iot-greenhouse-demo",
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "plant circuit"
  },
  {
    slug: "portfolio-website-v2",
    title: "Neon Canvas Portfolio",
    tagline: "This very website, built with Next.js and Tailwind CSS.",
    shortDescription: "A personal portfolio website to showcase projects and skills, featuring a neon-themed aesthetic and AI-powered content generation.",
    longDescription: `
      <p>This portfolio (Neon Canvas) is a personal project designed to highlight my skills and experience in a visually engaging way. It's built using modern web technologies and incorporates several interesting features.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Technical Stack:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Next.js (App Router) for server-side rendering and static site generation.</li>
        <li>Tailwind CSS and ShadCN UI for styling and component library.</li>
        <li>TypeScript for type safety.</li>
        <li>Genkit AI for AI-assisted content generation (work history).</li>
      </ul>
      <p>The design goal was to create a 'neon' aesthetic, referencing classic sci-fi and tech visuals, while maintaining a professional and modern feel.</p>
    `,
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "code neon abstract",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Genkit AI"],
    repoUrl: "https://github.com/example/neon-canvas",
    detailsImageUrl: "https://placehold.co/300x400.png",
    detailsImageAiHint: "abstract code interface"
  },
];
