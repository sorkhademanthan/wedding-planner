"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import Iridescence from "./Iridescence";

export default function LuxuryHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax with spring physics
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), {
    stiffness: 100,
    damping: 30,
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Elegant entry animation
  useEffect(() => {
    if (!isLoaded) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Fade in container
      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      );

      // Decorative line sweep
      tl.fromTo(
        ".decorative-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1.2, ease: "power2.inOut" },
        0.3
      );

      // Headline elegant reveal
      tl.fromTo(
        ".headline-word",
        { 
          opacity: 0, 
          y: 60,
          filter: "blur(10px)"
        },
        { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out"
        },
        0.5
      );

      // Subtitle
      tl.fromTo(
        ".subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        1.2
      );

      // CTA
      tl.fromTo(
        ".cta-button",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        1.6
      );

      // Scroll indicator
      tl.fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power1.in" },
        2.2
      );

      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <Iridescence className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center w-full"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-champagne/10 to-romance/10" />

      {/* Elegant floating shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,213,213,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-8 text-center"
        style={{ y, opacity }}
      >
        {/* Decorative line */}
        <div className="flex justify-center mb-12">
          <motion.div 
            className="decorative-line w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Main headline - Premium typography */}
        <h1 className="mb-8">
          <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-charcoal leading-[1.1] tracking-tight">
            <div className="mb-2">
              <span className="headline-word inline-block mr-6">Where</span>
              <span className="headline-word inline-block mr-6">love</span>
              <span className="headline-word inline-block">stories</span>
            </div>
            <div className="mb-2">
              <span className="headline-word inline-block mr-6">become</span>
              <span className="headline-word inline-block">timeless</span>
            </div>
            <div>
              <span className="headline-word inline-block text-gold font-script text-7xl sm:text-8xl lg:text-9xl">
                celebrations
              </span>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p 
          className="subtitle text-lg sm:text-xl lg:text-2xl text-charcoal/70 font-light leading-relaxed mb-16 max-w-2xl mx-auto"
        >
          We craft weddings that feel like art—<br className="hidden sm:block" />
          <span className="text-charcoal/90">made only for you</span>
        </motion.p>

        {/* CTA Button - Clean and premium */}
        <motion.div className="cta-button">
          <Link 
            href="/contact"
            className="group relative inline-flex items-center gap-4 px-10 py-5 overflow-hidden"
          >
            {/* Button background */}
            <motion.div
              className="absolute inset-0 bg-charcoal rounded-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            
            {/* Hover shimmer */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Text */}
            <span className="relative text-ivory text-base tracking-[0.15em] uppercase font-light z-10">
              Begin Your Story
            </span>
            
            {/* Arrow */}
            <motion.svg 
              className="relative w-5 h-5 text-ivory z-10"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>

            {/* Subtle bottom border */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </Link>
        </motion.div>

        {/* Trust indicator */}
        <motion.p 
          className="subtitle text-xs text-charcoal/40 mt-8 tracking-widest uppercase"
        >
          Trusted by 200+ couples
        </motion.p>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="scroll-indicator absolute bottom-16 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div 
          className="flex flex-col items-center gap-4"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-charcoal/30 tracking-[0.2em] uppercase font-light">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Subtle floating accent */}
      <motion.div
        className="absolute top-1/4 right-20 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle 
            cx="30" 
            cy="30" 
            r="28" 
            stroke="#D4AF37" 
            strokeWidth="0.5" 
            opacity="0.3"
          />
          <circle 
            cx="30" 
            cy="30" 
            r="20" 
            stroke="#D4AF37" 
            strokeWidth="0.5" 
            opacity="0.2"
          />
        </svg>
      </motion.div>
      </section>
    </Iridescence>
  );
}
