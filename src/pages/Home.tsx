import { useEffect } from "react";

const RULES = [
  {
    num: "01",
    title: "Respect All Members",
    desc: "Treat every member with respect regardless of their skill level. Harassment, bullying, or toxic behavior will not be tolerated.",
  },
  {
    num: "02",
    title: "Constructive Feedback Only",
    desc: "When critiquing impressions, be honest but kind. Focus on improvement — not mockery. Build each other up.",
  },
  {
    num: "03",
    title: "No Spam or Self-Promotion",
    desc: "Do not flood chats with unsolicited promotion, repeated messages, or off-topic content. Keep it clean and relevant.",
  },
  {
    num: "04",
    title: "Original Content",
    desc: "Share only your own voice impressions or content you have permission to share. Give credit where credit is due.",
  },
  {
    num: "05",
    title: "Stay On Topic",
    desc: "This is a Voice Impression Community. Keep discussions related to voice acting, impressions, anime, and related topics.",
  },
  {
    num: "06",
    title: "Follow the Leader",
    desc: "Sui's word is final. The leader and mods maintain order — their decisions are to be respected at all times.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 37 + 11) % 100}%`,
            bottom: `${(i * 17 + 5) % 40}%`,
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            background: i % 2 === 0
              ? `rgba(168, 85, 247, ${0.4 + (i % 5) * 0.1})`
              : `rgba(220, 38, 38, ${0.3 + (i % 4) * 0.1})`,
            animationDuration: `${4 + (i % 6)}s`,
            animationDelay: `${(i * 0.7) % 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  useRevealOnScroll();

  return (
    <main 
      className="min-h-screen text-white relative overflow-x-hidden bg-cover bg-top bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}vi-squad-bg.jpg')` }}
    >
      <div className="noise-overlay" />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Dark overlay covering the fixed global background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0f]/95" />
        <div className="split-bg" />
        <Particles />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="bracket-tag text-xl md:text-2xl font-bold mb-4 opacity-0-init slide-up"
            style={{ animationDelay: "0ms" }}
          >
            ［声1］
          </p>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-2 opacity-0-init slide-up glow-white"
            style={{ animationDelay: "150ms" }}
          >
            VI Squad
            <span className="glow-purple text-purple-400">.</span>
          </h1>

          <p
            className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-300 mb-2 opacity-0-init slide-up font-light"
            style={{ animationDelay: "300ms" }}
          >
            Demon Slayer
            <span className="mx-3 text-purple-400">×</span>
            Jujutsu Kaisen
          </p>

          <div
            className="flex items-center justify-center gap-3 mb-8 opacity-0-init slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-red-500 font-bold tracking-widest text-lg">滅</span>
            <span className="text-gray-400">×</span>
            <span className="text-purple-400 font-bold tracking-widest text-lg">呪</span>
          </div>

          <div className="divider-glow mb-8 opacity-0-init fade-in" style={{ animationDelay: "500ms" }} />

          <p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto opacity-0-init slide-up font-light"
            style={{ animationDelay: "600ms" }}
          >
            A Voice Impression Community where passion meets artistry.
            <br />
            Step into the world of声 — and let your voice be heard.
          </p>

          <div
            className="mt-10 opacity-0-init slide-up"
            style={{ animationDelay: "750ms" }}
          >
            <a
              href="#leader"
              className="inline-block px-8 py-3 border border-purple-500/60 text-purple-300 text-sm uppercase tracking-widest hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 rounded-sm"
            >
              Enter the Squad
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 shimmer">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-purple-400" />
          <span className="text-xs uppercase tracking-widest text-purple-300">Scroll</span>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="relative py-24 px-6 bg-[#0a0a0f]/60 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="bracket-tag text-base mb-4">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 glow-white">
            What is VI Squad?
          </h2>
          <div className="divider-glow mb-8" />
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            VI Squad is an elite Voice Impression Community dedicated to the art of vocal
            performance. Born from the worlds of Demon Slayer and Jujutsu Kaisen, we
            bring together voice impressionists, anime enthusiasts, and performers who
            share a passion for authentic character voices.
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            Whether you're a seasoned impressionist or just starting out, VI Squad is
            your home. We train, share, compete, and grow together — united by the power
            of声 (voice).
          </p>
        </div>
      </section>

      {/* ── LEADER SECTION ── */}
      <section id="leader" className="relative py-24 px-6 overflow-hidden bg-[#0a0a0f]/40">
        {/* bg flair */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
          {/* Profile circle */}
          <div className="flex-shrink-0 reveal flex flex-col items-center">
            <div className="relative">
              {/* Outer pulse ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30 pulse-ring"
                style={{ margin: "-12px" }}
              />
              {/* Second ring */}
              <div
                className="absolute inset-0 rounded-full border border-red-700/20 pulse-ring"
                style={{ margin: "-24px", animationDelay: "1s" }}
              />
              <img
                src={`${import.meta.env.BASE_URL}sui.jpeg`}
                alt="Sui — VI Squad Leader"
                className="leader-circle w-52 h-52 md:w-64 md:h-64 object-cover object-top"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="bracket-tag text-lg font-bold">［声1］ Sui.</p>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">
                Squad Leader
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal flex-1 text-center md:text-left" style={{ transitionDelay: "150ms" }}>
            <p className="bracket-tag text-sm mb-3">The Leader</p>
            <h2 className="text-4xl md:text-6xl font-black mb-4 glow-white">
              Sui.
            </h2>
            <div className="divider-glow mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At the helm of VI Squad stands <span className="text-purple-300 font-semibold">Sui</span> —
              a force of precision, artistry, and authority. With a voice that commands
              silence and inspires awe, she founded this community as a sanctuary for
              those who live and breathe voice acting.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Her standard is excellence. Her expectation is dedication. Her vision —
              to forge the finest Voice Impression community in existence.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-purple-400 shimmer" />
              <span className="text-purple-300 text-sm uppercase tracking-widest">Active Leader</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RULES SECTION ── */}
      <section id="rules" className="relative py-24 px-6 bg-[#0a0a0f]/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/8 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="bracket-tag text-sm mb-3">Community Guidelines</p>
            <h2 className="text-4xl md:text-6xl font-black mb-4 glow-white">
              The Rules.
            </h2>
            <div className="divider-glow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RULES.map((rule, i) => (
              <div
                key={rule.num}
                className="rule-card rounded-lg p-6 reveal bg-[#111118]/80 border border-purple-900/20 backdrop-blur-sm shadow-xl"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-purple-800/60 leading-none select-none shrink-0 font-mono">
                    {rule.num}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 glow-purple leading-tight">
                      {rule.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {rule.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <p className="text-gray-500 text-sm">
              Violations of these rules may result in a warning, mute, or permanent ban.
              <br />
              The moderators' decisions are final.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative py-12 px-6 border-t border-purple-900/30 bg-[#07070a]">
        <div className="divider-glow mb-8" />
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
          <p className="bracket-tag text-2xl font-black">［声1］ VI Squad.</p>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
            Demon Slayer × Jujutsu Kaisen · Voice Impression Community
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-red-800/60 font-bold tracking-widest text-sm">滅</span>
            <span className="text-gray-700 text-xs">×</span>
            <span className="text-purple-800/60 font-bold tracking-widest text-sm">呪</span>
          </div>
          <p className="text-gray-700 text-xs mt-4">
            © 2026 VI Squad · All rights reserved · Founded by Sui.
          </p>
        </div>
      </footer>
    </main>
  );
}
