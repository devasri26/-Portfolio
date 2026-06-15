import React from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle } from 'lucide-react'
import TiltCard from './TiltCard'

export default function Certifications() {
  const certifications = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL / IIT Kharagpur',
      badge: 'Elite',
      badgeColor: 'text-indigo-400 border-indigo-900 bg-indigo-950/30',
      description: 'Comprehensive study of cloud virtualization architecture, services, scaling strategies, and resource management.'
    },
    {
      title: 'Introduction to Internet of Things',
      issuer: 'NPTEL / IIT Kharagpur',
      badge: 'Elite + Silver',
      badgeColor: 'text-zinc-300 border-zinc-700 bg-zinc-800/30',
      description: 'In-depth focus on IoT network architecture, sensor protocols, edge computing integration, and communication models.'
    }
  ]

  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto border-b border-zinc-900">
      <div className="flex flex-col mb-12">
        <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-2">Credentials</span>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <TiltCard className="glass-card rounded-xl p-6 hover:border-zinc-750 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-500 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-bold border ${cert.badgeColor}`}>
                    {cert.badge}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 mt-6 text-xs font-mono text-zinc-500">
                <CheckCircle size={14} className="text-emerald-500" />
                Verified Certificate
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
