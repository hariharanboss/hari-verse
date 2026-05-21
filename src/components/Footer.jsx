export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#hero" className="text-xl font-extrabold tracking-tight">
              <span className="text-gradient">HARI</span>
              <span className="text-white/60 font-light">VERSE</span>
            </a>
            <p className="text-white/50 text-sm mt-3 max-w-sm leading-relaxed">
              A premium personal digital universe showcasing projects, skills,
              and the interconnected Telegram ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["About", "Skills", "Projects", "Ecosystem", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Telegram</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <a href="https://t.me/haris_garage" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Channel
                </a>
              </li>
              <li>
                <a href="https://t.me/+oLvCDNTpvGI5MmNl" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Search Group
                </a>
              </li>
              <li>
                <a href="https://t.me/mrunalini3bot" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Mrunalini Bot
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2026 Hari Verse. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
