import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Github } from './icons'
import TiltCard from './TiltCard'

export default function Projects() {
  const projects = [
    {
      title: 'LinkFlow AI',
      github: 'https://github.com/devasri26/LinkFlow-AI',
      description: 'An AI-driven link automation and intelligent workflow platform. Automates redirect structures, analyzes click paths, and generates smart short URLs based on contextual rules.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Integration']
    },
    {
      title: 'AI Project Failure Predictor',
      github: 'https://github.com/devasri26/De-Risk-AI',
      description: 'A predictive software development risk tool. Evaluates project complexity, code churn, and velocity to forecast project delays or delivery failures before they happen.',
      tags: ['React', 'Tailwind CSS', 'Python', 'Machine Learning', 'Flask']
    },
    {
      title: 'Mock Interview AI',
      github: 'https://github.com/devasri26/MockInterview',
      description: 'An interactive simulator for technical mock interviews. Features voice-to-text response tracking and leverages LLMs to provide real-time grading, suggestions, and hints.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Gemini API', 'Node.js']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="flex flex-col mb-12">
        <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-2">Portfolio</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Featured Projects
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="h-full"
          >
            <TiltCard className="group relative glass-card rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors duration-150"
                    aria-label="GitHub Repository"
                  >
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded bg-zinc-900 border border-zinc-850 text-[10px] font-medium text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-150 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 rounded-md px-3.5 py-2 w-full justify-center"
                >
                  <Github size={14} />
                  View Source Code
                </a>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
