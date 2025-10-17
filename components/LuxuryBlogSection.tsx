"use client";

import { motion } from "framer-motion";
import LuxuryBlogCard from "./LuxuryBlogCard";
import { useState } from "react";

export default function LuxuryBlogSection() {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  const categories = [
    "All Stories",
    "Planning Guides",
    "Real Weddings",
    "Inspiration",
    "Vendor Insights",
    "Trends"
  ];

  const articles = [
    {
      slug: "art-of-intimate-celebrations",
      title: "The Art of Intimate Celebrations",
      excerpt: "Discover why smaller weddings create the most profound memories, and how to design a celebration that feels both grand and deeply personal.",
      category: "Planning Guides",
      date: "November 2024",
      readTime: "8 min read",
      author: {
        name: "Elena Martinez",
        role: "Lead Planner"
      },
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: true
    },
    {
      slug: "garden-ceremony-secrets",
      title: "Garden Ceremony Secrets",
      excerpt: "Creating enchanted outdoor spaces where nature becomes your most beautiful decoration.",
      category: "Inspiration",
      date: "October 2024",
      readTime: "6 min read",
      author: {
        name: "Sophie Chen",
        role: "Creative Director"
      },
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      slug: "timeless-wedding-photography",
      title: "Timeless Wedding Photography",
      excerpt: "How to ensure your wedding photos feel beautiful decades from now.",
      category: "Vendor Insights",
      date: "October 2024",
      readTime: "5 min read",
      author: {
        name: "Marcus Laurent",
        role: "Photography Partner"
      },
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      slug: "coastal-elegance-guide",
      title: "Coastal Elegance: A Complete Guide",
      excerpt: "Beach weddings reimagined with sophistication, from ceremony to sunset reception.",
      category: "Real Weddings",
      date: "September 2024",
      readTime: "10 min read",
      author: {
        name: "Isabella Rose",
        role: "Senior Planner"
      },
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
    {
      slug: "2024-luxury-trends",
      title: "2024 Luxury Wedding Trends",
      excerpt: "The design movements shaping the most beautiful celebrations this year.",
      category: "Trends",
      date: "September 2024",
      readTime: "7 min read",
      author: {
        name: "Elena Martinez",
        role: "Lead Planner"
      },
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=95&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      featured: false
    },
  ];

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-ivory overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-[1800px] mx-auto relative">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
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
              Journal
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            {/* Left: Headline */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl text-charcoal mb-6 leading-[0.95] tracking-tight"
              >
                Stories Worth
                <br />
                <span className="font-script text-gold text-5xl md:text-6xl lg:text-7xl">
                  Telling
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-xl font-light"
              >
                Insights from a decade of creating unforgettable celebrations.
                <span className="block mt-2 text-charcoal/80 italic">
                  Planning wisdom, inspiration, and the stories behind the moments.
                </span>
              </motion.p>
            </div>

            {/* Right: Category filters */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 justify-start lg:justify-end"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gold border-gold text-ivory shadow-lg'
                      : 'bg-transparent border-charcoal/15 text-charcoal/70 hover:border-gold/50 hover:text-charcoal'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs tracking-wider uppercase font-semibold">
                    {category}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Articles Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[400px] lg:auto-rows-[500px] mb-24">
          {articles.map((article, index) => (
            <LuxuryBlogCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Load More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <button className="group relative inline-flex items-center gap-4 px-12 py-5 bg-transparent border-2 border-charcoal/15 hover:border-gold/50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-lg">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold/5 via-coral/5 to-gold/5"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative text-sm tracking-[0.2em] uppercase text-charcoal font-semibold group-hover:text-gold transition-colors">
              Explore More Stories
            </span>
            <motion.svg
              className="relative w-5 h-5 text-charcoal group-hover:text-gold transition-colors"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </motion.div>

        {/* Premium Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-24 border-t border-charcoal/10"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-4">
                  The Love Letter
                </p>
                <h2 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                  Planning Wisdom,
                  <br />
                  <span className="font-script text-gold text-4xl lg:text-5xl">
                    Delivered Monthly
                  </span>
                </h2>
                <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
                  Join 10,000+ couples receiving exclusive planning tips, inspiration, 
                  and behind-the-scenes stories from real weddings.
                </p>
                <div className="flex flex-wrap items-center gap-8 text-sm text-charcoal/60">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-champagne/30 to-romance/20 p-10 lg:p-12 rounded-sm border border-gold/10"
            >
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-4 bg-ivory border border-charcoal/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-sm outline-none transition-all text-charcoal"
                    placeholder="Sarah Johnson"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-5 py-4 bg-ivory border border-charcoal/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-sm outline-none transition-all text-charcoal"
                    placeholder="sarah@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-gold via-coral to-gold text-ivory rounded-sm font-semibold tracking-wider uppercase text-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Subscribe Now
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
