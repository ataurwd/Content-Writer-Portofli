"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { contactDetails } from '../../data/content';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactDetails.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const openRoles = [
    "Content Writing Roles",
    "Technical Documentation Roles",
    "SEO Blogging Roles",
    "SaaS Content Roles",
    "AI Content & Evaluation Roles"
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/2 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info and Roles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase text-primary tracking-widest px-3 py-1.5 rounded-lg border border-black/5 bg-white select-none">
                Let's Partner Up
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight leading-tight">
                Ready to Elevate Your Product Content?
              </h2>
              <p className="text-sm font-semibold text-foreground-secondary leading-relaxed">
                I am currently open for full-time roles, contract work, and strategic consultations in B2B SaaS, WordPress, and E-commerce.
              </p>
            </div>

            {/* Open Roles list */}
            <div className="space-y-2.5">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                Open for Opportunities in:
              </h3>
              {openRoles.map((role) => (
                <div key={role} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-md border border-black/5 bg-white flex items-center justify-center text-primary shadow-sm">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground">{role}</span>
                </div>
              ))}
            </div>

            {/* Copyable Email and Quick Links */}
            <div className="space-y-4 pt-4 border-t border-black/5">
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-black/8 bg-white/60 hover:bg-white duration-200 transition-colors text-xs font-bold text-foreground cursor-pointer shadow-sm"
                >
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{copied ? "Copied!" : contactDetails.email}</span>
                </button>
              </div>

              {/* Social Channels Icons Row */}
              <div className="flex items-center gap-2">
                <a 
                  href={contactDetails.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center hover:scale-105 duration-200 transition-transform shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4.5 h-4.5 text-sky-700 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a 
                  href={contactDetails.fiverr} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center hover:scale-105 duration-200 transition-transform shadow-sm"
                  aria-label="Fiverr Profile"
                >
                  <span className="text-emerald-500 font-extrabold text-base italic select-none">fi</span>
                </a>
                <a 
                  href={contactDetails.portfolio} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center hover:scale-105 duration-200 transition-transform shadow-sm"
                  aria-label="Personal Portfolio Website"
                >
                  <svg className="w-4.5 h-4.5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-10 bg-white/40"
            >
              <h3 className="text-xl font-black text-foreground mb-1 tracking-tight">Send a Message</h3>
              <p className="text-xs font-semibold text-foreground-secondary mb-6">Ask a question or request a service consultation.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black text-slate-500 mb-1.5 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="E.g., Sarah Jenkins" 
                    className="w-full px-4 py-2.5 rounded-lg bg-white/60 border border-black/8 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary text-xs sm:text-sm text-foreground font-bold duration-200 shadow-sm" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black text-slate-500 mb-1.5 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="E.g., sarah@techflow.com" 
                    className="w-full px-4 py-2.5 rounded-lg bg-white/60 border border-black/8 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary text-xs sm:text-sm text-foreground font-bold duration-200 shadow-sm" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black text-slate-500 mb-1.5 uppercase tracking-wider">Message Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Let me know how I can help you..." 
                    className="w-full px-4 py-2.5 rounded-lg bg-white/60 border border-black/8 focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary text-xs sm:text-sm text-foreground font-bold duration-200 shadow-sm"
                  />
                </div>

                <Button variant="primary" className="w-full !rounded-lg !py-2.5 !text-xs font-bold uppercase tracking-wider" type="submit">
                  {submitted ? "Message Sent! Thank you." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
