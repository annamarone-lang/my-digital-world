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

const responsiveCSS = `
  .nav-root {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 0 32px;
    height: 64px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
  }
  .nav-inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .nav-desktop-links {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-burger {
    display: none;
    width: 38px;
    height: 34px;
    border-radius: 8px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 0;
  }
  .nav-burger span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
  .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-burger.open span:nth-child(2) { opacity: 0; }
  .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .nav-mobile-menu {
    display: none;
    position: fixed;
    top: 64px; left: 0; right: 0;
    max-height: calc(100vh - 64px);
    max-height: calc(100dvh - 64px);
    overflow-y: auto;
    padding: 12px 20px 24px;
    flex-direction: column;
    gap: 4px;
    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .nav-mobile-menu.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
  .nav-mobile-link {
    width: 100%;
    text-align: left;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 14px 12px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter, sans-serif;
  }
  .nav-mobile-cta {
    margin-top: 12px;
    width: 100%;
    padding: 14px 18px !important;
    font-size: 15px !important;
  }

  /* Tablette / petit laptop : menu burger */
  @media (max-width: 1024px) {
    .nav-desktop-links { display: none; }
    .nav-burger { display: flex; }
    .nav-mobile-menu { display: flex; }
    .nav-cmdk { display: none !important; }
  }

  /* Tablette portrait / mobile */
  @media (max-width: 640px) {
    .nav-root { padding: 0 16px; }
    .nav-actions { gap: 6px; }
    .nav-hire { display: none !important; }
  }

  /* Très petits écrans */
  @media (max-width: 360px) {
    .nav-root { padding: 0 12px; }
    .nav-actions { gap: 4px; }
  }
`

export default function Nav({ theme, setTheme, lang, setLang, onCmdK }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = theme === "dark"

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    h()
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])

  // Ferme le menu si on repasse en écran large, ou avec Échap
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMenuOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    window.addEventListener("resize", onResize)
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("keydown", onKey)
    }
  }, [])

  // Bloque le scroll de la page quand le menu est ouvert
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = menuOpen ? "hidden" : prev
    return () => { document.body.style.overflow = prev }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const solid = scrolled || menuOpen
  const navBg = solid
    ? isDark ? "rgba(8,9,13,0.92)" : "rgba(248,250,252,0.92)"
    : "transparent"
  const navBorder = solid
    ? isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
    : "transparent"
  const textColor = isDark ? "rgba(241,245,249,0.65)" : "#64748b"
  const strongText = isDark ? "#f1f5f9" : "#0f172a"
  const chipBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"
  const chipBorder = `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`

  const btnStyle = (): React.CSSProperties => ({
    background: "transparent",
    border: "none",
    color: textColor,
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
    <nav
      className="nav-root"
      style={{
        background: navBg,
        backdropFilter: solid ? "blur(20px)" : "none",
        WebkitBackdropFilter: solid ? "blur(20px)" : "none",
        borderBottom: `1px solid ${navBorder}`,
      }}
    >
      <style>{responsiveCSS}</style>

      <div className="nav-inner">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} style={{ border: "none", cursor: "pointer", padding: 0, fontFamily: "'Instrument Sans', sans-serif", fontSize: "20px", fontWeight: 700, background: "linear-gradient(135deg,#6366f1,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as React.CSSProperties}>
          AM
        </button>

        {/* Nav links (desktop) */}
        <div className="nav-desktop-links">
          {navLinks[lang].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={btnStyle()}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = strongText; el.style.background = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = textColor; el.style.background = "transparent" }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="nav-cmdk"
            onClick={onCmdK}
            title="Command Palette (⌘K)"
            style={{ display: "flex", alignItems: "center", gap: "5px", background: chipBg, border: chipBorder, borderRadius: "8px", color: isDark ? "rgba(241,245,249,0.45)" : "#94a3b8", fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", padding: "5px 10px", cursor: "pointer" }}
          >
            ⌘K
          </button>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label="Change language"
            style={{ background: chipBg, border: chipBorder, borderRadius: "8px", color: textColor, fontSize: "11px", fontWeight: 700, padding: "5px 10px", cursor: "pointer", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em" }}
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            style={{ background: chipBg, border: chipBorder, borderRadius: "8px", color: textColor, fontSize: "14px", padding: "5px 10px", cursor: "pointer", lineHeight: "1" }}
          >
            {isDark ? "☀" : "◑"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary nav-hire"
            style={{ padding: "8px 18px", fontSize: "13px", whiteSpace: "nowrap" }}
          >
            {lang === "en" ? "Hire Me" : "Me Contacter"}
          </button>
          <button
            className={`nav-burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            style={{ background: chipBg, border: chipBorder, color: strongText }}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}
        style={{
          background: isDark ? "rgba(8,9,13,0.96)" : "rgba(248,250,252,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${navBorder}`,
        }}
      >
        {navLinks[lang].map(([label, id]) => (
          <button
            key={id}
            className="nav-mobile-link"
            onClick={() => scrollTo(id)}
            style={{ color: strongText }}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="btn-primary nav-mobile-cta"
        >
          {lang === "en" ? "Hire Me" : "Me Contacter"}
        </button>
      </div>
    </nav>
  )
}