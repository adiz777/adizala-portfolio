import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 overflow-hidden relative">
      
      {/* Animated Background Glow */}
      <motion.div
        className="absolute w-[40rem] h-[40rem] bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Adityarajsinh Zala
      </motion.h1>

      <motion.h2
        className="mt-4 text-xl md:text-2xl text-cyan-300 tracking-widest z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Cybersecurity Practitioner • Developer • Seeker
      </motion.h2>

      <motion.p
        className="mt-8 max-w-2xl text-center text-gray-400 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        “In the silence between data and defense lies awareness. Every signal carries intent, 
        every system reflects consciousness. I build to protect, automate, and awaken.”
      </motion.p>

      <motion.div
        className="mt-12 flex gap-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Link
          to="/about"
          className="px-6 py-3 rounded-xl border border-cyan-400/50 text-cyan-300 hover:text-fuchsia-300 hover:border-fuchsia-400 transition-all font-semibold shadow-lg hover:shadow-fuchsia-500/30"
        >
          Enter Realm
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-xl border border-fuchsia-400/50 text-fuchsia-300 hover:text-cyan-300 hover:border-cyan-400 transition-all font-semibold shadow-lg hover:shadow-cyan-500/30"
        >
          Send a Signal
        </Link>
      </motion.div>

      {/* Mantra */}
      <motion.div
        className="mt-20 text-xl text-fuchsia-300 tracking-wide z-10"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        तमसो मा ज्योतिर्गमय
      </motion.div>
    </div>
  );
}
