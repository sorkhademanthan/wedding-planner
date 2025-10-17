"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Minimal nav - 5-7 items max
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
  ];

  // Sticky nav that slims down on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <nav 
        className={`fixed top-0 w-full z-50 bg-ivory/95 backdrop-blur-md shadow-soft transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="font-script text-3xl text-gold hover:opacity-80 transition-opacity"
              aria-label="Forever Moments - Home"
            >
              Forever Moments
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-charcoal text-sm font-medium hover:text-gold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              {/* Primary CTA in nav */}
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-coral text-ivory rounded-full text-sm font-medium hover:shadow-medium transition-all min-h-[48px] flex items-center"
                aria-label="Contact us for consultation"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button - 48px touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-charcoal p-3 -mr-3"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden mt-6 pb-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal text-lg hover:text-gold transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-coral text-ivory rounded-full font-medium mt-4 min-h-[48px]"
              >
                Book Consultation
              </Link>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
