import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaCode, FaShieldAlt, FaLinux, FaPython, FaTools } from "react-icons/fa";
import { SiBash, SiGithub } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      name: "Om (ॐ) – Automated Reconnaissance Tool",
      description:
        "A comprehensive, Bash-based automated reconnaissance tool for Kali Linux and Debian distros. OM automates OSINT, subdomain enumeration, port scanning, SSL analysis, and directory brute-forcing. Built for ethical hackers, pentesters, and red teamers seeking speed and structure in recon.",
      features: [
        "Automates Nmap, Amass, Sublist3r, WhatWeb, DNSRecon, and more",
        "Generates organized HTML reports and stores structured output",
        "Planned 'Attack Mode' for post-recon workflows"
      ],
      tech: [
        { icon: <SiBash />, name: "Bash" },
        { icon: <FaLinux />, name: "Linux" },
        { icon: <SiGithub />, name: "GitHub" }
      ],
      link: "https://github.com/Adiz777/om.git",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "Agni (अग्नि) – The Fire of Threat Detection",
      description:
        "Agni is a lightweight, real-time threat detection and alert system for personal devices and home networks. It detects anomalies before they escalate, symbolizing dharmic vigilance through the elements of Fire, Air, and Water.",
      features: [
        "Real-time monitoring for suspicious processes & files",
        "Network anomaly detection (rogue devices, traffic spikes)",
        "Dharmic module system — Agni-Core, Vayu, Varuna"
      ],
      tech: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaTools />, name: "Bash" },
        { icon: <FaShieldAlt />, name: "Defensive Security" }
      ],
      comingSoon: true,
      gradient: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center text-gray-200 px-6 py-10">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`relative bg-[#0f0f0f]/70 border border-cyan-500/30 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_25px_var(--accent)] transition-all group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            {/* Glow Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 rounded-2xl blur-2xl`}
            ></div>

            {/* Project Header */}
            <div className="relative z-10 mb-4 flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-bold text-cyan-300">{project.name}</h2>
              {project.comingSoon && (
                <span className="text-sm bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/50">
                  Coming Soon
                </span>
              )}
            </div>

            {/* Description */}
            <p className="relative z-10 text-sm sm:text-base text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Features */}
            <ul className="relative z-10 text-gray-300 text-sm list-disc list-inside mb-4 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="relative z-10 flex flex-wrap items-center gap-4 mt-4">
              {project.tech.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="flex items-center gap-2 text-cyan-400"
                >
                  {tech.icon}
                  <span className="text-xs sm:text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* GitHub Link */}
            {!project.comingSoon && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="relative z-10 mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-cyan-500/30 transition-all"
              >
                View on GitHub
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mantra */}
      <motion.p
        className="mt-12 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        “अग्निर्देवो द्विजातीनाम् — Agni, the divine fire, purifies and protects.”
      </motion.p>
    </section>
  );
}
