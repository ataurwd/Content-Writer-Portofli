import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center bg-surface border-t border-black/5">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-semibold text-foreground-secondary">
          © {new Date().getFullYear()} C.Strategist. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors font-medium">LinkedIn</a>
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors font-medium">Twitter</a>
          <a href="#" className="text-foreground-secondary hover:text-primary transition-colors font-medium">Medium</a>
        </div>
      </div>
    </footer>
  );
}
