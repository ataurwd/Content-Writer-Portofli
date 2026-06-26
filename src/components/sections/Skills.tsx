"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData, toolsData } from '../../data/content';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative light-section-alt border-y border-slate-100">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase"
          >
            Skills & <span className="text-primary">Expertise</span>
          </motion.h2>
        </div>

        <div className="space-y-20">
          
          {/* Skills & Expertise Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </span>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-md bg-surface border border-white/5 text-sm font-medium text-foreground-secondary/90 hover:bg-white/10 hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Platforms Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Tools & Platforms</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsData.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface/50 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors text-center"
                >
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 text-primary">{group.category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {group.tools.map((tool, i) => (
                      <span key={i} className="text-sm font-semibold text-foreground-secondary bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
