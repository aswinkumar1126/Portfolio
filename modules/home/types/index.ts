import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType | LucideIcon;
};

export type Skill = {
  group: string;
  items: SkillItem[];
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Strength = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  media: { src: StaticImageData; alt: string; type: "image" };
  // extra screenshots shown in the project popup, add files to public/images and import them in content.ts
  gallery?: StaticImageData[];
  // what was built, one point per line
  built: string[];
  // what each tech was used for
  stack: { name: string; use: string }[];
};
