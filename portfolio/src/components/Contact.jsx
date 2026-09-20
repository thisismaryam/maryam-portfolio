import { Star, Star5 } from './Doodles.jsx'
import './Contact.css'

const CHANNELS = [
  { label: 'Email', value: 'maryam.zaman678@gmail.com', href: 'mailto:maryam.zaman678@gmail.com' },
  { label: 'GitHub', value: 'github.com/thisismaryam', href: 'https://github.com/thisismaryam' },
  { label: 'LinkedIn', value: 'linkedin.com/in/maryam-zaman-20ba02282', href: 'https://www.linkedin.com/in/maryam-zaman-20ba02282/' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-inner">
        <Star className="contact-star" color="var(--magenta)" />
        <Star5 className="contact-star5" color="var(--magenta)" />

        <span className="tag">GET IN TOUCH</span>
        <h2 className="contact-title">
          Got something that needs
          <br />
          <em>building?</em>
        </h2>
        <p className="contact-lede">
          I&rsquo;m currently looking for opportunities where I can grow as an
          AI Engineer and contribute to real projects. If you think my skills
          could be a good fit for your team, I&rsquo;d be happy to connect.
        </p>

        <div className="contact-list">
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="contact-row"
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-row-label">{c.label}</span>
              <span className="contact-row-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}