import Reveal from "./reveal";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
};

export default function Section({ title, subtitle, children, id }: Props) {
  return (
    <section id={id} className="flex scroll-mt-24 flex-col gap-6">
      <Reveal className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle && <p className="max-w-xl text-muted">{subtitle}</p>}
      </Reveal>
      {children}
    </section>
  );
}
