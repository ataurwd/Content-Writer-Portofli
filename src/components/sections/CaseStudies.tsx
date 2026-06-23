"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies, featuredWork } from '../../data/content';
import { Button } from '../ui/Button';

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState(featuredWork[0].id);

  // Get current case study based on active tab
  const getActiveCaseStudy = () => {
    if (activeTab === 'fiverr') return caseStudies.find(c => c.id === 'fiverr-success');
    if (activeTab === 'ecommerce') return caseStudies.find(c => c.id === 'ecommerce-content');
    if (activeTab === 'wordpress-saas') return caseStudies.find(c => c.id === 'wordpress-blog');
    if (activeTab === 'tech-doc') return caseStudies.find(c => c.id === 'documentation');
    return caseStudies.find(c => c.id === 'ai-workflow');
  };

  const activeStudy = getActiveCaseStudy();
  const activeCategoryDesc = featuredWork.find(w => w.id === activeTab)?.description || "";

  // Helper to color active category labels
  const getLabelColorClass = (tabId: string) => {
    if (tabId === 'fiverr') return 'text-primary border-primary/20 bg-primary/5';
    if (tabId === 'ecommerce') return 'text-amber-600 border-amber-500/20 bg-amber-500/5';
    if (tabId === 'wordpress-saas') return 'text-indigo-600 border-indigo-500/20 bg-indigo-500/5';
    if (tabId === 'tech-doc') return 'text-teal-600 border-teal-500/20 bg-teal-500/5';
    return 'text-indigo-600 border-indigo-500/20 bg-indigo-500/5';
  };

  return (
    <section id="featured-work" className="py-24 px-6 lg:px-8 relative bg-grid">
      <div className="mx-auto max-w-6xl">
        
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            Featured Work & Case Studies
          </motion.h2>
          <p className="text-xs font-black text-foreground-secondary uppercase tracking-widest mt-2">
            Metrics-driven writing and strategies
          </p>
          <div className="h-1.5 w-16 bg-primary/20 rounded-full mt-3 mx-auto" />
        </div>

        {/* Tab Filters (Segmented Control style) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto p-1.5 rounded-xl border border-black/5 bg-white/40 backdrop-blur-md">
          {featuredWork.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'text-foreground-secondary hover:text-foreground hover:bg-white/50'
                }`}
              >
                {tab.category}
              </button>
            );
          })}
          {/* AI Workflow Tab */}
          <button
            onClick={() => setActiveTab('ai-workflow')}
            className={`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-200 ${
              activeTab === 'ai-workflow' 
                ? 'bg-slate-900 text-white shadow-sm' 
                : 'text-foreground-secondary hover:text-foreground hover:bg-white/50'
            }`}
          >
            AI Workflow
          </button>
        </div>

        {/* Case Study Output Panel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeStudy && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-8 md:p-12 bg-white/55 relative border border-black/5"
              >
                {/* Category and Subtitle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <span className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg border ${getLabelColorClass(activeTab)}`}>
                      {activeStudy.category}
                    </span>
                    <h3 className="text-2xl font-black text-foreground mt-3 tracking-tight">
                      {activeStudy.title}
                    </h3>
                  </div>
                  
                  {/* Results Mini-Badge */}
                  <div className="px-4 py-2.5 rounded-lg border border-black/5 bg-white font-black text-xs text-foreground flex items-center gap-2 select-none shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Case Study</span>
                  </div>
                </div>

                {/* Subcategory Description */}
                <p className="text-xs sm:text-sm font-bold text-foreground-secondary italic mb-8 pb-6 border-b border-black/5">
                  "{activeCategoryDesc || 'AI-powered outlining and drafting backed by human logic for premium content scale.'}"
                </p>

                {/* Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      The Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground-secondary font-semibold leading-relaxed">
                      {activeStudy.challenge}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground-secondary font-semibold leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Bottom Outcomes Row */}
                <div className="mt-8 pt-8 border-t border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h4 className="text-[10px] font-black uppercase text-primary tracking-widest">
                      Key Outcomes
                    </h4>
                    <p className="text-base sm:text-lg font-black text-foreground">
                      {activeStudy.results}
                    </p>
                  </div>
                  <div>
                    <a href="#contact">
                      <Button variant="secondary" className="!rounded-lg !px-5 !py-2.5 !text-xs font-bold uppercase tracking-wider">
                        Discuss Similar Project
                      </Button>
                    </a>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
