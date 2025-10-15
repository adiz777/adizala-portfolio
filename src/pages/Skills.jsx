import { motion } from "framer-motion";

const skills = [
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)"] },
  { group: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
  { group: "Cybersecurity", items: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit"] },
  { group: "Cloud & Tools", items: ["Git", "GitHub", "Docker", "Cloudflare", "Vercel"] },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center px-6 py-12">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {skills.map((section, index) => (
          <motion.div
            key={index}
            className="border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md bg-white/5 shadow-lg hover:shadow-cyan-500/20 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-fuchsia-400">{section.group}</h3>
            <ul className="space-y-2">
              {section.items.map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-center justify-between text-gray-300 hover:text-cyan-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{skill}</span>
                  <motion.span
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
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
