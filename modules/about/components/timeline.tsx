import type { TimelineItem } from "../types";

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col gap-8 border-l border-border pl-4 sm:pl-6">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="relative flex flex-col gap-1">
          <span className="absolute -left-5 top-2 h-2 w-2 rounded-full bg-foreground sm:-left-7" />
          <p className="text-sm text-muted">{item.period}</p>
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-muted">{item.place}</p>
          <p className="text-sm leading-6">{item.details}</p>
        </li>
      ))}
    </ol>
  );
}
