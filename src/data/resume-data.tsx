import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "German Cruz",
  initials: "gm",
  location: "San Lorenzo",
  locationLink: "https://www.google.com/maps/place/San+Lorenzo",
  about:
    "Information Technology Professional with 8+ years of experience helping businesses grow. ",
  summary:
    "I simplify complex IT problems so businesses can focus on growth.",
  avatarUrl: "https://avatars.githubusercontent.com/u/19968028?v=4",
  personalWebsiteUrl: "https://german-cruz.notion.site/german-cruz/Howdy-935cd4f92a214580b93f6ece3efc0d0a",
  contact: {
    email: "test@gmail.com",
    tel: "+1 510 000-0000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/GermanCruz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/german-cruz-01b06a2a7/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/tester1cr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chabot College",
      degree: "In Progress",
      start: "2018",
      end: "Present",
    },
  ],
  work: [
     {
      company: "Cognizant",
      link: "https://www.cognizant.com/us/en",
      badges: ["Technical Field Specialist"],
      title: "Full-Time",
      logo: "", // Add logo if available
      start: "2025",
      end: "Present",
      description: ("Technical Specialist for Google on behalf of Cognizant.", // Just added this line
                    
                    

    },
     {
      company: "Tesla",
      link: "https://www.tesla.com/",
      badges: ["Data Collection Operator"],
      title: "Full-Time",
      logo: "", // Add logo if available
      start: "March 2025 - ",
      end: "June 2025",
      description: (""
      ),
    },
    {
      company: "Bay Seal Company",
      link: "https://www.bayseal.com/",
      badges: ["IT Support Specialist"],
      title: "Full-Time",
      logo: "", // Add logo if available
      start: "2024",
      end: "2025",
      description: (""
      ),
    },
    {
      company: "Renascent Technology, LLC",
      link: "https://german-cruz.notion.site/german-cruz/Howdy-935cd4f92a214580b93f6ece3efc0d0a",
      badges: ["IT Support Engineer"],
      title: "Full-Time Employment",
      logo: "", // Add logo if available
      start: "2022",
      end: "2023",
      description: (""
      ),
    },
     {
      company: "Alameda County ITD",
      link: "https://itd.acgov.org/",
      badges: ["Technical Specialist I"],
      title: "Internship",
      logo: "",
      start: "2017",
      end: "2018",
      description: (""
       ),
    },
    {
      company: "T-Mobile USA",
      link: "https://www.t-mobile.com/",
      badges: ["Bilingual Sales Expert"],
      title: "Full-Time Employment",
      logo: "", // Add logo if available
      start: "2018",
      end: "2022",
      description: (""
      ),
    },
  ],
  skills: [
    "Security",
    "Programming",
    "Systems and networks",
    "Data analysis",
    "Cloud computing",
    "Networking",
    "Documentation",
    "Bilingual",
    "Public speaking",
  ],
  projects: [
    {
      title: "ACPaveMyPath",
      techStack: ["HTML", "CSS", "JS"],
      description:
        "A WEB APP THAT EMPOWERS HIGH SCHOOL & COLLEGE STUDENTS.",
      link: {
        label: "Creator",
        href: "https://www.flickr.com/photos/alcoitd/25287367239/in/album-72157665703786985/",
      },
    },    
  ],
  clients: [
    {
      title: "Naro",
      techStack: ["python", "prompt engineering", "sales"],
      description:
        "Naro sits in the background, using contextual clues to proactively select the right content and messaging for each customer conversation, from emails to meetings.",
      link: {
        label: "narohq.com",
        href: "http://narohq.com",
      },
    },
    {
      title: "Trunk Tools",
      techStack: [
        "construction",
        "technical advisor",
        "retrival",
      ],
      description:
        "Trunk Tools addresses the skilled labor shortage in construction, enhancing workforce productivity through AI-based tools.",
      link: {
        label: "trunktools.com",
        href: "https://trunktools.com/",
      },
    },
    {
      title: "Modal Labs",
      techStack: ["technical writing", "python"],
      description:
        "Modal specializes in cloud functions, offering a platform for running generative AI models, large-scale batch jobs, and more.",
      link: {
        label: "modal.com",
        href: "https://modal.com/",
      },
    },
    {
      title: "Pydantic",
      techStack: ["technical writing", "python"],
      description:
        "Pydantic provides data validation and settings management using Python type annotations, enforcing type hints at runtime with user-friendly error handling.",
      link: {
        label: "pydantic.dev",
        href: "http://pydantic.dev",
      },
    },
    {
      title: "Weight & Biases",
      techStack: [
        "technical writing",
        "education",
        "machine learning",
      ],
      description:
        "Wandb (Weights & Biases) provides a platform for tracking machine learning experiments, offering tools for visualization, comparison, and collaboration in ML projects.",
      link: {
        label: "wandb.ai",
        href: "https://wandb.ai/",
      },
    },
    {
      title: "New Computer",
      techStack: ["personal computing", "python"],
      description:
        "Dot by New Computer is an intelligent guide designed to help you remember, organize, and navigate your life.",
      link: {
        label: "new.computer",
        href: "http://new.computer",
      },
    },

    {
      title: "Kay.ai",
      techStack: [
        "retrieval",
        "evals",
        "infrastucture",
        "python",
      ],
      description:
        "Retrieve relevant context from the semantic web for your LLM apps with fully hosted embeddings.",
      link: {
        label: "Kay.ai",
        href: "http://Kay.ai",
      },
    },
  ],
} as const;
