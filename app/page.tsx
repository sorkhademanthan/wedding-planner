"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <main id="main-content">
      {/* Hero Section - Clear Visual Hierarchy */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-romance via-champagne to-blush opacity-40"
          aria-hidden="true"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-sage/20 blur-3xl"
          aria-hidden="true"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="relative z-10 text-center px-8 max-w-5xl"
        >
          {/* Dominant Visual - 3x larger headline */}
          {/* Letter-by-letter fade for romantic anticipation */}
          <motion.h1 
            className="font-serif text-7xl md:text-[120px] leading-[1.1] text-charcoal mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            We plan the moment<br />the world fades
          </motion.h1>
          
          {/* White space for luxury - 80-100px breathing room */}
          <motion.p 
            className="font-script text-5xl md:text-6xl text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            And it's just the two of you
          </motion.p>
          
          <motion.p
            className="text-xl text-charcoal/70 mb-16 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            From the first "yes" to the final dance—we craft every detail with grace, joy, and heart.
          </motion.p>
          
          {/* Primary CTA - visually dominant */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button href="/contact">Let's Begin Your Story</Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator for flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-charcoal/40">
            <span className="text-sm tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Do Section - Consistent 8px spacing */}
      <section className="py-32 px-8 bg-ivory" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          {/* 80-100px breathing room around headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-24"
          >
            <p className="font-script text-4xl text-gold mb-6" aria-hidden="true">Our Services</p>
            <h2 id="services-heading" className="font-serif text-6xl md:text-7xl text-charcoal mb-8">
              Because Your "I Do"<br />Deserves Its Own Story
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Every wedding we plan starts with a story—yours
            </p>
          </motion.div>

          {/* Generous gap for luxury feel - 48px between cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <ServiceCard
              icon="✨"
              title="Full Planning"
              description="From venue to vows, we orchestrate every note."
              features={["12+ months support", "Unlimited consultations", "Full vendor management", "Design & styling", "Day-of coordination"]}
              pricing="Starting at $5,000"
              href="/services"
            />
            <ServiceCard
              icon="💍"
              title="Partial Planning"
              description="You've done the dreaming—we perfect the details."
              features={["3-6 months support", "Vendor recommendations", "Design consultation", "Timeline creation", "Day-of coordination"]}
              pricing="Starting at $3,000"
              href="/services"
            />
            <ServiceCard
              icon="🌸"
              title="Day-Of Coordination"
              description="On your day, you should only hold hands, not checklists."
              features={["Final 4 weeks prep", "Vendor coordination", "Timeline execution", "10-12 hour coverage", "Peace of mind"]}
              pricing="Starting at $1,500"
              href="/services"
            />
          </div>

          {/* Clear next step - Conversion flow */}
          <div className="text-center">
            <p className="text-charcoal/60 mb-6 italic">Not sure which journey fits yours?</p>
            <Button href="/services" variant="outline">Explore All Options</Button>
          </div>
        </div>
      </section>

      {/* Featured Wedding Section - Cascade timing */}
      <section className="py-24 px-8 bg-gradient-to-b from-ivory to-romance/20" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          {/* Timing cascade: background fade → heading → subtext → images (staggered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-script text-4xl text-gold mb-6"
              aria-hidden="true"
            >
              Real Weddings
            </motion.p>
            
            <motion.h2 
              id="portfolio-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-6xl md:text-7xl text-charcoal mb-8"
            >
              Love Stories We've Crafted
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed"
            >
              Each wedding is unique. Browse our portfolio for inspiration.
            </motion.p>
          </motion.div>

          {/* Staggered portfolio cards - cascade effect */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                slug: "sarah-james-garden-romance",
                title: "Sarah & James",
                subtitle: "A Garden Romance",
                category: "Garden Wedding",
              },
              {
                slug: "emma-michael-rustic-barn",
                title: "Emma & Michael",
                subtitle: "Rustic Elegance",
                category: "Barn Wedding",
              },
              {
                slug: "olivia-ryan-beach-bliss",
                title: "Olivia & Ryan",
                subtitle: "Coastal Dreams",
                category: "Beach Wedding",
              }
            ].map((wedding, index) => (
              <motion.div
                key={wedding.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <PortfolioCard {...wedding} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button href="/portfolio" variant="outline">View All Weddings</Button>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Section - Build credibility */}
      <section className="py-24 px-8 bg-champagne/30" aria-label="Trust indicators">
        <div className="max-w-6xl mx-auto">
          {/* Subtle trust messaging */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-charcoal/60 mb-16 text-lg"
          >
            Trusted by hundreds of couples
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="font-serif text-6xl md:text-7xl text-gold mb-4">10+</p>
              <p className="text-charcoal/70 text-lg">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="font-serif text-6xl md:text-7xl text-gold mb-4">200+</p>
              <p className="text-charcoal/70 text-lg">Weddings Planned</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="font-serif text-6xl md:text-7xl text-gold mb-4">150+</p>
              <p className="text-charcoal/70 text-lg">Five-Star Reviews</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <p className="font-serif text-6xl md:text-7xl text-gold mb-4">100%</p>
              <p className="text-charcoal/70 text-lg">Satisfaction Rate</p>
            </motion.div>
          </div>

          {/* Additional trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex justify-center items-center gap-12 flex-wrap opacity-40"
          >
            <span className="text-sm text-charcoal tracking-wider">Featured in The Knot</span>
            <span className="text-charcoal/30">•</span>
            <span className="text-sm text-charcoal tracking-wider">WeddingWire Couples' Choice</span>
            <span className="text-charcoal/30">•</span>
            <span className="text-sm text-charcoal tracking-wider">Certified Wedding Planner</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-script text-3xl text-gold mb-4">What Couples Say</p>
            <h2 className="font-serif text-5xl text-charcoal">Hear From Our Couples</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <TestimonialCard
              quote="When we saw the reception hall, I cried. It was like walking into my own Pinterest board—but warmer."
              author="Sarah & Michael"
              wedding="Garden Wedding, June 2023"
            />
            <TestimonialCard
              quote="They didn't just plan our wedding. They held our dreams with care. Guests kept whispering: 'This felt like them.'"
              author="Olivia Chen"
              wedding="Ballroom Wedding, October 2023"
            />
          </div>

          <div className="text-center">
            <Button href="/testimonials" variant="outline">Read All Reviews</Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Strong conversion flow */}
      <section className="py-32 px-8 bg-gradient-to-br from-romance via-champagne to-blush" aria-labelledby="cta-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Emotional copy flow */}
          <h2 id="cta-heading" className="font-serif text-5xl md:text-7xl text-charcoal mb-8 leading-tight">
            Turning Love Into<br />An Experience You'll Replay Forever
          </h2>
          <p className="text-2xl text-charcoal/70 mb-6 leading-relaxed max-w-2xl mx-auto">
            Your wedding should feel effortless.
          </p>
          <p className="text-xl text-charcoal/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's meet. Share your dreams. We'll show you how we bring them to life.
          </p>
          
          {/* Primary CTA dominant, secondary less prominent */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button href="/contact">Start Planning</Button>
            <span className="text-charcoal/40 hidden sm:inline">or</span>
            <Button href="/portfolio" variant="outline">See Our Work</Button>
          </div>

          {/* Trust reinforcement with emotional microcopy */}
          <p className="text-sm text-charcoal/50 mt-12">
            We can't wait to meet you 💌
          </p>
        </motion.div>
      </section>
    </main>
  );
}
