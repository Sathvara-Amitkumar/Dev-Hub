import { FadeIn } from "./FadeIn";
import { aboutFocus } from "@/data/site";
import { BrainCircuit, ChartNoAxesCombined, Code2, Server } from "lucide-react";

const focusIcons = [Code2, ChartNoAxesCombined, Server, BrainCircuit] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
        <FadeIn>
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            About Me
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
            I work at the intersection of software engineering and data science,
            with a focus on Python systems that are practical, maintainable, and
            useful in real products.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted md:text-lg md:leading-8">
            My interest is in APIs, data-driven applications, and AI/ML solutions
            that stay clear in design and reliable in delivery.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {aboutFocus.map((item, index) => {
              const Icon = focusIcons[index];

              return (
              <li
                key={item}
                className="group flex min-h-32 flex-col justify-between border border-border bg-surface/60 p-5 text-base font-medium text-foreground transition-colors hover:border-accent/50 sm:min-h-36 sm:p-6"
              >
                <Icon size={21} strokeWidth={1.6} className="text-accent transition-transform group-hover:translate-x-0.5" aria-hidden />
                <span>{item}</span>
              </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
