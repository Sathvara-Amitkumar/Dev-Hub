import {
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
  Server,
  Workflow,
} from "lucide-react";
import { FadeIn } from "./FadeIn";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    layout: "lg:col-span-4",
    skills: ["Python", "SQL", "Java"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    layout: "lg:col-span-8",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Model Evaluation",
    ],
  },
  {
    title: "Deep Learning",
    icon: Workflow,
    layout: "lg:col-span-8",
    skills: [
      "TensorFlow",
      "Keras",
      "Artificial Neural Networks (ANN)",
      "Perceptron",
      "Forward Propagation",
      "Backpropagation",
      "ReLU",
      "Sigmoid",
      "Softmax",
      "Categorical Crossentropy",
      "Gradient Descent",
      "Adam",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    layout: "lg:col-span-4",
    skills: ["FastAPI", "Flask", "Pydantic", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    layout: "lg:col-span-4",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: PanelsTopLeft,
    layout: "lg:col-span-8",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Streamlit"],
  },
] as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-border px-6 py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2
            id="skills-heading"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Technical Skills
          </h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {skillGroups.map(({ title, icon: Icon, layout, skills }) => (
              <article
                key={title}
                className={`group rounded-md border border-border bg-surface/50 p-5 transition-colors duration-200 hover:border-accent/50 hover:bg-surface/80 sm:p-6 ${layout} ${
                  title === "Deep Learning" ? "md:col-span-2 lg:col-span-8" : ""
                } ${title === "Tools" ? "md:col-span-2 lg:col-span-8" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-border bg-background text-accent transition-colors group-hover:border-accent/40">
                    <Icon size={19} strokeWidth={1.7} aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} skills`}>
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-border bg-background/70 px-2.5 py-1.5 text-sm leading-5 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
