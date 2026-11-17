import { useIntersection } from "../hooks/useIntersection"
import { experiences } from "../data/portfolio"
import type { Lang, Theme } from "../App"

const typeColors = { work: "#6366f1", education: "#22d3ee", project: "#10b981" }
const typeLabels = { en: { work: "Work", education: "Education", project: "Project" }, fr: { work: "Travail", education: "Éducation", project: "Projet" } }

export default function Experience({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()

  return (
    <section id="experience">
      <div ref={ref} className="section-wrapper">
        <span className="section-label">{lang === "en" ? "// work history" : "// historique professionnel"}</span>
        <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a", marginBottom: "16px" }}>
          {lang === "en" ? "Where I've" : "Où j'ai"}
          <span className="gradient-text"> {lang === "en" ? "contributed." : "contribué."}</span>
        </h2>
        <p className="section-subtitle">{lang === "en" ? "A timeline of the roles and projects that shaped my engineering craft." : "Une chronologie des rôles et projets qui ont façonné mon savoir-faire."}</p>

        <div style={{ position: "relative", paddingLeft: "40px" }}>
          <div style={{ position: "absolute", left: "15px", top: 0, bottom: 0, width: "2px", background: isDark ? "linear-gradient(180deg, #6366f1, #22d3ee, rgba(99,102,241,0.1))" : "linear-gradient(180deg, #6366f1, #22d3ee, rgba(99,102,241,0.2))" }} />

          {experiences.map((exp, i) => {
            const color = typeColors[exp.type]
            return (
              <div key={exp.id} className={`reveal ${isVisible ? "visible" : ""}`} style={{ marginBottom: "40px", transitionDelay: `${i * 120}ms`, position: "relative" }}>
                {/* Timeline dot */}
                <div style={{ position: "absolute", left: "-33px", top: "20px", width: "18px", height: "18px", borderRadius: "50%", background: `${color}20`, border: `2px solid ${color}`, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: color }} />
                </div>

                <div className="glass-card" style={{ padding: "28px", borderRadius: "18px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <div>
                      <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "18px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "4px" }}>
                        {exp.role[lang]}
                      </h3>
                      <div style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 500 }}>{exp.company}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "12px", color: isDark ? "#64748b" : "#94a3b8" }}>{exp.period}</span>
                      <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", padding: "2px 8px", borderRadius: "4px", background: `${color}18`, color, fontFamily: "JetBrains Mono, monospace", border: `1px solid ${color}30` }}>
                        {typeLabels[lang][exp.type].toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "16px" }}>{exp.description[lang]}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.technologies.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
