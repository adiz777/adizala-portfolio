import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a15] to-[#07060d] flex flex-col items-center justify-center px-6 py-12 text-gray-100">
      
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>

      {/* Form Section */}
      {!sent ? (
        <motion.form
          action="https://formspree.io/f/mpwyklqb"
          method="POST"
          className="w-full max-w-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-lg shadow-lg space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={() => setSent(true)}
        >
          <motion.div
            className="flex flex-col"
            whileFocus={{ scale: 1.02 }}
          >
            <label className="text-cyan-300 mb-2 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="bg-transparent border border-cyan-500/30 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div className="flex flex-col">
            <label className="text-cyan-300 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="bg-transparent border border-cyan-500/30 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div className="flex flex-col">
            <label className="text-cyan-300 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="bg-transparent border border-cyan-500/30 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none"
              placeholder="Type your encrypted message..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="text-center mt-12 text-xl text-cyan-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>✅ Message sent successfully.</p>
          <p className="text-fuchsia-400 mt-2 italic">
            “Your signal has reached the void. Expect a response soon.”
          </p>
        </motion.div>
      )}

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
