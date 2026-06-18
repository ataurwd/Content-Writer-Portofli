"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { processStepsData } from '../../data/content';

export function Process() {
  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16"
        >
          How I Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 -z-10 -translate-y-1/2" />
          {processStepsData.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface-card flex items-center justify-center shadow-med mb-4 border border-black/5 dark:border-white/5">
                <span className="text-xl font-bold text-accent">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/70 max-w-[200px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
