"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

export default function AwardWinningHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true });

  // Cinematic entrance animation
  useEffect(() => {
    if (!isLoaded && heroRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Curtain reveal effect
      tl.fromTo(
        ".hero-curtain-left",
        { x: "0%" },
        { x: "-100%", duration: 1.2, ease: "power4.inOut" }
      );
      
      tl.fromTo(
        ".hero-curtain-right",
        { x: "0%" },
        { x: "100%", duration: 1.2, ease: "power4.inOut" },
        "<"
      );

      // Fade in background
      tl.fromTo(
        ".hero-background",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      );

      // Staggered text reveal
      tl.fromTo(
        ".hero-line",
        { 
          opacity: 0, 
          y: 100,
          rotateX: -45,
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out"
        },
        "-=0.6"
      );

      // Reveal description with mask effect
      tl.fromTo(
        ".hero-description",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power3.inOut" },
        "-=0.4"
      );

      // Float in CTAs
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
        "-=0.3"
      );

      // Shimmer effect on metallic elements
      tl.fromTo(
        ".hero-shimmer",
        { backgroundPosition: "200% center" },
        { backgroundPosition: "-200% center", duration: 2, ease: "none" },
        "-=0.5"
      );

      setIsLoaded(true);
    }
  }, [isLoaded]);



  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory"
      aria-label="Award-winning wedding planning services"
      role="banner"
    >
      {/* Cinematic curtains - warm tones */}
      <div className="hero-curtain-left absolute inset-0 bg-gradient-to-r from-champagne via-ivory to-romance z-50 pointer-events-none" />
      <div className="hero-curtain-right absolute inset-0 bg-gradient-to-l from-champagne via-ivory to-romance z-50 pointer-events-none" />

      {/* Sophisticated gradient background with warm palette */}
      <div className="hero-background absolute inset-0">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/40 via-ivory to-romance/30" />
        
        {/* Accent light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-coral/20 to-transparent opacity-40" />
        
        {/* Radial spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-gold/10 via-transparent to-transparent" />
        
        {/* Soft floating orbs */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blush/20 via-romance/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-radial from-sage/15 via-champagne/10 to-transparent blur-3xl" />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content */}
      <div 
        ref={contentRef}
        className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Content - 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Award badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-champagne/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal/70 font-light">
                Award-Winning Design • Est. 2014
              </span>
            </motion.div>

            {/* Main headline - Kinetic typography */}
            <div className="space-y-3" style={{ perspective: "1200px" }}>
              <div className="overflow-hidden">
                <h1 className="hero-line font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.92] tracking-[-0.02em] text-charcoal">
                  Creating
                </h1>
              </div>
              
              <div className="overflow-hidden">
                <h1 className="hero-line font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.92] tracking-[-0.02em] text-charcoal">
                  Timeless
                </h1>
              </div>
              
              <div className="overflow-hidden pt-2">
                <h1 className="hero-line relative inline-block">
                  <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[95px] text-transparent bg-clip-text bg-gradient-to-r from-gold via-coral to-gold hero-shimmer">
                    Love Stories
                  </span>
                </h1>
              </div>

              <div className="overflow-hidden pt-4">
                <p className="hero-line text-lg sm:text-xl md:text-2xl text-charcoal/55 font-light tracking-[0.02em] leading-relaxed">
                  One Celebration at a Time
                </p>
              </div>
            </div>

            {/* Description with elegant reveal */}
            <div className="hero-description max-w-xl">
              <p className="text-base sm:text-lg text-charcoal/65 font-light leading-[1.75] tracking-[0.01em]">
                We craft weddings that transcend the ordinary—<br className="hidden sm:block" />
                intimate celebrations designed exclusively for your love story,<br className="hidden md:block" /> 
                where every detail whispers of elegance and every moment<br className="hidden md:block" /> 
                becomes a cherished memory.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-11 h-11 rounded-full border-[2.5px] border-ivory bg-gradient-to-br from-coral/30 to-romance/30 flex items-center justify-center shadow-md"
                    >
                      <span className="text-sm text-coral">❤</span>
                    </div>
                  ))}
                </div>
                <div className="ml-1">
                  <p className="text-sm text-charcoal font-semibold leading-tight">200+ Couples</p>
                  <p className="text-xs text-charcoal/50 mt-0.5 tracking-wide">Served with Love</p>
                </div>
              </div>

              <div className="h-14 w-px bg-gradient-to-b from-transparent via-charcoal/15 to-transparent" />

              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-[18px] h-[18px] text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-charcoal font-semibold leading-tight">5.0 Rating</p>
                <p className="text-xs text-charcoal/50 mt-0.5 tracking-wide">150+ Reviews</p>
              </div>
            </div>

            {/* CTAs with magnetic effect */}
            <div className="flex flex-wrap items-center gap-5">
              {/* Primary CTA */}
              <Link 
                href="/contact"
                className="hero-cta group relative inline-flex items-center gap-3 px-9 py-[18px] bg-gradient-to-r from-gold via-coral to-gold overflow-hidden transition-all duration-500 hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:scale-[1.03] active:scale-[0.98]"
                aria-label="Start planning your wedding"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative text-ivory text-[13px] tracking-[0.12em] uppercase font-semibold z-10">
                  Begin Your Story
                </span>
                
                <svg 
                  className="relative w-[18px] h-[18px] text-ivory z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Secondary CTA */}
              <Link 
                href="/portfolio"
                className="hero-cta group relative inline-flex items-center gap-2.5 px-8 py-[18px] border-[1.5px] border-charcoal/15 hover:border-gold/60 transition-all duration-300 hover:bg-champagne/40 active:scale-[0.98]"
                aria-label="View our wedding portfolio"
              >
                <span className="text-[13px] tracking-[0.08em] uppercase font-medium text-charcoal/80 group-hover:text-gold transition-colors duration-300">
                  View Portfolio
                </span>
                <svg 
                  className="w-[15px] h-[15px] text-charcoal/60 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* RIGHT: Visual showcase - 5 columns */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-[3/4] max-w-[500px] ml-auto">
              
              {/* Main image container with sophisticated border */}
              <motion.div 
                className="relative w-full h-full rounded-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gold frame effect */}
                <div className="absolute inset-0 border-2 border-gold/30 z-10 pointer-events-none">
                  <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold/50" />
                  <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-gold/50" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-gold/50" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-gold/50" />
                </div>

                {/* Image placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-romance/40 via-champagne/30 to-blush/40 flex items-center justify-center">
                  <div className="text-center space-y-6 p-12">
                    <div className="w-32 h-32 mx-auto rounded-full border-2 border-gold/50 flex items-center justify-center bg-ivory/30 backdrop-blur-sm">
                      <svg className="w-16 h-16 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <p className="font-script text-4xl text-gold">Your Story</p>
                      <p className="text-sm text-charcoal/60 tracking-wider uppercase">Captured in Time</p>
                    </div>
                  </div>
                </div>

                {/* Shine overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Floating accent badge */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
              >
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-coral via-gold to-coral flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <p className="text-ivory text-2xl font-bold">10+</p>
                    <p className="text-ivory text-xs tracking-wider uppercase">Years</p>
                  </div>
                  
                  {/* Rotating ring */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="48" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1"
                      strokeDasharray="4 8"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-gold/30 bg-champagne/50 backdrop-blur-sm flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with elegant animation */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
      >
        <span className="text-xs text-charcoal/40 tracking-[0.3em] uppercase font-light">
          Explore
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-gold/50 via-coral/30 to-transparent" />
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l border-t border-gold/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r border-t border-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l border-b border-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-gold/20 pointer-events-none" />

      {/* Add shimmer effect styles */}
      <style jsx>{`
        .hero-shimmer {
          background-size: 200% auto;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
