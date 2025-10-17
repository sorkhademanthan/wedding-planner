"use client";

import { motion } from "framer-motion";
import AwardWinningHero from "@/components/AwardWinningHero";
import MasterpieceServices from "@/components/MasterpieceServices";
import LuxuryPortfolio from "@/components/LuxuryPortfolio";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main id="main-content">
      {/* Award-Winning Hero Section */}
      <AwardWinningHero />

      {/* Masterpiece Services Section - Created by Claude Sonnet 4.5 */}
      <MasterpieceServices />

      {/* Luxury Portfolio Section - Museum-Quality Editorial Design */}
      <LuxuryPortfolio />

      {/* Trust Signals Section - Build credibility */}
      <section className="py-24 px-8 bg-champagne/30" aria-label="Trust indicators">
        <div className="max-w-6xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex justify-center items-center gap-12 flex-wrap opacity-40"
          >
            <span className="text-sm text-charcoal tracking-wider">Featured in The Knot</span>
            <span className="text-charcoal/30">•</span>
            <span className="text-sm text-charcoal tracking-wider">WeddingWire Couples&apos; Choice</span>
            <span className="text-charcoal/30">•</span>
            <span className="text-sm text-charcoal tracking-wider">Certified Wedding Planner</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-script text-4xl text-gold mb-4">What Couples Say</p>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal">Hear From Our Couples</h2>
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
      <section className="relative py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-br from-romance via-champagne to-blush overflow-hidden" aria-labelledby="cta-heading">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 id="cta-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 sm:mb-8 leading-tight px-4">
            Turning Love Into<br />An Experience You&apos;ll Replay Forever
          </h2>
          
          <div className="space-y-4 mb-10 sm:mb-12 px-4">
            <p className="text-xl sm:text-2xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              Your wedding should feel effortless.
            </p>
            <p className="text-base sm:text-xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s meet. Share your dreams. We&apos;ll show you how we bring them to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-10 sm:mb-12">
            <Button href="/contact" className="w-full sm:w-auto">Start Planning</Button>
            <span className="text-charcoal/40 text-sm hidden sm:inline">or</span>
            <Button href="/portfolio" variant="outline" className="w-full sm:w-auto">See Our Work</Button>
          </div>

          <motion.p 
            className="text-sm sm:text-base text-charcoal/50 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span>We can&apos;t wait to meet you</span>
            <span className="text-lg">💌</span>
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
