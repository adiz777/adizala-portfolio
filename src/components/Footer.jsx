import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="w-full mt-20 py-10 border-t border-cyan-500/20 bg-black/40 backdrop-blur-md text-gray-400 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-6 text-2xl text-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/adiz777"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/adityarajsinh-zala?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-400 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:adiz_14@proton.me"
            className="hover:text-fuchsia-400 transition-all"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Divider Glow Line */}
        <motion.div
          className="w-24 h-[2px] mx-auto bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-6"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1 }}
        />

        {/* Quote / Mantra */}
        <motion.p
          className="text-[var(--gold)] text-sm sm:text-base italic tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          “धर्मो रक्षति रक्षितः — Dharma protects those who protect it.”
        </motion.p>

        {/* Footer Bottom */}
        <motion.div
          className="mt-4 text-xs sm:text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} Adityarajsinh Zala — Major_ADI
        </motion.div>
      </div>
    </motion.footer>
  );
}
