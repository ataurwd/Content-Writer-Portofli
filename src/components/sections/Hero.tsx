"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { heroData } from '../../data/content';

export function Hero() {
  const { name, description, taglines } = heroData;

  const taglineText = taglines.join("  /  ");

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-8 overflow-hidden bg-background">
      
      {/* Background gradients and grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <div className="space-y-4">
            {/* Minimal Specialty Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-black uppercase tracking-widest text-primary"
            >
              {taglineText}
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-foreground leading-[1.1]"
            >
              Boost Your <br />
              <span className="text-gradient">Content Impact.</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground-secondary font-medium max-w-xl leading-relaxed"
            >
              Welcome to {name}'s Portfolio. {description}
            </motion.p>
          </div>

          {/* Clean Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="#featured-work">
              <Button variant="primary" className="!rounded-lg !px-6 !py-3 !text-sm font-bold uppercase tracking-wider">
                View Case Studies
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" className="!rounded-lg !px-6 !py-3 !text-sm font-bold uppercase tracking-wider">
                Book Consultation
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup Block */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel w-full max-w-[420px] rounded-2xl overflow-hidden p-6 relative border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-bold text-foreground">Content Dashboard</div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <div className="space-y-4">
              {/* Stat 1 */}
              <div className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-center justify-between hover:bg-surface/80 transition-colors">
                <div>
                  <div className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-1">Experience</div>
                  <div className="text-2xl font-black text-foreground">5+ Years</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-center justify-between hover:bg-surface/80 transition-colors">
                <div>
                  <div className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-1">Fiverr Success</div>
                  <div className="text-2xl font-black text-foreground">125+ Reviews</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-xl bg-surface/50 border border-white/5 flex items-center justify-between hover:bg-surface/80 transition-colors">
                <div>
                  <div className="text-xs font-semibold text-foreground-secondary uppercase tracking-wider mb-1">Global Clients</div>
                  <div className="text-2xl font-black text-foreground">50+ Satisfied</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
