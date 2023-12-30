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
    {
      title: "T-Mobile/Sprint Merger Integration",
      techStack: ["Power-BI", "Trainings", "Sales-Strategy"],
      description:
        "As an integrationist and trainer for the T-Mobile/Sprint merger, I specialized in seamlessly blending systems and processes while educating teams on the unified operational framework and technologies.",
      link: {
        label: "Instructor",
      },
    },
  ],
} as const;
