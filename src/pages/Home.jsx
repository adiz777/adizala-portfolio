import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-center text-gray-100 bg-gradient-to-b from-[#04050a] via-[#0a0a1a] to-[#07060d]">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ffe0_0%,_transparent_70%)] opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Adityarajsinh Zala
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-cyan-200/80 max-w-2xl px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Cybersecurity Engineer | Digital Guardian | Explorer of the Dharma in Data
        </motion.p>

        <motion.div
          className="text-xl md:text-2xl font-sans text-fuchsia-300 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          तमसो मा ज्योतिर्गमय
        </motion.div>
      </div>

      {/* Subtle glowing footer */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        Om Shanti 🕉️
      </motion.div>
    </div>
  );
}
