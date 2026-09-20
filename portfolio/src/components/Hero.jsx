import { Star, Star5, Scribble, Bracket } from './Doodles.jsx'
import './Hero.css'

// ─── YOUR PHOTO ───────────────────────────────────────────────────────────
// 1. Drop your image into the `public` folder, e.g. public/maryam.jpg
// 2. Change the line below to:  const PHOTO_SRC = '/maryam.jpg'
// Leave it as null to keep the "MZ" monogram card.
const PHOTO_SRC = '/maryam.jpeg'

// ──────────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-meta">
          <span className="tag">PESHAWAR, PK — OPEN TO WORK</span>
          <Star className="hero-star" color="var(--burgundy)" />
          <Star5 className="hero-star5" color="var(--burgundy)" />
        </div>

        <h1 className="hero-head">
          Building practical
          <br />
          <span className="hero-head-serif-italic">AI systems</span> that
          <br />
          act, not just answer.
        </h1>

        <div className="hero-portrait">
          <div className="hero-portrait-shape">
            {PHOTO_SRC ? <img src={PHOTO_SRC} alt="Maryam Zaman" /> : <span>MZ</span>}
          </div>
          <Scribble className="hero-scribble" />
          <Bracket className="hero-bracket hero-bracket-tl" rotate={0} />
          <Bracket className="hero-bracket hero-bracket-tr" rotate={90} />
          <Bracket className="hero-bracket hero-bracket-br" rotate={180} />
          <div className="hero-portrait-label">
            <strong>AI ENGINEER</strong>
          </div>
        </div>

        <div className="hero-sub">
          <p>
            Computer Systems Engineering graduate who enjoys building things
            end to end — from backend logic and AI workflows to frontend
            interfaces. I like understanding how the whole system fits
            together and turning ideas into working applications.
          </p>
          <div className="hero-links">
            <a href="#work" className="hero-btn">View my work</a>
            <a href="mailto:maryam.zaman678@gmail.com" className="hero-btn hero-btn-ghost">
              maryam.zaman678@gmail.com
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <strong>2</strong>
            <span>Internships</span>
          </div>
          <div>
            <strong>AI Engineer</strong>
            <span>Focused on LLMs, agents &amp; RAG</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>UET Peshawar graduate</span>
          </div>
        </div>
      </div>
    </section>
  )
}