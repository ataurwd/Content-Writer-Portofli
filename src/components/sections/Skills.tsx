"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/content';

export function Skills() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Content Writing")) {
      return (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    }
    if (category.includes("Technical")) {
      return (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
    if (category.includes("SaaS")) {
      return (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    }
    if (category.includes("E-commerce")) {
      return (
        <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    }
    // AI Content Systems
    return (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-2.243a8.013 8.013 0 01-4-7.757z" />
      </svg>
    );
  };

  const getPillColor = (category: string) => {
    if (category.includes("Content Writing")) return "bg-primary/10 text-primary border-primary/20";
    if (category.includes("Technical")) return "bg-accent/10 text-accent border-accent/20";
    if (category.includes("SaaS")) return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
    if (category.includes("E-commerce")) return "bg-amber-500/10 text-amber-500 border-amber-500/20";
    return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-surface/30 relative overflow-hidden">
      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-primary tracking-widest px-4 py-2 rounded-full border border-primary/20 bg-primary/5 select-none inline-block">
            Services & Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mt-6 tracking-tight uppercase">
            What I Do
          </h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full mt-6 mx-auto" />
        </div>

        {/* Services Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 flex flex-col bg-surface/30 border border-white/10 hover:border-primary/30 rounded-2xl shadow-xl transition-all"
            >
              
              {/* Category Icon */}
              <div className="w-14 h-14 rounded-2xl border border-white/5 bg-surface/80 flex items-center justify-center mb-6 shadow-inner">
                {getCategoryIcon(group.category)}
              </div>

              {/* Title */}
              <h3 className="text-lg font-black text-foreground mb-4 tracking-tight">
                {group.category}
              </h3>

              {/* Pills Stack */}
              <div className="flex flex-wrap gap-2 mt-auto w-full">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-colors duration-200 cursor-default select-none ${getPillColor(group.category)}`}
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
