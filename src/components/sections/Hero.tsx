"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { heroData, contactDetails } from '../../data/content';

export function Hero() {
  const { name, tagline, title1, title2, description, roles, highlights } = heroData;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-background">
      
      {/* Background gradients and grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[150px] pointer-events-none animate-float-medium" />

      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center z-10">
        
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-white/10 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="text-sm font-bold text-accent tracking-wide uppercase">{tagline}</span>
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground leading-[1.2]">
            {title1} <br />
            <span className="text-gradient">{title2}</span>
          </h1>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-foreground-secondary font-medium max-w-3xl leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        {/* Roles Chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {roles.map((role, idx) => (
            <div key={idx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-foreground/90 backdrop-blur-sm">
              {role}
            </div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 text-sm md:text-base font-bold text-foreground/80"
        >
          {highlights.map((highlight, idx) => (
            <React.Fragment key={idx}>
              <span className="text-accent">{highlight}</span>
              {idx !== highlights.length - 1 && (
                <span className="hidden sm:inline-block text-white/20">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Clean Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#featured-work">
            <Button variant="primary" className="!rounded-xl !px-8 !py-4 !text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/25">
              View Work
            </Button>
          </a>
          <a href={contactDetails.resume} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="!rounded-xl !px-8 !py-4 !text-sm font-bold uppercase tracking-wider">
              Download Resume
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" className="!rounded-xl !px-8 !py-4 !text-sm font-bold uppercase tracking-wider bg-transparent border-white/20 hover:bg-white/5">
              Hire Me
            </Button>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
