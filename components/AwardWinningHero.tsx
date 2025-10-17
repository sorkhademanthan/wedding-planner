"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function AwardWinningHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true });
  
  // Parallax effect for background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundX = useTransform(mouseX, [0, 1], [-15, 15]);
  const backgroundY = useTransform(mouseY, [0, 1], [-15, 15]);
  
  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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

      {/* Sophisticated gradient background with warm palette + parallax */}
      <motion.div 
        className="hero-background absolute inset-0"
        style={{ x: backgroundX, y: backgroundY }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      >
        {/* Premium luxury wedding venue background texture */}
        <div className="absolute inset-0 opacity-[0.12]">
          <Image
            src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury wedding venue with elegant floral arrangements and romantic ambiance"
            fill
            className="object-cover"
            priority
            quality={95}
            sizes="100vw"
          />
        </div>

        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/40 via-ivory to-romance/30" />
        
        {/* Cinematic vignette - creamy ivory to pale blush - Enhanced */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,248,246,0.6)_45%,rgba(255,239,239,0.85)_100%)] pointer-events-none" />
        
        {/* Blush-gold gradient overlay (5% opacity) */}
        <div className="absolute inset-0 bg-gradient-to-br from-romance/10 via-transparent to-gold/10 opacity-50 pointer-events-none" />
        
        {/* Diagonal golden light reflection - moves every 10s - Enhanced */}
        <motion.div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(135deg, transparent 0%, transparent 45%, rgba(212,175,55,0.25) 50%, transparent 55%, transparent 100%)",
            backgroundSize: "200% 200%",
          }}
        />
        
        {/* Accent light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent opacity-50" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-coral/20 to-transparent opacity-40" />
        
        {/* Radial spotlight effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-gold/10 via-transparent to-transparent" />
        
        {/* Soft floating orbs */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-gradient-radial from-blush/20 via-romance/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-gradient-radial from-sage/15 via-champagne/10 to-transparent blur-3xl" />
        
        {/* Floating particles - petals/sparkles - Enhanced visibility */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/40 shadow-[0_0_8px_rgba(212,175,55,0.5)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Main content */}
      <div 
        ref={contentRef}
        className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative">
          
          {/* Vertical gold divider with shimmer - between text and card - Enhanced */}
          <motion.div 
            className="hidden lg:block absolute left-[58.33%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/70 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            whileHover={{ 
              boxShadow: "0 0 25px rgba(212,175,55,0.8)",
              scale: 1.8,
              backgroundColor: "rgba(212,175,55,0.8)",
            }}
          />
          
          {/* LEFT: Content - 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Award badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-[1.5px] border-gold/40 bg-gradient-to-r from-champagne/60 to-romance/40 backdrop-blur-md shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)] animate-pulse" />
              <span className="text-[11px] tracking-[0.22em] uppercase text-charcoal/75 font-medium">
                Award-Winning Design • Est. 2014
              </span>
            </motion.div>

            {/* Main headline - Enhanced staggered word animation */}
            <div className="space-y-2.5" style={{ perspective: "1200px" }}>
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.9] tracking-[-0.025em] text-charcoal will-change-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Creating
                </motion.h1>
              </div>
              
              <div className="overflow-hidden">
                <motion.h1 
                  className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] leading-[0.9] tracking-[-0.025em] text-charcoal will-change-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  Timeless
                </motion.h1>
              </div>
              
              <div className="overflow-hidden pt-1.5">
                <motion.h1 
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[95px] text-transparent bg-clip-text bg-gradient-to-r from-gold via-coral to-gold hero-shimmer drop-shadow-[0_2px_10px_rgba(212,175,55,0.15)] tracking-[0.05em] will-change-transform">
                    Love Stories
                  </span>
                  {/* Animated gold underline - Enhanced visibility */}
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-gold via-coral to-gold shadow-[0_3px_15px_rgba(212,175,55,0.6)]"
                    initial={{ width: "0%", opacity: 0 }}
                    animate={isInView ? { width: "100%", opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                  />
                </motion.h1>
              </div>

              <div className="overflow-hidden pt-5">
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-charcoal/50 font-light tracking-[0.03em] leading-relaxed will-change-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  One Celebration at a Time
                </motion.p>
              </div>
            </div>

            {/* Description with elegant reveal */}
            <motion.div 
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <p className="text-[15px] sm:text-base text-charcoal/60 font-light leading-[1.8] tracking-[0.012em]">
                We craft weddings that transcend the ordinary—intimate celebrations<br className="hidden sm:block" /> 
                designed exclusively for your love story, where every detail whispers<br className="hidden lg:block" /> 
                of elegance and every moment becomes a cherished memory.
              </p>
            </motion.div>

            {/* Trust indicators - Fixed Layout */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              {/* Couples Served */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-ivory bg-gradient-to-br from-coral/50 to-romance/50 flex items-center justify-center shadow-lg backdrop-blur-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.3 + (i * 0.1) }}
                    >
                      <svg className="w-5 h-5 text-coral drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-base sm:text-lg text-charcoal font-bold leading-tight">200+ Couples</p>
                  <p className="text-xs sm:text-sm text-charcoal/60 leading-tight mt-0.5">Served with Love</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-charcoal/15 to-transparent" />

              {/* 5-Star Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-5 h-5 text-gold fill-current drop-shadow-sm" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.5 + (i * 0.08) }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-charcoal font-bold leading-tight">5.0 Rating</p>
                <p className="text-xs sm:text-sm text-charcoal/60 leading-tight mt-0.5">150+ Reviews</p>
              </div>
            </motion.div>

            {/* CTAs with magnetic effect */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary CTA with golden shimmer sweep - Enhanced */}
              <Link 
                href="/contact"
                className="hero-cta group relative inline-flex items-center gap-3 px-9 py-[17px] rounded-md bg-gradient-to-r from-gold via-coral to-gold overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(212,175,55,0.5)] hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 will-change-transform shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
                aria-label="Book your wedding consultation"
              >
                {/* Golden shimmer sweep on hover - Enhanced visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-900 ease-out delay-75" />
                
                <span className="relative text-ivory text-[12.5px] tracking-[0.14em] uppercase font-bold z-10">
                  Book Consultation
                </span>
                
                <svg 
                  className="relative w-[17px] h-[17px] text-ivory z-10 transition-transform duration-300 group-hover:translate-x-1.5"
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
                className="hero-cta group relative inline-flex items-center gap-2.5 px-8 py-[17px] rounded-md border-[1.5px] border-charcoal/12 hover:border-gold/70 transition-all duration-300 hover:bg-champagne/50 hover:shadow-sm active:scale-[0.98]"
                aria-label="View our wedding portfolio"
              >
                <span className="text-[12.5px] tracking-[0.1em] uppercase font-semibold text-charcoal/75 group-hover:text-gold transition-colors duration-300">
                  View Portfolio
                </span>
                <svg 
                  className="w-[14px] h-[14px] text-charcoal/55 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1"
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
              
              {/* Main image container with sophisticated border and enhanced interactions */}
              <motion.div 
                className="relative w-full h-full rounded-sm overflow-hidden group will-change-transform"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 25px 70px rgba(0, 0, 0, 0.12)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated gold frame border - strokes on hover - Enhanced */}
                <motion.div 
                  className="absolute inset-0 border-[3px] border-gold/50 z-10 pointer-events-none rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  whileHover={{ 
                    borderColor: "rgba(212, 175, 55, 0.8)",
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Corner decorations with stroke animation */}
                  <motion.div 
                    className="absolute top-4 left-4 w-20 h-20 border-l-[3px] border-t-[3px] border-gold/70 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 w-20 h-20 border-r-[3px] border-t-[3px] border-gold/70 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 left-4 w-20 h-20 border-l-[3px] border-b-[3px] border-gold/70 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute bottom-4 right-4 w-20 h-20 border-r-[3px] border-b-[3px] border-gold/70 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </motion.div>

                {/* THE BEST Wedding Image - Most Beautiful Couple in the World */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=98&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Breathtaking wedding couple - stunning bride and groom in romantic embrace at luxury destination venue with golden hour lighting"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={99}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Elegant overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-transparent" />
                </div>

                {/* Overlay text with enhanced visibility */}
                <div className="absolute inset-0 flex items-end justify-center pb-12">
                  <div className="text-center space-y-3 px-8">
                    {/* Heart icon with gentle pulse every 5 seconds */}
                    <motion.div 
                      className="w-16 h-16 mx-auto rounded-full border-2 border-ivory/90 flex items-center justify-center bg-ivory/20 backdrop-blur-md shadow-lg"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3.5,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-8 h-8 text-ivory drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <div className="space-y-2">
                      <p className="font-script text-4xl lg:text-5xl text-ivory drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Your Story</p>
                      <p className="text-sm text-ivory/90 tracking-wider uppercase font-medium drop-shadow-md">Captured in Time</p>
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

      {/* Scroll indicator with heart icon - hints to scroll for more - Enhanced */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[11px] text-charcoal/50 tracking-[0.35em] uppercase font-semibold drop-shadow-sm">
          Scroll
        </span>
        <div className="w-[2px] h-20 bg-gradient-to-b from-gold/60 via-coral/40 to-transparent rounded-full relative shadow-[0_0_8px_rgba(212,175,55,0.3)]">
          {/* Heart icon at the bottom - Enhanced */}
          <motion.div 
            className="absolute -bottom-6 left-1/2 -translate-x-1/2"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg className="w-4 h-4 text-coral fill-current drop-shadow-[0_2px_4px_rgba(255,127,80,0.4)]" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative corner accents - Enhanced visibility */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-[2px] border-t-[2px] border-gold/30 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
      <div className="absolute top-8 right-8 w-32 h-32 border-r-[2px] border-t-[2px] border-gold/30 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-[2px] border-b-[2px] border-gold/30 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-[2px] border-b-[2px] border-gold/30 pointer-events-none shadow-[0_0_10px_rgba(212,175,55,0.2)]" />

      {/* Enhanced styles with accessibility support */}
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
        
        /* GPU-accelerated transforms for performance */}
        .will-change-transform {
          will-change: transform, opacity;
        }
        
        /* Accessibility: Respect reduced motion preference */}
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .hero-shimmer {
            background-position: 0% center !important;
          }
        }
      `}</style>
    </section>
  );
}
