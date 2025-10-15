import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-gray-200 flex flex-col">
      {/* 🔹 Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg border-b border-cyan-400/20 shadow-md z-50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 select-none">
            <motion.span
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500"
              whileHover={{ scale: 1.05 }}
            >
              Adizala
            </motion.span>
            <span className="text-xs text-[var(--gold)] tracking-wide">
              • cyber-dharma
            </span>
          </Link>

          <div className="flex gap-6 text-sm font-medium">
            {[
              { name: "About", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Skills", path: "/skills" },
              { name: "Education", path: "/education" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="hover:text-cyan-300 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* 🔹 Page Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
