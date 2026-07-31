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
    // your JSX here
  );
}