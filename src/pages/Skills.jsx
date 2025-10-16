import React from "react";
import { motion } from "framer-motion";
import {
  SiKalilinux,
  SiLinux,
  SiPython,
  SiWireshark,
  SiGithub,
  SiDocker,
  SiCloudflare,
  SiBurpsuite,
} from "react-icons/si";
import {
  FaWindows,
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaFireAlt,
} from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { RiShieldStarLine } from "react-icons/ri";

const skillCategories = [
  {
    category: "Offensive Security",
    color: "from-cyan-400 to-fuchsia-500",
    skills: [
      { name: "Kali Linux", icon: <SiKalilinux /> },
      { name: "Python Scripting", icon: <SiPython /> },
      { name: "Burp Suite", icon: <SiBurpsuite /> },
      { name: "SQLMap", icon: <AiOutlineConsoleSql /> },
    ],
  },
  {
    category: "Defensive Security",
    color: "from-fuchsia-500 to-yellow-400",
    skills: [
      { name: "Network Defense", icon: <FaShieldAlt /> },
      { name: "Encryption & Locks", icon: <FaLock /> },
      { name: "Threat Detection", icon: <RiShieldStarLine /> },
      { name: "System Hardening", icon: <MdSecurity /> },
    ],
  },
  {
    category: "Networking & Analysis",
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "Network Mapping", icon: <FaNetworkWired /> },
      { name: "Traffic Analytics", icon: <IoIosAnalytics /> },
    ],
  },
  {
    category: "Platforms & Tools",
    color: "from-amber-400 to-fuchsia-400",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Cloudflare", icon: <SiCloudflare /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Git Branching", icon: <BiGitBranch /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen text-gray-200 py-20 px-6">
      <motion.h1
        className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Cyber Arsenal
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-16">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="rounded-2xl bg-black/40 border border-cyan-400/20 p-8 shadow-lg hover:shadow-cyan-400/30 transition-all"
          >
            <h2
              className={`text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}
            >
              {cat.category}
            </h2>

            {/* Responsive glowing grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 25px rgba(0,255,255,0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900/70 to-black/60 border border-cyan-400/10 rounded-2xl py-8 px-4 cursor-pointer transition-all group"
                >
                  <div className="text-4xl text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300 mb-3">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white text-center tracking-wide">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center mt-20 text-[var(--gold)] italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        “ज्ञानं चक्षुः — Knowledge is the eye that sees beyond the unseen.”
      </motion.p>
    </section>
  );
}
