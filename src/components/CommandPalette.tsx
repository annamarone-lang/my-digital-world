import { useState, useEffect, useRef } from "react"
import type { Lang, Theme } from "../App"

interface Props {
  open: boolean
  onClose: () => void
  lang: Lang
  theme: Theme
}

const commands = [
  { id: "hero",    icon: "🏠", label: { en: "Go to Home",            fr: "Aller à l'Accueil" },       action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "about",   icon: "👤", label: { en: "Go to About",           fr: "Aller à À Propos" },         action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "skills",  icon: "⚡", label: { en: "View Skills",           fr: "Voir les Compétences" },     action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "projects",icon: "🚀", label: { en: "See Projects",          fr: "Voir les Projets" },         action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "exp",     icon: "💼", label: { en: "Experience",            fr: "Expérience" },               action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "services",icon: "🛠",  label: { en: "Services",              fr: "Services" },                 action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "blog",    icon: "📝", label: { en: "Read Blog",             fr: "Lire le Blog" },             action: () => document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "contact", icon: "✉️", label: { en: "Contact Me",            fr: "Me Contacter" },             action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "github",  icon: "🐙", label: { en: "Open GitHub",           fr: "Ouvrir GitHub" },            action: () => window.open("https://github.com/alexchen", "_blank") },
  { id: "linkedin",icon: "🔗", label: { en: "Open LinkedIn",         fr: "Ouvrir LinkedIn" },          action: () => window.open("https://linkedin.com/in/alexchen", "_blank") },
  { id: "cv",      icon: "📄", label: { en: "Download CV",           fr: "Télécharger le CV" },        action: () => {} },
]

export default function CommandPalette({ open, onClose, lang, theme }: Props) {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const isDark = theme === "dark"

  const filtered = commands.filter(c => c.label[lang].toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    if (open) { setQuery(""); setSelected(0); setTimeout(() => inputRef.current?.focus(), 50) }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)) }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)) }
      if (e.key === "Enter" && filtered[selected]) { filtered[selected].action(); onClose() }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, selected, filtered, onClose])

  if (!open) return null

  const bg = isDark ? "#0d1020" : "#ffffff"
  const border = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  const text = isDark ? "#f1f5f9" : "#0f172a"
  const hover = isDark ? "rgba(99,102,241,0.12)" : "rgba(99,102,241,0.08)"

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "15vh", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        style={{ width: "100%", maxWidth: "560px", margin: "0 16px", background: bg, border: `1px solid ${border}`, borderRadius: "16px", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5)", animation: "scaleIn 0.15s ease" }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px", borderBottom: `1px solid ${border}`, gap: "12px" }}>
          <span style={{ fontSize: "18px", opacity: 0.5 }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(0) }}
            placeholder={lang === "en" ? "Search commands…" : "Chercher des commandes…"}
            style={{ flex: 1, background: "none", border: "none", outline: "none", color: text, fontSize: "16px", fontFamily: "Inter, sans-serif" }}
          />
          <kbd style={{ fontSize: "11px", padding: "3px 7px", borderRadius: "5px", background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)", color: isDark ? "rgba(241,245,249,0.5)" : "#64748b", fontFamily: "JetBrains Mono, monospace" }}>ESC</kbd>
        </div>
        <div style={{ padding: "8px", maxHeight: "340px", overflowY: "auto" }}>
          {filtered.length === 0 && (
            <div style={{ padding: "24px", textAlign: "center", color: isDark ? "#64748b" : "#94a3b8", fontSize: "14px" }}>
              {lang === "en" ? "No commands found" : "Aucune commande trouvée"}
            </div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.id}
              onClick={() => { cmd.action(); onClose() }}
              onMouseEnter={() => setSelected(i)}
              style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "10px 12px", borderRadius: "10px", border: "none", cursor: "pointer", background: i === selected ? hover : "transparent", color: text, fontSize: "14px", fontFamily: "Inter, sans-serif", transition: "background 0.1s ease", textAlign: "left" }}
            >
              <span style={{ fontSize: "16px", width: "24px", textAlign: "center" }}>{cmd.icon}</span>
              <span>{cmd.label[lang]}</span>
            </button>
          ))}
        </div>
        <div style={{ padding: "10px 20px", borderTop: `1px solid ${border}`, display: "flex", gap: "16px", fontSize: "11px", color: isDark ? "#475569" : "#94a3b8", fontFamily: "JetBrains Mono, monospace" }}>
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  )
}
