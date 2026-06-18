"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-[2rem] px-6 py-3 transition-all duration-300 ${scrolled ? 'clay-card-sm bg-surface/80 backdrop-blur-md' : 'bg-transparent'}`}>
          <a href="#" className="text-2xl font-bold text-foreground">
            C<span className="text-primary">.</span>Strategist
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-foreground-secondary">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          </nav>
          <div className="hidden md:block">
             <Button variant="primary" className="!px-6 !py-2 !text-sm">Hire Me</Button>
          </div>
          {/* Mobile Menu Button placeholder */}
          <button className="md:hidden text-foreground">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
