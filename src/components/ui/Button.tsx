import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-md text-center leading-tight font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-[#C41E3A] text-white hover:bg-[#9B1830] focus:ring-[#C41E3A]',
    secondary:
    'bg-[#F5E6D3] text-[#C41E3A] hover:bg-[#E8D5C0] focus:ring-[#F5E6D3]',
    outline:
    'border-2 border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A]/5 focus:ring-[#C41E3A]',
    ghost: 'text-[#C41E3A] hover:bg-[#C41E3A]/10 focus:ring-[#C41E3A]'
  };
  const sizes = {
    sm: 'min-h-9 py-2 px-4 text-sm',
    md: 'min-h-11 py-2.5 px-5 text-[15px] md:px-6 md:text-base',
    lg: 'min-h-12 py-3 px-6 text-base md:min-h-14 md:px-8 md:text-lg'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>
      
      {children}
    </motion.button>);

}