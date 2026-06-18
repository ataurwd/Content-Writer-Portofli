"use client";

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: "2024 - Present", role: "Senior Content Strategist", company: "TechFlow", desc: "Lead a team of 4 writers, overseeing all organic search strategies and B2B content." },
  { year: "2022 - 2024", role: "SEO Content Lead", company: "InnovateX", desc: "Grew organic traffic by 150% over 18 months through targeted cluster strategies." },
  { year: "2019 - 2022", role: "Content Writer", company: "Freelance", desc: "Wrote high-converting landing pages and blog posts for diverse tech startups." }
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground sm:text-4xl mb-16 text-center"
        >
          Professional Journey
        </motion.h2>
        
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-8 space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-primary clay-card-sm border-2 border-surface z-10" />
              
              <div className="clay-card p-8">
                <span className="text-sm font-bold text-accent tracking-widest uppercase mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                <h4 className="text-md font-medium text-foreground-secondary mb-4">{item.company}</h4>
                <p className="text-foreground-secondary leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
