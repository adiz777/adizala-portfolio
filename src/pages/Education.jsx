import React from "react";

export default function Education(){
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold neon-text">Education</h2>

      <div className="grid gap-4">
        <div className="p-4 rounded-lg border border-[rgba(0,180,255,0.04)]">
          <h3 className="font-semibold">MSc Cybersecurity</h3>
          <p className="text-[var(--subtle)]">University of Hertfordshire — Jan 2024 - May 2025</p>
        </div>

        <div className="p-4 rounded-lg border border-[rgba(255,179,0,0.04)]">
          <h3 className="font-semibold">BCA — Computer Applications</h3>
          <p className="text-[var(--subtle)]">Bhavan's Shree H.J Doshi Information Technology Institute — Jun 2020 - May 2023</p>
        </div>
      </div>
    </section>
  );
}
