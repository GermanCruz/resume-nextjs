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
} as const;
