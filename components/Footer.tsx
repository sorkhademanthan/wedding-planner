import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-script text-3xl text-gold mb-4">Forever Moments</h3>
            <p className="text-sm leading-relaxed">
              Crafting unforgettable weddings with love, care, and attention to every detail.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@forevermoments.com</li>
              <li>(555) 123-4567</li>
              <li>123 Wedding Lane</li>
              <li>Dream City, DC 12345</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Pinterest</a>
              <a href="#" className="hover:text-gold transition-colors">Facebook</a>
            </div>
            <div className="mt-6">
              <h5 className="text-sm mb-2">Newsletter</h5>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full bg-ivory/10 border border-ivory/20 text-ivory text-sm focus:outline-none focus:border-gold"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 text-center text-sm">
          <p>© 2024 Forever Moments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
