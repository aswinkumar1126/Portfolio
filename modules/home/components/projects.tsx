"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import Section from "@/modules/shared/components/section";
import Reveal from "@/modules/shared/components/reveal";
import ProjectModal from "./project-modal";
import { useProjectFilter } from "../hooks/use-project-filter";
import type { Project } from "../types";

export default function Projects({ projects }: { projects: Project[] }) {
  const { tech, setTech, techList, visible } = useProjectFilter(projects);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Projects" subtitle="A few things I've built.">
      <div className="flex flex-wrap gap-2">
        {techList.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTech(t)}
            aria-pressed={tech === t}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
              tech === t
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card text-muted hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 120} className="h-full">
            <article className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`View details of ${p.title}`}
                className="block cursor-pointer overflow-hidden rounded-t-2xl text-left"
              >
                <Image
                  src={p.media.src}
                  alt={p.media.alt}
                  sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <h3 className="text-lg font-semibold">
                  <button type="button" onClick={() => setSelected(p)} className="cursor-pointer text-left hover:underline">
                    {p.title}
                  </button>
                </h3>
                <p className="flex-1 text-sm leading-6 text-muted">{p.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full bg-border/50 px-2.5 py-1 text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
                  >
                    View details
                  </button>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="transition-colors hover:text-foreground"
                    >
                      <GitBranch size={18} />
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live site`}
                      className="flex min-w-0 items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={18} className="shrink-0" />
                      <span className="truncate">{p.liveUrl.replace("https://", "")}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
