"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { aboutData, contactDetails } from '../../data/content';

export function About() {
  const { intro, body } = aboutData;

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden light-section">
      
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl z-10 relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
        </div>

        {/* Biography Text Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-12 space-y-6 text-foreground-secondary font-medium leading-relaxed text-base sm:text-lg text-left shadow-2xl"
        >
          <h3 className="text-xl sm:text-3xl font-black text-foreground leading-snug border-l-4 border-primary pl-4">
            {intro}
          </h3>
          <div className="space-y-4 pt-2 text-foreground-secondary/90 leading-relaxed">
            <p>{body}</p>
          </div>
          <div className="pt-6 flex flex-wrap justify-start gap-4 border-t border-white/5">
            <a href="#contact">
              <Button variant="primary" className="!rounded-xl !px-8 !py-4 !text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                Hire Me
              </Button>
            </a>
            <a href={contactDetails.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="!rounded-xl !px-8 !py-4 !text-sm font-bold uppercase tracking-wider">
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
