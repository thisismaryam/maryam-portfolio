import { Underline } from './Doodles.jsx'
import './CaseStudy.css'

const CASE_STUDIES = [
  {
    id: 'case-virtual-vogue',
    tag: 'CASE STUDY 01',
    title: 'Virtual Vogue',
    lede: 'A virtual fashion try-on that runs entirely in the browser — real-time pose estimation, garment warping, and nothing sent anywhere.',
    steps: [
      {
        n: '01',
        head: 'The problem',
        body: 'Online clothes shopping asks you to guess. Returns are expensive for the seller and annoying for everyone. Most try-on tools fix this by uploading your photo to someone else\u2019s server.',
      },
      {
        n: '02',
        head: 'The constraint I set',
        body: 'Nothing leaves the browser. No account, no upload, no stored image. That ruled out every server-side model and forced the whole pipeline into client-side JavaScript.',
      },
      {
        n: '03',
        head: 'How it works',
        body: 'A pose model finds 17 body keypoints from the webcam feed each frame. Shoulder and hip landmarks give scale and rotation, then the garment image is warped and composited onto that frame.',
      },
      {
        n: '04',
        head: 'What broke first',
        body: 'Keypoints jittered frame to frame, so the garment shook. Smoothing the landmarks over a short window fixed the shake without adding lag you could feel.',
      },
    ],
    result: {
      text: 'The result: try-on that works on a mid-range laptop with a webcam and no backend at all — which also means there is no image to leak.',
      stack: ['JavaScript', 'TensorFlow.js', 'Hugging Face', 'Canvas API'],
    },
  },
  {
    id: 'case-voice-interview',
    tag: 'CASE STUDY 02',
    title: 'AI Voice Interview System',
    lede: 'A voice-based interviewer that adapts its questions to the candidate in front of it, then scores the finished conversation.',
    steps: [
      {
        n: '01',
        head: 'The problem',
        body: 'Fixed interview questions don\u2019t adapt naturally to the candidate. The same script gets asked whether it fits or not.',
      },
      {
        n: '02',
        head: 'What I built',
        body: 'A voice interview system that reads the candidate\u2019s resume and the job description, generates relevant questions, asks follow-ups based on the answer given, keeps track of the conversation, and evaluates the completed interview.',
      },
      {
        n: '03',
        head: 'How it works',
        body: 'The resume and job description become context for the LLM. The model generates a question, the candidate answers by voice, a follow-up is generated from that answer, and the finished conversation is scored at the end.',
      },
      {
        n: '04',
        head: 'Technical implementation',
        body: 'Built with Flask handling the backend, LangChain and LangGraph orchestrating the conversation flow, an LLM generating questions and evaluations, and ElevenLabs handling voice.',
      },
    ],
    result: {
      text: 'The result: a system that holds conversation state across an entire interview, handles ambiguous answers, and turns a voice conversation into a structured evaluation.',
      stack: ['Flask', 'LangChain', 'LangGraph', 'ElevenLabs'],
    },
  },
  {
    id: 'case-rag-chatbot',
    tag: 'CASE STUDY 03',
    title: 'RAG Chatbot',
    lede: 'A document-grounded chatbot that retrieves relevant information before generating an answer, instead of relying on general model knowledge.',
    steps: [
      {
        n: '01',
        head: 'The problem',
        body: 'Users need answers from specific government and service documents rather than whatever a general-purpose LLM happens to know.',
      },
      {
        n: '02',
        head: 'What I built',
        body: 'A chatbot that retrieves relevant chunks from the right document set before generating a response, rather than answering from memory alone.',
      },
      {
        n: '03',
        head: 'The pipeline',
        body: 'Documents are split into chunks and embedded, then a vector search retrieves the most relevant context for the LLM. Category-aware retrieval separates Arms and Driving License documents, and the bot asks for clarification when the category isn\u2019t clear.',
      },
      {
        n: '04',
        head: 'Implementation details',
        body: 'Built with FastAPI, FAISS for vector search, FastEmbed for embeddings, and LangChain/LangGraph for orchestration, with streaming responses and thread-level conversation context.',
      },
    ],
    result: {
      text: 'The result: a chatbot that answers based on the provided documents rather than relying entirely on the model\u2019s general knowledge.',
      stack: ['FastAPI', 'FAISS', 'FastEmbed', 'LangChain'],
    },
  },
  {
    id: 'case-agentshield',
    tag: 'CASE STUDY 04',
    title: 'AgentShield',
    lede: 'An evaluation harness that tests whether an AI agent follows malicious instructions that arrive through its own tools.',
    steps: [
      {
        n: '01',
        head: 'The problem',
        body: 'AI agents can encounter malicious or misleading information through the tools they call, not just through direct user input.',
      },
      {
        n: '02',
        head: 'What I built',
        body: 'An evaluation harness that tests whether an agent follows malicious instructions returned through a tool result, across a set of realistic scenarios.',
      },
      {
        n: '03',
        head: 'How it works',
        body: 'A scenario is run through the agent, which makes a tool call. The tool returns an attacker-controlled result. The agent\u2019s response is then judged deterministically and scored pass or fail.',
      },
      {
        n: '04',
        head: 'Scenarios and evaluation',
        body: 'Scenarios include a malicious email, a fake security alert, and an attempted secret exfiltration. The system checks for forbidden tool calls and forbidden information disclosure, shown live on a dashboard.',
      },
    ],
    result: {
      text: 'The result: 3/3 scenarios passed, with a live dashboard showing each evaluation as it runs.',
      stack: ['FastAPI', 'WebSocket', 'Agentic AI'],
    },
  },
]

export default function CaseStudy() {
  return (
    <>
      {CASE_STUDIES.map((cs) => (
        <section id={cs.id} className="case torn" key={cs.id}>
          <div className="wrap">
            <div className="case-head">
              <span className="tag">{cs.tag}</span>
              <h2 className="case-title">
                {cs.title}
                <Underline className="case-underline" />
              </h2>
              <p className="case-lede">{cs.lede}</p>
            </div>

            <div className="case-grid">
              {cs.steps.map((s) => (
                <article className="case-card" key={s.n}>
                  <span className="case-num">{s.n}</span>
                  <h3>{s.head}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>

            <div className="case-result">
              <p>{cs.result.text}</p>
              <div className="case-result-stack">
                {cs.result.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}