import React from "react";

const projects = [
  {
    title: "Om",
    desc: "Minimalist reconnaissance script for Kali Linux (Nmap, Dnsrecon) with organized reports.",
    link: "https://github.com/adiz777/Om"
  }
];

export default function Projects(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold neon-text">Projects</h2>
      <div className="grid gap-4">
        {projects.map(p => (
          <div key={p.title} className="p-4 rounded-lg border border-[rgba(0,180,255,0.04)]">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-[var(--subtle)] mt-2">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm neon-text">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
