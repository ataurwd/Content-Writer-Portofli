"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { testimonialsData, contactDetails } from '../../data/content';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-6 flex flex-col justify-between h-full hover:glass-panel-hover group"
            >
              <div className="flex items-start justify-between gap-3 mb-4 border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-foreground text-base group-hover:text-primary transition-colors">{review.name}</span>
                    <a 
                      href={contactDetails.fiverr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-semibold hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-0.5 shrink-0"
                      title="Verify live review on Fiverr"
                    >
                      <span>Fiverr</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <div className="text-xs text-foreground-secondary mt-1 flex flex-wrap items-center gap-2">
                    <span>{review.country}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block" />
                    <span className={review.type.includes("Repeat") ? "text-accent font-semibold" : "text-primary font-medium"}>
                      {review.type}
                    </span>
                  </div>
                </div>
                <div className="text-amber-400 text-xs tracking-widest shrink-0 mt-1">
                  {"★".repeat(review.stars)}
                </div>
              </div>

              <p className="text-foreground-secondary/90 text-sm leading-relaxed italic my-auto">
                "{review.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href={contactDetails.fiverr} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="!rounded-xl !px-8 !py-4 !text-xs font-bold uppercase tracking-wider border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 shadow-lg shadow-emerald-500/5">
              Check All 125+ Reviews on Fiverr ↗
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
