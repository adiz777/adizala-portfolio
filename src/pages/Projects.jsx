import { motion } from "framer-motion";
import { FaFireAlt, FaEye } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "OM (ॐ)",
      title: "The Sound of Reconnaissance",
      description:
        "An automated Bash-based reconnaissance framework blending awareness and automation. OM unites Nmap, Amass, Sublist3r, and theHarvester — scanning the unseen with silence, structure, and purpose.",
      mantra: "In awareness lies the ultimate defense.",
      icon: <FaEye className="text-5xl text-cyan-400" />,
      link: "https://github.com/Adiz777/om.git",
      gradient: "from-cyan-400/40 to-fuchsia-500/30",
    },
    {
      name: "Agni (अग्नि)",
      title: "The Fire of Threat Detection",
      description:
        "A lightweight, real-time defensive guardian that monitors files, processes, and network traffic for anomalies. Where OM listens, Agni acts — illuminating and purifying the hidden threats before they strike.",
      mantra: "Agni protects what is sacred — the code, the data, the silence between signals.",
      icon: <FaFireAlt className="text-5xl text-fuchsia-400" />,
      link: "https://github.com/Adiz777/agni-threatdetector",
      gradient: "from-fuchsia-500/40 to-cyan-400/30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center justify-center px-6 py-20">
      
      {/* Page Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h1>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className={`border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-md bg-gradient-to-br ${proj.gradient} shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 flex flex-col items-center text-center`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4">{proj.icon}</div>
            <h2 className="text-3xl font-semibold text-fuchsia-400 mb-2">{proj.name}</h2>
            <h3 className="text-lg text-cyan-300 font-medium mb-4">{proj.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{proj.description}</p>
            <p className="italic text-fuchsia-300 mb-6">“{proj.mantra}”</p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-fuchsia-500/50 text-fuchsia-300 hover:text-cyan-300 hover:border-cyan-400 transition-all rounded-xl px-6 py-3 text-lg shadow-lg hover:shadow-cyan-500/30"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Mantra Footer */}
      <motion.div
        className="mt-20 text-xl text-fuchsia-300 tracking-wide"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        तमसो मा ज्योतिर्गमय
      </motion.div>
    </div>
  );
}
