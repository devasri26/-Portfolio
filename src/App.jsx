import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-300 font-sans selection:bg-accent/30 selection:text-white overflow-hidden">
      {/* Background glow animations */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full bg-accent/[0.04] filter blur-[90px] md:blur-[120px] animate-glow-slow pointer-events-none z-0" />
      <div className="absolute top-[60%] right-[-15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-accent/[0.03] filter blur-[100px] md:blur-[140px] animate-glow-slower pointer-events-none z-0" />

      {/* Structural layout wrapper */}
      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
