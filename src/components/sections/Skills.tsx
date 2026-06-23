"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/content';

export function Skills() {
  // Select distinct icon styles for categories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Content Writing":
        return (
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case "Technical Writing":
        return (
          <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "E-commerce":
        return (
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      default: // AI Tools
        return (
          <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
    }
  };

  const getPillColor = (category: string) => {
    switch (category) {
      case "Content Writing":
        return "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10";
      case "Technical Writing":
        return "bg-accent/5 text-accent border-accent/10 hover:bg-accent/10";
      case "E-commerce":
        return "bg-amber-500/5 text-amber-700 border-amber-500/10 hover:bg-amber-500/10";
      default:
        return "bg-secondary/5 text-secondary border-secondary/10 hover:bg-secondary/10";
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-accent/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-foreground-secondary tracking-widest px-3.5 py-1.5 rounded-lg border border-black/5 bg-white select-none">
            Expertise Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-4 tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-sm font-semibold text-foreground-secondary mt-3 max-w-xl mx-auto">
            Categorized skills highlighting B2B SaaS, plugin documentation, store content management, and AI prompt engineering.
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full mt-4 mx-auto" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-6 flex flex-col items-center bg-white/40 h-full"
            >
              
              {/* Category Icon */}
              <div className="w-10 h-10 rounded-xl border border-black/5 bg-white flex items-center justify-center mb-5 shadow-sm">
                {getCategoryIcon(group.category)}
              </div>

              {/* Title */}
              <h3 className="text-sm font-black text-foreground mb-5 tracking-tight text-center">
                {group.category}
              </h3>

              {/* Pills Stack */}
              <div className="flex flex-wrap justify-center gap-1.5 mt-auto w-full">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1.5 text-[10px] font-bold rounded-lg border transition-colors duration-200 cursor-default select-none ${getPillColor(group.category)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
