import { useState, useEffect } from "react"
import CursorGlow from "./components/CursorGlow"
import ScrollProgress from "./components/ScrollProgress"
import CommandPalette from "./components/CommandPalette"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export type Theme = "dark" | "light"
export type Lang = "en" | "fr"

export default function App() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [lang, setLang] = useState<Lang>("fr")
  const [cmdOpen, setCmdOpen] = useState(false)

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : ""
  }, [theme])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setCmdOpen(true)
      }
      if (e.key === "Escape") setCmdOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  const bg = theme === "dark" ? "#08090d" : "#f8fafc"

  return (
    <div style={{ background: bg, minHeight: "100vh", color: theme === "dark" ? "#f1f5f9" : "#0f172a" }}>
      <CursorGlow />
      <ScrollProgress />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} lang={lang} theme={theme} />
      <Nav theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} onCmdK={() => setCmdOpen(true)} />
      <main>
        <Hero lang={lang} theme={theme} />
        <About lang={lang} theme={theme} />
        <Skills lang={lang} theme={theme} />
        <Projects lang={lang} theme={theme} />
        <Experience lang={lang} theme={theme} />
        <Education lang={lang} theme={theme} />
        <Certifications lang={lang} theme={theme} />
        <Services lang={lang} theme={theme} />
        <Testimonials lang={lang} theme={theme} />
        <Blog lang={lang} theme={theme} />
        <Contact lang={lang} theme={theme} />
      </main>
      <Footer lang={lang} theme={theme} />
    </div>
  )
}
