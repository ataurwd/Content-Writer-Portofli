"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { aboutData, experienceHighlights } from '../../data/content';

export function About() {
  const { intro, story1, story2, story3 } = aboutData;

  // Icon selector based on highlight label
  const getHighlightIcon = (label: string) => {
    if (label.includes("Copywriting")) {
      return (
        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    }
    if (label.includes("Fiverr")) {
      return (
        <svg className="w-4 h-4 text-amber-500 fill-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.17 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.81.588-1.81h4.906a1 1 0 00.95-.69l1.519-4.674z" />
        </svg>
      );
    }
    if (label.includes("Clients")) {
      return (
        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    }
    if (label.includes("ShapedPlugin")) {
      return (
        <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    }
    if (label.includes("AI-Assisted")) {
      return (
        <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-2.243a8.013 8.013 0 01-4-7.757z" />
        </svg>
      );
    }
    // E-commerce
    return (
      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    );
  };

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-secondary/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            About Me & Highlights
          </motion.h2>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 text-foreground-secondary font-medium leading-relaxed text-sm sm:text-base"
          >
            <p className="text-lg sm:text-xl font-black text-foreground leading-snug">
              {intro}
            </p>
            <p>{story1}</p>
            <p>{story2}</p>
            <p className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-primary font-bold text-xs sm:text-sm">
              ✨ {story3}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a href="#contact">
                <Button variant="primary" className="!rounded-lg !px-5 !py-2.5 !text-xs font-bold uppercase tracking-wider">Hire Yousuf</Button>
              </a>
              <a href="#featured-work">
                <Button variant="secondary" className="!rounded-lg !px-5 !py-2.5 !text-xs font-bold uppercase tracking-wider">Explore Portfolio</Button>
              </a>
            </div>
          </motion.div>
          
          {/* Highlights Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {experienceHighlights.map((highlight, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-6 flex flex-col justify-between h-full bg-white/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl sm:text-2xl font-black text-foreground tracking-tight">{highlight.metric}</div>
                    <div className="w-8 h-8 rounded-lg border border-black/5 bg-white flex items-center justify-center shadow-sm">
                      {getHighlightIcon(highlight.label)}
                    </div>
                  </div>
                  <h3 className="text-xs font-black text-foreground uppercase tracking-wider mb-2">{highlight.label}</h3>
                  <p className="text-[11px] text-foreground-secondary leading-relaxed font-semibold">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
