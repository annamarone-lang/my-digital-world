import { useIntersection } from "../hooks/useIntersection"
import { personal, values } from "../data/portfolio"
import type { Lang, Theme } from "../App"

const journey = {
  en: [
    {
      year: "2021",
      title: "First Steps in Web Development",
      desc: "Started developing web applications and building my skills in front-end and back-end development. Joined the DigiFrams Senegal platform project."
    },
    {
      year: "2024",
      title: "Bachelor's Degree in Software Development",
      desc: "Completed my Bachelor's degree in Web, Mobile Application and Gaming Development at Université Numérique Cheikh Hamidou KANE."
    },
    {
      year: "2025",
      title: "Professional Internship",
      desc: "Joined SOFINDI as a Web Development Intern, contributing to digital solutions, database integration, and user interface development."
    },
    {
      year: "2025",
      title: "S@JEF – Kam-Daay Project",
      desc: "Led the Kam-Daay group and contributed as a technical lead to the development of a mobile CRM application, from requirements analysis to testing and presentation."
    },

    {
      year: "2026",
      title: "Now",
      desc: "Continuing to grow as a Full-Stack Developer, strengthening my technical skills and exploring new opportunities in software development and project management."
    }
  ],

  fr: [
    {
      year: "2021",
      title: "Mes débuts en développement web",
      desc: "Début de mon parcours dans le développement d'applications web, avec une spécialisation progressive en développement front-end et back-end. Participation au projet de la plateforme DigiFrams Sénégal."
    },
    {
      year: "2024",
      title: "Obtention de ma Licence",
      desc: "Obtention d'une Licence en Développement d'applications web, mobile et gaming, spécialité Web et Mobile, à l'Université Numérique Cheikh Hamidou KANE, avec la mention Bien."
    },
    {
      year: "2025",
      title: "Expérience professionnelle chez SOFINDI",
      desc: "Intégration de SOFINDI en tant que stagiaire développeuse web. Participation à la conception d'interfaces, au développement de solutions numériques et à l'intégration de bases de données."
    },
    {
      year: "2025",
      title: "Projet S@JEF – Kam-Daay",
      desc: "Responsable du groupe Kam-Daay et responsable technique du développement d'une application mobile de gestion de la relation client (CRM), de l'analyse des besoins jusqu'aux tests et à la présentation."
    },

    {
      year: "2026",
      title: "Aujourd'hui",
      desc: "Je poursuis mon évolution en tant que développeuse full-stack, en renforçant mes compétences techniques et en explorant de nouvelles opportunités dans le développement logiciel et la gestion de projet."
    }
  ]
};

export default function About({ lang, theme }: { lang: Lang; theme: Theme }) {
  const isDark = theme === "dark"
  const { ref, isVisible } = useIntersection()
  const steps = journey[lang]

  return (
    <section id="about" style={{ background: isDark ? "rgba(13,16,32,0.5)" : "rgba(241,245,249,0.5)" }}>
      <div ref={ref} className="section-wrapper">
        <div style={{ maxWidth: "760px", marginBottom: "72px" }}>
          <span className="section-label">{lang === "en" ? "// about me" : "// à propos"}</span>
          <h2 className={`section-title reveal ${isVisible ? "visible" : ""}`} style={{ color: isDark ? "#f8fafc" : "#0f172a" }}>
            {lang === "en" ? "Engineer by trade," : "Ingénieur de métier,"}
            <span className="gradient-text"> {lang === "en" ? "builder by heart." : "créateur de cœur."}</span>
          </h2>
          <p className={`section-subtitle reveal ${isVisible ? "visible" : ""} delay-1`}>
            {personal.bio[lang]}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
          {/* Values */}
          <div>
            <h3 className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ fontSize: "18px", fontWeight: 700, fontFamily: "'Instrument Sans', sans-serif", marginBottom: "24px", color: isDark ? "#f1f5f9" : "#0f172a" }}>
              {lang === "en" ? "My Values" : "Mes Valeurs"}
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {values.map((v, i) => (
                <div key={i} className={`glass-card reveal ${isVisible ? "visible" : ""}`} style={{ padding: "20px", borderRadius: "14px", transitionDelay: `${i * 80}ms` }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{v.icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", marginBottom: "6px", fontFamily: "'Instrument Sans', sans-serif" }}>{v.title[lang]}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.5 }}>{v.desc[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className={`reveal ${isVisible ? "visible" : ""} delay-1`} style={{ fontSize: "18px", fontWeight: 700, fontFamily: "'Instrument Sans', sans-serif", marginBottom: "24px", color: isDark ? "#f1f5f9" : "#0f172a" }}>
              {lang === "en" ? "My Journey" : "Mon Parcours"}
            </h3>
            <div style={{ position: "relative", paddingLeft: "28px" }}>
              <div style={{ position: "absolute", left: "7px", top: "8px", bottom: "8px", width: "2px", background: "linear-gradient(180deg, #6366f1, #22d3ee, transparent)" }} />
              {steps.map((step, i) => (
                <div key={i} className={`reveal ${isVisible ? "visible" : ""}`} style={{ marginBottom: "28px", transitionDelay: `${i * 100}ms`, position: "relative" }}>
                  <div style={{ position: "absolute", left: "-24px", top: "4px", width: "14px", height: "14px", borderRadius: "50%", background: i === steps.length - 1 ? "linear-gradient(135deg,#6366f1,#22d3ee)" : isDark ? "#1e2335" : "#e2e8f0", border: "2px solid #6366f1", zIndex: 1 }} />
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "#6366f1", fontWeight: 600 }}>{step.year}</span>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: isDark ? "#f1f5f9" : "#0f172a", fontFamily: "'Instrument Sans', sans-serif" }}>{step.title}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
