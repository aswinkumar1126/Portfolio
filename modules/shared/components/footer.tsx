import { SOCIALS } from "../constants/socials";
import { SITE } from "../constants/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:p-6">
        <p className="text-sm text-muted">
          © {SITE.year} {SITE.name}. All rights reserved.
        </p>
        <ul className="flex gap-4">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-foreground">
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
