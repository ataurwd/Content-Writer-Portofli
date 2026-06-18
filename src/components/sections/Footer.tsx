import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 text-center bg-surface-card border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Content Marketing Portfolio. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="text-foreground/60 hover:text-accent transition-colors">Medium</a>
        </div>
      </div>
    </footer>
  );
}
