"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { wordpressSaaSPlugins } from '../../data/content';

export function WordPressSaaS() {
  // Helper to assign a specific theme color class to each plugin card
  const getThemeColor = (name: string) => {
    switch (name) {
      case "Smart Post":
        return {
          iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
          tagBg: "bg-blue-500/10 text-blue-500 border-blue-500/20"
        };
      case "Smart Tabs":
        return {
          iconBg: "bg-purple-500/10 text-purple-500 border-purple-500/20",
          tagBg: "bg-purple-500/10 text-purple-500 border-purple-500/20"
        };
      case "Easy Accordion":
        return {
          iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
          tagBg: "bg-teal-500/10 text-teal-400 border-teal-500/20"
        };
      case "Location Weather":
        return {
          iconBg: "bg-amber-500/10 text-amber-500 border-amber-500/20",
          tagBg: "bg-amber-500/10 text-amber-500 border-amber-500/20"
        };
      default: // WooGallery
        return {
          iconBg: "bg-rose-500/10 text-rose-500 border-rose-500/20",
          tagBg: "bg-rose-500/10 text-rose-500 border-rose-500/20"
        };
    }
  };

  return (
    <section id="wordpress-saas" className="py-24 px-6 lg:px-8 relative overflow-hidden bg-background">
      
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl z-10 relative">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase text-secondary tracking-widest px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 select-none inline-block">
            WordPress & SaaS Content
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-6 uppercase"
          >
            Writing at ShapedPlugin LLC
          </motion.h2>
          <div className="h-1 w-20 bg-secondary/30 rounded-full mt-6 mx-auto" />
        </div>

        {/* Plugins Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wordpressSaaSPlugins.map((plugin, idx) => {
            const colors = getThemeColor(plugin.name);
            return (
              <motion.div
                key={plugin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="glass-panel glass-panel-hover p-6 md:p-8 flex flex-col justify-between h-full bg-surface/30 border border-white/10"
              >
                <div>
                  
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Simulated plugin logo badge */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border bg-surface/80 ${colors.iconBg}`}>
                      {plugin.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-base font-black text-foreground tracking-tight">
                        {plugin.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase text-foreground-secondary tracking-wider">
                        WordPress Plugin
                      </span>
                    </div>
                  </div>

                  {/* Plugin Description */}
                  <p className="text-sm text-foreground-secondary font-medium leading-relaxed mb-6">
                    {plugin.description}
                  </p>
                </div>

                {/* Bottom deliverables pills */}
                <div>
                  <h4 className="text-[10px] font-black uppercase text-foreground-secondary tracking-widest mb-3">
                    Deliverables Created
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plugin.creations.map((item, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 text-[11px] font-bold rounded-lg border ${colors.tagBg}`}
                      >
                        ✓ {item.replace(" articles", "").replace(" content", "").replace(" explanations", "")}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
