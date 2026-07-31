import { Bot, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40">
            <Bot className="text-white" size={40} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          I am <span className="text-blue-500">Japjot AI</span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 leading-8">
          Your intelligent AI assistant.
          <br />
          Ask me anything about Japjot Singh's projects,
          skills, education, experience and resume.
        </p>

        <button
          className="mt-12 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-lg font-semibold flex items-center gap-3 mx-auto"
        >
          <Sparkles size={22} />
          Ask My AI
        </button>

        <div className="mt-16 flex flex-wrap justify-center gap-4">

          <span className="px-5 py-3 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
            💻 Projects
          </span>

          <span className="px-5 py-3 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
            🚀 Skills
          </span>

          <span className="px-5 py-3 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
            📄 Resume
          </span>

          <span className="px-5 py-3 rounded-full bg-gray-900 border border-gray-800 text-gray-300">
            🎓 Education
          </span>

        </div>

      </div>
    </section>
  );
}