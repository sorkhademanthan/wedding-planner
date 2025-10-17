"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface PortfolioCardProps {
  slug: string;
  title: string;
  subtitle: string;
  image?: string;
  category: string;
}

export default function PortfolioCard({
  slug,
  title,
  subtitle,
  image,
  category
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/portfolio/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 cursor-pointer"
      >
        <motion.div 
          className="aspect-[4/5] bg-gradient-to-br from-romance to-champagne relative"
          animate={{
            scale: isHovered ? 1.04 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Overlay with vignette effect */}
          <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-all duration-500" />
          
          {/* Blur dissolve on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 backdrop-blur-sm"
          />

          {/* Content */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 text-ivory"
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.p 
              className="text-sm text-ivory/80 mb-1"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
            >
              {category}
            </motion.p>
            <h3 className="font-serif text-2xl mb-1">{title}</h3>
            <p className="font-script text-lg text-gold">{subtitle}</p>
            
            {/* Caption reveal */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-sm text-ivory/90 mt-3"
            >
              View full story →
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
