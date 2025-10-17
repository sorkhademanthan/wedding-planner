import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

export default function ServicesPage() {
  const services = [
    {
      icon: "✨",
      title: "Full Planning",
      description: "For couples who want zero stress. We handle everything from the first vendor call to the final send-off.",
      features: [
        "12+ months of planning support",
        "Unlimited consultations",
        "Full vendor sourcing & management",
        "Design & styling",
        "Budget management",
        "Timeline creation",
        "Day-of coordination"
      ],
      pricing: "Starting at $5,000",
      href: "/contact"
    },
    {
      icon: "💍",
      title: "Partial Planning",
      description: "For couples who want guidance, not full handholding. We step in where you need us most.",
      features: [
        "3-6 months of planning support",
        "Vendor recommendations",
        "Design consultation",
        "Timeline & logistics",
        "Day-of coordination"
      ],
      pricing: "Starting at $3,000",
      href: "/contact"
    },
    {
      icon: "🌸",
      title: "Day-Of Coordination",
      description: "For DIY couples who need a calm professional to execute their vision on the big day.",
      features: [
        "Final 4 weeks planning review",
        "Vendor communication",
        "Timeline management",
        "Setup oversight",
        "Day-of coordination (10-12 hours)"
      ],
      pricing: "Starting at $1,500",
      href: "/contact"
    }
  ];

  return (
    <main>
      <Hero
        subtitle="Our Services"
        title="Choose Your Journey"
        description="Every love story is unique. We offer flexible planning options to match your needs."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-champagne/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Book Consultation", desc: "We meet to understand your vision, style, and needs." },
              { step: "02", title: "Design Your Plan", desc: "We create a custom timeline and vendor list tailored to you." },
              { step: "03", title: "Execute Together", desc: "We manage logistics, coordinate vendors, and handle details." },
              { step: "04", title: "Celebrate Your Day", desc: "You enjoy every moment while we ensure everything flows perfectly." }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="font-serif text-5xl text-gold">{item.step}</div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">Not Sure Which is Right?</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Let's chat about your needs and find the perfect fit.
          </p>
          <Button href="/contact">Schedule a Call</Button>
        </div>
      </section>
    </main>
  );
}
