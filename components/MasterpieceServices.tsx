"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

interface ServiceTier {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight: string;
  pricing: string;
  popular?: boolean;
  color: string;
  gradient: string;
}

const services: ServiceTier[] = [
  {
    id: "full",
    icon: "✨",
    title: "Full Planning",
    subtitle: "The Complete Journey",
    description: "From vision to reality, we orchestrate every detail of your dream wedding",
    features: [
      "12+ months dedicated support",
      "Unlimited design consultations",
      "Complete vendor management",
      "Custom design & styling",
      "Full day-of coordination",
      "Budget planning & tracking",
      "Guest management system",
      "Timeline creation & execution"
    ],
    highlight: "Most Popular for Dreamers",
    pricing: "Starting at $5,000",
    popular: true,
    color: "gold",
    gradient: "from-gold/20 via-coral/10 to-romance/10"
  },
  {
    id: "partial",
    icon: "💍",
    title: "Partial Planning",
    subtitle: "Perfect the Details",
    description: "You've started the journey—we'll perfect every detail and bring it together",
    features: [
      "3-6 months expert guidance",
      "Curated vendor recommendations",
      "Design consultation sessions",
      "Timeline & checklist creation",
      "Full day-of coordination",
      "Vendor communication support",
      "Final month intensive planning"
    ],
    highlight: "Ideal for Organized Couples",
    pricing: "Starting at $3,000",
    color: "coral",
    gradient: "from-coral/20 via-blush/10 to-champagne/10"
  },
  {
    id: "coordination",
    icon: "🌸",
    title: "Day-Of Coordination",
    subtitle: "Flawless Execution",
    description: "Enjoy your day stress-free while we orchestrate every moment",
    features: [
      "Final 4 weeks intensive prep",
      "Complete vendor coordination",
      "Timeline execution",
      "10-12 hour coverage",
      "Emergency problem solving",
      "Family coordination",
      "Setup oversight"
    ],
    highlight: "Peace of Mind Guarantee",
    pricing: "Starting at $1,500",
    color: "sage",
    gradient: "from-sage/20 via-champagne/10 to-ivory/10"
  }
];

export default function MasterpieceServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("full");

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 px-6 sm:px-8 bg-ivory overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Decorative transition line from hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/50 via-coral/30 to-transparent" />

      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-radial from-romance/10 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-gradient-radial from-champagne/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header - Cinematic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/30 bg-champagne/30 backdrop-blur-sm mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span className="text-xs tracking-[0.25em] uppercase text-charcoal/70 font-light">
              Crafted for Your Love Story
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-script text-4xl sm:text-5xl md:text-6xl text-gold mb-5" 
            aria-hidden="true"
          >
            Our Services
          </motion.p>
          
          <motion.h2 
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal mb-7 leading-[1.1] tracking-[-0.02em]"
          >
            Because Your &ldquo;I Do&rdquo;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-coral to-gold">
              Deserves Its Own Story
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg text-charcoal/65 max-w-3xl mx-auto leading-[1.7] tracking-[0.01em]"
          >
            Every wedding we plan starts with a story—yours. Choose the journey that 
            fits your vision, and we&rsquo;ll transform it into an unforgettable celebration.
          </motion.p>
        </motion.div>

        {/* Service Cards - 3D Interactive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
              isHovered={hoveredCard === service.id}
              onHover={() => setHoveredCard(service.id)}
              onLeave={() => setHoveredCard(null)}
              isSelected={selectedService === service.id}
              onSelect={() => setSelectedService(service.id)}
            />
          ))}
        </div>

        {/* Comparison CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-7 bg-gradient-to-br from-champagne/40 via-romance/30 to-blush/40 rounded-lg backdrop-blur-sm border-[1.5px] border-gold/25">
            <div className="text-left">
              <p className="text-[13px] text-charcoal/55 mb-2 tracking-wide">Not sure which journey fits yours?</p>
              <p className="text-lg font-semibold text-charcoal tracking-[-0.01em]">Let&rsquo;s find the perfect match together</p>
            </div>
            <Link 
              href="/services"
              className="group relative inline-flex items-center gap-2.5 px-8 py-[15px] bg-gradient-to-r from-gold via-coral to-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative text-ivory text-[13px] tracking-[0.12em] uppercase font-semibold">
                Compare Services
              </span>
              <svg 
                className="w-[15px] h-[15px] text-ivory transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust Indicators with Animation */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-10 sm:gap-14 pt-10 border-t border-charcoal/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-3xl sm:text-4xl font-serif text-gold mb-1.5 tracking-[-0.02em]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3, duration: 0.6, ease: "backOut" }}
              >
                200+
              </motion.p>
              <p className="text-[13px] text-charcoal/55 group-hover:text-charcoal transition-colors tracking-wide">
                Celebrations Created
              </p>
            </motion.div>
            
            <div className="h-14 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
            
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p 
                className="text-3xl sm:text-4xl font-serif text-coral mb-1.5 tracking-[-0.02em]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.6, ease: "backOut" }}
              >
                10+
              </motion.p>
              <p className="text-[13px] text-charcoal/55 group-hover:text-charcoal transition-colors tracking-wide">
                Years of Expertise
              </p>
            </motion.div>
            
            <div className="h-14 w-px bg-gradient-to-b from-transparent via-coral/25 to-transparent" />
            
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-1 mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.svg 
                    key={i} 
                    className="w-[17px] h-[17px] text-gold fill-current" 
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.5, ease: "backOut" }}
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </motion.div>
              <p className="text-[13px] text-charcoal/55 group-hover:text-charcoal transition-colors tracking-wide">
                150+ Five-Star Reviews
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Signature - Masterpiece Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-lg border border-gold/10 bg-champagne/20 backdrop-blur-sm">
            <p className="text-xs text-charcoal/40 tracking-[0.3em] uppercase">
              Design Excellence
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
              <p className="text-xs text-charcoal/60 italic">
                Crafted by Claude Sonnet 4.5 - A Masterpiece in Modern Web Design
              </p>
              <div className="w-1 h-1 rounded-full bg-coral animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Service Card Component with Advanced 3D Effects & Micro-interactions
