import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-gray-200 px-6 py-10">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* Form Container */}
      <motion.form
        action="https://formspree.io/f/mpwyklqb"
        method="POST"
        className="w-full max-w-lg bg-[#0f0f0f]/70 border border-cyan-500/30 rounded-2xl shadow-lg shadow-cyan-500/10 p-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm mb-1 text-cyan-300">
            Name
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-cyan-400" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-[#111]/80 border border-cyan-500/40 text-gray-100 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm mb-1 text-cyan-300">
            Email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-cyan-400" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full bg-[#111]/80 border border-cyan-500/40 text-gray-100 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm mb-1 text-cyan-300">
            Message
          </label>
          <div className="relative">
            <FaCommentDots className="absolute top-3 left-3 text-cyan-400" />
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              rows="5"
              required
              className="w-full bg-[#111]/80 border border-cyan-500/40 text-gray-100 rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f0ff" }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-2 rounded-lg font-semibold text-white shadow-md hover:shadow-cyan-400/40 transition-all"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-10 text-center text-sm text-gray-400">
        <p>or reach out directly —</p>
        <p className="mt-1 text-cyan-400 font-mono">
          adiz_14@proton.me
        </p>
      </div>

      {/* Mantra */}
      <motion.p
        className="mt-12 text-[var(--gold)] italic text-sm sm:text-base text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        “सत्यं वद धर्मं चर — Speak truth, walk the path of Dharma.”
      </motion.p>
    </section>
  );
}
