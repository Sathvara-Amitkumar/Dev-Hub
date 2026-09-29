import { FadeIn } from "./FadeIn";
import { aboutFocus } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border px-6 py-20 md:px-10"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest text-accent uppercase">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            About Me
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            I work at the intersection of software engineering and data science,
            with a focus on Python systems that are practical, maintainable, and
            useful in real products.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            My interest is in APIs, data-driven applications, and AI/ML solutions
            that stay clear in design and reliable in delivery.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutFocus.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                <span className="mb-2 block h-px w-6 bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
