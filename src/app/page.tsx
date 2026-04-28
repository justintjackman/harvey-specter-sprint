export default function Home() {
  return (
    <main className="bg-white text-black font-[family-name:var(--font-dm-sans)]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Large background letterform */}
        <span
          className="absolute right-[-0.05em] bottom-[-0.1em] text-[32vw] font-black text-white/[0.03] leading-none select-none uppercase pointer-events-none"
          aria-hidden
        >
          HS
        </span>

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8">
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-white">
            Harvey <span style={{ color: "#D97757" }}>Specter</span>
          </span>
          <a
            href="#contact"
            className="text-xs font-bold tracking-widest uppercase border border-white/30 text-white rounded-full px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Hero copy */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-8 md:px-16 pb-20">
          <p className="text-[10px] font-semibold tracking-[0.6em] uppercase text-white/30 mb-5">
            New York City · Corporate Law
          </p>
          <h1 className="text-[clamp(3.5rem,11vw,9.5rem)] font-black leading-[0.92] tracking-tight text-white uppercase mb-8">
            Harvey<br />Specter.
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-white/10 pt-8">
            <p className="max-w-sm text-base text-white/40 leading-relaxed">
              The best closer in New York City. I don't play the odds — I play the man.
            </p>
            <div className="flex gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-block text-sm font-bold tracking-widest uppercase rounded-full px-10 py-4 text-black transition-opacity duration-200 hover:opacity-80"
                style={{ background: "#D97757" }}
              >
                Get Started
              </a>
              <a
                href="#services"
                className="inline-block text-sm font-bold tracking-widest uppercase rounded-full px-10 py-4 text-white border border-white/20 hover:border-white/50 transition-all duration-200"
              >
                Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="bg-black border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
        {[
          { value: "100%", label: "Win Rate" },
          { value: "20+",  label: "Years Closing" },
          { value: "$1B+", label: "Cases Won" },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <span className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-1">{value}</span>
            <span className="text-[9px] font-semibold tracking-[0.45em] uppercase text-white/25">{label}</span>
          </div>
        ))}
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="px-8 md:px-16 py-28 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="text-[10px] font-bold tracking-[0.55em] uppercase text-black/30 mb-4">Practice Areas</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase">
              I only take<br />cases I win.
            </h2>
          </div>
          <p className="self-end text-sm text-black/50 leading-relaxed max-w-sm">
            Three disciplines. One standard of excellence. If I'm in the room, the outcome is already decided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
          {[
            { n: "01", title: "Corporate Litigation", body: "Unbroken in the courtroom. High-stakes disputes resolved decisively — on my terms." },
            { n: "02", title: "Mergers & Acquisitions", body: "Billion-dollar deals closed before the other side finds their footing." },
            { n: "03", title: "Crisis Management", body: "When everything is on the line, experience is the only currency that matters." },
          ].map(({ n, title, body }) => (
            <div
              key={n}
              className="group bg-white border border-black/8 p-10 flex flex-col gap-4 hover:bg-black transition-colors duration-300 cursor-default"
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-black/20 group-hover:text-white/20 transition-colors">{n}</span>
              <h3 className="text-lg font-black tracking-tight group-hover:text-white transition-colors">{title}</h3>
              <p className="text-sm text-black/50 leading-relaxed group-hover:text-white/40 transition-colors">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE ────────────────────────────────────────── */}
      <section className="bg-black px-8 md:px-16 py-32 flex flex-col items-center text-center relative overflow-hidden">
        <span
          className="absolute text-[20vw] font-black text-white/[0.03] leading-none select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          "
        </span>
        <blockquote className="relative z-10 max-w-3xl">
          <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            "I don't have dreams.<br />
            I have <span style={{ color: "#D97757" }}>goals.</span>"
          </p>
          <cite className="block mt-5 text-[10px] tracking-[0.55em] uppercase text-white/30 not-italic">
            — Harvey Specter
          </cite>
        </blockquote>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="contact" className="px-8 md:px-16 py-36 flex flex-col items-center text-center bg-white border-t border-black/8">
        <p className="text-[10px] font-bold tracking-[0.55em] uppercase text-black/30 mb-4">Ready to Win?</p>
        <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-none uppercase mb-6">
          Let's<br />Talk.
        </h2>
        <p className="text-sm text-black/40 max-w-xs leading-relaxed mb-12">
          One conversation. I'll tell you exactly what I can do — and exactly what it costs.
        </p>
        <a
          href="mailto:harvey@pearsonspecter.com"
          className="inline-block text-white text-sm font-black tracking-widest uppercase rounded-full px-12 py-5 bg-black hover:bg-[#D97757] transition-colors duration-300"
        >
          Contact Harvey
        </a>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-black border-t border-white/10 flex flex-wrap items-center justify-between px-8 md:px-16 py-6 gap-4">
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/25">Harvey Specter</span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/15">© {new Date().getFullYear()} · New York City</span>
      </footer>

    </main>
  );
}
