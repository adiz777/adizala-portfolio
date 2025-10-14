import React from "react";

export default function About(){
  return (
    <section className="space-y-6">
      <div className="rounded-xl p-6 glow border border-[rgba(0,180,255,0.06)]">
        <h2 className="text-2xl font-bold neon-text">About</h2>
        <p className="mt-3 text-[var(--subtle)]">
          Proactive and skilled IT professional with a strong foundation in cybersecurity, technical support, and data protection.
          Adept at troubleshooting complex issues, ensuring system reliability, and delivering exceptional customer service. Driven by
          logic and grounded in dharma — seeking elegant, resilient solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-[rgba(255,179,0,0.04)]">
          <h3 className="font-semibold gold-accent">Education</h3>
          <p className="mt-2 text-[var(--subtle)]">MSc Cybersecurity — University of Hertfordshire</p>
          <p className="mt-1 text-[var(--subtle)]">BCA — Bhavan's H.J. Doshi IT Institute</p>
        </div>

        <div className="p-6 rounded-xl border border-[rgba(0,180,255,0.04)]">
          <h3 className="font-semibold">Profiles</h3>
          <p className="mt-2 text-[var(--subtle)]">GitHub: github.com/adiz777</p>
          <p className="mt-1 text-[var(--subtle)]">LinkedIn: linkedin.com/in/adityarajsinh-zala</p>
        </div>
      </div>
    </section>
  );
}
