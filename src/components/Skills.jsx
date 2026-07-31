import {
  BrainCircuit,
  Database,
  Code2,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <BrainCircuit size={28} />,
      title: "Generative AI",
      level: 90,
      color: "bg-blue-500",
    },
    {
      icon: <Cpu size={28} />,
      title: "Python",
      level: 95,
      color: "bg-green-500",
    },
    {
      icon: <Server size={28} />,
      title: "FastAPI",
      level: 90,
      color: "bg-cyan-500",
    },
    {
      icon: <Globe size={28} />,
      title: "React",
      level: 85,
      color: "bg-sky-500",
    },
    {
      icon: <Database size={28} />,
      title: "MongoDB",
      level: 80,
      color: "bg-emerald-500",
    },
    {
      icon: <Code2 size={28} />,
      title: "JavaScript",
      level: 88,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-blue-500 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I develop intelligent AI applications using modern
            technologies across frontend, backend and machine learning.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300"
            >

              <div className="flex justify-between items-center mb-5">

                <div className="flex items-center gap-4">

                  <div className="text-blue-500">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>

                </div>

                <span className="text-gray-400">
                  {skill.level}%
                </span>

              </div>

              <div className="w-full bg-gray-800 rounded-full h-3">

                <div
                  className={`${skill.color} h-3 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}