import heroImage from "/special/art.png"
import { WorkSection } from "./WORK"
import { ProcessSection } from "./PROCESS"



export default function Home() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">

      {/* HERO IMAGE WITH TOP + BOTTOM FADE */}
      <div
        className="
          absolute top-0 left-0 right-0 z-[-10]
          h-[85vh]
          bg-no-repeat bg-top bg-cover
          contrast-[1.0] brightness-[0.23]
          hero-mask
        "
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">

        {/* SMALL NOTE */}
        <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40" data-aos="fade-up">
          Studio Practice
        </span>

        {/* HERO */}
        <h1 className="font-semibold text-[18vw] md:text-[10vw]"
          data-text="SPECIAL">
          SPECIAL
        </h1>

        {/* BREAK */}
        <div className="mt-20" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-block w-20 h-[1px] bg-white/30" />
        </div>

        {/* STATEMENT */}
        <div className="mt-20 max-w-md" data-aos="fade-up" data-aos-delay="200">
          <p className="text-white/80 leading-relaxed">
            Graphic design approached as a system.
          </p>

          <p className="mt-6 text-white/50 leading-relaxed">
            Structure is defined first.
            Aesthetic decisions follow restraint.
          </p>
        </div>


        {/* META */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-20" data-aos="fade-up" data-aos-delay="300">

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

        <div className="mt-10 space-y-10 md:space-y-10">
          <WorkSection />
          <ProcessSection />
        </div>
        {/* CTA */}
        <div className="mt-40" data-aos="fade-up">
          <a
            href="/work"
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition"
          >
            View Work
          </a>
        </div>

      </div>
    </section>
  )
}
