import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type SectionProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-b border-border px-6 py-20 md:px-10"
    >
      <FadeIn className="mx-auto max-w-5xl">
        <h2
          id={`${id}-heading`}
          className="text-sm font-medium tracking-widest text-accent uppercase"
        >
          {title}
        </h2>
        <div className="mt-6 text-muted">{children}</div>
      </FadeIn>
    </section>
  );
}
