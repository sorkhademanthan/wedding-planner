"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const brandColors = [
    { name: "Blush Pink", color: "#E8D5D5", description: "Romance & softness" },
    { name: "Champagne", color: "#F5E8D8", description: "Warmth & elegance" },
    { name: "Ivory", color: "#FAF7F2", description: "Purity & light" },
    { name: "Sage Green", color: "#C8D5C8", description: "Calm & nature" },
    { name: "Gold", color: "#D4AF37", description: "Luxury & celebration" },
    { name: "Muted Coral", color: "#E8A59C", description: "CTA accent" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-romance via-champagne to-blush opacity-40"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-sage/20 blur-3xl"
        />
        
        <motion.div
          {...fadeInUp}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.h1 
            className="font-serif text-7xl md:text-8xl text-charcoal mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Brand Aesthetic System
          </motion.h1>
          <motion.p 
            className="font-script text-5xl text-gold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Where love meets design
          </motion.p>
          <motion.p 
            className="text-xl text-charcoal/70 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Soft pastels, elegant typography, and cinematic emotions crafted for your forever moment
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(232, 165, 156, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 px-10 py-4 bg-coral text-ivory rounded-full font-medium text-lg shadow-soft hover:shadow-large transition-shadow"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </section>

      {/* Color Palette Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-ivory to-romance/20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal text-center mb-4">
            Color Palette
          </h2>
          <p className="text-center text-charcoal/60 text-lg mb-16">
            Soft pastels that evoke romance and trust
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {brandColors.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredCard(i)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-large transition-shadow"
              >
                <div 
                  className="h-48 relative"
                  style={{ backgroundColor: item.color }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === i ? 1 : 0 }}
                    className="absolute inset-0 bg-charcoal/10"
                  />
                </div>
                <div className="p-5 bg-ivory">
                  <h3 className="font-serif text-xl text-charcoal mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                  <p className="text-xs text-charcoal/40 mt-2 font-mono">{item.color}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Typography Section */}
      <section className="py-24 px-6 bg-champagne/30">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-serif text-5xl text-charcoal text-center mb-16">
            Typography System
          </h2>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-ivory rounded-2xl shadow-soft"
            >
              <p className="text-sm text-charcoal/60 mb-2">Headings - Playfair Display</p>
              <h3 className="font-serif text-5xl text-charcoal leading-tight">
                Elegant serif for timeless romance
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-ivory rounded-2xl shadow-soft"
            >
              <p className="text-sm text-charcoal/60 mb-2">Body - Poppins</p>
              <p className="font-sans text-xl text-charcoal/80 leading-relaxed">
                Clean sans-serif provides clarity and modern warmth, perfect for reading long passages while maintaining the emotional connection with your story.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-ivory rounded-2xl shadow-soft"
            >
              <p className="text-sm text-charcoal/60 mb-2">Accent - Great Vibes</p>
              <p className="font-script text-4xl text-gold">
                Handwritten script for intimate moments
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* UI Components Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-ivory to-sage/10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-serif text-5xl text-charcoal text-center mb-4">
            UI Elements
          </h2>
          <p className="text-center text-charcoal/60 text-lg mb-16">
            Rounded edges, subtle shadows, smooth animations
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-ivory rounded-2xl shadow-medium"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-4">Soft Shadows</h3>
              <div className="space-y-4">
                <div className="h-16 bg-blush rounded-xl shadow-soft" />
                <div className="h-16 bg-champagne rounded-xl shadow-medium" />
                <div className="h-16 bg-sage rounded-xl shadow-large" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-ivory rounded-2xl shadow-medium"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-4">Rounded Corners</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-romance rounded-lg" />
                <div className="h-20 bg-blush rounded-xl" />
                <div className="h-20 bg-champagne rounded-2xl" />
                <div className="h-20 bg-gold rounded-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 bg-ivory rounded-2xl shadow-medium md:col-span-2"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-6">Interactive Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-coral text-ivory rounded-full shadow-soft hover:shadow-medium transition-shadow"
                >
                  Primary CTA
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-charcoal text-ivory rounded-full shadow-soft hover:shadow-medium transition-shadow"
                >
                  Secondary
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-ivory text-charcoal border-2 border-gold rounded-full hover:bg-gold/10 transition-colors"
                >
                  Outlined
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-charcoal text-ivory/70">
        <p className="text-sm">Brand Aesthetic System • Wedding Planner Application</p>
      </footer>
    </div>
  );
}
