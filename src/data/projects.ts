
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
  // {
  //   slug: "investment-memo-cdl",
  //   title: "Investment Memo Project – CDL Course",
  //   tagline: "Secured $25K investment for a CDL-admitted venture.",
  //   shortDescription: "Pitched to investment bankers and VCs, securing $25,000 for 'Puter'. Conducted market sizing, competitor analysis, and risk mapping, designing a full go-to-market strategy.",
  //   longDescription: `
  //     <p>As part of the Creative Destruction Lab (CDL) course, this project involved a deep dive into venture evaluation and strategy for the CDL-admitted venture "Puter".</p>
  //     <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Key Activities & Outcomes:</h3>
  //     <ul class="list-disc list-inside space-y-1">
  //       <li>Pitched to a panel of investment bankers and VCs, successfully securing a $50,000 investment.</li>
  //       <li>Conducted in-depth market sizing (TAM/SAM/SOM), competitor analysis, and risk mapping to evaluate commercial potential.</li>
  //       <li>Designed a comprehensive go-to-market strategy, including value proposition, pricing model, sales channels, and beachhead market approach.</li>
  //       <li>Worked iteratively with founders and CDL mentors to refine the pitch, roadmap milestones, and investment narrative.</li>
  //     </ul>
  //   `,
  //   imageUrl: "/images/Puter_main.png",
  //   imageAiHint: "investment business",
  //   technologies: ["Venture Capital", "Market Analysis", "Pitching", "Go-to-Market Strategy", "Financial Modeling"],
  //   detailsImageUrl: "/images/Puter_page1.png",
  //   detailsImageAiHint: "strategy diagram"
  // },
  // {
  //   slug: "investment-memo-cdl",
  //   title: "Investment Memo Project – Puter",
  //   tagline: "Built and presented an investment case that secured $25 K for a cloud-OS venture.",
  //   shortDescription: "Developed a full investment memo for Puter—an open-source Internet OS—including market sizing, competitor benchmarking, financial valuation, and a storytelling pitch that won \$25 000 in CDL funding.",
  //   longDescription: `
  //     <p>
  //       <strong>Context:</strong> Within UBC’s Creative Destruction Lab, I led the Investment Memo for Puter—an open-source “Internet OS” that streams your desktop, apps, and files instantly in any browser. 
  //       Mentors guided us to turn technical strengths into investor-ready financials and narratives.
  //     </p>
  
  //     <h3 class="text-xl font-semibold mt-6 mb-2 text-primary">What I Delivered</h3>
  //     <ul class="ml-6 list-disc marker:text-primary space-y-2">
  //       <li>
  //         <strong>Market Sizing & Valuation:</strong> Estimated a \$50 B TAM by 2030, a \$5–7.5 B SAM for privacy-first cloud OS, and a \$50–150 M initial SOM—then built unit economics and a 5-year revenue forecast. 
  //       </li>
  //       <li>
  //         <strong>Competitive Benchmarking:</strong> Compared Puter against Windows 365, Chrome OS, AWS WorkSpaces, Nextcloud, and DBOS—highlighting Puter’s unique open-source, privacy-first, and API-driven edge.
  //       </li>
  //       <li>
  //         <strong>Pricing & Financial Model:</strong> Designed a freemium → enterprise subscription model, projecting break-even within 18 months and 3× ROI by Year 3 under conservative adoption assumptions.
  //       </li>
  //       <li>
  //         <strong>Story-Driven Pitch:</strong> Crafted a narrative opening with user pain (costly upgrades, downtime, security breaches) and closed with Puter’s solution impact—then delivered live to VCs.
  //       </li>
  //       <li>
  //         <strong>Secured Funding:</strong> Won \$25 000 in CDL seed investment, validating both the financial case and strategic positioning.
  //       </li>
  //     </ul>
  
  //     <h3 class="text-xl font-semibold mt-6 mb-2 text-primary">Impact</h3>
  //     <p>
  //       The Investment Memo transformed Puter from a technical demo into a fundable venture. Investors cited the clear financial roadmap and compelling market narrative as key reasons for backing.
  //     </p>
  
  //     <p class="mt-4 italic text-sm">
  //       Interested in the full memo—including detailed financial models and slide examples? <strong>Contact me</strong> for a review copy.
  //     </p>
  //   `,
  //   imageUrl: "/images/Puter_main.png",
  //   imageAiHint: "investment pitch slide",
  //   technologies: [
  //     "Market Sizing (TAM/SAM/SOM)",
  //     "Competitive Benchmarking",
  //     "Financial Modeling",
  //     "Pricing Strategy",
  //     "Storytelling Pitch",
  //     "Venture Valuation"
  //   ],
  //   detailsImageUrl: "/images/Puter_page1.png",
  //   detailsImageAiHint: "valuation and market model chart"
  // },  

  // {
  //   slug: "investment-memo-cdl",
  //   title: "Investment Memo Project – Puter",
  //   tagline: "Built and presented an investment case that secured $25 000 for a cloud-OS venture.",
  //   shortDescription: "Authored a comprehensive investment memo for Puter—an open-source Internet OS—including market sizing, competitive analysis, financial modeling, pricing strategy and a narrative pitch that won $25 000 in CDL funding.",
  //   longDescription: `
  //     <p><strong>Context</strong><br>
  //     As part of UBC’s Creative Destruction Lab, I led the Investment Memo for Puter, a browser-streamed “Internet OS” that gives users instant access to their desktop, applications and files without expensive hardware upgrades.</p>
  
  //     <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Market Opportunity</h3>
  //     <p>I forecasted a $50 billion total addressable market by 2030, identified a $5–7.5 billion serviceable market for privacy-focused cloud OS solutions, and applied adoption-curve assumptions to derive a $50–150 million obtainable market for an initial pilot.</p>
  
  //     <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Competitive Landscape</h3>
  //     <p>I analyzed leading offerings—Windows 365, Chrome OS, AWS WorkSpaces, Nextcloud and Database-Oriented OS projects—to surface Puter’s unique strengths: an open-source codebase, privacy-first architecture, built-in developer APIs and seamless browser integration.</p>
  
  //     <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Financial Model & Pricing</h3>
  //     <p>Developed a five-year subscription model starting with a freemium tier and progressing to paid developer and enterprise plans. Under conservative uptake scenarios, the model achieved break-even within 18 months and projected a triple return by year three.</p>
  
  //     <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Pitch & Outcomes</h3>
  //     <p>I wove data and story together—opening with user frustrations around hardware costs, downtime and security risks, then demonstrating how Puter eliminates these pain points. The pitch secured $25 000 in seed funding, with mentors highlighting the clarity of our financial roadmap and the impact-driven narrative.</p>
  
  //     <p class="mt-4 italic text-sm">
  //       Interested in the full investment memo, complete with spreadsheets and slide visuals? <strong>Contact me</strong> for a copy.
  //     </p>
  //   `,
  //   imageUrl: "/images/Puter_main.png",
  //   imageAiHint: "investment pitch slide",
  //   technologies: [
  //     "Market Sizing (TAM/SAM/SOM)",
  //     "Competitive Analysis",
  //     "Financial Modeling",
  //     "Pricing Strategy",
  //     "Pitch Storytelling",
  //     "Venture Valuation"
  //   ],
  //   detailsImageUrl: "/images/Puter_page1.png",
  //   detailsImageAiHint: "market and valuation chart"
  // },  
  
  {
    slug: "investment-memo-pu",
    title: "Investment Memo Project – Puter",
    tagline: "Built and presented an investment case that secured $25 000 in CDL funding.",
    shortDescription: "Led market sizing, competitive analysis, financial modeling, pricing strategy and narrative pitch for Puter—an open-source browser-streamed Internet OS—winning $25 000 in seed investment.",
    longDescription: `
      <h2 class="text-2xl font-serif font-bold mb-4 text-primary">Project Overview</h2>
      <p>
        <strong>Background:</strong> The Creative Destruction Lab (CDL) is a mentorship-driven accelerator that helps science ventures refine their technology, business model, and investor narrative. For Puter—a privacy-first, open-source “Internet OS” that streams your entire desktop, applications and files in any browser—I authored the Investment Memo and delivered the pitch that won seed funding.
      </p>
  
      <h3 class="text-xl font-semibold mt-6 mb-2 text-primary">What I Delivered</h3>
      <ul class="ml-6 list-disc marker:text-primary space-y-2">
        <li>
          <strong>Market Sizing:</strong> Forecasted a $50 billion total addressable market by 2030, identified a $5–7.5 billion serviceable niche for privacy-focused cloud OS, and derived a $50–150 million obtainable market based on early-adopter diffusion rates.
        </li>
        <li>
          <strong>Competitive Analysis:</strong> Mapped Puter against Windows 365, Chrome OS, AWS WorkSpaces, Nextcloud and DBOS projects—highlighting Puter’s open-source architecture, privacy guarantee, and built-in developer APIs.
        </li>
        <li>
          <strong>Financial Modeling & Pricing:</strong> Developed a five-year subscription model starting with a freemium tier and advancing to paid developer and enterprise plans; projected break-even within 18 months and 3× ROI by Year 3.
        </li>
        <li>
          <strong>Pitch Narrative:</strong> Crafted a story-driven presentation: opened with user pain (hardware costs, downtime, security breaches), demonstrated Puter’s impact (seamless access, cost savings, auto-updates), and closed with projected financial upside.
        </li>
        <li>
          <strong>Funding Secured:</strong> Delivered the memo and live pitch to the CDL panel, successfully securing $25 000 in seed investment and mentor commitments.
        </li>
      </ul>
  
      <h3 class="text-xl font-semibold mt-6 mb-2 text-primary">Outcome</h3>
      <p>
        The Investment Memo transformed Puter from a technical prototype into a fundable venture. Mentors and investors praised the clarity of the market analysis and the strength of the financial case, providing the team with both funding and a validated roadmap.
      </p>
  
      <p class="mt-4 italic text-sm">
        Interested in the full investment memo and all supporting analyses? <strong>Contact me</strong> to request a copy.
      </p>
    `,
    imageUrl: "/images/Puter_main.png",
    imageAiHint: "Puter investment memo cover slide",
    technologies: [
      "Market Sizing (TAM/SAM/SOM)",
      "Competitive Analysis",
      "Financial Modeling",
      "Pricing Strategy",
      "Pitch Development",
      "Venture Valuation"
    ],
    detailsImageUrl: "/images/Puter_page1.png",
    detailsImageAiHint: "Puter market and financial model chart"
  },  

  {
    slug: "venture-strategy-northernmost",
    title: "Venture Strategy Project – Northernmost",
    tagline: "Strategic analysis and go-to-market planning for a CDL venture.",
    shortDescription: "Developed a comprehensive venture strategy for Northernmost’s kidney‐transport innovation—validating market potential, defining competitive positioning, and mapping a pilot go-to-market plan.",
    longDescription: `
      <p>
        <strong>Background:</strong> The Creative Destruction Lab (CDL) is a mentorship-driven accelerator that pairs science-based ventures with seasoned investors and industry experts. Over a series of goal-oriented sessions, teams refine their technology, business model, and investor narrative.
      </p>
      <p>
        For Northernmost, me and my classmate tackled a critical healthcare challenge: existing kidney transport methods are either rudimentary (static cold storage) or prohibitively costly and complex (hypothermic machine perfusion). Our aim was to prove that a portable, reusable HaaS (Hardware as a Service) transport box with real-time GPS monitoring, could unlock a multi-hundred-million-dollar niche while improving transplant outcomes.
      </p>
  
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">What I Delivered</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>
          <strong>Market Validation:</strong> Sized the total organ-transport market at $1.5 B, the North American kidney-transport niche at $363 M, and Northernmost’s obtainable HaaS segment at $235 M.
        </li>
        <li>
          <strong>Competitive Positioning:</strong> Benchmarked incumbents and open-source alternatives, highlighting Northernmost’s advantages in cost ($3K per use vs. $4.5K disposable HMP), portability (cabin-friendly design), and continuous monitoring.
        </li>
        <li>
          <strong>Go-to-Market Plan:</strong> Mapped a phased pilot across under-served OPOs (Texas → Louisiana → California), crafted a leasing-based pricing model, and outlined key logistics partnerships.
        </li>
        <li>
          <strong>Risk & Opportunity Analysis:</strong> Identified regulatory pathways (FDA Class II, Health Canada), logistical risks, and strategic alliances to de-risk early deployment.
        </li>
        <li>
          <strong>Executive Report:</strong> Compiled all findings into a clear, narrative-driven strategy document that earned mentor endorsement and positioned Northernmost for follow-on investment.
        </li>
      </ul>
  
      <h3 class="text-xl font-semibold mt-4 mb-2 text-primary">Outcome</h3>
      <p>
        Mentors praised its depth and clarity. The venture strategy report solidified Northernmost’s value proposition, validated its market opportunity, and provided a practical roadmap for pilots.
      </p>
  
      <p class="mt-4 italic text-sm">
        Interested in the full strategy report including detailed data models, financial forecasts, and appendix materials? <strong>Contact me</strong> for a complete copy.
      </p>
    `,
    imageUrl: "/images/NorthernMost_main.png",
    imageAiHint: "kidney transport strategy",
    technologies: [
      "Market Research",
      "Competitive Benchmarking",
      "Go-to-Market Planning",
      "Financial Modelling",
      "Risk Analysis",
      "Strategic Reporting"
    ],
    detailsImageUrl: "/images/NorthernMost_page1.png",
    detailsImageAiHint: "market sizing chart"
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
