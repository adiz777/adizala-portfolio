import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaCode, FaShieldAlt } from "react-icons/fa";
import { SiLinux, SiKalilinux } from "react-icons/si";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/5 to-transparent blur-3xl"
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Adityarajsinh Zala
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="mt-4 text-lg sm:text-2xl text-cyan-300 font-light tracking-wide text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Cybersecurity Researcher & Ethical Hacker
      </motion.h2>

      {/* Icons Row */}
      <motion.div
        className="flex gap-6 mt-8 text-3xl text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaLock className="hover:text-fuchsia-400 transition-all" />
        <FaShieldAlt className="hover:text-fuchsia-400 transition-all" />
        <FaCode className="hover:text-fuchsia-400 transition-all" />
        <SiLinux className="hover:text-fuchsia-400 transition-all" />
        <SiKalilinux className="hover:text-fuchsia-400 transition-all" />
      </motion.div>

      {/* Quote / Tagline */}
      <motion.p
        className="max-w-2xl mt-10 text-center text-sm sm:text-base text-gray-400 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        “Guarding the unseen, defending the unknown — my code is my mantra, my craft is vigilance.”
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href="/Projects.jsx"
          className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-5 py-2 rounded-lg text-white font-semibold hover:shadow-[0_0_20px_#00f0ff] transition-all"
        >
          View Projects
        </a>
        <a
          href="/Contact.jsx"
          className="border border-cyan-400 px-5 py-2 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_15px_#00f0ff] transition-all"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Sanskrit mantra */}
      <motion.p
        className="mt-16 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        “असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्युर्मा अमृतं गमय ॥”
      </motion.p>
      <p className="text-xs text-gray-500 mt-2 italic">
        — “Lead me from illusion to truth, from darkness to light, from mortality to immortality.”
      </p>
    </section>
  );
}
