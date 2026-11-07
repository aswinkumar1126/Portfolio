import Section from "@/modules/shared/components/section";
import Reveal from "@/modules/shared/components/reveal";
import type { Skill } from "../types";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <Section id="skills" title="Skills" subtitle="What I use day to day.">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 80} className="h-full">
            <div className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-medium text-muted">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm transition-all hover:-translate-y-0.5 hover:border-foreground/40"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
