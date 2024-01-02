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
  personalWebsiteUrl: "https://jxnl.notion.site/jxnl/whats-up-95708748a05d40c398a4abc66a978a8e",
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
      school: "Chabot College",
      degree: "NA",
      start: "2018",
      end: "2019",
    },
  ],
  work: [
    {
      company: "City Of San Leandro",
      link: "https://www.sanleandro.org/",
      badges: ["HelpDesk Analyst II"],
      title: "Contract Employment",
      logo: "", // Add logo if available
      start: "2023",
      end: "Present",
      description:
        "At the City of San Leandro, I excelled as an IT Helpdesk Analyst II, where I provided advanced technical support, resolved complex IT issues, and enhanced system efficiency for various city departments.",
    },
    {
      company: "Renascent Technology, LLC",
      link: "https://german-cruz.notion.site/german-cruz/Howdy-935cd4f92a214580b93f6ece3efc0d0a",
      badges: ["IT Support Engineer"],
      title: "Full-Time Employment",
      logo: "", // Add logo if available
      start: "2022",
      end: "2023",
      description:
        "As an IT Support Engineer, I managed IT Helpdesk operations, provided on-site technical support, handled software procurement and design, data analysis, automation, administered Microsoft and Google Workspace, and managed MDM for both iOS and Android devices.",
    },
    {
      company: "T-Mobile USA",
      link: "https://www.t-mobile.com/",
      badges: ["Bilingual Sales Expert"],
      title: "Full-Time Employment",
      logo: "", // Add logo if available
      start: "2018",
      end: "2022",
      description: (
        <>
          <li>
            Aided in the training and implemetation of Sprint POS systems & Sales methodology.{" "}
            <a href="https://newsroom.stitchfix.com/blog/your-shop-is-getting-an-update-shop-by-category-will-make-it-easier-to-discover-things-youll-love/">[1]</a>
          </li>
          <li>
            Led sales in voice activations, Internet of things, feature revenue, business activations & accessories.
          </li>
          <li>
            Utilized Power BI to leverage customer & troubleshoot trouble areas. <a href="https://newsroom.stitchfix.com/blog/how-we-understand-your-personal-style/">[2]</a>
          </li>
        </>
      ),
    },
    {
      company: "Alameda County ITD",
      link: "https://itd.acgov.org/",
      badges: ["Technical Specialist 1"],
      title: "Paid Intern",
      logo: "",
      start: "2017",
      end: "2018",
      description:
        "Created algorithms for identifying harmful content and developed dashboards to detect malicious activities.",
    },
    {
      company: "New York University",
      link: "https://www.nyu.edu/",
      badges: ["Research"],
      title: "Research Assistant",
      start: "2015",
      end: "2017",
      description:
        "Under Rumi Chunara, centered around public health and social media.",
      logo: "", // Path to NYU logo image
    },
  ],
  skills: [
    "Python",
    "Pytorch",
    "LLMs",
    "Prompt Engineering",
    "Structured Extraction",
    "Observability",
    "Developer Tools",
    "Machine Learning",
    "Data Science",
  ],
  projects: [
    {
      title: "Instructor",
      techStack: ["python", "llms", "structured extraction"],
      description:
        "Structured extraction for LLMS using Pydantic, Over 30k monthly downloads on PyPI.",
      link: {
        label: "Instructor",
        href: "https://jxnl.github.io/instructor/",
      },
    },
    {
      title: "Multimodal Search",
      techStack: ["Stitchfix", "pytorch", "representation learning", "search"],
      description:
        "Lead computer vision research, and embedding search system using multi-modal embeddings powered by image, text, and impression data.",
      link: {
        label: "Stylist Shuffle",
        href: "https://www.stitchfix.com/women/blog/inside-stitchfix/how-style-shuffle-works/",
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
