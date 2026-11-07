import profile from "@/public/icons/aswin.jpg";

export const SITE = {
  name: "Aswin Kumar",
  role: "Frontend Developer",
  description: "Portfolio of Aswin Kumar, a frontend developer building clean, fast web and mobile apps with React and Next.js.",
  email: "aswinkumarbtechit@gmail.com",
  phone: "+91 93428 84232",
  location: "India",
  // static year on purpose, new Date() in a server component upsets cacheComponents
  year: 2026,
};

export const PROFILE_IMAGE = profile;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
