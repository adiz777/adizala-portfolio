import React from "react";

const certs = [
  { name: "CompTIA A+ (Core 1 & 2)", status: "In Progress" },
  { name: "CompTIA Network+ N10-008", status: "In Progress" },
  { name: "CompTIA Security+ SY0-701", status: "In Progress" },
  { name: "Microsoft Azure Administrator (AZ-104)", status: "In Progress" },
];

export default function Certifications(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold neon-text">Certifications</h2>
      <div className="grid gap-3">
        {certs.map(c => (
          <div key={c.name} className="p-3 rounded-lg border border-[rgba(0,180,255,0.04)] flex justify-between">
            <div>{c.name}</div>
            <div className="text-sm text-[var(--subtle)]">{c.status}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
