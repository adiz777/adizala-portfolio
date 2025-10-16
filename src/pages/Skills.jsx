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
} from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { IoIosAnalytics } from "react-icons/io";
import { BiGitBranch } from "react-icons/bi";
import { RiShieldStarLine } from "react-icons/ri";

const allSkills = [
  { name: "Kali Linux", icon: <SiKalilinux /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Burp Suite", icon: <SiBurpsuite /> },
  { name: "SQLMap", icon: <AiOutlineConsoleSql /> },
  { name: "Network Security", icon: <FaShieldAlt /> },
  { name: "Encryption", icon: <FaLock /> },
  { name: "Threat Detection", icon: <RiShieldStarLine /> },
  { name: "System Hardening", icon: <MdSecurity /> },
  { name: "Wireshark", icon: <SiWireshark /> },
  { name: "Network Mapping", icon: <FaNetworkWired /> },
  { name: "Analytics", icon: <IoIosAnalytics /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "Windows", icon: <FaWindows /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Cloudflare", icon: <SiCloudflare /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Git Branching", icon: <BiGitBranch /> },
];

const categories = [
  {
    title: "Offensive Security",
    color: "from-cyan-400 to-fuchsia-500",
    desc: "Penetration testing, reconnaissance, and ethical exploitation to uncover system weaknesses before adversaries do.",
  },
  {
    title: "Defensive Security",
    color: "from-fuchsia-500 to-yellow-400",
    desc: "Building resilient systems through firewalls, encryption, and real-time threat monitoring — the dharmic shield of cyberspace.",
  },
  {
    title: "Networking & Analysis",
    color: "from-blue-400 to-cyan-400",
    desc: "Monitoring, mapping, and analyzing traffic flows — understanding the invisible threads that connect the digital realm.",
  },
  {
    title: "Platforms & Tools",
    color: "from-amber-400 to-fuchsia-400",
    desc: "Mastering tools, operating systems, and environments that empower digital warriors in both attack and defense.",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen text-gray-200 py-16 px-4 sm:px-6 md:px-10">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cyber Arsenal
      </motion.h1>

      {/* 🔹 Full Skills Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-6 sm:gap-8 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {allSkills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900/80 to-black/70 border border-cyan-400/10 rounded-2xl py-6 px-4 shadow-md hover:shadow-cyan-400/30 transition-all group cursor-pointer"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 group-hover:text-fuchsia-400 transition-colors duration-300 mb-2">
              {skill.icon}
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white text-center tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 Category Panels */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.2 }}
            className="bg-black/40 border border-cyan-400/20 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-400/30 transition-all"
          >
            <h2
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}
            >
              {cat.title}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {cat.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-center mt-20 text-[var(--gold)] italic text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        “ज्ञानं चक्षुः — Knowledge is the eye that sees beyond the unseen.”
      </motion.p>
    </section>
  );
}
