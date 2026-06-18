"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-surface-alt">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16"
        >
          Client Success
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((test, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="acrylic p-8 rounded-xl shadow-low text-left border border-white/10"
            >
              <p className="text-foreground/80 italic mb-6">"{test.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{test.name}</p>
                <p className="text-sm text-accent">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
