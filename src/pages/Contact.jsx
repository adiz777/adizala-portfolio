import React from "react";

export default function Contact(){
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold neon-text">Contact</h2>

      <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4">
        <label className="block">
          <div className="text-sm text-[var(--subtle)]">Name</div>
          <input name="name" required className="mt-1 w-full rounded-md bg-[#06060a] border border-[rgba(255,255,255,0.04)] p-3" />
        </label>

        <label className="block">
          <div className="text-sm text-[var(--subtle)]">Email</div>
          <input type="email" name="_replyto" required className="mt-1 w-full rounded-md bg-[#06060a] border border-[rgba(255,255,255,0.04)] p-3" />
        </label>

        <label className="block">
          <div className="text-sm text-[var(--subtle)]">Message</div>
          <textarea name="message" rows="6" required className="mt-1 w-full rounded-md bg-[#06060a] border border-[rgba(255,255,255,0.04)] p-3"></textarea>
        </label>

        <input type="hidden" name="_subject" value="New contact from portfolio" />
        <button type="submit" className="self-start px-6 py-3 rounded-xl neon-text border border-[rgba(0,180,255,0.12)]">Send</button>
      </form>

      <div className="pt-6 text-[var(--subtle)]">
        <div>Email: adiuk7303@gmail.com</div>
        <div>Phone: +44 7733 290385</div>
      </div>
    </section>
  );
}
