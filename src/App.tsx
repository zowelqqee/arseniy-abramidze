import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
