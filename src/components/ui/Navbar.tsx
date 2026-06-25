"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false); // Close mobile menu if scrolling down
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#featured-work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border border-transparent'}`}>
          <a href="#" className="text-xl sm:text-2xl font-black text-foreground tracking-tight uppercase">
            YOUSUF<span className="text-primary">.</span>ALI
          </a>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-foreground-secondary">
            {navLinks.map((link) => (
               <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-foreground transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:block">
            <a href="#contact">
              <Button variant="primary" className="!px-5 !py-2.5 !text-xs uppercase font-bold tracking-wider !rounded-lg hover:shadow-lg hover:shadow-primary/20">
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer bg-surface/50 hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 12H20M4 6H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full px-4 sm:px-6 pt-2 pb-6 z-40 lg:hidden"
          >
            <div className="bg-surface/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-3 text-center shadow-2xl">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-foreground-secondary hover:text-foreground transition-colors py-3 block border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4">
                <Button variant="primary" className="w-full !rounded-xl !py-3.5 uppercase tracking-wider font-bold">
                  Hire Me
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
