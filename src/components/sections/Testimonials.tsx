"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-8 bg-background">
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
              className="clay-card p-8 text-left relative"
            >
              {/* Decorative quotation mark */}
              <div className="absolute -top-4 -left-4 w-12 h-12 clay-card-sm flex items-center justify-center bg-primary text-white text-2xl font-serif">
                "
              </div>
              <p className="text-foreground-secondary italic mb-6 mt-2">"{test.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{test.name}</p>
                <p className="text-sm font-semibold text-accent">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
