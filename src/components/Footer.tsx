import { personal } from "../data/portfolio"
import type { Lang, Theme } from "../App"

const navLinks = {
  en: [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Services", "services"], ["Blog", "blog"], ["Contact", "contact"]],
  fr: [["À Propos", "about"], ["Compétences", "skills"], ["Projets", "projects"], ["Expérience", "experience"], ["Services", "services"], ["Blog", "blog"], ["Contact", "contact"]],
}

export default function Footer({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, background: isDark ? "rgba(8,9,13,0.95)" : "rgba(248,250,252,0.95)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 32px 32px" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "48px", marginBottom: "56px", flexWrap: "wrap" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "28px", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "12px" }}>
              AM
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.65, marginBottom: "20px", maxWidth: "240px" }}>
              {lang === "en" ? "Senior Software Engineer based in Paris. Building elegant software that scales." : "Ingénieur Logiciel Senior basé à Paris. Des logiciels élégants qui passent à l'échelle."}
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {[{ href: personal.github, icon: "🐙" }, { href: personal.linkedin, icon: "🔗" }, { href: `mailto:${personal.email}`, icon: "✉️" }].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: "34px", height: "34px", borderRadius: "8px", background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.background = "rgba(99,102,241,0.1)" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"; e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em", color: "#6366f1", marginBottom: "16px" }}>NAVIGATION</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              {navLinks[lang].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)}
                  style={{ background: "none", border: "none", textAlign: "left", fontSize: "13px", color: isDark ? "#64748b" : "#94a3b8", cursor: "pointer", padding: "4px 0", fontFamily: "Inter, sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
                  onMouseLeave={e => e.currentTarget.style.color = isDark ? "#64748b" : "#94a3b8"}
                >{label}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.15em", color: "#6366f1", marginBottom: "16px" }}>CONTACT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: personal.email, href: `mailto:${personal.email}` },
                { label: personal.location, href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ fontSize: "13px", color: isDark ? "#64748b" : "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#6366f1"}
                  onMouseLeave={e => e.currentTarget.style.color = isDark ? "#64748b" : "#94a3b8"}
                >{item.label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ paddingTop: "24px", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "12px", color: "#475569", fontFamily: "JetBrains Mono, monospace" }}>
            © 2026 Anna marone. {lang === "en" ? "All rights reserved." : "Tous droits réservés."}
          </span>
          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontSize: "12px", color: "#475569" }}>
              {lang === "en" ? "Built with React + Tailwind" : "Construit avec React + Tailwind"}
            </span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ fontSize: "12px", color: "#6366f1", background: "none", border: "none", cursor: "pointer", fontFamily: "JetBrains Mono, monospace" }}
            >↑ TOP</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
