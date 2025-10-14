import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <nav className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-xl font-semibold neon-text">Adizala</span>
          <span className="text-sm text-[var(--gold)]">• cyber-dharma</span>
        </Link>
        <div className="space-x-4 text-sm text-[var(--subtle)]">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/projects" className="hover:text-white">Projects</Link>
          <Link to="/skills" className="hover:text-white">Skills</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-[var(--subtle)]">
        <div>© {new Date().getFullYear()} Adityarajsinh Zala — Adizala</div>
        <div className="mt-2">“He who guards the unseen, walks unseen.”</div>
      </footer>
    </div>
  );
}
