export const profile = {
  name: "Thet Myat Noe",
  title: " Full-Stack Developer • Business Analysis",
  tagline:
    "I ship clean web products with real data, solid UX, and maintainable systems.",
  location: "Singapore",
  links: {
    github: "https://github.com/Noe-Noe",
    linkedin: "https://www.linkedin.com/in/thet-myat-n-545546227/",
    email: "mailto:thetmyatnoe.jp@gmail.com",
    whatsapp: "https://wa.me/6590252944",
    resume: "/resume.pdf",
  },
  skills: [
  "Java",
  "Python",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
],
};
export const projects = [
  {
  slug: "real-estate-price-prediction",
  name: "Real Estate Price Prediction (Singapore)",
  description:
    "An interactive website that predicts real estate prices in Singapore using historical transaction data and machine learning models.",

  tags: ["Machine Learning", "Data Analytics", "React", "Python", "Geospatial"],

  demoUrl: "", // add later if deployed
  repoUrl: "", // add GitHub link if public

  role: "Final Year Project (Team)",
  timeline: "2025 – 2026",
  status: "Live",

  problem:
    "Property prices in Singapore are highly influenced by location, property attributes, and market trends, making it difficult for buyers and investors to estimate fair value accurately.",

  solution:
    "A web-based prediction system that allows users to input property details and instantly receive estimated prices based on trained machine learning models and historical data.",

  features: [
    "Price prediction based on property attributes and transaction history",
    "Interactive web interface for user inputs",
    "Geospatial analysis incorporating location-based features",
    "Data preprocessing and feature engineering pipeline",
    "Visualization of price trends and influencing factors",
  ],
  mediaLabel: "Project Demo",
 screenshots: [
    {
      type: "youtube",
      src: "Ublroq4tSNY",
      caption: "Project walkthrough demo",
    },
  ],
  stack: [
    "React + Vite",
    "Tailwind CSS",
    "Python (Flask / FastAPI)",
    "Machine Learning models (regression-based)",
    "PostgreSQL / CSV datasets",
    "Geospatial analysis (location features)",
  ],

  roadmap: [
    "Improve model accuracy with additional features",
    "Integrate live Singapore property datasets (URA / HDB)",
    "Add map-based price visualizations",
    "Deploy full system for public access",
  ],
},

//   {
//   slug: "hallway-international-school",
//   name: "International School Inquiry Website",
//   description:
//     "A modern website that helps parents learn about the school, explore programmes, and submit enquiries easily.",
//   tags: ["React", "Vite", "Tailwind", "UI/UX"],
//   demoUrl: "https://hallway-international-school.vercel.app/", // change if needed
//   repoUrl: "", // add GitHub link if public, else leave ""

//   role: "Web Developer",
//   timeline: "2026",
//   status: "In Progress",

//   problem:
//     "Prospective parents often struggle to quickly understand a school’s programmes, values, and admissions information, which can delay or prevent enquiries.",

//   solution:
//     "Built a clear and structured website that presents school and programme information in an easy-to-navigate format, with a straightforward inquiry flow for parents.",

//   features: [
//     "School overview pages to communicate values and key information",
//     "Programme pages to help parents compare offerings",
//     "Simple inquiry form to capture questions and interest",
//     "Clean navigation and content structure for easy browsing",
//     "Consistent modern UI styling for a professional presence",
//   ],

//   stack: [
//     "React + Vite",
//     "Tailwind CSS",
//     "Component-based UI",
//     "Deployed on Vercel",
//   ],

//   results: [
//     "Improved clarity of school and programme information for prospective parents",
//     "Reduced friction for submitting enquiries through a simple contact flow",
//   ],

//   roadmap: [
//     "Connect inquiry form submissions to email automation / CRM",
//     "Add CMS support for non-technical content updates",
//     "Add analytics to track inquiry conversions and page performance",
//   ],
// }
// ,

  {
  slug: "job-application-tracker",
  name: "Job Application Tracker",
  description:
    "A modern web app to track job applications, statuses, and follow-ups in one place with a clean, glassy UI.",
  tags: ["React", "Vite", "Tailwind", "Supabase"],
  demoUrl: "https://jobtrack-sigma.vercel.app/",
  repoUrl: "https://github.com/Noe-Noe/Job-application-tracker", // put your GitHub link here if public, else leave ""
  highlights: [
    "Track applications by company, role, and status",
    "Clean list view designed for fast updates",
    "Built to support future automation (browser extension intake)",
  ],

  
  // NEW (for the detail page)
  role: "Solo project",
  timeline: "2026",
  status: "Live",
  problem:
    "Job applications get messy fast across multiple platforms. Spreadsheets are manual, inconsistent, and easy to forget.",
  solution:
    "A single dashboard to log applications quickly, view status at a glance, and keep follow-up information organized.",
  features: [
    "Add and manage job applications (company, role, link, notes)",
    "Status tracking (e.g., Applied → Interview → Offer)",
    "Search and quick scanning through a clean UI layout",
    "Authentication-ready structure for per-user data (Supabase)",
  ],
   screenshots: [
  { src: "/projects/job-application-tracker/landing.png", caption: "Landing page" },
  { src: "/projects/job-application-tracker/signin.png", caption: "Sign in" },
  { src: "/projects/job-application-tracker/dashboard.png", caption: "Dashboard" },
  { src: "/projects/job-application-tracker/add application.png", caption: "Add application" },
  { src: "/projects/job-application-tracker/interview schedule.png", caption: "Interview schedule" },
  { src: "/projects/job-application-tracker/features.png", caption: "Features" },
  { src: "/projects/job-application-tracker/faq.png", caption: "FAQ" },
],

  stack: [
    "React + Vite",
    "Tailwind CSS",
    "Supabase (Auth + Database)",
    "Deployed on Vercel",
  ],
  roadmap: [
    "Browser extension to detect job applications on job portals",
    "Auto-extract company/role from job pages and save to dashboard",
    "Follow-up reminders + analytics (response rate, time-to-response)",
  ],
},
{
  slug: "animal-3d",
  name: "Animal 3D",
  description:
    "A 3D interactive web experience built with Three.js featuring multiple animal scenes, lighting, and smooth navigation.",
  tags: ["Three.js", "WebGL", "JavaScript", "UI/UX"],
  demoUrl: "https://animalgallery3d.vercel.app/", 

  role: "Personal Project",
  timeline: "2026",
  status: "Completed",

  about:
    "Animal 3D is a personal project created to explore Three.js and interactive 3D experiences, focusing on animal models, environments, and user interaction.",

  solution:
    "An interactive 3D experience using Three.js to display and explore animal models in the browser.",

  features: [
    "Multiple 3D animal scenes (model loading + environment setup)",
    "Lighting setup for a more realistic stage feel",
    "Smooth navigation between scenes",
    "Performance-focused settings to keep it responsive",
    "Responsive UI overlay for controls and info",
  ],

 screenshots: [
    { src: "/projects/animal-3d/selection.png", caption: "Animal selection" },
    { src: "/projects/animal-3d/whaleView.png", caption: "3D Whale view in deep sea environment" },
    { src: "/projects/animal-3d/catView.png", caption: "3D Cat view in room environment" },
   { src: "/projects/animal-3d/sharkView.png", caption: "3D Shark view in deep sea environment" },
   ],
  stack: [
    "Three.js",
    "GLTFLoader (3D model loading)",
    "Vite",
    "HTML/CSS (UI overlay)",
  ],

  results: [
    "Implemented a complete 3D scene pipeline (assets → lighting → interaction)",
    "Balanced visual quality with performance for web delivery",
  ],

  roadmap: [
    "Refine lighting and materials to make each animal scene feel more distinct",
  "Add small ambient details to enhance atmosphere without hurting performance",
  "Improve scene transitions and UI feedback for smoother navigation",
  ],
}

];
