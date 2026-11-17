import { useState } from "react"
import { useIntersection } from "../hooks/useIntersection"
import { skillCategories } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Skills({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const [active, setActive] = useState(0)

  return (
    <section id="skills">
      <div ref={ref} className="section-wrapper">
        <div style={{ maxWidth: "700px", marginBottom: "60px" }}>
          <span className="section-label">{lang === "en" ? "// skills & technologies" : "// compétences & technologies"}</span>
          <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
            {lang === "en" ? "My tech" : "Ma stack"}
            <span className="gradient-text"> {lang === "en" ? "arsenal." : "technique."}</span>
          </h2>
          <p className="section-subtitle">{lang === "en" ? "Technologies I use to turn ideas into products." : "Les technologies que j'utilise pour transformer des idées en produits."}</p>
        </div>

        {/* Category tabs */}
        <div className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{ padding: "7px 16px", borderRadius: "100px", border: "1px solid", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", fontFamily: "Inter, sans-serif",
                borderColor: active === i ? cat.color : (isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"),
                background: active === i ? `${cat.color}18` : "transparent",
                color: active === i ? cat.color : (isDark ? "#94a3b8" : "#64748b"),
              }}
            >
              {cat.name[lang]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "14px" }}>
          {skillCategories[active].skills.map((skill, i) => (
            <div
              key={skill}
              className={`glass-card reveal ${isVisible ? "visible" : ""}`}
              style={{ padding: "20px 16px", borderRadius: "14px", textAlign: "center", transitionDelay: `${i * 50}ms`, cursor: "default" }}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${skillCategories[active].color}18`, border: `1px solid ${skillCategories[active].color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", boxShadow: `0 0 20px ${skillCategories[active].color}15` }}>
                <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: "JetBrains Mono, monospace", color: skillCategories[active].color }}>
                  {skill.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: isDark ? "#f1f5f9" : "#0f172a", fontFamily: "'Instrument Sans', sans-serif" }}>{skill}</span>
            </div>
          ))}
        </div>

        {/* All skills flat (all categories, smaller) */}
        <div className={`reveal ${isVisible ? "visible" : ""} delay-3`} style={{ marginTop: "48px", padding: "28px", borderRadius: "16px", background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}` }}>
          <div style={{ fontSize: "11px", fontFamily: "JetBrains Mono, monospace", color: "#6366f1", marginBottom: "16px", letterSpacing: "0.15em" }}>ALL TECHNOLOGIES</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skillCategories.flatMap(c => c.skills).map(skill => (
              <span key={skill} style={{ padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontFamily: "JetBrains Mono, monospace", fontWeight: 500, background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", color: isDark ? "#94a3b8" : "#64748b", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`, transition: "all 0.2s ease", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#6366f1"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)" }}
                onMouseLeave={e => { e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b"; e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)" }}
              >{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
