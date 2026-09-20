import './Certificates.css'

// Replace the '#' href below with your real Coursera verification link for each certificate.
const CERTIFICATES = [
    {
        when: 'Sep 2026',
        what: 'Master Full-Stack Web Development with Laravel & PHP',
        where: 'Board Infinity',
        href: '#',
    },
    {
        when: 'Aug 2026',
        what: 'Introduction to Front-End Development',
        where: 'Meta',
        href: '#',
    },
    {
        when: 'Jul 2026',
        what: 'Crash Course on Python',
        where: 'Google',
        href: '#',
    },
    {
        when: 'Jun 2026',
        what: 'Getting Started with AWS Generative AI for Developers',
        where: 'Amazon Web Services',
        href: '#',
    },
]

export default function Certificates() {
    return (
        <section id="certificates" className="cert">
            <div className="wrap cert-grid">
                <div className="cert-head">
                    <span className="tag">COURSES &amp; CERTIFICATES</span>
                    <h2 className="cert-title">Keeping the fundamentals current</h2>
                </div>

                <div className="cert-list">
                    {CERTIFICATES.map((c) => (
                        <div className="cert-row" key={c.what}>
                            <span className="cert-when">{c.when}</span>
                            <div>
                                <h3>{c.what}</h3>
                                <p>{c.where}</p>
                                <a
                                    href={c.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cert-link"
                                >
                                    View certificate →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}