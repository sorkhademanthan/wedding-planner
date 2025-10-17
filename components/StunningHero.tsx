"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

export default function StunningHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), {
    stiffness: 100,
    damping: 30,
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // GSAP Entry Animation
  useEffect(() => {
    if (!isLoaded) {
      const tl = gsap.timeline();

      // Fade in background
      tl.fromTo(
        ".hero-bg",
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
      );

      // Logo sweep
      tl.fromTo(
        ".brand-line",
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 0.8, ease: "power2.inOut" },
        0.3
      );

      // Headline cascade
      tl.fromTo(
        ".hero-word",
        { opacity: 0, y: 40, rotateX: 90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          duration: 0.8, 
          stagger: 0.08,
          ease: "back.out(1.5)"
        },
        0.5
      );

      // Subtitle
      tl.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        1.2
      );

      // CTA
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
        1.5
      );

      setIsLoaded(true);
    }
  }, [isLoaded]);

  // Mouse tracking for gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== 'undefined') {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory"
    >
      {/* Animated gradient background */}
      <motion.div
        className="hero-bg absolute inset-0"
        style={{ opacity, scale }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-romance via-champagne to-blush transition-all duration-1000"
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            backgroundSize: '120% 120%',
          }}
        />
        
        {/* Radial gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-tr from-sage/20 via-transparent to-gold/10" />
          <div className="absolute inset-0 bg-gradient-to-bl from-blush/30 via-transparent to-romance/20" />
        </div>

        {/* Frosted glass overlay */}
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-coral/20 to-transparent blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-sage/15 to-transparent blur-2xl"
          animate={{
            y: [-50, 50, -50],
            x: [-30, 30, -30],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-6xl mx-auto px-8 text-center"
        style={{ y }}
      >
        {/* Brand line */}
        <div className="mb-16 flex justify-center">
          <div className="brand-line h-px bg-gradient-to-r from-transparent via-gold to-transparent" style={{ width: 0 }} />
        </div>

        {/* Headline with perspective */}
        <h1 
          className="font-serif text-7xl sm:text-8xl lg:text-[140px] text-charcoal mb-8 leading-[0.95]"
          style={{ perspective: '1000px' }}
        >
          <span className="hero-word inline-block" style={{ transformOrigin: 'bottom' }}>Where </span>
          <span className="hero-word inline-block" style={{ transformOrigin: 'bottom' }}>love </span>
          <span className="hero-word inline-block" style={{ transformOrigin: 'bottom' }}>stories</span>
          <br />
          <span className="hero-word inline-block" style={{ transformOrigin: 'bottom' }}>become </span>
          <span className="hero-word inline-block" style={{ transformOrigin: 'bottom' }}>timeless</span>
          <br />
          <span className="hero-word inline-block text-gold" style={{ transformOrigin: 'bottom' }}>celebrations</span>
        </h1>

        {/* Subtitle with glass morphism */}
        <div className="hero-subtitle relative inline-block">
          <div className="absolute inset-0 bg-ivory/40 backdrop-blur-xl rounded-3xl -mx-8 -my-4 shadow-2xl" />
          <p className="relative text-xl sm:text-2xl lg:text-3xl text-charcoal/80 font-light leading-relaxed mb-16 px-8 max-w-3xl">
            We plan, design, and orchestrate weddings that feel like art—made only for you.
          </p>
        </div>

        {/* CTA */}
        <div className="hero-cta">
          <MagneticButton href="/contact">
            Start Planning Your Forever
          </MagneticButton>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-10 -right-10 w-32 h-32 opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
            <path 
              fill="url(#gold-gradient-2)" 
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.3,73.8C26.8,81,10.8,84,-5.3,83C-21.4,82,-42.8,77,-58.6,66.8C-74.4,56.6,-84.6,41.2,-88.5,24.4C-92.4,7.6,-90,-10.6,-82.8,-25.2C-75.6,-39.8,-63.6,-50.8,-49.8,-58C-36,-65.2,-18,-68.6,-0.5,-67.7C17,-66.8,34,-61.6,44.7,-76.4Z" 
              transform="translate(100 100)"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="gold-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#E8A59C', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 text-charcoal/40 text-xs tracking-[0.2em] uppercase"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-medium">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-charcoal/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
