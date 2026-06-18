"use client";

import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "SaaS Growth Campaign",
    client: "TechFlow",
    challenge: "Low organic visibility and high churn rate due to poor onboarding content.",
    solution: "Developed a comprehensive content cluster strategy and revamped the entire email onboarding sequence.",
    results: "+150% Organic Traffic, 20% Churn Reduction"
  },
  {
    title: "E-commerce Conversion Optimization",
    client: "StyleStore",
    challenge: "High cart abandonment and low time-on-page for product descriptions.",
    solution: "Rewrote 500+ product descriptions utilizing buyer psychology and implemented targeted A/B testing.",
    results: "32% Increase in CTR, +$1.2M Annual Revenue"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Deep Dive: Case Studies
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="clay-card p-8 md:p-10"
            >
              <div className="mb-6">
                <span className="text-sm font-bold text-accent tracking-widest uppercase block mb-1">{study.client}</span>
                <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">The Challenge</h4>
                  <p className="text-foreground-secondary">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">The Solution</h4>
                  <p className="text-foreground-secondary">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-black/5">
                  <h4 className="text-sm font-bold text-primary uppercase mb-2">Key Results</h4>
                  <p className="text-xl font-bold text-foreground">{study.results}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
