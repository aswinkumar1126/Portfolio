import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import ProfileImage from "@/modules/shared/components/profile-image";
import { SITE } from "@/modules/shared/constants/site";

type Props = {
  summary: string;
  highlights: { label: string; value: string }[];
};

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Hero({ summary, highlights }: Props) {
  return (
    <section className="flex flex-col gap-10 pt-4 sm:gap-12 sm:pt-8">
      <div className="flex flex-col-reverse items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex flex-col gap-4">
          <p style={delay(0)} className="fade-up text-sm font-medium text-muted">
            Hi, I&apos;m {SITE.name}
          </p>
          <h1
            style={delay(80)}
            className="fade-up max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {SITE.role} who builds things for the web.
          </h1>
          <p style={delay(160)} className="fade-up max-w-xl leading-7 text-muted sm:text-lg sm:leading-8">
            {summary}
          </p>

          <div style={delay(240)} className="fade-up flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              View projects
            </Link>
            {/* drop resume.pdf into /public to make this work */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              <Download size={16} /> Resume
            </a>
          </div>
        </div>

        <div style={delay(120)} className="fade-up">
          <ProfileImage size="lg" priority />
        </div>
      </div>

      <dl className="grid grid-cols-3 gap-3 sm:gap-6">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 sm:p-6">
            <dd className="order-1 text-2xl font-semibold sm:text-4xl">{h.value}</dd>
            <dt className="order-2 text-xs text-muted sm:text-sm">{h.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
