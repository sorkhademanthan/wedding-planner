"use client";

import { motion } from "framer-motion";
import AwardWinningHero from "@/components/AwardWinningHero";
import MasterpieceServices from "@/components/MasterpieceServices";
import Button from "@/components/Button";
import TestimonialCard from "@/components/TestimonialCard";
import PortfolioCard from "@/components/PortfolioCard";

export default function Home() {
  return (
    <main id="main-content">
      {/* Award-Winning Hero Section */}
      <AwardWinningHero />

      {/* Masterpiece Services Section - Created by Claude Sonnet 4.5 */}
      <MasterpieceServices />

      {/* Featured Wedding Section - Cascade timing */}
      <section className="py-24 px-8 bg-gradient-to-b from-ivory to-romance/20" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
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
            <span className="text-sm text-charcoal tracking-wider">WeddingWire Couples' Choice</span>
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
      <section className="py-32 px-8 bg-gradient-to-br from-romance via-champagne to-blush" aria-labelledby="cta-heading">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 id="cta-heading" className="font-serif text-5xl md:text-7xl text-charcoal mb-8 leading-tight">
            Turning Love Into<br />An Experience You'll Replay Forever
          </h2>
          <p className="text-2xl text-charcoal/70 mb-6 leading-relaxed max-w-2xl mx-auto">
            Your wedding should feel effortless.
          </p>
          <p className="text-xl text-charcoal/60 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's meet. Share your dreams. We'll show you how we bring them to life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <Button href="/contact">Start Planning</Button>
            <span className="text-charcoal/40 hidden sm:inline">or</span>
            <Button href="/portfolio" variant="outline">See Our Work</Button>
          </div>

          <p className="text-sm text-charcoal/50 mt-12">
            We can't wait to meet you 💌
          </p>
        </motion.div>
      </section>
    </main>
  );
}
