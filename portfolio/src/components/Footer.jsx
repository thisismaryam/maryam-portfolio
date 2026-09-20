import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="footer-mark">Maryam Zaman</span>
        <span className="footer-note">
          Built with React and Vite in Peshawar &copy; {new Date().getFullYear()}
        </span>
        <a href="#top" className="footer-top">Back to top</a>
      </div>
    </footer>
  )
}
