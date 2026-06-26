"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { featuredWorkData } from '../../data/content';

export function FeaturedWork() {
  return (
    <section id="featured-work" className="py-24 px-6 lg:px-8 relative bg-background">
      <div className="max-w-7xl mx-auto z-10 relative space-y-24">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase"
          >
            Featured Work & <span className="text-primary">Projects</span>
          </motion.h2>
        </div>

        {/* E-Commerce Copywriting Projects */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">E-Commerce Copywriting</h3>
            <p className="text-foreground-secondary/90">SEO product descriptions, collection content, and marketing copy.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorkData.ecommerce.map((project, idx) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 flex flex-col hover:glass-panel-hover group"
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h4>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">{project.industry}</p>
                </div>
                <div className="text-sm font-medium text-foreground-secondary/80 mb-4 bg-white/5 inline-block px-3 py-1 rounded-md self-start border border-white/5">
                  Role: {project.role}
                </div>
                <ul className="space-y-2 mt-auto text-sm text-foreground-secondary/90">
                  {project.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </div>
        </div>

        {/* WordPress & SaaS Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">WordPress & SaaS Content</h3>
            <p className="text-foreground-secondary/90">Educational content, feature tutorials, and product guides.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorkData.wordpressSaaS.map((project: any, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 flex flex-col hover:glass-panel-hover group"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-fit">
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.name}</h4>
                </a>
                <div className="text-xs font-medium text-foreground-secondary/80 mb-4 bg-white/5 inline-block px-2.5 py-1 rounded border border-white/5 w-fit">
                  {project.role}
                </div>
                <ul className="space-y-2 text-sm text-foreground-secondary/90 mb-4">
                  {project.deliverables.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 my-4 pt-3 border-t border-white/5">
                  <p className="text-[11px] font-bold text-foreground-secondary uppercase tracking-wider">Featured Articles:</p>
                  {project.articles?.map((art: any, aIdx: number) => (
                    <a
                      key={aIdx}
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs text-primary/90 hover:text-primary hover:underline line-clamp-1 flex items-center gap-1.5 transition-colors"
                    >
                      <span className="shrink-0">↗</span>
                      <span className="truncate">{art.title}</span>
                    </a>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 border-t border-white/10 text-xs font-bold text-accent uppercase tracking-wider hover:underline inline-flex items-center gap-1"
                >
                  <span>View Author Profile</span>
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Documentation */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Technical Documentation</h3>
            <p className="text-foreground-secondary/90">Structured user guides, API documentation, and knowledge bases.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorkData.technicalDocs.map((doc, idx) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 sm:p-8"
              >
                <h4 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-white/10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  </span>
                  {doc.name}
                </h4>
                <div className="space-y-3">
                  {doc.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-lg bg-surface/50 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all text-sm font-medium text-foreground-secondary hover:text-foreground group flex items-center justify-between"
                    >
                      {link.label}
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">→</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
