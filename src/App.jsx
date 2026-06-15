import { useState, useRef } from 'react'
import { Building2, Waves, Mountain, Route, LayoutGrid } from 'lucide-react'
import translations from './translations'
import './App.css'

function App() {
  const [openExp, setOpenExp] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openModal, setOpenModal] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [lang, setLang] = useState('fr')
  const t = translations[lang]
  const projContentRef = useRef(null)

  const toggleExp = (id) => {
    setOpenExp(openExp === id ? null : id)
  }

const handleCategoryClick = (cat) => {
  const newCat = activeCategory === cat ? null : cat
  setActiveCategory(newCat)
}

  const projIcons = {
    batiment: <Building2 size={28} strokeWidth={1.5} />,
    maritime: <Waves size={28} strokeWidth={1.5} />,
    minier: <Mountain size={28} strokeWidth={1.5} />,
    infrastructure: <Route size={28} strokeWidth={1.5} />,
    divers: <LayoutGrid size={28} strokeWidth={1.5} />
  }

  return (
  <div>
    <nav>
      <div className="nav-inner">
        <span className="nav-name">Christine Chau</span>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className="nav-links">
          <a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
          <a href="#projets" onClick={() => setMenuOpen(false)}>{t.nav.projets}</a>
          <a href="#logiciels" onClick={() => setMenuOpen(false)}>{t.nav.logiciels}</a>
          <a href="#formation" onClick={() => setMenuOpen(false)}>{t.nav.formation}</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>{t.nav.certifications}</a>
          <a href="#recommandations" onClick={() => setMenuOpen(false)}>{t.nav.recommandations}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        </div>
        <div className="lang-switcher">
          <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
          <span>|</span>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
          <a href="#projets" onClick={() => setMenuOpen(false)}>{t.nav.projets}</a>
          <a href="#logiciels" onClick={() => setMenuOpen(false)}>{t.nav.logiciels}</a>
          <a href="#formation" onClick={() => setMenuOpen(false)}>{t.nav.formation}</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>{t.nav.certifications}</a>
          <a href="#recommandations" onClick={() => setMenuOpen(false)}>{t.nav.recommandations}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
        </div>
      )}
    </nav>

      <section id="hero">
        <div className="hero-container">
          <img src="/WebCV/photo.jpg" alt="Christine Chau" className="hero-photo" />
          <div className="hero-text">
            <h1>Christine Chau</h1>
            <h2>{t.hero.titre}</h2>
            <p>{t.hero.description}</p>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-container">
          <h2 className="section-title">{t.experience.titre}</h2>
          <div className="exp-list">
            {t.experience.postes.map((poste) => (
              <div className="exp-item" key={poste.id}>
                <div className="exp-header" onClick={() => toggleExp(poste.id)}>
                  <div className="exp-header-left">
                    <h3>{poste.titre}</h3>
                    <span className="exp-company">{poste.entreprise}</span>
                  </div>
                  <div className="exp-header-right">
                    <span className="exp-date">{poste.date}</span>
                    <span className="exp-arrow">{openExp === poste.id ? '▲' : '▼'}</span>
                  </div>
                </div>
                <div className={`exp-body ${openExp === poste.id ? 'open' : ''}`}>
                  <p>{poste.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets">
        <div className="section-container">
          <h2 className="section-title">{t.projets.titre}</h2>
          <p className="section-subtitle">{t.projets.sousTitre}</p>

          <div className="proj-filters">
            {['batiment', 'maritime', 'minier', 'infrastructure', 'divers'].map((cat) => (
              <button
                key={cat}
                className={`proj-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                <span className="proj-filter-icon">{projIcons[cat]}</span>
                <span>{t.projets.categories[cat]}</span>
              </button>
            ))}
          </div>

          <div ref={projContentRef} className={`proj-content ${activeCategory ? 'open' : ''}`}>
            {activeCategory && t.projets.data[activeCategory].map((proj, i) => (
              <div key={i} className="proj-card">
                <div className="proj-card-header">
                  <span className="proj-card-date">{proj.date}</span>
                  <h3>{proj.titre}</h3>
                  <span className="proj-card-client">{proj.client}</span>
                </div>
                <p>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="logiciels">
        <div className="section-container">
          <h2 className="section-title">{t.logiciels.titre}</h2>
          <div className="soft-grid">
            {t.logiciels.liste.map((logiciel, i) => {
              const logos = ['Krea.png', 'TALREN.png', 'GEOMUR.png', 'FOXTA.png']
              return (
                <div className="soft-card" key={i}>
                  <img src={`/WebCV/${logos[i]}`} alt={logiciel.nom} className="soft-logo-img" />
                  <h3>{logiciel.nom}</h3>
                  <p>{logiciel.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="formation">
        <div className="section-container">
          <h2 className="section-title">{t.formation.titre}</h2>
          <div className="timeline">
            {t.formation.diplomes.map((diplome, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{diplome.date}</span>
                  <h3>{diplome.titre}</h3>
                  <p>{diplome.etablissement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="section-container">
          <h2 className="section-title">{t.certifications.titre}</h2>
          <div className="cert-list">
            {t.certifications.liste.map((cert, i) => (
              <div className="cert-item" key={i}>
                <div className="cert-header">
                  <h3>{cert.titre}</h3>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <span className="cert-org">{cert.organisme}</span>
                <p className="cert-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recommandations">
        <div className="section-container">
          <h2 className="section-title">{t.recommandations.titre}</h2>
          <div className="reco-grid">
            {t.recommandations.personnes.map((personne, i) => (
              <div className="reco-card" key={i}>
                <div className="reco-avatar">{personne.initiales}</div>
                <div className="reco-info">
                  <h4>{personne.nom}</h4>
                  <p>{personne.poste}</p>
                  {personne.linkedin ? (
                    <a href={personne.linkedin} target="_blank" className="reco-linkedin">{personne.linkedinLabel}</a>
                  ) : (
                    <a href="#" className="reco-linkedin">{personne.linkedinLabel}</a>
                  )}
                </div>
                <button className="reco-view" onClick={() => setOpenModal(personne.pdf)} title="Voir la lettre">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {openModal && (
          <div className="modal-overlay" onClick={() => setOpenModal(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setOpenModal(null)}>✕</button>
              <iframe
                src={`/WebCV/reco-${openModal}.pdf#toolbar=0&navpanes=0&scrollbar=0`}
                className="modal-iframe"
                title="Lettre de recommandation"
              />
            </div>
          </div>
        )}
      </section>

      <section id="contact">
        <div className="contact-container">
          <div className="contact-left">
            <h2>{t.contact.titre}</h2>
            <p>{t.contact.description}</p>
          </div>
          <div className="contact-right">
            <a href="mailto:christinec19@hotmail.fr" className="contact-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              {t.contact.email}
            </a>
            <a href="https://www.linkedin.com/in/christine-chau-b09a77154/" target="_blank" className="contact-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

    <footer className="site-footer">
      <p>Designed & built by <a href="https://marianne-guilbard.github.io/CV_marianne/" target="_blank">Marianne Guilbard</a></p>
      <p>© 2026 Christine Chau · Built with React · Hosted on GitHub Pages</p>
    </footer>

    </div>
  )
}

export default App