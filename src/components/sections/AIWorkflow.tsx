"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aiWorkflowSteps } from '../../data/content';

export function AIWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase mb-6"
          >
            AI Content <span className="text-primary">Workflow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-foreground-secondary font-medium leading-relaxed"
          >
            AI is integrated into my content creation process to improve efficiency, research, and content quality while maintaining human oversight and editorial control.
          </motion.p>
        </div>

        {/* Horizontal Pipeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {aiWorkflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Numbered Node */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-surface border-4 border-background ring-2 ring-white/10 flex items-center justify-center text-xl sm:text-2xl font-black text-primary mb-6 shadow-xl group-hover:ring-primary/50 group-hover:bg-primary/10 transition-all z-10">
                  {step.phase}
                </div>
                
                {/* Content Card */}
                <div className="glass-panel p-6 w-full h-full min-h-[140px] flex flex-col items-center justify-center">
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">{step.title}</h3>
                </div>

                {/* Connecting Line (Mobile/Tablet) */}
                {idx !== aiWorkflowSteps.length - 1 && (
                  <div className="block lg:hidden absolute -bottom-6 left-1/2 w-0.5 h-6 bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-sm font-bold text-primary">
            ✨ All outputs are manually reviewed and refined before delivery.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
