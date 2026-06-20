import { experiences } from "./experiences";

const Experiences = () => {
  return (
    <section id="experiences" className="min-h-screen w-full mx-auto pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-violet-600 mb-8 text-center">
        Experiências
      </h2>

      <div className="space-y-10">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="rounded-2xl border border-violet-500/20 bg-slate-950/30 p-5 md:p-7 shadow-lg shadow-violet-950/20"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-violet-600">
                <span className="text-violet-600">{experience.role}</span> na{" "}
                {experience.company}
              </h3>
              <span className="text-sm text-violet-100">
                {experience.period}
              </span>
            </div>

            <p className="mb-4 text-sm md:text-lg text-violet-50/90">
              {experience.description}
            </p>

            <ul className="list-disc pl-6 space-y-4 text-violet-200 text-sm md:text-lg">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
