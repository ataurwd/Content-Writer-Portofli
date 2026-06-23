"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'clay';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-transform duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'minimal-btn',
    secondary: 'minimal-btn-secondary',
    clay: 'glass-panel px-6 py-2.5 text-foreground hover:scale-102 transition-transform duration-200',
  };

  const ref = useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull (15% strength)
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    // Reset position
    ref.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <motion.button 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
