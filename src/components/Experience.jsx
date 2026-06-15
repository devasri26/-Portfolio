import React from 'react'
import { motion } from 'framer-motion'
import { Award, Zap, Code2, GraduationCap } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Development',
      subtitle: 'Core Engineering Focus',
      description: 'Building end-to-end applications utilizing React, Node.js, and MongoDB. Specialize in component architecture, state management, and optimizing queries for fast load times.',
      icon: <Code2 size={16} className="text-accent" />,
      period: 'Active'
    },
    {
      title: 'AI Applications',
      subtitle: 'Machine Learning & LLM Integration',
      description: 'Developing tools that utilize Large Language Models and prediction pipelines. Built conversational mock interview programs and ML predictors mapping software project delivery risks.',
      icon: <Zap size={16} className="text-accent" />,
      period: 'Active'
    },
    {
      title: 'Hackathons & Rapid Building',
      subtitle: 'Prototype Engineering',
      description: 'Participating in developer hackathons to build production-ready minimal viable products under restricted time frames. Passionate about rapid design prototyping and real-time collaboration.',
      icon: <Award size={16} className="text-accent" />,
      period: 'Ongoing'
    },
    {
      title: 'Continuous Learning',
      subtitle: 'Tech Evolution',
      description: 'Actively expanding technical competencies. Dedicating effort to learn systems architecture, micro-frontends, edge networking, and modern orchestration tools.',
      icon: <GraduationCap size={16} className="text-accent" />,
      period: 'Lifetime'
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="flex flex-col mb-12">
        <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-2">History</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Experience & Achievements
        </h2>
      </div>

      <div className="relative border-l border-zinc-850 pl-6 ml-2 flex flex-col gap-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="relative"
          >
            {/* Timeline indicator node */}
            <div className="absolute -left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black border border-zinc-800 text-zinc-400">
              {exp.icon}
            </div>

            {/* Experience Card */}
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display font-semibold text-lg text-white">
                  {exp.title}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold font-mono bg-zinc-900 border border-zinc-850 text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs font-semibold text-zinc-500">
                {exp.subtitle}
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mt-2 max-w-3xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
