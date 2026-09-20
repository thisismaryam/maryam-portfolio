import { Ring } from './Doodles.jsx'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about torn">
      <div className="wrap about-grid">
        <div className="about-label">
          <span className="tag">WHO I AM</span>
          <Ring className="about-ring" />
        </div>

        <blockquote className="about-quote">
          My passion sits at the intersection of systems engineering and
          agentic intelligence. I don&rsquo;t just train models — I engineer them
          to <em>act</em>, <em>learn</em>, and <em>reason</em> in the real world.
        </blockquote>

        <div className="about-body">
          <p>
            I explored computer vision through my virtual try-on project and
            agentic AI through a voice interviewer that could actually hold a
            conversation. That&rsquo;s how I learn best — by building something
            that has to work, then digging into why it didn&rsquo;t the first
            three times.
          </p>
          <p>
            I&rsquo;ve finished my degree in Computer Systems Engineering at UET
            Peshawar and I&rsquo;m now looking for opportunities where I can keep
            building and growing as an AI Engineer. I enjoy working across the
            stack, from backend systems and AI workflows to frontend
            interfaces, and want to keep developing that end-to-end mindset in
            a professional environment.
          </p>
        </div>

        <div className="about-strip">
          <div className="about-strip-card">
            <span>ROLE</span>
            <strong>AI Engineer</strong>
          </div>
          <div className="about-strip-card">
            <span>BASE</span>
            <strong>Peshawar, Pakistan</strong>
          </div>
          <div className="about-strip-card">
            <span>STATUS</span>
            <strong>Open to work</strong>
          </div>
        </div>
      </div>
    </section>
  )
}