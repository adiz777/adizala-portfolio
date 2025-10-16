import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const timeline = [
    {
      title: "MSc Cybersecurity",
      institution: "University in the United Kingdom",
      duration: "2024 – 2025",
      details:
        "Advanced studies in Cybersecurity, focusing on threat intelligence, penetration testing, and ethical hacking methodologies.",
      icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
    },
    {
      title: "BCA (Bachelor of Computer Applications)",
      institution: "Bhavan's Shree H. J. Doshi Information Technology Institute",
      duration: "2020 – 2023",
      details:
        "Built a strong foundation in computer science, programming, and cybersecurity fundamentals while exploring ethical hacking and automation.",
      icon: <FaBookOpen className="text-fuchsia-400 text-3xl" />,
    },
  ];

  const certifications = [
    {
      name: "CompTIA A+ (Core 1 & 2) — Pursuing",
      description:
        "Vendor-neutral IT certification covering troubleshooting, hardware, networking, and security best practices.",
      icon: <FaCertificate className="text-yellow-400 text-3xl" />,
    },
    {
      name: "Ethical Hacking & Penetration Testing (Self-Learning)",
      description:
        "Hands-on exploration of reconnaissance, exploitation, and defensive techniques in controlled environments.",
      icon: <FaCertificate className="text-yellow-400 text-3xl" />,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-6 py-10">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education & Certifications
      </motion.h1>

      {/* Education Timeline */}
      <div className="max-w-5xl w-full">
        {timeline.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative mb-10 border-l-2 border-cyan-500 pl-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="absolute -left-5 top-1 bg-[#111]/80 border border-cyan-500/50 rounded-full p-3">
              {edu.icon}
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">
              {edu.title}
            </h2>
            <h3 className="text-sm sm:text-base text-gray-400 italic">
              {edu.institution}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-2">{edu.duration}</p>
            <p className="text-sm sm:text-base text-gray-300">{edu.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="max-w-5xl w-full mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-fuchsia-400 mb-6 text-center">
          Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-[#111]/60 border border-fuchsia-500/30 rounded-2xl p-6 shadow-lg shadow-fuchsia-500/10 hover:shadow-fuchsia-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-3">
                {cert.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-fuchsia-300">
                  {cert.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-400">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mantra */}
      <motion.p
        className="mt-12 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        “धर्मो रक्षति रक्षितः — Dharma protects those who protect it.”
      </motion.p>
    </section>
  );
}
