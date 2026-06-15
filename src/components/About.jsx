import React from 'react'
import { motion } from 'framer-motion'
import avatarImg from '../assets/devasri.png'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Left header column */}
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="sticky top-28 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                About Me
              </h2>
              <p className="text-zinc-500 text-sm mt-2 font-medium">
                Full Stack Developer
              </p>
            </div>
            {/* Developer Photo */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-zinc-900/40 group">
              <img
                src={avatarImg}
                alt="Devasri"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Right content column */}
        <div className="md:col-span-8 flex flex-col gap-6 text-zinc-400 text-base md:text-lg leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I am a results-oriented <span className="text-white font-medium">Full Stack Developer</span> passionate about engineering high-performance web applications and designing intelligent, AI-powered solutions. With key expertise in Javascript, React, and server-side ecosystems, I build responsive user interfaces backed by stable architecture.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My engineering philosophy centers on simplicity, speed, and standard design integrity. I focus on translating complex computational problems into seamless, polished digital tools that feel natural to use and easy to scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-6 pt-6 mt-6 border-t border-zinc-900"
          >
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-1">Architecture</h4>
              <p className="text-sm text-zinc-500">Developing component-driven applications with microservices and scalable database designs.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wider text-white uppercase mb-1">AI Integration</h4>
              <p className="text-sm text-zinc-500">Embedding prompt frameworks, automated agents, and prediction pipelines directly into products.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
