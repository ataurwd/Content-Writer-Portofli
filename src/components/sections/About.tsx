"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-surface-alt">
      <div className="mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6"
        >
          About The Strategist
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-foreground/80 leading-7"
          >
            <p>
              With half a decade of deep involvement in digital content and marketing strategy, my philosophy is simple: Content must serve a purpose. Whether it's to educate, entertain, or convert, every word must earn its place.
            </p>
            <p>
              I specialize in bridging the gap between creative storytelling and data-driven SEO strategy, ensuring your brand's voice doesn't just echo, but resonates with the right audience.
            </p>
            <Button variant="secondary" className="mt-4 rounded-md">
              Download Resume
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="acrylic rounded-xl p-8 shadow-med border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">Core Competencies</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-center gap-2">✓ B2B & B2C Content Strategy</li>
              <li className="flex items-center gap-2">✓ SEO & Keyword Optimization</li>
              <li className="flex items-center gap-2">✓ Audience Persona Development</li>
              <li className="flex items-center gap-2">✓ Conversion Copywriting</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
