"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { contactData, contactDetails } from '../../data/content';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative bg-background">
      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase mb-4">
                {contactData.heading}
              </h2>
              <p className="text-xl font-bold text-primary mb-6">
                {contactData.subheading}
              </p>
              <div className="text-base sm:text-lg text-foreground-secondary font-medium leading-relaxed space-y-4">
                {contactData.body.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-primary">in</span> LinkedIn
              </a>
              <a href={contactDetails.fiverr} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-primary">fi</span> Fiverr
              </a>
              <a href={contactDetails.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-primary">✦</span> Portfolio
              </a>
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-primary">@</span> Email
              </a>
              <a href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-emerald-400">wa</span> WhatsApp
              </a>
              <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-surface/50 border border-white/5 hover:bg-white/10 transition-colors text-foreground-secondary hover:text-foreground text-sm font-medium">
                <span className="text-primary">&lt;/&gt;</span> GitHub
              </a>
            </div>
            
            <a href={contactDetails.resume} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
              <Button variant="secondary" className="!rounded-lg !px-6 !py-3 !text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
              
              {formStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-foreground-secondary">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button variant="secondary" onClick={() => setFormStatus('idle')} className="mt-8">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Project Type</label>
                    <select 
                      id="projectType"
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="seo-blog">SEO Blog Articles</option>
                      <option value="copywriting">Copywriting</option>
                      <option value="tech-docs">Technical Documentation</option>
                      <option value="ecommerce">E-commerce Descriptions</option>
                      <option value="other">Other / Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Message</label>
                    <textarea 
                      id="message" 
                      required
                      rows={5}
                      className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                      placeholder="Tell me about your project goals..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full !rounded-xl !py-4"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
