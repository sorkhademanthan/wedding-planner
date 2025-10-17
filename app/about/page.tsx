import Hero from "@/components/Hero";
import Button from "@/components/Button";

export default function AboutPage() {
  return (
    <main>
      <Hero
        subtitle="Our Story"
        title="Meet the Heart Behind Your Forever"
        description="We don't just plan weddings; we protect your peace while crafting your dream."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="font-serif text-4xl text-charcoal mb-6">Why We Became Wedding Planners</h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              [Your personal story here - authentic, warm, relatable. Talk about your first wedding experience, 
              what moved you, why you knew this was your calling.]
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              Every couple deserves a day that feels effortless. Our mission is to hold your vision with care, 
              manage every detail, and let you be fully present in your own love story.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-champagne/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-5xl text-charcoal text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Listening",
                description: "We hear not just what you say, but what you dream. Your vision guides every choice we make."
              },
              {
                title: "Creativity",
                description: "No two weddings are alike. We design experiences as unique as your love story."
              },
              {
                title: "Calm",
                description: "We handle the chaos so you don't have to. Your only job is to enjoy the journey."
              }
            ].map((value, index) => (
              <div key={index} className="bg-ivory p-8 rounded-2xl shadow-soft text-center">
                <h3 className="font-serif text-2xl text-charcoal mb-4">{value.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">Ready to Start Planning?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Let's create something beautiful together.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </section>
    </main>
  );
}
