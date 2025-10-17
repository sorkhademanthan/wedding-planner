"use client";

import { motion } from "framer-motion";
import Button from "./Button";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  pricing?: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  pricing,
  href
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-ivory p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-serif text-3xl text-charcoal mb-3">{title}</h3>
      <p className="text-charcoal/70 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-charcoal/80">
            <span className="text-gold mt-1">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {pricing && (
        <p className="text-gold font-serif text-xl mb-4">{pricing}</p>
      )}

      <Button href={href} variant="outline">Discover More</Button>
    </motion.div>
  );
}
