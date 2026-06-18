import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'acrylic';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover active:bg-accent focus-visible:ring-accent shadow-sm',
    secondary: 'bg-surface-alt text-foreground hover:bg-surface-alt/80 active:bg-surface-alt shadow-sm',
    acrylic: 'acrylic border border-white/20 text-foreground hover:bg-surface-card/80 shadow-md backdrop-blur-md',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
