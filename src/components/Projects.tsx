import { useState } from "react"
import { useIntersection } from "../hooks/useIntersection"
import { projects } from "../data/portfolio"
import type { Lang, Theme } from "../App"

const filters = {
  en: [["all", "All"], ["fullstack", "Full-Stack"], ["frontend", "Frontend"]],
  fr: [["all", "Tout"], ["fullstack", "Full-Stack"], ["frontend", "Frontend"]],
}

export default function Projects({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const [filter, setFilter] = useState("all")
  const [expanded, setExpanded] = useState<string | null>(null)
  const [query, setQuery] = useState("")

  const visible = projects.filter(p => {
    const matchCat = filter === "all" || p.category === filter
    const matchQ = p.title.toLowerCase().includes(query.toLowerCase()) || p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
    return matchCat && matchQ
  })

  return (
    <section id="projects" style={{ background: isDark ? "rgba(13,16,32,0.4)" : "rgba(241,245,249,0.4)" }}>
      <div ref={ref} className="section-wrapper">
        <div style={{ marginBottom: "52px" }}>
          <span className="section-label">{lang === "en" ? "// featured projects" : "// projets récents"}</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a", marginBottom: "0" }}>
                {lang === "en" ? "Things I've" : "Ce que j'ai"}
                <span className="gradient-text"> {lang === "en" ? "shipped." : "livré."}</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {/* Search */}
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={lang === "en" ? "Search…" : "Chercher…"}
                style={{ padding: "7px 14px", borderRadius: "8px", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", color: isDark ? "#f1f5f9" : "#0f172a", fontSize: "13px", outline: "none", fontFamily: "Inter, sans-serif", width: "160px" }}
              />
            </div>
          </div>

          <div className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ display: "flex", gap: "8px", marginTop: "24px", flexWrap: "wrap" }}>
            {filters[lang].map(([val, label]) => (
              <button key={val} onClick={() => setFilter(val)}
                style={{ padding: "6px 16px", borderRadius: "100px", border: "1px solid", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", fontFamily: "Inter, sans-serif",
                  borderColor: filter === val ? "#6366f1" : (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"),
                  background: filter === val ? "rgba(99,102,241,0.12)" : "transparent",
                  color: filter === val ? "#6366f1" : (isDark ? "#94a3b8" : "#64748b"),
                }}>{label}</button>
            ))}
          </div>
        </div>

        <div className="grid-2">
          {visible.map((proj, i) => (
            <div key={proj.id} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ borderRadius: "20px", overflow: "hidden", transitionDelay: `${i * 100}ms` }}>
              {/* Screenshot */}
              <div style={{ position: "relative", height: "220px", overflow: "hidden", background: isDark ? "#0d1020" : "#e2e8f0" }}>
                <img src={proj.image} alt={proj.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(8,9,13,0.7))" }} />
                <div style={{ position: "absolute", bottom: "12px", left: "16px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {proj.technologies.slice(0, 4).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  {proj.technologies.length > 4 && <span className="tag">+{proj.technologies.length - 4}</span>}
                </div>
              </div>

              <div style={{ padding: "24px" }}>
                <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: isDark ? "#f1f5f9" : "#0f172a" }}>{proj.title}</h3>
                <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "16px" }}>{proj.description[lang]}</p>

                {expanded === proj.id && (
                  <div style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, paddingTop: "16px", marginBottom: "16px" }}>
                    <div style={{ marginBottom: "12px" }}>
                      <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#6366f1", marginBottom: "6px", letterSpacing: "0.1em" }}>FEATURES</div>
                      <ul style={{ paddingLeft: "16px", margin: 0 }}>
                        {proj.features[lang].map(f => <li key={f} style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "3px" }}>{f}</li>)}
                      </ul>
                    </div>
                    <div style={{ marginBottom: "8px" }}>
                      <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#f59e0b", marginBottom: "4px", letterSpacing: "0.1em" }}>CHALLENGE</div>
                      <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>{proj.challenges[lang]}</p>
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#10b981", marginBottom: "4px", letterSpacing: "0.1em" }}>LESSON</div>
                      <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>{proj.lessons[lang]}</p>
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <a href={proj.demo} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "7px 14px", fontSize: "12px", textDecoration: "none" }}>
                    {lang === "en" ? "Live Demo ↗" : "Démo ↗"}
                  </a>
                  <a href={proj.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: "7px 14px", fontSize: "12px", textDecoration: "none" }}>
                    {lang === "en" ? "GitHub" : "GitHub"}
                  </a>
                  <button onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
                    style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontSize: "12px", color: "#6366f1", fontWeight: 600, fontFamily: "Inter, sans-serif" }}
                  >
                    {expanded === proj.id ? (lang === "en" ? "Less ↑" : "Moins ↑") : (lang === "en" ? "Details ↓" : "Détails ↓")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
