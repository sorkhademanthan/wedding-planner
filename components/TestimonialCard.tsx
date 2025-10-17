"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  wedding?: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  author,
  wedding,
  image
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-ivory p-8 rounded-2xl shadow-soft"
    >
      <div className="text-gold text-4xl mb-4">"</div>
      <p className="text-charcoal/80 leading-relaxed mb-6 italic">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-12 h-12 rounded-full bg-blush" />
        )}
        <div>
          <p className="font-serif text-charcoal font-medium">{author}</p>
          {wedding && (
            <p className="text-sm text-charcoal/60">{wedding}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
