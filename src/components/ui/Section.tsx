import React from 'react';
import { motion } from 'framer-motion';
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}
export function Section({
  id,
  className = '',
  children,
  background = 'white'
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-[#FBF8F5]',
    dark: 'bg-[#C41E3A]'
  };
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgStyles[background]} ${className}`}>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}>
          
          {children}
        </motion.div>
      </div>
    </section>);

}