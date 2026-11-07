"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../constants/site";
import { SOCIALS } from "../constants/socials";
import { useMobileMenu } from "../hooks/use-mobile-menu";

// GitHub and LinkedIn stay visible at the top on every screen size
const TOP_SOCIALS = SOCIALS.filter((s) => s.label === "GitHub" || s.label === "LinkedIn");

export default function Header() {
  const { open, toggle, pathname } = useMobileMenu();

  const linkClass = (href: string) =>
    `text-sm transition-colors hover:text-foreground ${
      pathname === href ? "font-medium text-foreground" : "text-muted"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4 sm:p-6">
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.name}
        </Link>

        <nav aria-label="Main" className="hidden gap-8 sm:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="flex items-center gap-3">
            {TOP_SOCIALS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
          {/* drop resume.pdf into /public to make this work */}
          <a
            href="/resume.pdf"
            download
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background sm:inline-flex"
          >
            <Download size={14} /> Resume
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="sm:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border p-4 sm:hidden">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
          <a href="/resume.pdf" download className="text-sm text-muted">
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
