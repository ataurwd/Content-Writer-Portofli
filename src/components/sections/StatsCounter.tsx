"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../../data/content';

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: { end: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function StatsCounter() {
  return (
    <section className="relative py-12 px-6 lg:px-8 z-20 -mt-16 sm:-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel glass-panel-hover p-6 text-center flex flex-col items-center justify-center bg-white/60"
          >
            <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-xs md:text-sm font-extrabold text-foreground-secondary uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
