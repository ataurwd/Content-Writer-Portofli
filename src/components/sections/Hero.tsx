"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { heroData } from '../../data/content';

export function Hero() {
  const { name, taglines, description, highlights } = heroData;

  // Abbreviated tags for the clean subtitle row
  const taglineText = taglines.join("  /  ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-8 bg-grid overflow-hidden">
      
      {/* Soft futuristic background gradients */}
      <div className="absolute top-10 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/2 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          <div className="space-y-4">
            {/* Minimal Specialty Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-black uppercase tracking-widest text-primary/80"
            >
              {taglineText}
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6.5xl font-black tracking-tight text-foreground leading-[1.05]"
            >
              Yousuf Ali
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground-secondary font-medium max-w-xl leading-relaxed"
            >
              I create clear, structured, and conversion-focused content for SaaS, WordPress, and eCommerce products.
            </motion.p>
          </div>

          {/* Clean Horizontal Highlights Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-x-8 gap-y-4 pt-2 border-t border-black/5"
          >
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs font-black text-foreground uppercase tracking-wider">
                  {highlight.split(" of ")[0].split(" Fiverr ")[0].split(" global ")[0].split(" & ")[0]}
                </span>
                <span className="text-[11px] font-semibold text-foreground-secondary mt-0.5">
                  {highlight.replace(/^\S+\s+/, "")}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Clean Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a href="#featured-work">
              <Button variant="primary" className="!rounded-lg !px-6 !py-2.5 !text-xs font-bold uppercase tracking-wider">
                Explore Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" className="!rounded-lg !px-6 !py-2.5 !text-xs font-bold uppercase tracking-wider">
                Get in Touch
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Futuristic visual: The Content Engineering Console */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[420px] rounded-xl border border-black/8 bg-slate-900 shadow-xl overflow-hidden font-mono text-[11px] text-slate-300"
          >
            {/* Console Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-slate-500 font-bold tracking-tight">editor/launch-post.md</span>
              <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                optimized
              </span>
            </div>

            {/* Editor Body */}
            <div className="p-4 space-y-3.5 min-h-[180px] text-left">
              <div>
                <span className="text-slate-500">1</span> <span className="text-slate-400 font-bold">---</span>
              </div>
              <div>
                <span className="text-slate-500">2</span> <span className="text-indigo-400 font-semibold">title:</span> <span className="text-emerald-400">"WordPress Post Grid Integration"</span>
              </div>
              <div>
                <span className="text-slate-500">3</span> <span className="text-indigo-400 font-semibold">author:</span> <span className="text-slate-300">Yousuf Ali</span>
              </div>
              <div>
                <span className="text-slate-500">4</span> <span className="text-indigo-400 font-semibold">keywords:</span> <span className="text-slate-300">[Post Grid, Gutenberg Block, Smart Post]</span>
              </div>
              <div>
                <span className="text-slate-500">5</span> <span className="text-slate-400 font-bold">---</span>
              </div>
              <div>
                <span className="text-slate-500">6</span> <span className="text-amber-400"># Introduction</span>
              </div>
              <div>
                <span className="text-slate-500">7</span> <span className="text-slate-400 leading-normal">
                  Are you looking to display your WordPress posts dynamically? In this guide, we break down how to configure Smart Post templates to boost conversions.
                </span>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
              <span>UTF-8 / Markdown</span>
              <span>Lines: 7 / Words: 128</span>
            </div>

            {/* Floating SEO Analyzer panel */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 w-[160px] p-4 glass-panel bg-white/95 border border-black/8 shadow-lg text-left font-sans"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-black/5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-[9px] font-black uppercase text-foreground tracking-wider">SEO Analyzer</span>
              </div>
              
              <div className="space-y-2 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary font-semibold">SEO Index</span>
                  <span className="font-black text-emerald-500">99 / 100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary font-semibold">Readability</span>
                  <span className="font-black text-primary">Grade 9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary font-semibold">CTR Projection</span>
                  <span className="font-black text-foreground">+32%</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
