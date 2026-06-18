"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const stats = [
    { value: 5, prefix: "", suffix: "+", label: "Years Experience" },
    { value: 150, prefix: "", suffix: "+", label: "Articles Published" },
    { value: 5, prefix: "$", suffix: "M+", label: "Revenue Generated" },
    { value: 32, prefix: "", suffix: "%", label: "Avg CTR Increase" }
  ];

  return (
    <section className="py-12 px-6 lg:px-8 bg-background relative z-20 -mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="clay-card-sm p-6 text-center flex flex-col items-center justify-center"
          >
            <div className="text-4xl font-extrabold text-primary mb-2">
              <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="text-sm font-medium text-foreground-secondary">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
