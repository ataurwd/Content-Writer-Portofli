import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-8">
      {/* Background decorations for depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-accent)_0%,_transparent_50%)] opacity-20" />
      
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
          Driving Growth Through <br className="hidden sm:block" />
          <span className="text-accent">Strategic Content</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto mb-10">
          Content Marketing Expert with 5+ years of experience transforming complex ideas into high-converting campaigns, SEO-driven strategies, and engaging digital narratives.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Button variant="primary" className="rounded-md">
            Let's Talk Strategy
          </Button>
          <Button variant="acrylic" className="rounded-md">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
