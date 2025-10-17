"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import Iridescence from "./Iridescence";

export default function WorldClassHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // World-class GSAP timeline - respecting motion preferences
  useEffect(() => {
    if (!isLoaded) {
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        duration: prefersReducedMotion ? 0 : undefined
      });

      // Fade in hero
      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: prefersReducedMotion ? 0 : 0.4 }
      );

      if (!prefersReducedMotion) {
        // Decorative elements cascade
        tl.fromTo(
          ".deco-line-1",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1, ease: "power2.inOut" },
          0.2
        );

        // Subtitle appears first (unique approach)
        tl.fromTo(
          ".pre-headline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.4
        );

        // Main headline - word by word (removed blur for performance)
        tl.fromTo(
          ".headline-word",
          { 
            opacity: 0, 
            y: 60,
          },
          { 
            opacity: 1, 
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
          },
          0.6
        );

        // Description
        tl.fromTo(
          ".description",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          1.4
        );

        // CTA Group
        tl.fromTo(
          ".cta-group",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "back.out(1.2)" },
          1.8
        );

        // Right visual element
        tl.fromTo(
          ".visual-element",
          { opacity: 0, scale: 0.9, x: 100 },
          { opacity: 1, scale: 1, x: 0, duration: 1.5, ease: "power3.out" },
          0.8
        );

        // Floating accents
        tl.fromTo(
          ".floating-accent",
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 1, stagger: 0.15, ease: "back.out(1.5)" },
          1.5
        );

        // Scroll indicator
        tl.fromTo(
          ".scroll-indicator",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 1 },
          2.5
        );
      } else {
        // Instant show for reduced motion
        gsap.set([".deco-line-1", ".pre-headline", ".headline-word", ".description", ".cta-group", ".visual-element", ".floating-accent", ".scroll-indicator"], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          scaleX: 1,
        });
      }

      setIsLoaded(true);
    }
  }, [isLoaded, prefersReducedMotion]);

  return (
    <Iridescence className="relative min-h-screen overflow-hidden bg-ivory">
      <section 
        ref={heroRef}
        className="relative min-h-screen w-full"
        aria-label="Wedding planning hero section"
        role="banner"
      >
        {/* Sophisticated gradient layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ivory via-champagne/5 to-romance/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/3 to-transparent" />
        </div>

        {/* Floating orbs - static (no parallax to prevent blur) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] rounded-full bg-gradient-to-br from-gold/5 via-coral/5 to-transparent blur-2xl sm:blur-3xl"
          />
          <div
            className="absolute bottom-0 -left-20 sm:-left-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-gradient-to-tr from-sage/5 via-romance/5 to-transparent blur-2xl sm:blur-3xl"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-to-br from-champagne/10 to-transparent blur-xl sm:blur-2xl"
          />
        </div>

        {/* Main content - Asymmetric golden ratio layout */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 min-h-screen">
          <div className="grid lg:grid-cols-12 gap-16 min-h-screen items-center py-32 lg:py-0">
            
            {/* LEFT: Content - 7 columns (58.33% - Golden ratio) */}
            <div 
              className="lg:col-span-7 space-y-12"
            >
              {/* Decorative line */}
              <div className="flex items-center gap-4 sm:gap-6">
                <motion.div 
                  className="deco-line-1 h-px w-12 sm:w-20 bg-gradient-to-r from-gold to-gold/50"
                  style={{ transformOrigin: "left" }}
                  aria-hidden="true"
                />
                <motion.p className="pre-headline text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-charcoal/50 font-light">
                  Est. 2014
                </motion.p>
              </div>

              {/* Main headline - Responsive & accessible */}
              <div>
                <h1 className="space-y-2">
                  <div className="overflow-hidden">
                    <span className="headline-word block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-charcoal leading-[0.95] sm:leading-[0.9] tracking-tight" style={{ transformOrigin: "bottom" }}>
                      Where
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="headline-word block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-charcoal leading-[0.95] sm:leading-[0.9] tracking-tight" style={{ transformOrigin: "bottom" }}>
                      love stories
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="headline-word block font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] sm:leading-[0.9] tracking-tight" style={{ transformOrigin: "bottom" }}>
                      become{" "}
                      <span className="font-script text-gold relative inline-block">
                        timeless
                        <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M0,7 Q100,0 200,7" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </h1>
              </div>

              {/* Description - Editorial style */}
              <motion.div 
                className="description space-y-6 max-w-xl"
              >
                <p className="text-xl lg:text-2xl text-charcoal/70 font-light leading-relaxed">
                  We craft weddings that feel like art—<br />
                  <span className="text-charcoal">designed intimately, exclusively for you.</span>
                </p>
                <div className="flex items-center gap-4 text-sm text-charcoal/50">
                  <span>★★★★★</span>
                  <span className="h-3 w-px bg-charcoal/20" />
                  <span>200+ couples</span>
                  <span className="h-3 w-px bg-charcoal/20" />
                  <span>10 years</span>
                </div>
              </motion.div>

              {/* CTAs - Accessible & responsive */}
              <motion.div className="cta-group flex flex-wrap items-center gap-4 sm:gap-6">
                {/* Primary CTA */}
                <Link 
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-charcoal overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory transition-all duration-300 hover:scale-105 focus:scale-105"
                  aria-label="Start planning your wedding - contact us"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full group-focus:translate-x-full transition-transform duration-1000" aria-hidden="true" />
                  
                  <span className="relative text-ivory text-xs sm:text-sm tracking-[0.15em] uppercase font-light z-10">
                    Begin Your Story
                  </span>
                  
                  <motion.svg 
                    className="relative w-4 sm:w-5 h-4 sm:h-5 text-ivory z-10"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={!prefersReducedMotion ? { x: 5 } : {}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>

                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                    initial={{ scaleX: 0 }}
                    whileHover={!prefersReducedMotion ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    aria-hidden="true"
                  />
                </Link>

                {/* Secondary CTA */}
                <Link 
                  href="/portfolio"
                  className="group relative inline-flex items-center gap-2 sm:gap-3 text-charcoal hover:text-gold focus:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory px-2 py-2 -mx-2"
                  aria-label="View our wedding portfolio"
                >
                  <span className="text-xs sm:text-sm tracking-[0.1em] uppercase font-light border-b border-charcoal/20 group-hover:border-gold group-focus:border-gold transition-colors duration-300 pb-1">
                    View Our Work
                  </span>
                  <motion.svg 
                    className="w-3 sm:w-4 h-3 sm:h-4"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={!prefersReducedMotion ? { x: 3 } : {}}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Visual element - 5 columns (41.67% - Golden ratio) */}
            <div 
              className="lg:col-span-5 relative hidden lg:block"
            >
              <div className="visual-element relative aspect-[3/4] max-w-[500px] ml-auto">
                {/* Main visual container */}
                <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-gradient-to-br from-romance/20 via-champagne/30 to-sage/20">
                  {/* Placeholder for image - replace with real wedding photo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-12">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-coral/20 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="font-script text-3xl text-gold/60">
                        Your Story Here
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative frame */}
                  <div className="absolute inset-8 border border-ivory/30 rounded-[32px] pointer-events-none" />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  className="floating-accent absolute -top-6 sm:-top-12 -left-6 sm:-left-12 w-20 sm:w-32 h-20 sm:h-32 opacity-40"
                  animate={!prefersReducedMotion ? { rotate: 360, scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      fill="url(#grad1)" 
                      d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,84,-5.3,83C-21.4,82,-42.8,77,-58.6,66.8C-74.4,56.6,-84.6,41.2,-88.5,24.4C-92.4,7.6,-90,-10.6,-82.8,-25.2C-75.6,-39.8,-63.6,-50.8,-49.8,-58C-36,-65.2,-18,-68.6,-0.5,-67.7C17,-66.8,34,-61.6,44.7,-76.4Z" 
                      transform="translate(100 100)"
                      opacity="0.6"
                    />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 0.5 }} />
                        <stop offset="100%" style={{ stopColor: '#E8A59C', stopOpacity: 0.3 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                <motion.div
                  className="floating-accent absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24"
                  animate={!prefersReducedMotion ? { 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  } : {}}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full rounded-full border border-gold/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-gold/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Hidden on mobile */}
        <div
          className="scroll-indicator absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          aria-hidden="true"
        >
          <motion.div 
            className="flex flex-col items-center gap-4"
            animate={!prefersReducedMotion ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs text-charcoal/30 tracking-[0.25em] uppercase font-light">
              Discover
            </span>
            <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-charcoal/20 via-charcoal/10 to-transparent" />
          </motion.div>
        </div>

        {/* Decorative corner elements - responsive */}
        <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-l border-t border-gold/10 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-r border-b border-gold/10 pointer-events-none" aria-hidden="true" />
      </section>
    </Iridescence>
  );
}
