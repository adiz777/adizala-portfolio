import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // 2.5 seconds boot animation
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-black/95 text-cyan-400 z-[9999] font-mono"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p
        className="text-lg sm:text-xl tracking-widest mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        INITIALIZING SYSTEM . . .
      </motion.p>
      <motion.div
        className="w-64 h-1 bg-cyan-800 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "16rem" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-600"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 0,
          }}
        />
      </motion.div>
      <motion.p
        className="mt-4 text-[var(--gold)] italic text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        “असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ।”
      </motion.p>
    </motion.div>
  );
}
