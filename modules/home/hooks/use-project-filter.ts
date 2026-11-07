"use client";

import { useMemo, useState } from "react";
import type { Project } from "../types";

export function useProjectFilter(projects: Project[]) {
  const [tech, setTech] = useState<string>("All");

  const techList = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.tech)))],
    [projects],
  );

  const visible = useMemo(
    () => (tech === "All" ? projects : projects.filter((p) => p.tech.includes(tech))),
    [projects, tech],
  );

  return { tech, setTech, techList, visible };
}
