import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "They didn't just plan our wedding. They held our dreams with care and brought them to life in ways we never imagined. Every detail was perfect.",
      author: "Sarah & Michael",
      wedding: "Garden Wedding, June 2023"
    },
    {
      quote: "I'm a control freak and was nervous about handing over the reins. But from day one, they made me feel heard, supported, and completely at ease.",
      author: "Emma Johnson",
      wedding: "Barn Wedding, September 2023"
    },
    {
      quote: "Our families are complicated. They handled every difficult conversation with grace and kept us focused on what mattered: our love.",
      author: "David & Alex",
      wedding: "Beach Wedding, April 2023"
    },
    {
      quote: "Best investment we made. They saved us money, time, and so much stress. Our wedding day felt like a dream because they handled everything.",
      author: "Olivia Chen",
      wedding: "Ballroom Wedding, October 2023"
    },
    {
      quote: "We wanted intimate and personal. They took our tiny backyard and turned it into a magical space that felt exactly like us.",
      author: "Ava & Ethan",
      wedding: "Backyard Wedding, May 2023"
    },
    {
      quote: "Planning a destination wedding felt impossible. They coordinated everything across time zones and made it feel effortless.",
      author: "Isabella Martinez",
      wedding: "Destination Wedding, August 2023"
    }
  ];

  return (
    <main>
      <Hero
        subtitle="What Couples Say"
        title="Love Letters from Our Couples"
        description="Real stories from real weddings. These are the moments that make our work meaningful."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-champagne/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">See All Our Reviews</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Read 150+ five-star reviews on The Knot and WeddingWire
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-ivory rounded-full shadow-soft hover:shadow-medium transition-shadow">
              View on The Knot
            </a>
            <a href="#" className="px-6 py-3 bg-ivory rounded-full shadow-soft hover:shadow-medium transition-shadow">
              View on WeddingWire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
