import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import Approach from './components/Approach.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CaseStudy />
        <Approach />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}