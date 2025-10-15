import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaShieldAlt } from "react-icons/fa";

export default function Education() {
  const timeline = [
    {
      title: "MSc in Cybersecurity",
      institution: "University in the United Kingdom",
      year: "2024 – 2025",
      details:
        "Focused on digital forensics, network defense, ethical hacking, and automation. Dissertation centered on automated reconnaissance and ethical vulnerability analysis.",
      icon: <FaShieldAlt className="text-3xl text-fuchsia-400" />,
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Bhavan's Shree H. J. Doshi Information Technology Institute, India",
      year: "2020 – 2023",
      details:
        "Built a strong foundation in computer systems, software development, and cybersecurity concepts. Developed early interest in network security and ethical hacking during undergrad.",
      icon: <FaGraduationCap className="text-3xl text-cyan-400" />,
    },
  ];

  const certifications = [
    {
      title: "CompTIA A+ (Pursuing)",
      issuer: "CompTIA",
      details:
        "Validates technical troubleshooting, networking, and system maintenance skills across multiple platforms.",
    },
    {
      title: "Ethical Hacking & Penetration Testing (Independent)",
      issuer: "Online / Self-Paced",
      details:
        "Hands-on practice with Kali Linux, Burp Suite, Nmap, and Wireshark — focusing on ethical operations, reconnaissance, and responsible disclosure.",
    },
    {
      title: "Linux Administration & Scripting",
      issuer: "Self-learned",
      details:
        "Mastered command-line operations and Bash scripting for automation. Foundation for projects like OM and Agni.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] text-gray-100 flex flex-col items-center px-6 py-20">
      
      {/* Page Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education & Certifications
      </motion.h1>

      {/* Education Timeline */}
      <div className="max-w-4xl w-full space-y-12">
        {timeline.map((edu, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/5 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="flex-shrink-0">{edu.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-fuchsia-400">{edu.title}</h3>
              <p className="text-cyan-300 mt-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm mt-1">{edu.year}</p>
              <p className="text-gray-300 mt-3">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        className="max-w-4xl w-full mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="border border-fuchsia-400/20 rounded-2xl p-6 bg-white/5 hover:shadow-lg hover:shadow-fuchsia-500/20 transition backdrop-blur-md"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="text-fuchsia-400 text-2xl" />
                <h3 className="text-xl font-semibold text-cyan-300">{cert.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-300">{cert.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mantra */}
      <motion.div
        className="mt-20 text-xl text-fuchsia-300 tracking-wide"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        तमसो मा ज्योतिर्गमय
      </motion.div>
    </div>
  );
}
