import { useIntersection } from "../hooks/useIntersection"
import { blogPosts } from "../data/portfolio"
import type { Lang, Theme } from "../App"

function formatDate(dateStr: string, lang: Lang) {
  const d = new Date(dateStr)
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "short", day: "numeric" })
}

export default function Blog({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()

  return (
    <section id="blog" style={{ background: isDark ? "rgba(13,16,32,0.4)" : "rgba(241,245,249,0.4)" }}>
      <div ref={ref} className="section-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <span className="section-label">{lang === "en" ? "// technical writing" : "// écriture technique"}</span>
            <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a", marginBottom: "0" }}>
              {lang === "en" ? "Thoughts &" : "Réflexions &"}
              <span className="gradient-text"> {lang === "en" ? "deep dives." : " analyses."}</span>
            </h2>
          </div>
          <a href="#" style={{ fontSize: "13px", fontWeight: 600, color: "#6366f1", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
            {lang === "en" ? "View all articles →" : "Tous les articles →"}
          </a>
        </div>

        <div className="grid-3">
          {blogPosts.map((post, i) => (
            <article key={post.slug} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ borderRadius: "20px", overflow: "hidden", transitionDelay: `${i * 100}ms`, cursor: "pointer" }}>
              {/* Image */}
              <div style={{ height: "180px", overflow: "hidden", background: isDark ? "#0d1020" : "#e2e8f0", position: "relative" }}>
                <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", top: "12px", right: "12px", padding: "3px 10px", borderRadius: "6px", background: `${post.color}20`, border: `1px solid ${post.color}40`, fontSize: "10px", fontWeight: 700, color: post.color, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.08em" }}>
                  {post.tag.toUpperCase()}
                </div>
              </div>

              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>{formatDate(post.date, lang)}</span>
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#475569" }} />
                  <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "JetBrains Mono, monospace" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "10px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.65, marginBottom: "16px" }}>{post.excerpt[lang]}</p>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#6366f1", display: "flex", alignItems: "center", gap: "4px" }}>
                  {lang === "en" ? "Read article →" : "Lire l'article →"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
