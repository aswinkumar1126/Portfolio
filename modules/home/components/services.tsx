import Section from "@/modules/shared/components/section";
import Reveal from "@/modules/shared/components/reveal";
import type { Service } from "../types";

export default function Services({ services }: { services: Service[] }) {
  return (
    <Section id="services" title="What I can do" subtitle="The kind of work I take on.">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 100} className="h-full">
            <article className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                <Icon size={24} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-muted">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
