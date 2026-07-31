import {
  GraduationCap,
  BrainCircuit,
  Code2,
  Briefcase,
} from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <BrainCircuit size={35} />,
      title: "AI Engineer",
      desc: "Building AI applications using Generative AI, LLMs and FastAPI.",
    },
    {
      icon: <Code2 size={35} />,
      title: "Full Stack",
      desc: "React • FastAPI • MongoDB • Python • Tailwind CSS",
    },
    {
      icon: <GraduationCap size={35} />,
      title: "Education",
      desc: "Third Year B.Tech Computer Science Student",
    },
    {
      icon: <Briefcase size={35} />,
      title: "Goal",
      desc: "Creating intelligent software that solves real-world problems.",
    },
  ];

  return (
    <section id="about" className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Building smart software with code and curiosity
          </h2>
          <p className="max-w-2xl text-gray-300">
            I’m a computer science student passionate about AI, full-stack
            development, and creating practical products that make an impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                {card.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {card.title}
              </h3>
              <p className="leading-relaxed text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}