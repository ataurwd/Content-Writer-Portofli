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
        className="mx-auto max-w-3xl text-center clay-card p-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">Ready to Elevate Your Content?</h2>
        <p className="text-lg text-foreground-secondary mb-8 max-w-xl mx-auto">
          Whether you need a complete strategy overhaul or high-converting copy, let's discuss how we can achieve your goals.
        </p>
        <form className="space-y-6 max-w-md mx-auto text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-2xl bg-background border border-black/5 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary text-foreground" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-2xl bg-background border border-black/5 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary text-foreground" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
            <textarea id="message" rows={4} placeholder="How can I help you?" className="w-full px-4 py-3 rounded-2xl bg-background border border-black/5 shadow-inner focus:outline-none focus:ring-2 focus:ring-primary text-foreground"></textarea>
          </div>
          <Button variant="primary" className="w-full">
            Book a Consultation
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
