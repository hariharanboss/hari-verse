import ParticleField from "@/components/ParticleField";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Hari Verse",
  description:
    "Learn more about Hari, the creator behind Hari Verse and the Telegram ecosystem.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <ParticleField />
      <Header />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
              ABOUT
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Story Behind <span className="text-gradient">Hari Verse</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Hari Verse was born from a vision to create more than just a
              portfolio — it is a digital universe that represents identity,
              innovation, and interconnected digital ecosystems.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Beginning</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                It all started with a simple frustration: the challenge of finding
                digital content easily. What began as a small project quickly grew
                into a massive ecosystem serving thousands of users daily through
                Telegram.
              </p>
              <p className="text-white/60 leading-relaxed">
                Today, Hari Verse stands as a testament to what is possible when
                passion meets technology. From bot development to community
                building, every aspect of this universe has been crafted with
                care and attention to detail.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Mission</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                To build digital experiences that are fast, accessible, and
                delightful. Whether it is through Telegram bots, web applications,
                or community platforms, the goal is to create tools that make a
                real difference in people&apos;s daily digital lives.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Innovation", "Community", "Accessibility", "Performance"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">The Ecosystem</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                The Telegram ecosystem is the heart of Hari Verse. With multiple
                channels, groups, and bots working together, it provides a
                seamless experience for users to discover and access digital
                content.
              </p>
              <ul className="space-y-3">
                {[
                  "Mrunalini Bot — Autofilter bot with 300K+ indexed files",
                  "TYPE IT 1™ — Primary search group for instant content discovery",
                  "Hari's Garage — Official channel for updates and announcements",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
