"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-accent tracking-widest px-4 py-2 rounded-full border border-accent/20 bg-accent/5 select-none inline-block">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mt-6 tracking-tight uppercase">
            Testimonials
          </h2>
          <div className="h-1 w-20 bg-accent/30 rounded-full mt-6 mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 flex flex-col bg-surface/30 border border-white/10 hover:border-primary/30 transition-all rounded-2xl shadow-xl"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Highlight */}
              <h3 className="text-lg font-black text-foreground mb-3 leading-snug">
                "{testimonial.highlight}"
              </h3>

              {/* Description */}
              {testimonial.description && (
                <p className="text-sm font-medium text-foreground-secondary leading-relaxed mt-auto">
                  {testimonial.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
