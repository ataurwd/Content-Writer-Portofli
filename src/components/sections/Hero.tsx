"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_50%)] opacity-20" />
      
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6"
        >
          Driving Growth Through <br className="hidden sm:block" />
          <span className="text-accent">Strategic Content</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Content Marketing Expert with 5+ years of experience transforming complex ideas into high-converting campaigns, SEO-driven strategies, and engaging digital narratives.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-x-6"
        >
          <Button variant="primary" className="rounded-md">Let's Talk Strategy</Button>
          <Button variant="acrylic" className="rounded-md">View My Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
