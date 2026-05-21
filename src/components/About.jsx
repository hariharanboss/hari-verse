import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-surface-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/20 rounded-full mb-4">
            ABOUT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Every digital universe begins with a single idea. Here is the story
            behind Hari Verse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative perspective-1000">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-4 border-2 border-primary/30 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-6xl md:text-7xl font-bold text-white shadow-[0_0_60px_rgba(139,92,246,0.3)]">
                  H
                </div>
              </div>
              <div className="absolute -inset-4 border border-primary/10 rounded-full animate-spin-slow" />
              <div className="absolute -inset-8 border border-primary/5 rounded-full animate-spin-slower" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Hi, I&apos;m <span className="text-gradient">Hari</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              A passionate developer, creator, and innovator building digital
              experiences that push the boundaries of what&apos;s possible. From
              Telegram ecosystems to web applications, I craft tools and
              platforms that serve thousands of users daily.
            </p>
            <p className="text-white/60 leading-relaxed">
              Hari Verse is more than a portfolio — it&apos;s a living digital
              universe that represents my journey, projects, and vision for the
              future of interconnected digital systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-card rounded-xl px-5 py-3 text-center flex-1 min-w-[120px]">
                <span className="block text-2xl font-bold text-gradient">5+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Projects</span>
              </div>
              <div className="glass-card rounded-xl px-5 py-3 text-center flex-1 min-w-[120px]">
                <span className="block text-2xl font-bold text-gradient-accent">300K+</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Users Served</span>
              </div>
              <div className="glass-card rounded-xl px-5 py-3 text-center flex-1 min-w-[120px]">
                <span className="block text-2xl font-bold text-gradient">24/7</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
