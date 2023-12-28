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
  selectedTemplate: 9,
  headings: {
    work: "Work Experience",
    skills: "Skills",
    awards: "Certifications"
  },
  basics: {
    name: "German Cruz",
    email: "Germancruz2017@gmail.com",
    phone: "(510) 361-6067",
    website: "",
    location: {
      address: "San Lorenzo, CA"
    }
  },
  education: [
    // Details of education, if available, should be added here
    {},
    {},
    {}
  ],
  skills: [
    {
      level: "",
      keywords: [
        "Technical troubleshooting",
        "IT Helpdesk management",
        "Automation scripting"
      ]
    }
  ],
  work: [
    {
      company: "Renascent Technology",
      location: "Oakland, CA",
      position: "IT Support Engineer",
      website: "",
      startDate: "2022",
      endDate: "2023",
      highlights: [
        "Installing and configuring client computer systems.",
        "Responding to client IT support requests and diagnosing hardware or software issues.",
        "Providing technical support on-site or via remote-access systems.",
        "Repairing hardware malfunctions, software issues, and networking problems.",
        "Maintaining good client relations and managing work records."
      ]
    },
    {
      company: "Alameda County IT Department",
      position: "Technical Specialist 1",
      location: "Oakland, CA",
      startDate: "2016",
      endDate: "2018",
      highlights: [
        "Taking ownership of customer issues and resolving system issues through to resolution.",
        "Researching, diagnosing, troubleshooting, and identifying solutions to resolve system issues.",
        "Providing enterprise-level assistance to customers on software and hardware problems."
      ]
    },
    {
      company: "T-Mobile USA",
      position: "Bilingual Mobile Expert",
      location: "Hayward, CA",
      startDate: "2018",
      endDate: "2020",
      highlights: [
        // Add specific highlights for this position
      ]
    },
    {
      company: "T-Mobile USA",
      position: "Bilingual Signature Mobile Expert",
      location: "Downtown San Francisco",
      startDate: "2020",
      endDate: "2021",
      highlights: [
        // Add specific highlights for this position
      ]
    }
  ],
  projects: [
    // Add any projects here
    {
      name: "",
      description: "",
      url: "",
      keywords: [
        ""
      ]
    }
  ],
  awards: [
    {
      title: "Secure Email Gateway - Level 1 Warrior Certification, Mimecast",
      awarder: "",
      summary: "",
      date: "2023"
    },
    {
      title: "Email Security Cloud Gateway Advanced, Mimecast",
      date: "2023"
    },
    {
      title: "Microsoft Office Specialist, Microsoft",
      date: "2014"
    }
  ],
  sections: [
    "templates",
    "profile",
    "education",
    "work",
    "skills",
    "projects",
    "awards"
  ]
} as const;
