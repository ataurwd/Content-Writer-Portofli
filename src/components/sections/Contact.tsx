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
    <section id="contact" className="py-24 px-6 lg:px-8 relative light-section">
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

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-4 p-4 rounded-2xl glass-panel hover:glass-panel-hover transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Email</div>
                  <div className="text-sm sm:text-base font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors">{contactDetails.email}</div>
                </div>
              </a>

              <a href={`https://wa.me/${contactDetails.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl glass-panel hover:glass-panel-hover transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Phone & WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-foreground mt-0.5 group-hover:text-emerald-400 transition-colors">{contactDetails.whatsapp}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground-secondary uppercase tracking-wider">Location</div>
                  <div className="text-sm sm:text-base font-bold text-foreground mt-0.5">{contactDetails.location}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-panel hover:glass-panel-hover flex items-center justify-center text-foreground-secondary hover:text-foreground transition-all font-bold" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-panel hover:glass-panel-hover flex items-center justify-center text-foreground-secondary hover:text-[#0A66C2] transition-all font-bold" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href={contactDetails.fiverr} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-panel hover:glass-panel-hover flex items-center justify-center text-foreground-secondary hover:text-emerald-400 transition-all font-black text-sm" title="Fiverr">
                fi
              </a>
              <a href={contactDetails.portfolio} target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl glass-panel hover:glass-panel-hover flex items-center justify-center text-foreground-secondary hover:text-accent transition-all font-black text-sm" title="Portfolio">
                ✦
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
