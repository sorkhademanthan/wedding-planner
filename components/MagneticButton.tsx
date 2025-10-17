"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function MagneticButton({ children, href }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull effect - max 15px
    setPosition({
      x: distanceX * 0.3,
      y: distanceY * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link href={href}>
      <motion.a
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-medium transition-all bg-coral rounded-full cursor-pointer"
      >
        {/* Shimmer effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-gold/30 blur-2xl group-hover:blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Text */}
        <span className="relative text-ivory font-medium text-lg tracking-wide z-10">
          {children}
        </span>
        
        {/* Border glow */}
        <span className="absolute inset-0 rounded-full border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-300" />
      </motion.a>
    </Link>
  );
}
