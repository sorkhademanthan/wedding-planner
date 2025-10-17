"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";

interface LuxuryBlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  readTime: string;
  featured?: boolean;
}

export default function LuxuryBlogCard({
  slug,
  title,
  excerpt,
  category,
  date,
  author,
  image,
  readTime,
  featured = false
}: LuxuryBlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Sophisticated 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [1, -1]);
  const rotateY = useTransform(mouseX, [-100, 100], [-1, 1]);

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

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative h-full cursor-pointer ${
          featured ? 'md:col-span-2 md:row-span-2' : ''
        }`}
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden bg-charcoal ${
          featured ? 'aspect-[21/9]' : 'aspect-[4/5]'
        } rounded-sm`}>
          <motion.div
            animate={{
              scale: isHovered ? 1.06 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Image
              src={image}
              alt={`${title} - Wedding planning article`}
              fill
              className="object-cover"
              sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              quality={95}
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
          
          {/* Golden accent on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.12 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gold"
          />

          {/* Category Badge */}
          <motion.div
            className="absolute top-6 left-6 z-10"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="px-4 py-1.5 bg-ivory/90 backdrop-blur-sm rounded-full">
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal font-semibold">
                {category}
              </span>
            </div>
          </motion.div>

          {/* Featured Badge */}
          {featured && (
            <motion.div
              className="absolute top-6 right-6 z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-ivory" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>
          )}

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 z-10">
            <motion.div
              animate={{
                y: isHovered ? -4 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Title */}
              <motion.h3
                className={`font-serif text-ivory mb-3 leading-tight ${
                  featured ? 'text-4xl lg:text-6xl' : 'text-2xl lg:text-3xl'
                }`}
                animate={{
                  letterSpacing: isHovered ? '0.01em' : '0em',
                }}
                transition={{ duration: 0.4 }}
              >
                {title}
              </motion.h3>

              {/* Excerpt - visible on hover or featured */}
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: (isHovered || featured) ? 1 : 0,
                  height: (isHovered || featured) ? 'auto' : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`text-ivory/90 leading-relaxed mb-4 overflow-hidden ${
                  featured ? 'text-lg max-w-3xl' : 'text-base max-w-md'
                }`}
              >
                {excerpt}
              </motion.p>

              {/* Meta Information */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-ivory/20 flex items-center justify-center">
                      <span className="text-xs text-ivory font-semibold">
                        {author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-ivory font-medium leading-none">
                        {author.name}
                      </p>
                      <p className="text-xs text-ivory/60 leading-none mt-0.5">
                        {author.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-1 h-1 rounded-full bg-ivory/30" />

                  {/* Date */}
                  <p className="text-xs text-ivory/70">{date}</p>
                  
                  <div className="w-1 h-1 rounded-full bg-ivory/30" />

                  {/* Read Time */}
                  <p className="text-xs text-ivory/70">{readTime}</p>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 text-ivory"
                >
                  <span className="text-sm tracking-wider uppercase font-semibold">
                    Read Article
                  </span>
                  <motion.svg
                    className="w-4 h-4"
                    animate={{
                      x: isHovered ? 3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Decorative corner frames on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Top corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gold/50" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gold/50" />
            {/* Bottom corners */}
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gold/50" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gold/50" />
          </motion.div>
        </div>
      </motion.article>
    </Link>
  );
}
