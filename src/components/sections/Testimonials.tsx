"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 relative bg-surface/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase mb-6"
          >
            Trusted by 50+ <span className="text-primary">Global Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-foreground-secondary font-medium leading-relaxed"
          >
            Real feedback from business owners, entrepreneurs, and brands I've worked with worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="text-primary text-4xl leading-none mb-4 font-serif">"</div>
                <p className="text-foreground-secondary text-sm sm:text-base leading-relaxed italic mb-8">
                  {review.quote}
                </p>
              </div>
              <div className="flex items-end justify-between border-t border-white/5 pt-6 mt-auto">
                <div>
                  <div className="font-bold text-foreground text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs text-foreground-secondary mt-1 flex items-center gap-2">
                    <span>{review.country}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-primary">{review.type}</span>
                  </div>
                </div>
                <div className="text-amber-400 text-sm tracking-widest">
                  {"★".repeat(review.stars)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
