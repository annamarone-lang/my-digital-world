import { useIntersection } from "../hooks/useIntersection"
import { education } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Education({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()

  return (
    <section id="education" style={{ background: isDark ? "rgba(13,16,32,0.4)" : "rgba(241,245,249,0.4)" }}>
      <div ref={ref} className="section-wrapper">
        <span className="section-label">{lang === "en" ? "// education" : "// éducation"}</span>
        <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a", marginBottom: "48px" }}>
          {lang === "en" ? "Academic" : "Formation"}
          <span className="gradient-text"> {lang === "en" ? "foundation." : "académique."}</span>
        </h2>

        <div className="grid-2">
          {education.map((edu, i) => (
            <div key={i} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ padding: "32px", borderRadius: "20px", transitionDelay: `${i * 150}ms`, position: "relative", overflow: "hidden" }}>
              {/* Decorative */}
              <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "100px", height: "100px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent)" }} />
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>🎓</div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#6366f1", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "10px" }}>{edu.period}</div>
              <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "18px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "6px" }}>{edu.degree[lang]}</h3>
              <div style={{ fontSize: "14px", color: "#94a3b8", fontWeight: 600, marginBottom: "12px" }}>{edu.school}</div>
              <p style={{ fontSize: "13px", color: isDark ? "#64748b" : "#94a3b8", lineHeight: 1.6, margin: 0 }}>{edu.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
