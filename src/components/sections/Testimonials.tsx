"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/2 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-secondary/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            Fiverr Client Feedback
          </motion.h2>
          <p className="text-xs font-black text-foreground-secondary uppercase tracking-widest mt-2">
            Selected testimonials from 125+ five-star reviews
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full mt-3 mx-auto" />
        </div>

        {/* Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((test, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-6 md:p-8 flex flex-col justify-between bg-white/40 relative h-full"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg border border-black/5 bg-white flex items-center justify-center text-primary text-base font-black select-none shadow-sm">
                “
              </div>
              
              <div className="mt-4 mb-6">
                <h3 className="text-sm font-black text-foreground mb-3 leading-snug">
                  {test.highlight}
                </h3>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {test.description}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5 mt-auto">
                <div className="w-7 h-7 rounded-lg border border-black/5 bg-slate-50 flex items-center justify-center font-black text-[10px] text-primary shadow-inner">
                  FC
                </div>
                <div>
                  <p className="text-[10px] font-black text-foreground">Verified Client</p>
                  <p className="text-[9px] font-bold text-amber-500 flex items-center gap-0.5">
                    ★ ★ ★ ★ ★ <span className="text-[8px] text-slate-400 font-semibold">(5.0)</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
