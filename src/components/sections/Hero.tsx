"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-8 bg-background md:pt-20 min-h-[70vh]">
      {/* Floating Clay Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 clay-card rounded-full hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 clay-card rounded-full hidden lg:block"
      />

      <div className="mx-auto max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-primary clay-card-sm tracking-widest uppercase"
        >
          Content Marketing Strategist
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl mb-6 leading-tight"
        >
          Driving Growth Through <br className="hidden sm:block" />
          <span className="text-gradient">Strategic Content</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg leading-8 text-foreground-secondary max-w-2xl mx-auto mb-10"
        >
          I transform complex ideas into high-converting campaigns, SEO-driven strategies, and engaging digital narratives.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <Button variant="primary" className="w-full sm:w-auto">Let's Talk Strategy</Button>
          <Button variant="clay" className="w-full sm:w-auto">View My Work</Button>
        </motion.div>
      </div>
    </section>
  );
}
