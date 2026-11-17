import { useIntersection } from "../hooks/useIntersection"
import { certifications } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Certifications({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()

  return (
    <section id="certifications">
      <div ref={ref} className="section-wrapper">
        <span className="section-label">{lang === "en" ? "// certifications" : "// certifications"}</span>
        <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a", marginBottom: "16px" }}>
          {lang === "en" ? "Verified" : "Certifications"}
          <span className="gradient-text"> {lang === "en" ? "expertise." : " vérifiées."}</span>
        </h2>
        <p className="section-subtitle">{lang === "en" ? "Industry certifications that validate real-world skills." : "Des certifications qui valident des compétences concrètes."}</p>

        <div className="grid-3">
          {certifications.map((cert, i) => (
            <div key={i} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ padding: "24px", borderRadius: "18px", transitionDelay: `${i * 80}ms`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "80px", height: "80px", background: `radial-gradient(circle at top right, ${cert.color}15, transparent)` }} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div style={{ fontSize: "32px", flexShrink: 0 }}>{cert.badge}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "14px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "4px", lineHeight: 1.3 }}>{cert.name}</h3>
                  <div style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "10px" }}>{cert.issuer}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: cert.color }}>{cert.date}</span>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} title="Verified" />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "16px", height: "2px", borderRadius: "2px", background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: isVisible ? "100%" : "0%", background: `linear-gradient(90deg, ${cert.color}, ${cert.color}80)`, transition: `width 1s ease ${i * 100}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