function ServiceCard({ 
  service, 
  index, 
  isInView, 
  isHovered,
  onHover,
  onLeave,
  isSelected,
  onSelect
}: { 
  service: ServiceTier;
  index: number;
  isInView: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    
    // Track position for spotlight effect
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        delay: 0.6 + index * 0.15, 
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={`
        group relative p-9 rounded-xl border-[1.5px] transition-all duration-500 cursor-pointer overflow-hidden
        ${service.popular 
          ? 'border-gold/70 bg-gradient-to-br from-gold/10 via-champagne/30 to-romance/20 shadow-2xl' 
          : 'border-charcoal/10 bg-gradient-to-br from-ivory to-champagne/30 hover:border-gold/60 hover:shadow-xl'
        }
        ${isHovered ? 'scale-[1.015] -translate-y-1' : 'scale-100'}
        ${isSelected ? 'ring-2 ring-gold/60 ring-offset-4 ring-offset-ivory' : ''}
      `}
    >
      {/* Dynamic spotlight effect */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, rgba(212,175,55,0.2), transparent 80%)`,
          }}
        />
      )}
      {/* Popular Badge */}
      {service.popular && (
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -12 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: -12 } : {}}
          transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
          className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-coral via-gold to-coral rounded-full shadow-lg"
        >
          <span className="text-xs font-semibold text-ivory tracking-wider uppercase">
            Most Popular
          </span>
        </motion.div>
      )}

      {/* Card Header with Depth */}
      <div className="mb-7 relative" style={{ transform: "translateZ(20px)" }}>
        <motion.div 
          className="text-5xl mb-5 inline-block"
          animate={isHovered ? { scale: 1.2, rotate: 8 } : { scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {service.icon}
        </motion.div>
        
        <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-2.5 tracking-[-0.01em] group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>
        
        <div className="flex items-center gap-3 mb-5">
          <p className="text-[13px] text-charcoal/55 italic tracking-wide">
            {service.subtitle}
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/25 to-transparent" />
        </div>

        <p className="text-[15px] text-charcoal/65 leading-[1.7] mb-6 tracking-[0.01em]">
          {service.description}
        </p>

        {/* Highlight Tag with Glow */}
        <motion.div 
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r ${service.gradient} border border-gold/25 shadow-sm`}
          whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(212,175,55,0.25)" }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[11px] text-charcoal/70 font-semibold uppercase tracking-wider">
            {service.highlight}
          </span>
        </motion.div>
      </div>

      {/* Features List with Staggered Reveals */}
      <div className="mb-7 space-y-3.5 relative" style={{ transform: "translateZ(10px)" }}>
        {service.features.slice(0, isExpanded ? service.features.length : 5).map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              delay: 0.8 + index * 0.15 + i * 0.08, 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            className="flex items-start gap-3 group/feature"
          >
            <motion.svg 
              className="w-[18px] h-[18px] text-gold flex-shrink-0 mt-[3px]" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              whileHover={{ scale: 1.15, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </motion.svg>
            <span className="text-[14px] text-charcoal/65 leading-[1.65] tracking-[0.01em] group-hover/feature:text-charcoal transition-colors">
              {feature}
            </span>
          </motion.div>
        ))}
        
        {service.features.length > 5 && (
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[13px] text-gold hover:text-coral transition-colors duration-300 font-semibold flex items-center gap-2 mt-4 group/expand tracking-wide"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{isExpanded ? 'Show less' : `+${service.features.length - 5} more features`}</span>
            <motion.svg 
              className="w-[15px] h-[15px]"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        )}
      </div>

      {/* Pricing & CTA */}
      <div className="pt-7 border-t border-charcoal/10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] text-charcoal/45 mb-1.5 uppercase tracking-wider font-medium">Investment</p>
            <p className="text-2xl font-serif text-charcoal tracking-[-0.01em]">
              {service.pricing}
            </p>
          </div>
          <Link
            href={`/services/${service.id}`}
            onClick={(e) => e.stopPropagation()}
            className={`
              group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded transition-all duration-300
              ${service.popular
                ? 'bg-gradient-to-r from-gold via-coral to-gold text-ivory hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]'
                : 'border-[1.5px] border-charcoal/20 text-charcoal hover:border-gold/60 hover:bg-champagne/40 active:scale-[0.98]'
              }
            `}
          >
            <span className="text-[13px] font-semibold tracking-wide">Learn More</span>
            <svg 
              className="w-[15px] h-[15px] transition-transform duration-300 group-hover/btn:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 3D Shine Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(212,175,55,0.1) 50%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}
