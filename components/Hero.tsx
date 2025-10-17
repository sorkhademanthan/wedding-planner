"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundGradient?: string;
  minHeight?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  backgroundGradient = "from-romance via-champagne to-blush",
  minHeight = "min-h-[70vh]"
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden pt-20`}
      aria-label="Page hero section"
      role="banner"
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} opacity-40`}
        aria-hidden="true"
      />
      
      <motion.div
        initial={!prefersReducedMotion ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center px-6 sm:px-8 max-w-4xl w-full"
      >
        {subtitle && (
          <motion.p 
            className="font-script text-3xl sm:text-4xl md:text-5xl text-gold mb-4"
            initial={!prefersReducedMotion ? { opacity: 0 } : {}}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2, duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <motion.p 
            className="text-lg sm:text-xl text-charcoal/70 font-light leading-relaxed max-w-2xl mx-auto"
            initial={!prefersReducedMotion ? { opacity: 0 } : {}}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.4, duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            {description}
          </motion.p>
        )}
        {children && (
          <motion.div 
            className="mt-8"
            initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : {}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.6, duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
