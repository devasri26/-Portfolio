import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 pb-12 grid-bg">
      {/* Background radial fade to keep it clean but dark */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black to-black opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-850 bg-zinc-900/50 text-xs text-zinc-400 font-medium tracking-wide mb-8 hover:border-zinc-700 transition-all duration-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Opportunities
        </motion.div>

        {/* Developer Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-2"
        >
          <span className="font-display text-sm md:text-base font-semibold tracking-widest text-accent uppercase">
            Devasri
          </span>
          <h1 className="font-display font-bold text-4xl md:text-7xl tracking-tight text-white mt-1 leading-[1.1]">
            Full Stack Developer
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 font-medium tracking-tight mt-6 leading-relaxed"
        >
          Building scalable web applications and AI-powered solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 active:bg-zinc-300 transition-colors duration-200 w-full sm:w-auto cursor-pointer"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>

      {/* Decorative clean line at the bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
    </section>
  )
}
