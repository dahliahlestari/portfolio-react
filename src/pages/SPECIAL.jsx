export default function Home() {
  return (
    <section className="relative min-h-[100svh] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10">

        {/* SMALL NOTE */}
        <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40 fade-up">
          Studio Practice
        </span>

        {/* HERO */}
        <h1 className="mt-20 text-[10vw] leading-[0.25] font-semibold tracking-tight fade-up">
          SPECIAL
        </h1>

        {/* BREAK */}
        <div className="mt-20 fade-up">
          <span className="inline-block w-20 h-[1px] bg-white/30" />
        </div>

        {/* STATEMENT */}
        <div className="mt-20 max-w-md fade-up">
          <p className="text-white/80 leading-relaxed">
            Graphic design approached as a system.
          </p>

          <p className="mt-6 text-white/50 leading-relaxed">
            Structure is defined first.
            Aesthetic decisions follow restraint.
          </p>
        </div>

        {/* DISCONNECTED META */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 fade-up">

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
              Practice
            </span>
            <p className="mt-4 text-white/70">
              Graphic Design<br />
              Visual Systems<br />
              Brand Identity
            </p>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
              Approach
            </span>
            <p className="mt-4 text-white/70">
              Reduction<br />
              Consistency<br />
              Longevity
            </p>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40">
              Status
            </span>
            <p className="mt-4 text-white/70">
              Selective Projects<br />
              Limited Availability
            </p>
          </div>

        </div>

        {/* CTA — BARELY */}
        <div className="mt-40 fade-up">
          <a
            href="/work"
            className="text-[10px] uppercase tracking-[0.3  em] text-white/40 hover:text-white transition"
          >
            View Work
          </a>
        </div>

      </div>
    </section>
  )
}
