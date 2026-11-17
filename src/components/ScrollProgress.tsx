import { useState, useEffect } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const total = doc.scrollHeight - doc.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: "2px", background: "transparent" }}>
      <div
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #6366f1, #22d3ee, #a855f7)",
          width: `${progress}%`,
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(99,102,241,0.8)",
        }}
      />
    </div>
  )
}
