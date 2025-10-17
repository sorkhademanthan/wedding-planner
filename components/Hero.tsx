"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  backgroundGradient = "from-romance via-champagne to-blush"
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className={`absolute inset-0 bg-gradient-to-br ${backgroundGradient} opacity-40`} />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {subtitle && (
          <p className="font-script text-4xl md:text-5xl text-gold mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-serif text-6xl md:text-7xl text-charcoal mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-charcoal/70 font-light leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </motion.div>
    </section>
  );
}
