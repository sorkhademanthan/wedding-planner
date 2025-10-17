"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

interface LuxuryPortfolioCardProps {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  location: string;
  season: string;
  size?: "large" | "standard";
}

export default function LuxuryPortfolioCard({
  slug,
  title,
  subtitle,
  description,
  image,
  category,
  location,
  season,
  size = "standard"
}: LuxuryPortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Sophisticated mouse tracking for tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const isLarge = size === "large";

  return (
    <Link href={`/portfolio/${slug}`} className="block h-full">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full overflow-hidden bg-charcoal rounded-sm cursor-pointer ${
          isLarge ? 'row-span-2' : ''
        }`}
      >
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={`${title} - ${subtitle} - Premium luxury wedding photography at ${location}`}
              fill
              className="object-cover"
              sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              quality={98}
            />
          </motion.div>

          {/* Gradient Overlays - Cinematic Layers */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.15 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gold/20"
          />

          {/* Sophisticated Border Frame */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
          >
            {/* Outer frame */}
            <div className="absolute inset-4 border border-ivory/20" />
            {/* Inner accent */}
            <motion.div
              className="absolute inset-6 border border-gold/30"
              animate={{
                scale: isHovered ? 1.02 : 1,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Corner decorations */}
            {[
              'top-6 left-6',
              'top-6 right-6',
              'bottom-6 left-6',
              'bottom-6 right-6'
            ].map((position, i) => (
              <motion.div
                key={i}
                className={`absolute ${position} w-12 h-12`}
                initial={{ scale: 0, rotate: -90 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? 0 : -90,
                }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className={`absolute ${
                  position.includes('top') ? 'top-0' : 'bottom-0'
                } ${
                  position.includes('left') ? 'left-0' : 'right-0'
                } w-full h-[1px] bg-gold/60`} />
                <div className={`absolute ${
                  position.includes('top') ? 'top-0' : 'bottom-0'
                } ${
                  position.includes('left') ? 'left-0' : 'right-0'
                } w-[1px] h-full bg-gold/60`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Category Badge */}
          <motion.div
            className="absolute top-8 left-8 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="px-4 py-1.5 bg-ivory/10 backdrop-blur-md border border-ivory/20 rounded-full">
              <span className="text-xs tracking-[0.2em] uppercase text-ivory/90 font-medium">
                {category}
              </span>
            </div>
          </motion.div>

          {/* Season & Location Tag */}
          <motion.div
            className="absolute top-8 right-8 z-10 text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-xs text-ivory/70 tracking-wider mb-0.5">{location}</p>
            <p className="text-xs text-ivory/50 tracking-wider">{season}</p>
          </motion.div>

          {/* Content - Editorial Typography */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 lg:p-12 z-10">
            <motion.div
              animate={{
                y: isHovered ? -8 : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Names - Hero Typography */}
              <motion.h3
                className={`font-serif text-ivory mb-2 leading-none ${
                  isLarge ? 'text-5xl lg:text-6xl' : 'text-3xl lg:text-4xl'
                }`}
                animate={{
                  letterSpacing: isHovered ? '0.02em' : '0em',
                }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h3>

              {/* Subtitle - Script */}
              <p className={`font-script text-gold mb-4 ${
                isLarge ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
              }`}>
                {subtitle}
              </p>

              {/* Description - Appears on hover */}
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  height: isHovered ? 'auto' : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`text-ivory/80 leading-relaxed mb-4 overflow-hidden ${
                  isLarge ? 'text-base max-w-lg' : 'text-sm max-w-md'
                }`}
              >
                {description}
              </motion.p>

              {/* CTA with arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-3 text-ivory group/cta"
              >
                <span className="text-sm tracking-[0.15em] uppercase font-medium">
                  View Story
                </span>
                <motion.svg
                  className="w-5 h-5"
                  animate={{
                    x: isHovered ? 4 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.3 : 0,
              background: isHovered
                ? 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
                : 'transparent',
              backgroundPosition: isHovered ? '200% 200%' : '0% 0%',
              backgroundSize: '200% 200%',
            }}
            transition={{
              opacity: { duration: 0.3 },
              backgroundPosition: { duration: 1.5, ease: "easeInOut" }
            }}
          />
        </div>
      </motion.div>
    </Link>
  );
}
