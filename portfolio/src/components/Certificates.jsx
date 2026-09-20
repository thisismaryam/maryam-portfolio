import './Certificates.css'

// Replace the '#' href below with your real Coursera verification link for each certificate.
const CERTIFICATES = [
    {
        when: 'Sep 2026',
        what: 'Master Full-Stack Web Development with Laravel & PHP',
        where: 'Board Infinity',
        href: 'https://coursera.org/share/af705f878f6bb429aeafda1913f1493e',
    },
    {
        when: 'Aug 2026',
        what: 'Introduction to Front-End Development',
        where: 'Meta',
        href: 'https://coursera.org/share/137c8116742e16893e6982dd05a99e31',
    },
    {
        when: 'Jul 2026',
        what: 'Crash Course on Python',
        where: 'Google',
        href: 'https://coursera.org/share/2c4047c3dc3b34a10fd2e57d855876b4',
    },
    {
        when: 'Jun 2026',
        what: 'Getting Started with AWS Generative AI for Developers',
        where: 'Amazon Web Services',
        href: 'https://coursera.org/share/02cf13349e2bb9ab7e72da93f063a6fa',
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