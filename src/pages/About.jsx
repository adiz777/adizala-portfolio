import React from "react";
import { motion } from "framer-motion";
import { FaUserShield, FaLaptopCode, FaEye, FaQuoteLeft } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-6 py-10">
      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.div
        className="max-w-4xl text-center text-gray-400 leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-4">
          I'm <span className="text-cyan-400 font-semibold">Adityarajsinh Zala</span> — a cybersecurity researcher
          and ethical hacker committed to defending the unseen edges of the digital realm. My work combines the
          precision of code with the discipline of dharma, creating systems that are resilient, secure, and ethical.
        </p>
        <p className="mb-4">
          Currently pursuing my MSc in Cybersecurity (2024–2025) in the UK, I previously earned my BCA
          (2020–2023) from Bhavan's Shree H. J. Doshi Information Technology Institute.
        </p>
        <p className="mb-4">
          My journey blends offensive research with defensive architecture — from automating reconnaissance through
          <span className="text-fuchsia-400 font-semibold"> OM</span> to designing future-ready security frameworks.
        </p>
      </motion.div>

      {/* Project Highlight */}
      <motion.div
        className="max-w-3xl text-center bg-[#111]/60 border border-cyan-500/30 rounded-2xl p-8 shadow-lg shadow-cyan-500/10 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 flex items-center justify-center gap-2">
          <FaLaptopCode /> OM – Automated Reconnaissance Tool
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          <span className="text-fuchsia-400 font-medium">OM</span> is a Bash-based automated reconnaissance
          framework built for Kali Linux and Debian distros. It orchestrates tools like Nmap, Amass, Gobuster,
          WhatWeb, and SSLScan into a single, intelligent pipeline — performing OSINT, subdomain enumeration,
          CMS detection, and SSL analysis automatically.
        </p>
        <p className="mt-4 text-sm sm:text-base italic text-gray-500">
          "OM is not a tool — it’s a ritual. Precision, persistence, and silence."
        </p>
      </motion.div>

      {/* Symbolic Icons */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 text-cyan-400 text-4xl sm:text-5xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <FaUserShield className="hover:text-fuchsia-400 transition-all" />
        <FaLaptopCode className="hover:text-fuchsia-400 transition-all" />
        <FaEye className="hover:text-fuchsia-400 transition-all" />
      </motion.div>

      {/* Quote */}
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaQuoteLeft className="text-cyan-500 mx-auto text-2xl mb-3" />
        <p className="text-gray-400 italic text-sm sm:text-base">
          “In a world of noise and deception, truth is the rarest exploit.”
        </p>
      </motion.div>

      {/* Mantra */}
      <motion.p
        className="mt-12 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        “धर्मो रक्षति रक्षितः — Dharma protects those who protect it.”
      </motion.p>
    </section>
  );
}
