import './Skills.css'

const CATEGORIES = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'C', 'C++', 'C#'] },
  {
    title: 'AI & Machine Learning',
    items: ['LangChain', 'LangGraph', 'RAG', 'FAISS', 'FastEmbed', 'Hugging Face', 'Prompt Engineering'],
  },
  { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'Flask', 'FastAPI', 'Laravel', 'SQL'] },
  { title: 'Computer Vision', items: ['TensorFlow.js', 'MoveNet'] },
  { title: 'Tools & Platforms', items: ['GitHub', 'Linux', 'APIs', 'ElevenLabs'] },
]

export default function Skills() {
  return (
    <section id="expertise" className="skills torn">
      <div className="wrap">
        <div className="skills-head">
          <h2 className="skills-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((c) => (
            <div className="skill-card" key={c.title}>
              <strong className="skill-name">{c.title}</strong>
              <div className="skill-pills">
                {c.items.map((item) => (
                  <span className="skill-pill" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}