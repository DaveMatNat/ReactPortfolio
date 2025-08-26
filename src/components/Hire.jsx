import { useState } from "react";
import ContactCard from "./ContactCard";


function Hire({CONTACTS}) {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACTS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // noop
    }
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const subject = `Website inquiry from ${name || "a visitor"}`;
    const bodyLines = [
      `Hi David,\n`,
      message || "(No message provided)",
      "\n\n—",
      name ? `${name}` : "",
      fromEmail ? ` (${fromEmail})` : "",
    ].filter(Boolean);
    const body = bodyLines.join("\n");

    const mailto = `mailto:${encodeURIComponent(CONTACTS.email)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="hire" className="px-8 py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <p className="tag rank rounded-full px-4 py-2 mx-auto mb-[2rem] w-fit">Let’s build something</p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font text-center">Hire me!</h2>
          <p className="text-slate-500 mt-3">
            Fast learner, builder at heart. Reach me on any channel or drop a note below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <ContactCard
            href={`mailto:${CONTACTS.email}`}
            label="Email"
            sublabel={CONTACTS.email}
            icon="✉️"
            external={false}
          />
          <button
            onClick={handleCopyEmail}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-4 shadow-sm hover:shadow-md transition-all"
            aria-live="polite"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="text-2xl">📋</span>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-left">
                  {copied ? "Copied!" : "Copy email"}
                </span>
                <span className="text-sm text-slate-500">{CONTACTS.email}</span>
              </div>
            </div>
            <span className="text-slate-400 group-hover:text-slate-600 transition-colors" aria-hidden>
              {copied ? "✔︎" : "⧉"}
            </span>
          </button>
          <ContactCard
            href={CONTACTS.linkedin}
            label="LinkedIn"
            sublabel="@david-m-nathanson"
            icon="💼"
          />
          <ContactCard
            href={CONTACTS.github}
            label="GitHub"
            sublabel="@DaveMatNat"
            icon="🐈‍⬛"
          />
          <ContactCard
            href={CONTACTS.resume}
            label="Résumé (PDF)"
            sublabel="View / Download"
            icon="📄"
            external={true}
          />
          {CONTACTS.calendly && (
            <ContactCard
              href={CONTACTS.calendly}
              label="Book a chat"
              sublabel="15–20 min intro call"
              icon="📅"
            />
          )}
        </div>

        {/* Email Box (no backend – opens your mail app) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Send a quick message</h3>
          <form onSubmit={handleMailto} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-slate-600 mb-1">
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alan Turing"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fromEmail" className="text-sm text-slate-600 mb-1">
                Your email
              </label>
              <input
                id="fromEmail"
                type="email"
                className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label htmlFor="message" className="text-sm text-slate-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role, team, or project…"
              />
            </div>
            <div className="sm:col-span-2 flex gap-3">
              <button
                type="submit"
                className="card-button-primary px-5 py-2 rounded-full text-lg"
                aria-label="Open your email client with this message"
              >
                Send via Email
              </button>
              {/* <a
                href={CONTACTS.resume}
                className="card-button-secondary px-5 py-2 rounded-full text-lg"
                target="_blank"
                rel="noreferrer"
              >
                View Résumé
              </a> */}
            </div>
          </form>
          <p className="text-xs text-slate-500 mt-3">
            This form opens your mail app using <code>mailto:</code>. Prefer a call? Use the Calendly link above.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hire;