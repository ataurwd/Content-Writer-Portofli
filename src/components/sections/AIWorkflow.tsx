"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aiWorkflowSteps } from '../../data/content';

export function AIWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 px-6 lg:px-8 bg-surface/30 relative overflow-hidden">
      <div className="mx-auto max-w-6xl z-10 relative">
        
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-primary tracking-widest px-4 py-2 rounded-full border border-primary/20 bg-primary/5 select-none inline-block">
            Proven Content Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mt-6 tracking-tight uppercase">
            My Workflow
          </h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full mt-6 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (visible on desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {aiWorkflowSteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-panel p-8 flex flex-col items-center bg-surface/50 border border-white/5 h-full hover:bg-surface/80 transition-colors text-center group">
                
                {/* Phase Number Badge */}
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-lg mb-6 shadow-[0_0_15px_rgba(91,103,241,0.2)] group-hover:scale-110 transition-transform">
                  {step.phase}
                </div>

                <h3 className="text-lg font-black text-foreground mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-3 w-full">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-sm font-medium text-foreground-secondary flex items-start justify-center gap-2">
                      <span className="text-emerald-500 mt-0.5">✓</span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
