"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, featuredWork } from '../../data/content';
import { Button } from '../ui/Button';

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(featuredWork[0].id);

  // Get current case study based on active tab
  const getActiveCaseStudy = () => {
    if (activeTab === 'freelance') return caseStudies.find(c => c.id === 'ecommerce-copywriting');
    if (activeTab === 'ecommerce') return caseStudies.find(c => c.id === 'ecommerce-copywriting');
    if (activeTab === 'wordpress-saas') return caseStudies.find(c => c.id === 'saas-content');
    return caseStudies.find(c => c.id === 'ai-workflow');
  };

  const activeStudy = getActiveCaseStudy() || caseStudies[0];
  const activeCategoryDesc = featuredWork.find(w => w.id === activeTab)?.description || "";

  return (
    <section id="featured-work" className="py-24 px-6 lg:px-8 relative bg-background">
      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-primary tracking-widest px-4 py-2 rounded-full border border-primary/20 bg-primary/5 select-none inline-block">
            Metrics-Driven Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mt-6 tracking-tight uppercase">
            Featured Work
          </h2>
          <div className="h-1 w-20 bg-primary/30 rounded-full mt-6 mx-auto" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 w-fit mx-auto p-1.5 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-md shadow-sm">
          {featuredWork.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 text-xs font-bold rounded-xl cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-foreground-secondary hover:text-foreground hover:bg-surface'
                }`}
              >
                {tab.category}
              </button>
            );
          })}
        </div>

        {/* Case Study Output Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass-panel p-8 md:p-12 bg-surface/40 relative border border-white/10 shadow-2xl"
            >
              {/* Category and Subtitle */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <span className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border border-primary/20 bg-primary/10 text-primary`}>
                    {activeStudy.category}
                  </span>
                  <h3 className="text-2xl font-black text-foreground mt-4 tracking-tight">
                    {activeStudy.title}
                  </h3>
                </div>
                
                {/* Results Mini-Badge */}
                <div className="px-4 py-2.5 rounded-xl border border-white/5 bg-surface/80 font-black text-xs text-foreground flex items-center gap-2 select-none shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Verified Impact</span>
                </div>
              </div>

              {/* Subcategory Description */}
              <p className="text-sm font-bold text-foreground-secondary italic mb-8 pb-6 border-b border-white/5">
                "{activeCategoryDesc}"
              </p>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-sm text-foreground-secondary font-medium leading-relaxed">
                    {activeStudy.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    The Solution
                  </h4>
                  <p className="text-sm text-foreground-secondary font-medium leading-relaxed">
                    {activeStudy.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Outcomes Row */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase text-primary tracking-widest">
                    Key Outcomes
                  </h4>
                  <p className="text-lg font-black text-foreground">
                    {activeStudy.results}
                  </p>
                </div>
                <div>
                  <a href="#contact">
                    <Button variant="secondary" className="!rounded-lg !px-6 !py-3 !text-xs font-bold uppercase tracking-wider">
                      Discuss Similar Project
                    </Button>
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
