import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Wrench, Terminal } from 'lucide-react'
import TiltCard from './TiltCard'

export default function Skills() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <Code size={18} className="text-accent" />,
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      icon: <Server size={18} className="text-accent" />,
      skills: ['Node.js', 'Express.js', 'MongoDB']
    },
    {
      title: 'Languages',
      icon: <Terminal size={18} className="text-accent" />,
      skills: ['Java', 'C']
    },
    {
      title: 'DevOps & Tooling',
      icon: <Wrench size={18} className="text-accent" />,
      skills: ['Git', 'GitHub', 'Vercel', 'Render']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="flex flex-col mb-12">
        <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-2">Capabilities</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Technical Skills
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="h-full"
          >
            <TiltCard className="glass-card rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between min-h-[200px] h-full">
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-base text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-900/60 border border-zinc-850 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent Line on Card Hover */}
              <div className="h-0.5 w-0 group-hover:w-full bg-accent mt-6 transition-all duration-300 ease-in-out" />
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
