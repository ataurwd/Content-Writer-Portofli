"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aiWorkflowSteps } from '../../data/content';

export function AIWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-primary/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-secondary/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-primary tracking-widest px-3.5 py-1.5 rounded-lg border border-black/5 bg-white select-none">
            AI Content Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-4 tracking-tight">
            Human-in-the-Loop Content Pipeline
          </h2>
          <p className="text-sm font-semibold text-foreground-secondary mt-3 max-w-xl mx-auto">
            I leverage artificial intelligence tools strategically to maximize research, brainstorming, and structuring speed, while executing thorough human reviews and polish.
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full mt-4 mx-auto" />
        </div>

        {/* Workflow steps pipeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Horizontal line connector for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] w-[75%] h-[1px] border-t border-dashed border-slate-300 -z-10" />

          {aiWorkflowSteps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-6 flex flex-col items-center text-center bg-white/40"
            >
              {/* Step indicator circle */}
              <div className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center font-black text-xs text-primary mb-5 select-none shadow-sm">
                {step.phase}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-black text-foreground mb-4 tracking-tight">
                {step.title}
              </h3>

              {/* Action Bullets */}
              <ul className="space-y-2 text-[11px] text-foreground-secondary font-semibold w-full">
                {step.items.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center justify-center gap-2 p-2 rounded-lg bg-white/60 border border-black/5 hover:border-primary/20 duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note disclaimer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-xl border border-primary/10 bg-primary/3 text-center max-w-2xl mx-auto"
        >
          <p className="text-[11px] sm:text-xs font-bold text-primary leading-relaxed">
            🛡️ <strong>Manual Refinement Policy:</strong> Artificial intelligence assists in structural framework and ideation speed. However, every finished article, description, or documentation sheet is meticulously revised, line-edited, and brand-checked manually.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
