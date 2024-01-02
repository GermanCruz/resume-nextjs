import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "German Cruz",
  initials: "gm",
  location: "San Lorenzo",
  locationLink: "https://www.google.com/maps/place/San+Lorenzo",
  about:
    "Passionate about Information technology, I research cybersecurity, ethical hacking, and network defense. My goal is to stay ahead of emerging threats and contribute to a safer digital future.",
  summary:
    "Proficient in IT helpdesk Support, I excel in providing technical assistance.",
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
      school: "Chabot College",
      degree: "In Progress",
      start: "2018",
      end: "Present",
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
      description: (
         <>
          <li>
            Performing regular maintenance and backups. {" "}
          </li>
          <li>
            Writing and documenting technical procedures.
          </li>
          <li>
            Responding to and resolving user queries and prolems.
          </li>
          <li>
            Assisting with the maintenance and updates of web pages. 
          </li>
            <li>
             Installing, troubleshooting, and resolving technical issues.
          </li>
           <li>
             Maintaining records of equipment, inventory, and service requests.
          </li>
        </>
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
      description: (
        <>
          <li>
            Oversaw tasks such as new hire onboarding, troubleshooting, and user offboarding. {" "}
          </li>
          <li>
           Provided technical support to clients, addressing hardware and software issues.
          </li>
          <li>
            Implemented MDM and MAM software for effecient device management.
          </li>
           <li>
             Administered Google & Microsoft administrator portals.
          </li>
            Integrated SSO integrations for various platforms.
          <li>  
          </li>
        </>
      ),
    },
     {
      company: "Alameda County ITD",
      link: "https://itd.acgov.org/",
      badges: ["Technical Specialist 1"],
      title: "Internship",
      logo: "",
      start: "2017",
      end: "2018",
      description: (
        <>
          <li>
            Utilized DocuSign APIs for paperless procedures. 
          </li>
          <li>
            Developed internal Ergonomic Evaluation web application. {" "}
          </li>
          <li>
            Managed hardware refresh projects and deployed custom images to multiple devices.
          </li>
        </>
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
      description: (
        <>
          <li>
            Collaborated with a team of 35+ employees to consistently exceed sales metric quotas.
          </li>
          <li>
            Conducted training sessions for the implementation of new sprint systems.
          </li>
          <li>
           Headed the rapid execution sales team, aiming to swiftly adapt to market demands. 
          </li>
          <li>
            Recipient of the Winners Cicle Award for the third quarter of 2019.
          </li>
          <li>
            Top salesman overall 2019 across all metrics.
          </li>
        </>
      ),
    },
  ],
  skills: [
    "Firewall configurations & management",
    "IP protocols",
    "Network security (VLAN, VPN)",
    "Inventory tracking",
    "Airtable",
    "Windows powershell",
    "Okta workflows",
    "Microsoft suite",
    "1Password",
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
