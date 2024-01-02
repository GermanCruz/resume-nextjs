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
            Installing, troubleshooting, and resolving technical issues related to computer hardware and software, including network issues. {" "}
          </li>
          <li>
            Performing regular maintenance and backups for computers, maintaining records of equipment, inventory, and service requests.
          </li>
          <li>
            Writing and documenting technical procedures clearly and concisely, particulary for resolving computer operation and equipment issues. 
          </li>
            <li>
            Responding to and resolving user queries and prolems, providing training to small user groups. 
          </li>
           <li>
            Assisting with the maintenance and updates of web pages.
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
            Provided technical support to clients, addressing software and hardware issues through various channels including on-site and remote support. {" "}
          </li>
          <li>
            Managed IT Helpdesk operations, overseeing tasks such as new hire onboarding, troubleshooting, and user offboarding.
          </li>
          <li>
            Collaborated with diverse teams, including hedge fund managers, biochem labs, engineers, and vendors, to ensure seamless end-usr experiences. 
          </li>
            <li>
            Administered Google & Microsoft administrator portals. 
          </li>
           <li>
            MDM implementation for effecient device management and signle sign-on integrations for various platforms.
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
            Developed internal web applications and IOS apps, including an Ergonomic Evaluation tool and AC PaveMyPath app for students. {" "}
          </li>
          <li>
            Utilized DocuSign API's for paperless procedures and employed SCCM for device management.
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
            Recipient of the Winners Cicle Award for the third quarter of 2019.{" "}
          </li>
          <li>
            Top salesman overall 2019 across all metrics (activations, feature add-ons, beyond-thesmartphone sales, accessories & customer satisfaction (NPS).{" "}
          </li>
          <li>
            Headed the rapid execution sales team, aiming to swiftly adapt to market demands and enhance quantitative sales outcomes.
          </li>
          <li>
            Conducted training sessions and practical exercises for the implementation of new sprint systems, marking the culmination of the T-Mobile-Sprint merger.
          </li>
          <li>
            Collaborated with a team of 35+ employees to consistently exceed sales metric quotas and deliver secure and timely service in the midst of the COVID-19 pandemic.
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
