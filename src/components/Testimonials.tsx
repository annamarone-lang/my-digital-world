import { useState } from "react"
import { useIntersection } from "../hooks/useIntersection"
import { testimonials } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Testimonials({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  return (
    <section id="testimonials">
      <div ref={ref} className="section-wrapper">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 64px" }}>
          <span className="section-label">{lang === "en" ? "// what people say" : "// ce que les gens disent"}</span>
          <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
            {lang === "en" ? "Trusted by" : "Approuvé par"}
            <span className="gradient-text"> {lang === "en" ? "great teams." : "de super équipes."}</span>
          </h2>
        </div>

        <div className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "48px", borderRadius: "24px", position: "relative", textAlign: "center" }}>
            {/* Quote mark */}
            <div style={{ position: "absolute", top: "24px", left: "32px", fontSize: "80px", lineHeight: 1, color: isDark ? "rgba(99,102,241,0.15)" : "rgba(99,102,241,0.1)", fontFamily: "Georgia, serif", pointerEvents: "none" }}>"</div>

            {/* Stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "24px" }}>
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} style={{ color: "#f59e0b", fontSize: "18px" }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "18px", lineHeight: 1.7, color: isDark ? "#f1f5f9" : "#0f172a", fontWeight: 500, marginBottom: "32px", fontStyle: "italic", position: "relative", zIndex: 1 }}>
              "{t.text[lang]}"
            </blockquote>

            {/* Avatar + name */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "linear-gradient(135deg, #6366f1, #22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#fff", fontFamily: "Instrument Sans, sans-serif" }}>{t.avatar}</span>
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, fontSize: "14px", color: isDark ? "#f1f5f9" : "#0f172a", fontFamily: "'Instrument Sans', sans-serif" }}>{t.name}</div>
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
            <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
              style={{ width: "36px", height: "36px", borderRadius: "10px", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, background: "transparent", cursor: "pointer", fontSize: "16px", color: isDark ? "#94a3b8" : "#64748b", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#6366f1" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b" }}
            >←</button>
            <div style={{ display: "flex", gap: "6px" }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  style={{ width: i === idx ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === idx ? "#6366f1" : (isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"), border: "none", cursor: "pointer", transition: "all 0.3s ease", padding: 0 }}
                />
              ))}
            </div>
            <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
              style={{ width: "36px", height: "36px", borderRadius: "10px", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, background: "transparent", cursor: "pointer", fontSize: "16px", color: isDark ? "#94a3b8" : "#64748b", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#6366f1" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b" }}
            >→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
