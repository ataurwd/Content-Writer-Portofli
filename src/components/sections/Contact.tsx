"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { contactDetails } from '../../data/content';
import { Button } from '../ui/Button';

export function Contact() {
  const { email, linkedin, portfolio, fiverr } = contactDetails;

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-surface/20 relative overflow-hidden">
      <div className="mx-auto max-w-6xl z-10 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-black uppercase text-primary tracking-widest px-4 py-2 rounded-full border border-primary/20 bg-primary/5 select-none inline-block mb-6">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight uppercase leading-[1.1]">
                Let's Start Your <br/><span className="text-gradient">Content Journey.</span>
              </h2>
              <p className="mt-6 text-foreground-secondary font-medium leading-relaxed max-w-md text-sm sm:text-base">
                Whether you need SEO blog articles, technical documentation, or high-converting eCommerce copy, I'm here to help turn your ideas into measurable results.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <a href={`mailto:${email}`} className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:bg-surface/60 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-foreground-secondary tracking-wider mb-0.5">Email Me</div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{email}</div>
                </div>
              </a>

              <a href={fiverr} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:bg-surface/60 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-foreground-secondary tracking-wider mb-0.5">Hire Me On Fiverr</div>
                  <div className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">125+ Five Star Reviews</div>
                </div>
              </a>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground-secondary hover:bg-white/10 hover:text-foreground transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-foreground-secondary hover:bg-white/10 hover:text-foreground transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 bg-surface/40 border border-white/10 relative"
          >
            <h3 className="text-2xl font-black text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary">Name</label>
                  <input type="text" className="w-full bg-surface/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary">Email</label>
                  <input type="email" className="w-full bg-surface/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary">Project Type</label>
                <select className="w-full bg-surface/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option value="seo">SEO Blog Articles</option>
                  <option value="copywriting">Copywriting</option>
                  <option value="technical">Technical Documentation</option>
                  <option value="ecommerce">E-commerce Descriptions</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-foreground-secondary">Message</label>
                <textarea rows={4} className="w-full bg-surface/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button variant="primary" className="w-full !rounded-xl !py-3.5 !text-sm font-bold uppercase tracking-wider mt-4">
                Send Message
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
