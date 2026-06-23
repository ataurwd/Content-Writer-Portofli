import React from 'react';
import { contactDetails } from '../../data/content';

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-white/40 border-t border-black/5 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-left">
          <p className="text-lg font-black text-foreground">
            Yousuf<span className="text-primary">.</span>Ali
          </p>
          <p className="text-xs font-bold text-foreground-secondary mt-1">
            Copywriter • Technical Writer • SEO Blogger • AI Specialist
          </p>
        </div>
        
        <p className="text-xs font-black text-foreground-secondary order-last md:order-none">
          © {new Date().getFullYear()} Yousuf Ali. All rights reserved.
        </p>
        
        <div className="flex gap-5 text-xs font-black text-foreground-secondary">
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={contactDetails.fiverr} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Fiverr</a>
          <a href={contactDetails.portfolio} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
