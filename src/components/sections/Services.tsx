"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/content';

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Expertise & Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70"
          >
            Strategic solutions designed to elevate your brand's digital presence.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-surface-card p-6 rounded-lg shadow-low hover:shadow-med transition-shadow duration-300 border border-black/5 dark:border-white/5 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
