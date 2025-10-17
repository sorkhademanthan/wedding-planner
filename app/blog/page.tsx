import Hero from "@/components/Hero";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "12-month-wedding-planning-checklist",
      title: "12-Month Wedding Planning Checklist",
      excerpt: "Everything you need to do, month by month, to plan the perfect wedding without stress.",
      category: "Planning Guides",
      date: "March 15, 2024"
    },
    {
      slug: "top-2024-wedding-color-palettes",
      title: "Top 2024 Wedding Color Palettes",
      excerpt: "From romantic blush to modern sage, discover this year's most beautiful color combinations.",
      category: "Inspiration",
      date: "March 10, 2024"
    },
    {
      slug: "budget-your-dream-wedding",
      title: "How to Budget Your Dream Wedding",
      excerpt: "Practical tips for creating a realistic wedding budget and sticking to it.",
      category: "Planning Guides",
      date: "March 5, 2024"
    },
    {
      slug: "things-no-one-tells-you-about-wedding-planning",
      title: "5 Things No One Tells You About Wedding Planning",
      excerpt: "The honest truth about planning a wedding that you need to hear before you start.",
      category: "Real Talk",
      date: "February 28, 2024"
    }
  ];

  return (
    <main>
      <Hero
        subtitle="Wedding Tips & Inspiration"
        title="The Forever Blog"
        description="Planning guides, inspiration, and real talk about creating your perfect day."
      />

      <section className="py-24 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 mb-12">
            {["All Posts", "Planning Guides", "Inspiration", "Real Talk", "Vendor Spotlights"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gold text-charcoal hover:bg-gold/10 transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="aspect-[16/9] bg-gradient-to-br from-romance to-champagne rounded-2xl mb-6 group-hover:shadow-large transition-shadow" />
                  <p className="text-sm text-gold mb-2">{post.category} • {post.date}</p>
                  <h2 className="font-serif text-3xl text-charcoal mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-charcoal/70 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-gold font-medium group-hover:underline">Read More →</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-champagne/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">Get Weekly Planning Tips</h2>
          <p className="text-xl text-charcoal/70 mb-8">
            Subscribe to our newsletter for inspiration, advice, and exclusive resources.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-full border border-gold/30 focus:outline-none focus:border-gold"
            />
            <button className="px-8 py-3 bg-coral text-ivory rounded-full hover:shadow-medium transition-shadow">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
