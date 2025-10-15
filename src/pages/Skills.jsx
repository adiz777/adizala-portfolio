import { motion } from "framer-motion";
import {
  SiKalilinux,
  SiLinux,
  SiPython,
  SiWireshark,
  SiGithub,
  SiDocker,
  SiCloudflare,
  FaWindows,
  SiBurpsuite
} from "react-icons/si";
import {
  FaShieldAlt,
  FaSkullCrossbones,
  FaNetworkWired,
  FaLock
} from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";

const skillCategories = [
  {
    title: "Offensive Operations",
    icon: <FaSkullCrossbones className="text-fuchsia-400 text-3xl" />,
    items: [
      { name: "Kali Linux", icon: <SiKalilinux className="text-2xl" /> },
      { name: "SQLMap", icon: <AiOutlineConsoleSql className="text-2xl" /> },
      { name: "Burp Suite", icon: <SiBurpsuite className="text-2xl" /> },
      { name: "Metasploit Framework", icon: <FaNetworkWired className="text-2xl" /> },
    ],
  },
  {
    title: "Defensive Security",
    icon: <FaShieldAlt className="text-cyan-400 text-3xl" />,
    items: [
      { name: "Network Defense", icon: <FaLock className="text-2xl" /> },
      { name: "Incident Response", icon: <FaWindows className="text-2xl" /> },
      { name: "Vulnerability Management", icon: <SiDocker className="text-2xl" /> },
      { name: "Cloudflare Security", icon: <SiCloudflare className="text-2xl" /> },
    ],
  },
  {
    title: "Analysis & Forensics",
    icon: <FaNetworkWired className="text-fuchsia-400 text-3xl" />,
    items: [
      { name: "Wireshark", icon: <SiWireshark className="text-2xl" /> },
      { name: "Python for Analysis", icon: <SiPython className="text-2xl" /> },
      { name: "Packet Analysis", icon: <FaNetworkWired className="text-2xl" /> },
      { name: "Threat Intelligence", icon: <SiGithub className="text-2xl" /> },
    ],
  },
  {
    title: "Systems & OS",
    icon: <SiLinux className="text-cyan-400 text-3xl" />,
    items: [
      { name: "Linux Administration", icon: <SiLinux className="text-2xl" /> },
      { name: "Windows Security", icon: <FaWindows className="text-2xl" /> },
      { name: "Server Hardening", icon: <FaShieldAlt className="text-2xl" /> },
      { name: "Docker Containers", icon: <SiDocker className="text-2xl" /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Cybersecurity Skills
      </motion.h1>

      {/* Skill Sections */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-cyan-500/20 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-2xl font-semibold text-fuchsia-400">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center justify-between text-gray-300 hover:text-cyan-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <motion.span
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.3 }}
                  ></motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

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
