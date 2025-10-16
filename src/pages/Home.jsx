import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-6 text-center">
      {/* Main Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Adityarajsinh Zala
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Cybersecurity Researcher • Ethical Hacker • Digital Sentinel
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Building tools that defend, monitor, and reveal the unseen.
          <br />
          Guided by dharma, discipline, and digital awareness.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 text-sm sm:text-base rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
          >
            Explore My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 text-sm sm:text-base rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 transition-all"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Symbolic Icon */}
      <motion.div
        className="mt-14 text-cyan-400 text-5xl sm:text-6xl md:text-7xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <FaShieldAlt className="drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
      </motion.div>

      {/* Mantra */}
      <motion.p
        className="mt-10 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        “धर्मो रक्षति रक्षितः — Dharma protects those who protect it.”
      </motion.p>
    </section>
  );
}
