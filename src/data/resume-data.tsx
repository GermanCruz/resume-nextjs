import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "German Cruz",
  initials: "gc",
  location: "San Lorenzo",
  locationLink: "https://www.google.com/maps/place/San+Lorenzo",
  about:
    "Passionate about information technology security, I research cybersecurity, ethical hacking, and network defense. My goal is to stay ahead of emerging threats and contribute to a safer digital future.",
  summary:
    "Proficient in IT helpdesk support and front-end software engineering, I excel in providing technical assistance and developing user-friendly interfaces for optimal user experience.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "germancruz2017@gmail.com",
    tel: "510.361.6067",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/GermanCruz",
        icon: GitHubIcon, // Ensure GitHubIcon is imported or defined
      },
    ],
  },
  work: [
    {
      company: "Renascent Technology",
      title: "Employee",
      logo: "", // Add logo if available
      start: "2022",
      end: "2023",
      description: [
        "Installing and configuring client computer systems.",
        "Responding to client IT support requests and diagnosing hardware or software issues.",
        "Providing technical support on-site or via remote-access systems.",
        "Repairing hardware malfunctions, software issues, and networking problems.",
        "Maintaining good client relations and managing work records."
      ],
    },
    {
      company: "Alameda County IT Department",
      link: "https://www.flickr.com/photos/alcoitd/albums/72157684558692883/",
      badges: "Sabbatical",
      title: "Intern",
      logo: "", // Add logo if available
      start: "2016",
      end: "2018",
      description: [
        "Taking ownership of customer issues and resolving system issues through to resolution.",
        "Researching, diagnosing, troubleshooting, and identifying solutions to resolve system issues.",
        "Providing enterprise-level assistance to customers on software and hardware problems."
      ],
    },
    {
      company: "T-Mobile USA",
      link: "",
      badges: "System",
      title: "Signature Bilingual Mobile Expert",
      logo: "", // Add logo if available
      start: "2018",
      end: "2022",
      description: [], // Add description items here if available
    },
  ],
  skills: [
    "Python",
    "Technical troubleshooting",
    "IT Helpdesk management",
    "Automation scripting",
  ],
  projects: [
    {
      title: "PaveMyPath",
      techStack: ["html", "css", "javascript"],
      description: "basic mvp for student knowledge database",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
