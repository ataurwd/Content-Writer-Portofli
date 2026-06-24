"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { aboutData, statsData } from '../../data/content';

export function About() {
  const { intro, story1, story2, story3 } = aboutData;

  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background">
      
      <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        <div className="text-center md:text-left mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase"
          >
            Delivering Long-Term Results <br/><span className="text-primary">Through Structured Content</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-16 items-center">
          
          {/* Biography Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl space-y-6 text-foreground-secondary font-medium leading-relaxed text-sm sm:text-base text-center md:text-left mx-auto"
          >
            <p className="text-lg sm:text-2xl font-black text-foreground leading-snug border-l-4 border-primary pl-4 text-left">
              {intro}
            </p>
            <div className="space-y-4 pt-4 text-foreground-secondary/90 text-left">
              <p>{story1}</p>
              <p>{story2}</p>
              {story3 && (
                <p className="p-4 rounded-xl bg-surface/50 border border-white/5 font-bold text-xs sm:text-sm text-foreground">
                  ✨ {story3}
                </p>
              )}
            </div>
            <div className="pt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact">
                <Button variant="primary" className="!rounded-lg !px-6 !py-3 !text-sm font-bold uppercase tracking-wider">
                  Hire Yousuf
                </Button>
              </a>
              <a href="#featured-work">
                <Button variant="secondary" className="!rounded-lg !px-6 !py-3 !text-sm font-bold uppercase tracking-wider">
                  Explore Portfolio
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Stats Grid Column */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {statsData.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 sm:p-10 flex flex-col items-center justify-center text-center h-full bg-surface/30 border border-white/10 hover:border-primary/30 rounded-2xl shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <h3 className="text-[10px] sm:text-xs font-bold text-foreground-secondary uppercase tracking-widest">{stat.label}</h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
