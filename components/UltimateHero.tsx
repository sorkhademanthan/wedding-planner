"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

export default function UltimateHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  // Clean entry animation - respecting motion preferences
  useEffect(() => {
    if (!isLoaded) {
      const tl = gsap.timeline({ 
        defaults: { ease: "power3.out" },
        // Skip animations if user prefers reduced motion
        duration: prefersReducedMotion ? 0 : undefined
      });

      // Fade in
      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: prefersReducedMotion ? 0 : 0.6 }
      );

      if (!prefersReducedMotion) {
        // Decorative line
        tl.fromTo(
          ".deco-accent",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
          0.3
        );

        // Subtitle
        tl.fromTo(
          ".subtitle-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        );

        // Main headline - clean fade, NO BLUR
        tl.fromTo(
          ".headline-line",
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out"
          },
          0.7
        );

        // Description
        tl.fromTo(
          ".description-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.5
        );

        // CTAs
        tl.fromTo(
          ".cta-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.8
        );

        // Stats
        tl.fromTo(
          ".stat-item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          2.1
        );
      } else {
        // Instant show for reduced motion
        gsap.set([".deco-accent", ".subtitle-text", ".headline-line", ".description-text", ".cta-buttons", ".stat-item"], {
          opacity: 1,
          y: 0,
          scaleX: 1
        });
      }

      setIsLoaded(true);
    }
  }, [isLoaded, prefersReducedMotion]);

  // Mouse tracking for subtle gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-ivory"
      aria-label="Wedding planning services hero section"
      role="banner"
    >
      {/* Clean gradient background - no blur */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-ivory via-champagne/20 to-romance/20"
          style={{
            backgroundPosition: `${mousePosition.x * 20}% ${mousePosition.y * 20}%`,
            backgroundSize: '120% 120%',
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent" 
               style={{ 
                 backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
               }}
          />
        </div>
      </div>

      {/* Elegant floating orbs - static (no animation to prevent blur) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(232,213,213,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Main content - Centered with better hierarchy */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full"
      >
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Top badge */}
          <motion.div 
            className="subtitle-text inline-flex items-center gap-3 px-6 py-3 rounded-full bg-charcoal/5 backdrop-blur-sm border border-charcoal/5 mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-charcoal/60 font-light">
              Luxury Wedding Planning
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs text-charcoal/50 font-light">Est. 2014</span>
          </motion.div>

          {/* Decorative accent line */}
          <div className="flex justify-center mb-12">
            <div className="deco-accent h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Main headline - Responsive, accessible, clean */}
          <div className="mb-8 sm:mb-12">
            <h1 className="font-serif text-charcoal mb-6">
              <div className="headline-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[1.1] sm:leading-[1] tracking-tight mb-3 sm:mb-4">
                Where love stories
              </div>
              <div className="headline-line text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[1.1] sm:leading-[1] tracking-tight mb-3 sm:mb-4">
                become{" "}
                <span className="relative inline-block">
                  <span className="font-script text-gold">timeless</span>
                  <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-2" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,5 Q100,0 200,5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
                  </svg>
                </span>
              </div>
              <div className="headline-line font-script text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gold/80">
                celebrations
              </div>
            </h1>
          </div>

          {/* Description */}
          <motion.p 
            className="description-text text-xl lg:text-2xl text-charcoal/70 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            We craft weddings that feel like art—designed intimately, exclusively for you.
            <br />
            <span className="text-charcoal/50 text-lg">From the first yes to the last dance.</span>
          </motion.p>

          {/* CTA Buttons - Accessible & responsive */}
          <motion.div className="cta-buttons flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            {/* Primary CTA */}
            <Link 
              href="/contact"
              className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-charcoal overflow-hidden transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory"
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
                whileHover={!prefersReducedMotion ? { x: 5 } : {}}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>

              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                initial={{ scaleX: 0 }}
                whileHover={!prefersReducedMotion ? { scaleX: 1 } : {}}
                transition={{ duration: 0.4 }}
                aria-hidden="true"
              />
            </Link>

            {/* Secondary CTA */}
            <Link 
              href="/portfolio"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-6 border border-charcoal/20 hover:border-gold focus:border-gold transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ivory"
              aria-label="View our wedding portfolio"
            >
              <span className="text-xs sm:text-sm tracking-[0.1em] uppercase font-light text-charcoal group-hover:text-gold group-focus:text-gold transition-colors duration-300">
                View Portfolio
              </span>
              <motion.svg 
                className="w-3 sm:w-4 h-3 sm:h-4 text-charcoal group-hover:text-gold group-focus:text-gold transition-colors duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={!prefersReducedMotion ? { x: 3 } : {}}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Trust indicators / Stats */}
          <motion.div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="stat-item">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gold">★★★★★</span>
              </div>
              <p className="text-xs text-charcoal/50 tracking-wider uppercase">150+ Five-Star Reviews</p>
            </div>
            
            <div className="stat-item h-8 w-px bg-charcoal/10" />
            
            <div className="stat-item">
              <p className="text-2xl font-serif text-gold mb-1">200+</p>
              <p className="text-xs text-charcoal/50 tracking-wider uppercase">Couples Served</p>
            </div>
            
            <div className="stat-item h-8 w-px bg-charcoal/10" />
            
            <div className="stat-item">
              <p className="text-2xl font-serif text-gold mb-1">10</p>
              <p className="text-xs text-charcoal/50 tracking-wider uppercase">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile, visible on larger screens */}
      <div
        className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <motion.div 
          className="flex flex-col items-center gap-4"
          animate={!prefersReducedMotion ? { y: [0, 10, 0] } : {}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-charcoal/30 tracking-[0.25em] uppercase font-light">
            Discover More
          </span>
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-charcoal/20 to-transparent" />
        </motion.div>
      </div>

      {/* Decorative corner frames - responsive */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l border-t border-gold/10" aria-hidden="true" />
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r border-t border-gold/10" aria-hidden="true" />
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-8 sm:w-16 h-8 sm:h-16 border-l border-b border-gold/10" aria-hidden="true" />
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-16 h-8 sm:h-16 border-r border-b border-gold/10" aria-hidden="true" />
    </section>
  );
}
