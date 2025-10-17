"use client";

import Hero from "@/components/Hero";
import FloatingInput from "@/components/FloatingInput";
import Toast from "@/components/Toast";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  weddingDate: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more about your vision"),
  hearAboutUs: z.string().optional()
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowToast(true);
    reset();
  };

  return (
    <main>
      <Hero
        subtitle="Let's Connect"
        title="Start Planning Your Forever"
        description="Tell us about your vision. We'll respond within 24 hours."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl text-charcoal mb-6">Get in Touch</h2>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              Whether you're just starting to plan or ready to book, we'd love to hear from you. 
              Share your vision and let's create something beautiful together.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Email</h3>
                <a href="mailto:hello@forevermoments.com" className="text-gold hover:underline">
                  hello@forevermoments.com
                </a>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Phone</h3>
                <a href="tel:5551234567" className="text-gold hover:underline">
                  (555) 123-4567
                </a>
              </div>
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-2">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-charcoal hover:text-gold">Instagram</a>
                  <a href="#" className="text-charcoal hover:text-gold">Pinterest</a>
                  <a href="#" className="text-charcoal hover:text-gold">Facebook</a>
                </div>
              </div>
            </div>

            <div className="bg-champagne/30 p-6 rounded-2xl">
              <h3 className="font-serif text-xl text-charcoal mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>✓ We'll review your inquiry within 24 hours</li>
                <li>✓ Schedule a free 30-minute consultation call</li>
                <li>✓ Discuss your vision and how we can help</li>
                <li>✓ Receive a custom proposal tailored to your needs</li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Toast
              message="We've received your story 💌 We'll be in touch within 24 hours!"
              type="success"
              isVisible={showToast}
              onClose={() => setShowToast(false)}
            />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Cascade timing for form fields */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <FloatingInput
                  label="Your Name(s)"
                  name="name"
                  required
                  register={register("name")}
                  error={errors.name?.message}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <FloatingInput
                  label="Email Address"
                  type="email"
                  name="email"
                  required
                  register={register("email")}
                  error={errors.email?.message}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <FloatingInput
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  register={register("phone")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <FloatingInput
                  label="Wedding Date (if known)"
                  name="weddingDate"
                  register={register("weddingDate")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <FloatingInput
                  label="Tell us about your vision"
                  name="message"
                  required
                  multiline
                  rows={5}
                  register={register("message")}
                  error={errors.message?.message}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <select
                  {...register("hearAboutUs")}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gold/20 focus:outline-none focus:border-gold bg-ivory text-charcoal transition-all duration-300"
                >
                  <option value="">How did you hear about us?</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="referral">Friend/Family Referral</option>
                  <option value="theknot">The Knot</option>
                  <option value="weddingwire">WeddingWire</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button 
                  onClick={handleSubmit(onSubmit)}
                  variant="primary"
                  className="w-full"
                  ariaLabel="Submit contact form"
                >
                  {isSubmitting ? "Sending..." : "Send My Inquiry"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
