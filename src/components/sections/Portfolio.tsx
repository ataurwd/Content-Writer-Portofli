"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/content';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-surface-alt">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70"
          >
            Metrics-driven case studies demonstrating tangible ROI.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-surface-card shadow-med hover:shadow-high transition-all duration-300 cursor-pointer border border-black/5 dark:border-white/5"
            >
              <div className="h-48 bg-gradient-to-br from-accent/20 to-surface-alt flex items-center justify-center border-b border-black/5 dark:border-white/5">
                 <span className="text-2xl font-bold text-accent px-4 text-center">{project.metric}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/80">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
