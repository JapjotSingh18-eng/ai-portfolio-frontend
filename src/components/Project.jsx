import { Github, ExternalLink, Bot, FileSearch, MapPinned } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Matcher",
      description:
        "AI-powered resume screening system using FastAPI, Python, Groq LLM and MongoDB. It ranks resumes based on job descriptions and provides ATS scores.",
      icon: <FileSearch size={40} />,
      tech: ["Python", "FastAPI", "LLM", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Portfolio Chatbot",
      description:
        "Interactive AI chatbot that answers questions about my projects, skills, education and experience using Generative AI.",
      icon: <Bot size={40} />,
      tech: ["React", "FastAPI", "Groq", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Campus Navigator",
      description:
        "Smart navigation platform helping students locate classrooms, labs and facilities with intelligent search.",
      icon: <MapPinned size={40} />,
      tech: ["React", "Python", "Maps", "AI"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            These are some of my AI and Full Stack projects showcasing
            Generative AI, backend development and modern frontend technologies.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-3 transition duration-300 shadow-lg"
            >

              <div className="text-blue-500 mb-6">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}