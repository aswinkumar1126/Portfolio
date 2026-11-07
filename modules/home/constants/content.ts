import { Code2, Database, Gauge, LayoutDashboard, Layers, Plug, Server, Smartphone } from "lucide-react";
import {
  SiBootstrap, SiChakraui, SiCss, SiExpress, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMui,
  SiNextdotjs, SiNodedotjs, SiPostgresql, SiOpenjdk, SiPostman, SiReact, SiSpringboot, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import type { Project, Service, Skill, Strength } from "../types";
import bmgImage1 from "@/public/images/bmg.png";
import bmgImage2 from "@/public/images/bmg2.png";
import bmgImage3 from "@/public/images/bmg3.png";
import bmgImage4 from "@/public/images/bmg4.png";
import billingImage1 from "@/public/images/billing.jpeg";
import billingImage2 from "@/public/images/billing2.jpeg";
import smith1 from "@/public/images/smith2.png";
import smith2 from "@/public/images/smith3.png";
import smith3 from "@/public/images/smith.png";

export const SUMMARY =
  "I build real-world web and mobile apps with a focus on clean UI, smooth user flows and performance. My work has mostly been about cutting down manual effort and making data easier to understand.";

export const HIGHLIGHTS = [
  { label: "Years of experience", value: "2" },
  { label: "Projects built", value: "3" },
  { label: "Manual work cut", value: "~40%" },
];

export const SERVICES: Service[] = [
  { title: "Web apps", description: "Responsive React and Next.js interfaces with reusable components.", icon: Code2 },
  { title: "Mobile apps", description: "Cross-platform apps in React Native, like billing and inventory tools.", icon: Smartphone },
  { title: "Dashboards and admin panels", description: "Management screens and charts that make decisions easier.", icon: LayoutDashboard },
  { title: "API integration", description: "Connecting the UI to Java and Node backends with typed data.", icon: Server },
];

export const SKILLS: Skill[] = [
  {
    group: "Frontend and mobile",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    group: "UI and styling",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot (basic)", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "SQL", icon: Database },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Postman", icon: SiPostman },
      { name: "REST API integration", icon: Plug },
    ],
  },
];

export const STRENGTHS: Strength[] = [
  { title: "Reusable components", description: "Cleaner state handling and shared components cut UI issues and rework by about 20%.", icon: Layers },
  { title: "Typed, reliable code", description: "TypeScript for props and API data, so the code is easier to maintain as it grows.", icon: Code2 },
  { title: "Performance", description: "Improved responsiveness and API handling, roughly 20% better performance and engagement.", icon: Gauge },
];

export const PROJECTS: Project[] = [
  {
    slug: "jewellery-ecommerce",
    title: "Jewellery E-Commerce Website",
    description:
      "Live store with product browsing, cart, wishlist and checkout, plus a full admin panel for products, orders and users. Reduced manual operations by about 40%.",
    tech: ["React.js", "Java", "SQL"],
    liveUrl : "https://bmgjewellers.com",
    media : { src: bmgImage1,type : "image", alt: "Jewellery E-Commerce Website" },
    gallery: [bmgImage1 , bmgImage2 ,bmgImage3 ,bmgImage4],
    built: [
      "Responsive storefront with product browsing, wishlist, cart and checkout.",
      "Admin panel to manage products, orders and users.",
      "Company project, live in production.",
    ],
    stack: [
      { name: "React.js", use: "Storefront and admin UI built from reusable components." },
      { name: "Java", use: "Backend services behind the store and admin panel." },
      { name: "SQL", use: "Stores products, orders and users." },
    ],
  },
  {
    slug: "smith-management",
    title: "Smith Management System",
    description:
      "Full CRUD system for income, expenses, smith details and job workflow. Improved operational efficiency and reporting by about 35%.",
    tech: ["React.js", "Java", "SQL"],
    liveUrl: "https://smith.namachi.tech",
    media : { src: smith1, type: "image", alt: "Smith Management System" },
    gallery: [smith1 ,smith2 ,smith3],
    built: [
      "Management app for smith details, income, expenses and job workflows.",
      "CRUD operations for centralized record management.",
      "Company project, live in production.",
    ],
    stack: [
      { name: "React.js", use: "Management screens and forms." },
      { name: "Java", use: "Backend APIs for records and workflows." },
      { name: "SQL", use: "Stores income, expenses, smith and job records." },
    ],
  },
  {
    slug: "billing-software",
    title: "Tea Shop Billing & Inventory Software",
    description:
      "Personal mobile app for product, category, purchase and sales management, with invoice generation, stock tracking, purchase and sales reports and role-based access control.",
    tech: ["React Native", "Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    //liveUrl : "https://billingsoftware.com",
    media : { src: billingImage1, type: "image", alt: "Tea Shop Billing & Inventory Software" },
    gallery: [billingImage1, billingImage2],
    built: [
      "Mobile billing and inventory app for product, category, purchase and sales management.",
      "Invoice generation and stock tracking.",
      "Purchase and sales reports, with role-based access control.",
      "Personal project.",
    ],
    stack: [
      { name: "React Native", use: "The cross-platform mobile app." },
      { name: "Java + Spring Boot", use: "REST backend for billing, stock and reports." },
      { name: "PostgreSQL", use: "Stores products, purchases, sales and users." },
      { name: "REST APIs", use: "Connects the app to the backend." },
    ],
  },
];
