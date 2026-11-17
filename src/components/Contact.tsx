import { useState } from "react"
import { useIntersection } from "../hooks/useIntersection"
import { personal } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Contact({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", subject: "", message: "" })
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
    color: isDark ? "#f1f5f9" : "#0f172a",
    fontSize: "14px",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    transition: "border-color 0.2s ease",
  }

  const contacts = [
    { icon: "✉️", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/anna-marone-667b6b2bb", href: personal.linkedin },
    { icon: "🐙", label: "GitHub", value: "github.com/ANNAMARONE", href: personal.github },
    { icon: "💬", label: "WhatsApp", value: personal.whatsapp, href: `https://wa.me/${personal.whatsapp.replace(/\D/g, "")}` },
  ]

  return (
    <section id="contact">
      <div ref={ref} className="section-wrapper">
        <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 64px" }}>
          <span className="section-label">{lang === "en" ? "// get in touch" : "// contact"}</span>
          <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
            {lang === "en" ? "Let's build something" : "Construisons quelque chose"}
            <span className="gradient-text"> {lang === "en" ? "great together." : " d'exceptionnel."}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {lang === "en" ? "Have a project in mind or just want to chat about engineering? I'm one message away." : "Vous avez un projet ou souhaitez simplement discuter ? Je suis à un message."}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "40px", alignItems: "start" }}>
          {/* Contact info */}
          <div className={`reveal ${isVisible ? "visible" : ""} delay-1`}>
            <div className="glass-card" style={{ padding: "32px", borderRadius: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#10b981" }}>
                  {lang === "en" ? "Available for new projects" : "Disponible pour de nouveaux projets"}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {contacts.map(c => (
                  <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 16px", borderRadius: "12px", background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, textDecoration: "none", transition: "all 0.2s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; e.currentTarget.style.background = isDark ? "rgba(99,102,241,0.06)" : "rgba(99,102,241,0.04)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"; e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)" }}
                  >
                    <span style={{ fontSize: "20px", width: "28px", textAlign: "center" }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: "11px", color: "#64748b", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em", marginBottom: "2px" }}>{c.label.toUpperCase()}</div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: isDark ? "#94a3b8" : "#475569" }}>{c.value}</div>
                    </div>
                    <span style={{ marginLeft: "auto", color: "#6366f1", fontSize: "14px" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`reveal ${isVisible ? "visible" : ""} delay-2`}>
            <div className="glass-card" style={{ padding: "36px", borderRadius: "20px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                  <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "20px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "8px" }}>
                    {lang === "en" ? "Message sent!" : "Message envoyé !"}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                    {lang === "en" ? "I'll get back to you within 24 hours." : "Je vous répondrai dans les 24 heures."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: isDark ? "#64748b" : "#94a3b8", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                        {lang === "en" ? "NAME" : "NOM"}
                      </label>
                      <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder={lang === "en" ? "Your name" : "Votre nom"} style={inputStyle}
                        onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.4)"}
                        onBlur={e => e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "12px", fontWeight: 600, color: isDark ? "#64748b" : "#94a3b8", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>EMAIL</label>
                      <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="hello@you.com" style={inputStyle}
                        onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.4)"}
                        onBlur={e => e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: isDark ? "#64748b" : "#94a3b8", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                      {lang === "en" ? "SUBJECT" : "SUJET"}
                    </label>
                    <input required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} placeholder={lang === "en" ? "Project inquiry, collaboration…" : "Demande de projet, collaboration…"} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.4)"}
                      onBlur={e => e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: isDark ? "#64748b" : "#94a3b8", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>MESSAGE</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder={lang === "en" ? "Tell me about your project…" : "Parlez-moi de votre projet…"} style={{ ...inputStyle, resize: "vertical" as const, lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = "rgba(99,102,241,0.4)"}
                      onBlur={e => e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "14px" }}>
                    {lang === "en" ? "Send Message →" : "Envoyer le Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
