import Section from "@/modules/shared/components/section";
import Reveal from "@/modules/shared/components/reveal";
import type { Strength } from "../types";

export default function Strengths({ strengths }: { strengths: Strength[] }) {
  return (
    <Section id="strengths" title="Where I'm strong" subtitle="And how I can help your team or project.">
      <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6">
        {strengths.map(({ title, description, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={i * 120} className="h-full">
              <div className="card-hover flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                <Icon size={24} className="shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm leading-6 text-muted">{description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
