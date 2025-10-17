"use client";

import { motion } from "framer-motion";
import LuxuryPortfolioCard from "./LuxuryPortfolioCard";
import Link from "next/link";

export default function LuxuryPortfolio() {
  const weddings = [
    {
      slug: "sarah-james-garden-romance",
      title: "Sarah & James",
      subtitle: "A Garden Romance",
      description: "An intimate garden affair where blush roses met golden hour light. Every detail whispered of timeless elegance.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=98&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Garden Wedding",
      location: "Napa Valley, CA",
      season: "Spring 2023",
      size: "large" as const,
    },
    {
      slug: "emma-michael-rustic-barn",
      title: "Emma & Michael",
      subtitle: "Rustic Elegance",
      description: "Reclaimed wood and wildflowers created magic in this countryside celebration of love and laughter.",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Barn Wedding",
      location: "Vermont",
      season: "Fall 2023",
      size: "standard" as const,
    },
    {
      slug: "olivia-ryan-beach-bliss",
      title: "Olivia & Ryan",
      subtitle: "Coastal Dreams",
      description: "Ocean breeze, sand between toes, and a sunset ceremony that took everyone's breath away.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Beach Wedding",
      location: "Big Sur, CA",
      season: "Summer 2023",
      size: "standard" as const,
    },
    {
      slug: "isabella-alexander-ballroom",
      title: "Isabella & Alexander",
      subtitle: "Metropolitan Grandeur",
      description: "Crystal chandeliers and champagne toasts in a celebration that redefined urban sophistication.",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=98&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Ballroom Wedding",
      location: "New York City",
      season: "Winter 2023",
      size: "large" as const,
    },
    {
      slug: "mia-ethan-vineyard",
      title: "Mia & Ethan",
      subtitle: "Tuscan Escape",
      description: "Rolling hills, aged wine, and la dolce vita came together in this Italian-inspired romance.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Vineyard Wedding",
      location: "Sonoma, CA",
      season: "Fall 2023",
      size: "standard" as const,
    },
  ];

  return (
    <section
      className="relative py-32 px-6 lg:px-12 bg-ivory overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-[1800px] mx-auto relative">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 lg:mb-32"
        >
          <div className="max-w-5xl">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-16 h-[1px] bg-gold/40" />
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal/50 font-medium">
                Portfolio
              </span>
            </motion.div>

            {/* Main Headline - Fashion Editorial Style */}
            <motion.h2
              id="portfolio-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal mb-8 leading-[0.95] tracking-tight"
            >
              Love Stories
              <br />
              <span className="font-script text-gold text-5xl md:text-6xl lg:text-7xl">
                We've Crafted
              </span>
            </motion.h2>

            {/* Subheading - Editorial Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-charcoal/60 leading-relaxed max-w-3xl font-light tracking-wide"
            >
              Every wedding tells a story. Every couple brings a vision.
              <br />
              Here are the moments we've brought to life—
              <span className="text-charcoal/80 italic"> intimate, intentional, unforgettable.</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Grid - Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[400px] lg:auto-rows-[500px] mb-16">
          {weddings.map((wedding, index) => (
            <div
              key={wedding.slug}
              className={wedding.size === "large" ? "md:col-span-1 lg:col-span-1 lg:row-span-2" : ""}
            >
              <LuxuryPortfolioCard {...wedding} />
            </div>
          ))}
        </div>

        {/* View All CTA - Sophisticated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center"
        >
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-transparent border-2 border-charcoal/15 hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
          >
            {/* Animated background fill */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/5 via-coral/5 to-gold/5"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <span className="relative text-sm tracking-[0.2em] uppercase text-charcoal font-semibold group-hover:text-gold transition-colors duration-300">
              View All Weddings
            </span>

            <motion.svg
              className="relative w-5 h-5 text-charcoal group-hover:text-gold transition-colors duration-300"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
          </Link>
        </motion.div>

        {/* Bottom Editorial Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-charcoal/30 font-medium mb-3">
            As Featured In
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
            <span className="text-sm tracking-wider text-charcoal">The Knot</span>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span className="text-sm tracking-wider text-charcoal">Vogue Weddings</span>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span className="text-sm tracking-wider text-charcoal">Martha Stewart</span>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span className="text-sm tracking-wider text-charcoal">Style Me Pretty</span>
          </div>
        </motion.div>
      </div>

      {/* Accessibility: Reduced motion support */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
