import './Approach.css'

const PRINCIPLES = [
  {
    title: 'Build and Refine',
    body: 'I like getting a working version built first, then refining it once I understand what actually needs to be improved.',
  },
  {
    title: 'Experiment and Adapt',
    body: "If the first approach doesn't work, I don't assume the whole idea is wrong. I try a different approach, compare what happens, and keep working until I find something that makes sense.",
  },
  {
    title: 'Design for the User',
    body: 'I try to think beyond whether the code works. The result should also make sense to the person who is actually going to use it.',
  },
  {
    title: 'Think End to End',
    body: 'I enjoy working across different parts of a project - from backend logic and AI workflows to databases and frontend interfaces. Understanding how those pieces connect helps me build more complete applications.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="wrap approach-grid">
        <div className="approach-head">
          <span className="tag">HOW I WORK</span>
          <h2 className="approach-title">Four things I keep coming back to</h2>
        </div>

        <ol className="approach-list">
          {PRINCIPLES.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}