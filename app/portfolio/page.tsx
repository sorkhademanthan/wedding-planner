import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioPage() {
  const weddings = [
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
    },
    {
      slug: "sophia-daniel-modern-chic",
      title: "Sophia & Daniel",
      subtitle: "Modern Minimalism",
      category: "Ballroom Wedding",
    },
    {
      slug: "ava-ethan-intimate-gathering",
      title: "Ava & Ethan",
      subtitle: "Intimate Joy",
      category: "Backyard Wedding",
    },
    {
      slug: "isabella-noah-destination",
      title: "Isabella & Noah",
      subtitle: "Tuscan Adventure",
      category: "Destination Wedding",
    }
  ];

  return (
    <main>
      <Hero
        subtitle="Real Weddings"
        title="Love Stories We've Brought to Life"
        description="Each wedding is a unique celebration. Browse our portfolio for inspiration."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["All", "Garden", "Barn", "Beach", "Ballroom", "Backyard", "Destination"].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border border-gold text-charcoal hover:bg-gold/10 transition-colors text-sm"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {weddings.map((wedding) => (
              <PortfolioCard key={wedding.slug} {...wedding} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
