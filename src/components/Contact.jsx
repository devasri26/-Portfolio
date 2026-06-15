import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, Send } from 'lucide-react'
import { Github, Linkedin } from './icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('gdevasri26@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Social CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div>
            <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-2">Connect</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm text-zinc-400 font-light mt-4 leading-relaxed max-w-sm">
              I am open to discuss web engineering roles, AI projects, collaborations, and open-source contributions.
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            {/* Email Copier */}
            <div 
              onClick={copyEmail}
              className="flex items-center justify-between p-4 rounded-lg glass-card hover:border-zinc-750 transition-all duration-150 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-850 text-zinc-400 group-hover:text-accent transition-colors duration-150">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">Direct Email</span>
                  <span className="text-sm font-medium text-white">gdevasri26@gmail.com</span>
                </div>
              </div>
              <button className="text-zinc-500 hover:text-white transition-colors duration-150 p-1.5 rounded hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/devasri-g-86186b3a0/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass-card hover:border-zinc-750 transition-all duration-150 group"
            >
              <div className="p-2 rounded bg-zinc-900 border border-zinc-850 text-zinc-400 group-hover:text-accent transition-colors duration-150">
                <Linkedin size={16} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">LinkedIn</span>
                <span className="text-sm font-medium text-white break-all">https://www.linkedin.com/in/devasri-g-86186b3a0/</span>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/devasri26"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg glass-card hover:border-zinc-750 transition-all duration-150 group"
            >
              <div className="p-2 rounded bg-zinc-900 border border-zinc-850 text-zinc-400 group-hover:text-accent transition-colors duration-150">
                <Github size={16} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">GitHub</span>
                <span className="text-sm font-medium text-white break-all">https://github.com/devasri26</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 glass-card rounded-xl p-6 md:p-8"
        >
          <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="form-name" className="text-xs font-semibold text-zinc-500 uppercase">Name</label>
                <input
                  id="form-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-zinc-950 border border-zinc-850 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="form-email" className="text-xs font-semibold text-zinc-500 uppercase">Email Address</label>
                <input
                  id="form-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-zinc-950 border border-zinc-850 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="form-message" className="text-xs font-semibold text-zinc-500 uppercase">Message</label>
              <textarea
                id="form-message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-950 border border-zinc-850 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 resize-none transition-colors duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 active:bg-zinc-300 transition-colors duration-150 w-full md:w-auto md:self-end cursor-pointer disabled:bg-emerald-500 disabled:text-white"
            >
              {submitted ? (
                <>
                  Message Sent
                  <Check size={16} />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Mini footer credits */}
      <div className="mt-24 pt-8 border-t border-zinc-950 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Devasri. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-mono">
          Inspired by Linear & Vercel
        </p>
      </div>
    </section>
  )
}
