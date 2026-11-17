import { useState, useEffect } from "react"
import type { Theme, Lang } from "../App"

const navLinks = {
  en: [["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Services", "services"], ["Blog", "blog"], ["Contact", "contact"]],
  fr: [["À Propos", "about"], ["Compétences", "skills"], ["Projets", "projects"], ["Expérience", "experience"], ["Services", "services"], ["Blog", "blog"], ["Contact", "contact"]],
}

interface Props {
  theme: Theme
  setTheme: (t: Theme) => void
  lang: Lang
  setLang: (l: Lang) => void
  onCmdK: () => void
}

export default function Nav({ theme, setTheme, lang, setLang, onCmdK }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const isDark = theme === "dark"

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const navBg = scrolled
    ? isDark ? "rgba(8,9,13,0.88)" : "rgba(248,250,252,0.88)"
    : "transparent"
  const navBorder = scrolled
    ? isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
    : "transparent"

  const btnStyle = (active = false): React.CSSProperties => ({
    background: active ? (isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)") : "transparent",
    border: "none",
    color: isDark ? "rgba(241,245,249,0.65)" : "#64748b",
    fontSize: "13.5px",
    fontWeight: 500,
    cursor: "pointer",
    padding: "6px 12px",
    borderRadius: "8px",
    transition: "all 0.18s ease",
    fontFamily: "Inter, sans-serif",
    whiteSpace: "nowrap" as const,
  })

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 32px", background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none", WebkitBackdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: `1px solid ${navBorder}`, transition: "all 0.3s ease", height: "64px", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} style={{ border: "none", cursor: "pointer", padding: 0, fontFamily: "'Instrument Sans', sans-serif", fontSize: "20px", fontWeight: 700, background: "linear-gradient(135deg,#6366f1,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>
          AM
        </button>

        {/* Nav links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {navLinks[lang].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={btnStyle()}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = isDark ? "#f1f5f9" : "#0f172a"; el.style.background = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = isDark ? "rgba(241,245,249,0.65)" : "#64748b"; el.style.background = "transparent" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={onCmdK}
            title="Command Palette (⌘K)"
            style={{ display: "flex", alignItems: "center", gap: "5px", background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, borderRadius: "8px", color: isDark ? "rgba(241,245,249,0.45)" : "#94a3b8", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", padding: "5px 10px", cursor: "pointer" }}
          >
            ⌘K
          </button>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, borderRadius: "8px", color: isDark ? "rgba(241,245,249,0.65)" : "#64748b", fontSize: "11px", fontWeight: 700, padding: "5px 10px", cursor: "pointer", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)", border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`, borderRadius: "8px", color: isDark ? "rgba(241,245,249,0.65)" : "#64748b", fontSize: "14px", padding: "5px 10px", cursor: "pointer", lineHeight: "1" }}
          >
            {isDark ? "☀" : "◑"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary"
            style={{ padding: "8px 18px", fontSize: "13px" }}
          >
            {lang === "en" ? "Hire Me" : "Me Contacter"}
          </button>
        </div>
      </div>
    </nav>
  )
}
