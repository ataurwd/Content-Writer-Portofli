"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techDocs } from '../../data/content';

export function TechDoc() {
  const [selectedPlugin, setSelectedPlugin] = useState(techDocs[0].pluginName);

  const currentDocItem = techDocs.find(d => d.pluginName === selectedPlugin);

  // Helper to choose file icon styling
  const getFileIcon = (topic: string) => {
    if (topic.includes("Setup") || topic.includes("Configuration")) {
      return (
        <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
    if (topic.includes("Historical") || topic.includes("times") || topic.includes("integration")) {
      return (
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h-2v-2.243a8.013 8.013 0 01-4-7.757z" />
        </svg>
      );
    }
    // Standard User Guides
    return (
      <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  };

  return (
    <section id="tech-doc" className="py-24 px-6 lg:px-8 bg-background relative overflow-hidden">
      
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-primary/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-accent tracking-widest px-3.5 py-1.5 rounded-lg border border-black/5 bg-white select-none">
            Technical Documentation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-foreground mt-4 tracking-tight">
            User Guides & Technical Manuals
          </h2>
          <p className="text-sm font-semibold text-foreground-secondary mt-3 max-w-xl mx-auto">
            Step-by-step setup documents and widget configurations created to reduce support tickets and accelerate onboarding.
          </p>
          <div className="h-1.5 w-16 bg-accent/20 rounded-full mt-4 mx-auto" />
        </div>

        {/* Directory Explorer Card */}
        <div className="glass-panel overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[400px] bg-white/40">
          
          {/* Left panel: Plugins Directory tree */}
          <div className="md:col-span-4 bg-white/20 border-b md:border-b-0 md:border-r border-black/5 p-6 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Products Directory
            </h3>
            
            <div className="space-y-1.5">
              {techDocs.map((doc) => {
                const isSelected = doc.pluginName === selectedPlugin;
                return (
                  <button
                    key={doc.pluginName}
                    onClick={() => setSelectedPlugin(doc.pluginName)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg font-bold text-xs flex items-center justify-between cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-slate-900 text-white shadow-sm' 
                        : 'hover:bg-white/60 text-foreground-secondary hover:text-foreground'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary' : 'bg-foreground-secondary/40'}`} />
                      {doc.pluginName}
                    </span>
                    <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? 'translate-x-0.5' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: File node details list */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest">
                  Documentation Files ({currentDocItem?.topics.length || 0})
                </h4>
                <span className="text-[9px] font-black text-accent uppercase tracking-widest">
                  Format: Step-by-Step
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPlugin}
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -5 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2.5"
                >
                  {currentDocItem?.topics.map((topic, index) => (
                    <motion.div
                      key={topic}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className="p-3.5 rounded-xl bg-white/80 border border-black/5 hover:border-accent/40 duration-200 transition-all flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg border border-black/5 bg-slate-50 flex items-center justify-center shadow-inner">
                          {getFileIcon(topic)}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-foreground">{topic}</p>
                          <p className="text-[9px] font-semibold text-slate-400">
                            docs/{selectedPlugin.toLowerCase().replace(" ", "-")}/{topic.toLowerCase().replace(" ", "-")}.md
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] font-black uppercase text-emerald-600 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-lg select-none">
                        Active
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Footer note of directory */}
            <div className="pt-6 mt-6 border-t border-black/5 text-[10px] font-semibold text-foreground-secondary flex flex-wrap items-center justify-between gap-4">
              <span>All documents have been validated through ShapedPlugin LLC customer review panels.</span>
              <span className="text-primary font-black uppercase tracking-wider">HTML & Markdown Outputs</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
