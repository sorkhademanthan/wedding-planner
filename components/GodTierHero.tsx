"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import FloatingPetals from "./FloatingPetals";
import Button from "./Button";

export default function GodTierHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Entry Animation - respecting motion preferences
  useEffect(() => {
    if (!isLoaded) {
      const tl = gsap.timeline({
        duration: prefersReducedMotion ? 0 : undefined
      });

      // Background reveal with veil effect
      tl.fromTo(
        ".hero-background",
        { scale: 1.05, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: prefersReducedMotion ? 0 : 1.2, 
          ease: "power2.out" 
        }
      );

      if (!prefersReducedMotion) {
        // Logo with gold underline sweep
        tl.fromTo(
          ".hero-logo",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          0.2
        );

        tl.fromTo(
          ".logo-underline",
          { width: 0 },
          { width: "100%", duration: 0.6, ease: "power2.inOut" },
          0.3
        );

        // Headline - word by word fade in
        tl.fromTo(
          ".hero-headline .word",
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: "power2.out" 
          },
          0.4
        );

        // Subheadline dissolve
        tl.fromTo(
          ".hero-subheadline",
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power1.in" },
          0.9
        );

        // CTA with shimmer
        tl.fromTo(
          ".hero-cta",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
          1.2
        );

        // Floating accent motion
        tl.fromTo(
          ".floating-accent",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
          1.5
        );
      } else {
        // Instant show for reduced motion
        gsap.set([".hero-logo", ".logo-underline", ".hero-headline .word", ".hero-subheadline", ".hero-cta", ".floating-accent"], {
          opacity: 1,
          y: 0,
          scale: 1,
          width: "100%"
        });
      }

      setIsLoaded(true);
    }
  }, [isLoaded, prefersReducedMotion]);



  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory"
      aria-label="Wedding planning hero section"
      role="banner"
    >
      {/* Stage 3: Floating Petals - Signature Motion */}
      <FloatingPetals />

      {/* Background - static (no fade) */}
      <div
        className="hero-background absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-romance via-champagne to-blush"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Frosted glass overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/60 via-ivory/20 to-transparent" />
      </div>

      {/* Content Container - Responsive & accessible */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32"
      >
        <div className="max-w-2xl">
          {/* Logo with gold underline */}
          <div className="hero-logo mb-12 sm:mb-16">
            <h2 className="font-script text-3xl sm:text-4xl text-gold mb-2">Forever Moments</h2>
            <div className="logo-underline h-px bg-gradient-to-r from-gold to-transparent" />
          </div>

          {/* Headline - Responsive & accessible */}
          <h1 className="hero-headline font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1]">
            <span className="word inline-block">Where </span>
            <span className="word inline-block">love </span>
            <span className="word inline-block">stories </span>
            <br />
            <span className="word inline-block">become </span>
            <span className="word inline-block">timeless </span>
            <br />
            <span className="word inline-block">celebrations</span>
          </h1>

          {/* Subheadline with frosted backdrop */}
          <div className="hero-subheadline relative">
            <div className="absolute inset-0 bg-ivory/40 backdrop-blur-sm rounded-2xl -m-3 sm:-m-4" aria-hidden="true" />
            <p className="relative text-lg sm:text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8 sm:mb-12">
              We plan, design, and orchestrate weddings that feel like art — made only for you.
            </p>
          </div>

          {/* CTA Button with glow - accessible */}
          <div className="hero-cta">
            <Button 
              href="/contact"
              className="group relative text-sm sm:text-base"
              ariaLabel="Start planning your wedding"
            >
              <span className="relative z-10">Start Planning Your Forever</span>
              
              {/* Gold glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gold/20 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={!prefersReducedMotion ? { opacity: 1, scale: 1.2 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Accent - Gold Ring/Heart - optimized */}
      <motion.div
        className="floating-accent absolute bottom-16 sm:bottom-32 right-8 sm:right-32 hidden md:block"
        animate={!prefersReducedMotion ? {
          y: [0, -15, 0],
          rotate: [0, 2, 0, -2, 0],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="40" 
            cy="40" 
            r="35" 
            stroke="url(#gold-gradient)" 
            strokeWidth="2" 
            opacity="0.4"
          />
          <defs>
            <linearGradient id="gold-gradient" x1="0" y1="0" x2="80" y2="80">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReducedMotion ? 0 : 2, duration: prefersReducedMotion ? 0 : 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-charcoal/40 text-xs sm:text-sm tracking-wider"
          animate={!prefersReducedMotion ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
