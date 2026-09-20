import { Arrow } from './Doodles.jsx'
import './Projects.css'

const PROJECTS = [
  {
    id: '01',
    tag: 'FLAGSHIP — SEE CASE STUDY',
    title: 'Virtual Vogue',
    sub: 'AI-powered virtual fashion try-on',
    desc: 'A fully client-side try-on system using real-time pose estimation and garment warping — no server, no signup, no stored images.',
    stack: ['JavaScript', 'TensorFlow.js', 'Hugging Face'],
    href: '#case-virtual-vogue',
    cta: 'Read the case study',
  },
  {
    id: '02',
    tag: 'AGENTIC AI — KP IT BOARD',
    title: 'AI Voice Interview System',
    sub: 'Resume-aware interviewer that adapts in real time',
    desc: 'Parses a resume and job description, generates personalised questions, handles follow-ups on the fly, and evaluates the finished interview.',
    stack: ['Flask', 'LangChain', 'LangGraph', 'ElevenLabs'],
    href: '#case-voice-interview',
    cta: 'Read the case study',
  },
  {
    id: '03',
    tag: 'RETRIEVAL — KP IT BOARD',
    title: 'RAG Chatbot',
    sub: 'Document-grounded Q&A across two government services',
    desc: 'Embeddings and FAISS retrieval power context-aware answers for Arms and Driving License queries, cutting through dense policy text.',
    stack: ['FastAPI', 'FAISS', 'FastEmbed', 'LangChain'],
    href: '#case-rag-chatbot',
    cta: 'Read the case study',
  },
  {
    id: '04',
    tag: 'FULL-STACK',
    title: 'Student Information System',
    sub: 'Records, attendance, and performance in one place',
    desc: 'A database-driven platform for managing student records and generating reports through a clean, usable interface.',
    stack: ['Laravel', 'SQL'],
  },
]

const ALSO_SHIPPED = [
  { name: 'Web Music Player', note: 'HTML Audio API, playlists, genre filtering' },
  { name: 'Social Networking Platform', note: 'Frontend simulation with simulated real-time updates' },
  { name: '2D Game', note: 'Unity, C#, object-oriented scripting' },
  { name: 'MATLAB / Simulink Project', note: 'Modelling and simulation coursework' },
]

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="wrap">
        <div className="projects-head">
          <span className="tag">SELECTED WORKS</span>
          <h2 className="projects-title">Four builds worth a closer look.</h2>
          <Arrow className="projects-arrow" />
        </div>

        <div className="project-list">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.href || '#work'}
              className={`project-row ${!p.href ? 'project-row-static' : ''}`}
            >
              <span className="project-num">{p.id}</span>
              <div className="project-main">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-name">{p.title}</h3>
                <p className="project-sub">{p.sub}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              {p.href && <span className="project-view">{p.cta}</span>}
            </a>
          ))}
        </div>

        <div className="also-shipped">
          <span className="also-shipped-label">OTHER PROJECTS</span>
          <div className="also-shipped-grid">
            {ALSO_SHIPPED.map((a) => (
              <div className="also-shipped-item" key={a.name}>
                <strong>{a.name}</strong>
                <span>{a.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}