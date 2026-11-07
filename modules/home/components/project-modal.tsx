"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import Modal from "@/modules/shared/components/modal";
import type { Project } from "../types";

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  // remounting per project (key) resets the selected image
  return project ? <Content key={project.slug} project={project} onClose={onClose} /> : null;
}

function Content({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = project.gallery?.length ? project.gallery : [project.media.src];
  const [active, setActive] = useState(0);

  return (
    <Modal open onClose={onClose} title={project.title} wide>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Image
            src={images[active]}
            alt={`${project.title} screenshot ${active + 1}`}
            sizes="(min-width: 768px) 700px, 100vw"
            className="aspect-video w-full rounded-xl border border-border object-contain"
          />
          {images.length > 1 && (
            <ul className="flex gap-2">
              {images.map((img, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-pressed={active === i}
                    className={`block overflow-hidden rounded-lg border transition-opacity ${
                      active === i ? "border-foreground" : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" sizes="96px" className="aspect-video w-20 object-cover sm:w-24" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-foreground">What I built</h3>
          <p>{project.description}</p>
          <ul className="list-disc pl-5">
            {project.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-foreground">Stack used</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.stack.map((s) => (
              <li key={s.name} className="rounded-xl border border-border p-3">
                <p className="font-medium text-foreground">{s.name}</p>
                <p className="text-xs">{s.use}</p>
              </li>
            ))}
          </ul>
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Visit site <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <GitBranch size={16} /> Source code
              </a>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
