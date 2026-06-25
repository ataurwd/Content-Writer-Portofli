"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { workExperienceData } from '../../data/content';

export function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-surface/30">
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 space-y-12">
          {workExperienceData.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-primary border-4 border-background ring-2 ring-primary/30" />
              
              <div className="glass-panel p-6 sm:p-8 hover:glass-panel-hover transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="text-sm font-medium text-foreground-secondary/80 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start md:self-auto">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4 text-sm sm:text-base text-foreground-secondary/90 leading-relaxed list-none">
                  {exp.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary text-xl leading-none mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
