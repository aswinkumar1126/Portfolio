import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import type { SocialLink } from "../types";
import { SITE } from "./site";

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/aswinkumar1126", icon: GitBranch },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aswin-kumar1126ash", icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${SITE.email}`, icon: Mail },
];
