"use client";

import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-foreground tracking-tight uppercase">
            YOUSUF<span className="text-primary">.</span>ALI
          </span>
        </div>

        <div className="text-sm font-medium text-foreground-secondary text-center md:text-left">
          &copy; {currentYear} Yousuf Ali. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
