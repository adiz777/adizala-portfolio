import React from "react";

const skills = [
  { name: "Risk Assessment", level: 85 },
  { name: "Network Security", level: 78 },
  { name: "IT Support", level: 92 },
  { name: "Reconnaissance Scripting", level: 80 },
];

export default function Skills(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold neon-text">Skills</h2>
      <div className="grid gap-4">
        {skills.map(s => (
          <div key={s.name} className="p-4 rounded-lg border border-[rgba(0,180,255,0.04)]">
            <div className="flex justify-between">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-[var(--subtle)]">{s.level}%</div>
            </div>
            <div className="mt-2 h-2 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
              <div style={{width: s.level+'%'}} className="h-full bg-[var(--neon)]"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
