"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-background">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center acrylic p-12 rounded-2xl shadow-high border border-black/5 dark:border-white/5"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Ready to Elevate Your Content?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
          Whether you need a complete strategy overhaul or high-converting copy, let's discuss how we can achieve your goals.
        </p>
        <form className="space-y-4 max-w-md mx-auto text-left">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-surface-card border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent text-foreground" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-surface-card border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent text-foreground" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" rows={4} placeholder="How can I help you?" className="w-full px-4 py-3 rounded-md bg-surface-card border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent text-foreground"></textarea>
          </div>
          <Button variant="primary" className="w-full rounded-md mt-2">
            Start a Project
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
