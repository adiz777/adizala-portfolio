import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <section className="grid gap-8">
      <div className="bg-gradient-to-br from-[#05050a] to-[#0c0c12] rounded-2xl p-10 glow border border-[#0b4f65]">
        <h1 className="text-4xl md:text-6xl font-extrabold neon-text">Adityarajsinh Zala</h1>
        <p className="mt-4 text-[var(--subtle)] max-w-2xl">
          Tech‑savvy IT Support & Cybersecurity graduate building resilient systems and silent defenses.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <span className="px-4 py-2 rounded-md bg-[rgba(0,180,255,0.06)] text-[var(--neon)] text-sm glow">MSc Cybersecurity</span>
          <span className="px-4 py-2 rounded-md bg-[rgba(255,179,0,0.06)] text-[var(--gold)] text-sm">BCA</span>
          <Link to="/projects" className="ml-auto inline-block px-5 py-3 rounded-xl neon-text border border-[rgba(0,180,255,0.12)] hover:bg-[rgba(0,180,255,0.04)]">View Projects</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-[rgba(255,179,0,0.06)]">
          <h3 className="font-semibold gold-accent">Mantra</h3>
          <p className="mt-2 text-[var(--subtle)]">He who guards the unseen, walks unseen.</p>
        </div>

        <div className="p-6 rounded-xl border border-[rgba(0,180,255,0.06)]">
          <h3 className="font-semibold neon-text">Specialization</h3>
          <p className="mt-2 text-[var(--subtle)]">Reconnaissance scripting, network scanning, risk assessment.</p>
        </div>

        <div className="p-6 rounded-xl border border-[rgba(0,180,255,0.04)]">
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-2 text-[var(--subtle)]">adiuk7303@gmail.com · +44 7733 290385</p>
        </div>
      </div>
    </section>
  );
}
