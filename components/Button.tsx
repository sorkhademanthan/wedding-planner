"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  // Larger touch targets - min 48px for mobile accessibility
  const baseStyles = "px-10 py-4 rounded-full font-medium text-base transition-all inline-block min-h-[48px] flex items-center justify-center relative overflow-hidden";
  
  const variants = {
    primary: "bg-coral text-ivory shadow-soft hover:shadow-large focus:shadow-large hover:brightness-110",
    secondary: "bg-charcoal text-ivory shadow-soft hover:shadow-large focus:shadow-large hover:brightness-110",
    outline: "bg-ivory text-charcoal border-2 border-gold hover:bg-gold/10 focus:bg-gold/10"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  // Ripple effect on click
  const createRipple = (e: MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    createRipple(e);
    if (onClick) onClick();
  };

  // Cinematic microinteraction - 150ms for instant feel
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={combinedClassName}
      aria-label={ariaLabel}
      onClick={href ? undefined : handleClick}
    >
      {children}
      
      {/* Shimmer effect on hover */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-ivory/20 to-transparent pointer-events-none"
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute w-4 h-4 bg-ivory/40 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} onClick={(e) => createRipple(e as any)}>
        {content}
      </Link>
    );
  }

  return content;
}
