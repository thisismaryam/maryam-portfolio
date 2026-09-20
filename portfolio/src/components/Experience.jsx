import './Experience.css'

const ROLES = [
  {
    date: 'JUL 2026',
    company: 'KP IT Board',
    role: 'AI Intern — Agentic AI',
    place: 'Peshawar, Pakistan',
    overview:
      'Three end-to-end AI systems built during a year on the Agentic AI track — a voice interview platform, a document-grounded RAG chatbot, and an agent security evaluation harness.',
    projects: [
      {
        n: '01',
        title: 'AI Voice Interview System',
        desc: 'Reads a resume and job description, asks dynamic and follow-up questions, and evaluates the finished interview.',
        stack: ['Flask', 'LangChain', 'LangGraph', 'ElevenLabs'],
        href: '#case-voice-interview',
      },
      {
        n: '02',
        title: 'RAG Chatbot',
        desc: 'Document-grounded Q&A with category handling, streaming responses, and conversation-aware context.',
        stack: ['FastAPI', 'RAG', 'FAISS', 'FastEmbed'],
        href: '#case-rag-chatbot',
      },
      {
        n: '03',
        title: 'AgentShield / LLM Evaluation',
        desc: 'Tests whether an agent resists prompt-injection and malicious tool results, with live scenario-based scoring.',
        stack: ['Agentic AI', 'Tool-use testing', 'Dashboard'],
        href: '#case-agentshield',
      },
    ],
  },
  {
    date: '2025',
    company: 'Arch Technologies',
    role: 'Web Development Trainee',
    place: 'Pakistan',
    bullets: [
      'A browser-based music player with play/pause/next/previous, a playlist, search, genre filtering, and volume control.',
      'A frontend social platform prototype — profiles, posts, likes/comments, friend requests, and notifications.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="exp">
      <div className="wrap">
        <span className="tag">WORK EXPERIENCE</span>
        <h2 className="exp-title">Where I&rsquo;ve built things</h2>

        <div className="exp-list">
          {ROLES.map((r) => (
            <div className="exp-row" key={r.company}>
              <div className="exp-when">
                <span>{r.date}</span>
              </div>
              <div className="exp-main">
                <h3>{r.role}</h3>
                <p className="exp-company">{r.company} — {r.place}</p>

                {r.overview && <p className="exp-overview">{r.overview}</p>}

                {r.projects && (
                  <div className="exp-subprojects">
                    {r.projects.map((p) => (
                      <a href={p.href} className="exp-subproject" key={p.n}>
                        <span className="exp-subproject-num">{p.n}</span>
                        <h4>{p.title}</h4>
                        <p>{p.desc}</p>
                        <div className="exp-subproject-stack">
                          {p.stack.map((s) => (
                            <span key={s}>{s}</span>
                          ))}
                        </div>
                        <span className="exp-subproject-link">View case study →</span>
                      </a>
                    ))}
                  </div>
                )}

                {r.bullets && r.bullets.length > 0 && (
                  <ul>
                    {r.bullets.map((b) => (
                      <li key={b.slice(0, 24)}>{b}</li>
                    ))}
                  </ul>
                )}

                {r.stack && r.stack.length > 0 && (
                  <div className="exp-stack">
                    {r.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}