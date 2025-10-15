import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center justify-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* About Section */}
      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m <span className="text-fuchsia-400 font-semibold">Adityarajsinh Zala</span> — a Cybersecurity Engineer, developer, and seeker of truth within the digital realm.
          My path bridges technology and dharma — exploring how awareness, protection, and purpose intertwine in cyberspace.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I believe cybersecurity is not just defense — it’s awareness. Every code, every signal, and every layer of encryption mirrors a deeper principle of consciousness and protection. 
          I move through systems the way sages moved through silence — listening, observing, defending.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="w-32 h-[1px] my-10 bg-gradient-to-r from-cyan-500 to-fuchsia-500"
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        transition={{ duration: 1 }}
      />

      {/* Project OM Section */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Project — OM
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-300 leading-relaxed">
          <span className="text-fuchsia-400 font-semibold">OM</span> is my personal creation — a cyber–dharmic framework where technology meets inner silence. 
          It’s not just a system — it’s a living idea, merging protection, purpose, and perception.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Every function within OM represents the eternal cycle of awareness — detect, defend, enlighten. 
          It’s my attempt to encode mindfulness into modern architecture, to make technology feel sacred again.
        </p>
      </motion.div>

      {/* Mantra */}
      <motion.div
        className="mt-16 text-xl text-fuchsia-300 tracking-wide"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        तमसो मा ज्योतिर्गमय
      </motion.div>
    </div>
  );
}
