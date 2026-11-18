import { useState, useEffect } from "react"
import { personal, stats } from "../data/portfolio"
import { useIntersection, useCounter } from "../hooks/useIntersection"
import type { Lang, Theme } from "../App"
import cvFile from "../public/cv.pdf"
import photo from "../public/photo.png"
function StatCard({ value, suffix, label, isVisible, delay }: { value: number; suffix: string; label: string; isVisible: boolean; delay: number }) {
  const count = useCounter(value, isVisible)
  return (
    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "36px", fontWeight: 700, lineHeight: 1, background: "linear-gradient(135deg, #6366f1, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px", fontWeight: 500 }}>{label}</div>
    </div>
  )
}
export function downloadFile(url: string, fileName: string) {
  const a = document.createElement("a")
  a.href = url
  a.download = fileName
  a.rel = "noopener"
  document.body.appendChild(a)
  a.click()
  a.remove()
}
const TITLES_EN = ["junior Software Engineer", "Full-Stack Developer"]
const TITLES_FR = ["Ingénieur Logiciel junior", "Développeur Full-Stack"]

export default function Hero({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)
  const titles = lang === "en" ? TITLES_EN : TITLES_FR
  const full = titles[titleIdx]
  const size = "min(340px, 80vw)"
  useEffect(() => {
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 50)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28)
        return () => clearTimeout(t)
      } else {
        setTitleIdx(i => (i + 1) % titles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, full, titles.length])

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Animated gradient orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)", top: "-200px", right: "-150px", animation: "float 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 65%)", bottom: "-100px", left: "-100px", animation: "floatSlow 12s ease-in-out infinite" }} />
        <div style={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 65%)", top: "40%", left: "35%", animation: "float 14s ease-in-out infinite reverse" }} />
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      </div>

      <div ref={ref} style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px", width: "100%", paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "60px", alignItems: "center" }}>
          {/* Left: Text */}
          <div>
            {/* Available badge */}
            <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "100px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", marginBottom: "28px" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", display: "inline-block", boxShadow: "0 0 0 0 rgba(16,185,129,0.4)", animation: "pulseRing 2s ease infinite" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#10b981", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.05em" }}>
                {lang === "en" ? "AVAILABLE FOR WORK" : "DISPONIBLE"}
              </span>
            </div>

            {/* Name */}
            <h1 className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "16px", color: isDark ? "#f8fafc" : "#0f172a" }}>
              {personal.name}
            </h1>

            {/* Typed title */}
            <div className={`reveal ${isVisible ? "visible" : ""} delay-2`} style={{ height: "40px", marginBottom: "24px", display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 600, color: "#6366f1" }}>
                {displayed}
                <span style={{ display: "inline-block", width: "2px", height: "1em", background: "#6366f1", marginLeft: "2px", verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
              </span>
            </div>

            {/* Bio */}
            <p className={`reveal ${isVisible ? "visible" : ""} delay-3`} style={{ fontSize: "17px", lineHeight: 1.75, color: isDark ? "#94a3b8" : "#64748b", maxWidth: "560px", marginBottom: "40px" }}>
              {personal.bio[lang]}
            </p>

            {/* CTAs */}
            <div className={`reveal ${isVisible ? "visible" : ""} delay-4`} style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
              <button className="btn-primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                {lang === "en" ? "View My Work →" : "Voir mes Projets →"}
              </button>
              <a
                href={cvFile}
                download={lang === "en" ? "CV-Resume.pdf" : "CV.pdf"}
                className="btn-outline"
                style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
              >
                ↓ {lang === "en" ? "Download CV" : "Télécharger le CV"}
              </a>
            </div>

            {/* Socials */}
            <div className={`reveal ${isVisible ? "visible" : ""} delay-5`} style={{ display: "flex", gap: "12px" }}>
              {[
                { href: personal.github, label: "GitHub", icon: "🐙" },
                { href: personal.linkedin, label: "LinkedIn", icon: "🔗" },
                { href: `mailto:${personal.email}`, label: "Email", icon: "✉️" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", borderRadius: "10px", background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`, color: isDark ? "#94a3b8" : "#64748b", fontSize: "13px", fontWeight: 500, textDecoration: "none", transition: "all 0.2s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; e.currentTarget.style.color = "#6366f1" }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"; e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b" }}
                >
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className={`reveal ${isVisible ? "visible" : ""} delay-3`} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ position: "relative", width: size, height: size }}>
              {/* Pulse rings */}
              <div style={{ position: "absolute", inset: "-24px", borderRadius: "50%", border: "1px solid rgba(99,102,241,0.2)", animation: "pulseRing 3s ease infinite" }} />
              <div style={{ position: "absolute", inset: "-48px", borderRadius: "50%", border: "1px solid rgba(99,102,241,0.1)", animation: "pulseRing 3s ease infinite 1s" }} />

              {/* Avatar */}
              <div style={{ position: "relative", overflow: "hidden", width: size, height: size, borderRadius: "50%", background: "linear-gradient(135deg, #1e1b4b, #312e81, #1e3a5f)", border: "2px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 80px rgba(99,102,241,0.2), inset 0 0 60px rgba(99,102,241,0.05)", animation: "float 8s ease-in-out infinite" }}>
                {/* Initiales (affichées si la photo ne charge pas) */}
                <span style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "100px", fontWeight: 700, background: "linear-gradient(135deg, #6366f1, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {personal.initials}
                </span>

                {/* Photo */}
                <img
                  src={photo}
                  alt={personal.name}
                  onError={(e) => { e.currentTarget.style.display = "none" }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", borderRadius: "50%" }}
                />
              </div>

              {/* Location badge */}
              <div style={{ position: "absolute", bottom: "14px", right: "-10px", padding: "6px 12px", borderRadius: "100px", background: isDark ? "rgba(13,16,32,0.9)" : "rgba(255,255,255,0.9)", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, fontSize: "11px", fontWeight: 600, color: isDark ? "#94a3b8" : "#64748b", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", gap: "4px" }}>
                📍 {personal.location}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={`reveal ${isVisible ? "visible" : ""} delay-5`} style={{ marginTop: "72px", paddingTop: "40px", borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label[lang]} isVisible={isVisible} delay={i * 80} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", animation: "float 3s ease-in-out infinite" }}>
        <span style={{ fontSize: "11px", color: isDark ? "#475569" : "#94a3b8", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.1em" }}>SCROLL</span>
        <div style={{ width: "1px", height: "40px", background: `linear-gradient(180deg, transparent, ${isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}, transparent)` }} />
      </div>
    </section>
  )
}
