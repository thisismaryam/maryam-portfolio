import './Education.css'

const ITEMS = [
  {
    when: '2022 — 2026',
    what: 'BSc Computer Systems Engineering',
    where: 'University of Engineering & Technology, Peshawar',
  },
  {
    when: '2020 — 2022',
    what: 'FSc Pre-Engineering',
    where: 'Islamia College Peshawar',
  },
]

const LANGUAGES = ['English', 'Urdu', 'Pashto']

export default function Education() {
  return (
    <section id="education" className="edu torn">
      <div className="wrap edu-grid">
        <div className="edu-head">
          <span className="tag">EDUCATION</span>
          <h2 className="edu-title">Where the fundamentals came from</h2>
        </div>

        <div className="edu-list">
          {ITEMS.map((i) => (
            <div className="edu-row" key={i.what}>
              <span className="edu-when">{i.when}</span>
              <div>
                <h3>{i.what}</h3>
                <p>{i.where}</p>
              </div>
            </div>
          ))}

          <div className="edu-langs">
            <span className="edu-langs-label">LANGUAGES</span>
            <div className="edu-langs-list">
              {LANGUAGES.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}