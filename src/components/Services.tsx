import { useIntersection } from "../hooks/useIntersection"
import { services } from "../data/portfolio"
import type { Lang, Theme } from "../App"

export default function Services({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()

  return (
    <section id="services" style={{ background: isDark ? "rgba(13,16,32,0.5)" : "rgba(241,245,249,0.5)" }}>
      <div ref={ref} className="section-wrapper">
        <div style={{ textAlign: "center", maxWidth: "660px", margin: "0 auto 64px" }}>
          <span className="section-label">{lang === "en" ? "// what i offer" : "// ce que j'offre"}</span>
          <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
            {lang === "en" ? "Services that" : "Services qui"}
            <span className="gradient-text"> {lang === "en" ? "deliver results." : "livrent des résultats."}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            {lang === "en" ? "From a quick MVP to a production-grade system — I cover the full development lifecycle." : "D'un MVP rapide à un système de production — je couvre le cycle complet."}
          </p>
        </div>

        <div className="grid-3">
          {services.map((svc, i) => (
            <div key={i} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ padding: "32px", borderRadius: "20px", transitionDelay: `${i * 80}ms`, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "120px", height: "120px", borderRadius: "50%", background: `radial-gradient(circle, ${svc.color}12, transparent)`, pointerEvents: "none" }} />
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: `${svc.color}18`, border: `1px solid ${svc.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px", transition: "all 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.background = `${svc.color}28`; e.currentTarget.style.boxShadow = `0 0 24px ${svc.color}25` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${svc.color}18`; e.currentTarget.style.boxShadow = "none" }}
              >
                {svc.icon}
              </div>
              <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "10px" }}>{svc.title[lang]}</h3>
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.65, margin: 0 }}>{svc.desc[lang]}</p>
              <div style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: 600, color: svc.color, cursor: "pointer" }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {lang === "en" ? "Get in touch →" : "Contactez-moi →"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
