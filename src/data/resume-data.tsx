import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "German Cruz",
  initials: "gm",
  location: "San Lorenzo",
  locationLink: "https://www.google.com/maps/place/San+Lorenzo",
  about:
    "Passionate about information technology security, I research cybersecurity, ethical hacking, and network defense. My goal is to stay ahead of emerging threats and contribute to a safer digital future.",
  summary:
    "Proficient in IT helpdesk support and front-end software engineering, I excel in providing technical assistance and developing user-friendly interfaces for optimal user experience.",
  avatarUrl: "https://avatars.githubusercontent.com/u/19968028?v=4",
  personalWebsiteUrl: "https://german-cruz.notion.site/german-cruz/Howdy-935cd4f92a214580b93f6ece3efc0d0a",
  contact: {
    email: "germancruz-1@proton.me",
    tel: "5103616067",
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
      school: "Kentridge High-School",
      start: "2013",
      end: "2015",
    },
    {
      school: "Arroyo High-School",
      start: "2015",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Renascent Technology, LLC",
      link: "https://german-cruz.notion.site/german-cruz/Howdy-935cd4f92a214580b93f6ece3efc0d0a",
      badges: ["Full-Time-Employment"],
      title: "Employee",
      logo: "" , // Add logo if available
      start: "2022",
      end: "2023",
      description:
        "Working with seed stage companies, helping founders with tech strategy, research, and infrastructure.",
    },
    {
      company: "Alameda County Information Technology Department",
      link: "https://www.flickr.com/photos/alcoitd/albums/72157684558692883/",
      badges: ["Technical-Specialist 1"],
      title: "Technical-Specialist 1",
      logo: "", // Add logo if available
      start: "2016",
      end: "2017",
      description: (
        <>
          <li>
            Developed internal web and iOS applications, including an Ergonomic Evaluation tool and the AC PaveMyPath app.{" "}
            <a href="https://www.flickr.com/photos/alcoitd/25536217142/in/album-72157665703786985/">[1]</a>
          </li>
          <li>
            Streamlined paperless procedures using Docusign APIs. 
          </li>
          <li>
            managed hardware refresh projects with custom image deployments, and enhanced device security through BitLocker encryption implementation.
          </li>
        </>
      ),
    },
    {
      company: "T-Mobile, USA",
      link: "https://www.t-mobile.com/",
      badges: ["Full-Time-Employment"],
      title: "Employee",
      logo: "", // Add logo if available
      start: "2018",
      end: "2022",
      description:
        "As a bilingual sales representative at the world's largest T-Mobile store at the time, I consistently exceeded key sales metrics across activations, 'Beyond the Smartphone' initiatives, and accessory sales, while also training colleagues and innovating in sales methodologies and technology adoption.",
    },
  ],
  skills: [
    "Python",
    "Technical-Troubleshooting",
    "IT Helpdesk Management",
    "Prompt Engineering",
    "Automation Scripting",
    "Mac OS",
    "Windows",
    "Telecommunications",
    "Sales",
  ],
  projects: [

  {
      title: "AC Pave My Path",
      techStack: ["HTML", "CSS", "JS", "Firebase"],
      description:
        "An app designed to guide high school and college students in discovering their ideal career paths through personalized assessments and educational resources.",
      link: {
        label: "Hackathon",
        href: "https://www.flickr.com/photos/alcoitd/25287367239/in/album-72157665703786985/",
      },
    },
    {
      title: "T-Mobile/Sprint Merger Integration",
      techStack: ["Power-BI", "Trainings", "Sales-Strategy"],
      description:
        "As an integrationist and trainer for the T-Mobile/Sprint merger, I specialized in seamlessly blending systems and processes while educating teams on the unified operational framework and technologies.",
      link: {
        label: "Instructor",
      },
    },
    
    {
      title: "RecSys Framework",
      techStack: ["devops", "python", "orchestration", "observability"],
      description:
        "Designed and implemented Flight, a recommendation framework that improved system reliability and scalability, handling over 350 million daily requests.",
      link: {
        label: "Learn more about Flight at Stitchfix",
        href: "https://jxnl.notion.site/Recommendations-with-Flight-at-Stitch-Fix-bf5de4e932b34af1ad912294236d81ba",
      },
    },
    {
      title: "Journal",
      techStack: ["typescript", "prompt engineering"],
      description:
        "AI-powered journaling application with long-term memory and semantic search.",
      link: {
        label: "Journal",
        href: "http://usejournal.xyz",
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
