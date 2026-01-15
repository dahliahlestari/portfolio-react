export default function Footer() {
  return (
    <footer className="relative z-10 mt-40 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 py-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* BRAND */}
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-white">
              SPECIAL
            </p>
            <p className="mt-4 max-w-xs text-sm text-white/60 leading-relaxed">
              A graphic design focused on clarity,
              structure, and intentional visual systems.
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-white/40">
          <span>© {new Date().getFullYear()} SPECIAL</span>
          <span>Design dahliahlestari</span>
        </div>

      </div>
    </footer>
  )
}
