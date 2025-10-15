import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center justify-center px-6 py-12">
      
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects — OM & Agni
      </motion.h1>

      {/* OM Section */}
      <motion.div
        className="max-w-3xl text-center space-y-6 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-fuchsia-400 mb-4">OM (ॐ) — The Sound of Reconnaissance</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="text-fuchsia-400 font-semibold">OM</span> is not just a cybersecurity tool — it is a
          reflection of digital awareness. A Bash-based automated reconnaissance framework that observes, analyzes,
          and documents the unseen with precision and silence. It is both machine and mantra — designed to see without
          being seen.
        </p>

        <p className="text-gray-400 leading-relaxed">
          OM automates <span className="text-cyan-400">Nmap</span>, <span className="text-cyan-400">Amass</span>,{" "}
          <span className="text-cyan-400">Sublist3r</span>, and <span className="text-cyan-400">theHarvester</span> into
          one organized flow — gathering intelligence like meditation in motion. Each scan is deliberate, each output a
          whisper of truth in the network’s silence.
        </p>

        <p className="text-gray-400 leading-relaxed italic">
          “In awareness lies the ultimate defense. In stillness, the perfect scan.”
        </p>

        <div className="pt-8">
          <a
            href="https://github.com/Adiz777/om.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-fuchsia-500/50 text-fuchsia-300 hover:text-cyan-300 hover:border-cyan-400 transition-all rounded-xl px-6 py-3 text-lg shadow-lg hover:shadow-cyan-500/30"
          >
            View OM on GitHub
          </a>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-20 border-t border-fuchsia-400/40 mb-20"></div>

      {/* Agni Section */}
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-400 mb-4">
          Agni (अग्नि) — The Fire of Threat Detection
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="text-cyan-400 font-semibold">Agni</span> is the guardian flame of defense —
          a real-time, modular threat detection and alert system for personal devices and home networks.
          Where OM observes, Agni protects. Where OM listens, Agni acts.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Written in <span className="text-cyan-400">Python</span> and <span className="text-cyan-400">Bash</span>,
          Agni monitors suspicious processes, file modifications, and rogue network activity — detecting
          anomalies before they evolve into breaches.
        </p>

        <div className="text-gray-400 leading-relaxed space-y-2">
          <p>🔥 <span className="text-fuchsia-400 font-medium">Agni-Core</span> — The heart of vigilance, monitoring files & processes.</p>
          <p>🌬️ <span className="text-fuchsia-400 font-medium">Vayu</span> — Watches the flow of network packets and devices.</p>
          <p>🌊 <span className="text-fuchsia-400 font-medium">Varuna</span> — Logs, alerts, and flows with data like water.</p>
        </div>

        <p className="text-gray-400 leading-relaxed italic">
          “Agni protects what is sacred — the code, the data, the silence between signals.”
        </p>

        <div className="pt-8">
          <a
            href="https://github.com/Adiz777/agni-threatdetector"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-cyan-500/50 text-cyan-300 hover:text-fuchsia-300 hover:border-fuchsia-400 transition-all rounded-xl px-6 py-3 text-lg shadow-lg hover:shadow-fuchsia-500/30"
          >
            Coming Soon on GitHub
          </a>
        </div>
      </motion.div>

      {/* Mantra */}
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
