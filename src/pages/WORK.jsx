import { Link } from "react-router-dom"

/* ===============================
   WORK SECTION (FOR HOME)
   =============================== */

export function WorkSection() {
  return (
    <section className="mx-auto px-5 pt-40 pb-40">

      <header className="mb-24">
        <span className="block text-xs uppercase tracking-[0.3em] text-white/40 fade-up">
          Work
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight fade-up">
          Selected Projects
        </h2>
      </header>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-2">

        <Link to={`/work/brand-identity-system`}>
          <WorkItem
            title="Brand Identity System"
            category="Graphic Design"
            year="2024"
            image="/works/brand-identity-banner.png"
          />
        </Link>

        <Link to={`/work/editorial-social-campaign`}>
          <WorkItem
            title="Editorial Social Campaign"
            category="Social Media"
            year="2024"
            image="/works/editorial-social-banner.png"
          />
        </Link>

         <Link to={`/work/minimal-packaging-design`}>
          <WorkItem
            title="Minimal Packaging Design"
            category="Visual System"
            year="2023"
            image="/works/minimal-packaging-design.png"
          />
        </Link>

      </div>

    </section>
  )
}

/* ===============================
   FULL WORK PAGE (UNCHANGED)
   =============================== */

export default function Work() {
  return (
    <section className="max-w-5xl mx-auto px-5 pt-24 md:pt-28 pb-40">

      {/* PAGE TITLE */}
      <header className="mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight fade-up">
          WORK
        </h1>

        <p className="mt-6 max-w-md text-xs uppercase tracking-[0.2em] text-white/60 fade-up">
          Selected visual works
        </p>
      </header>

      {/* WORK LIST */}
      <div className="space-y-40 md:space-y-56">

        <Link to={`/work/brand-identity-system`}>
          <WorkItem
            title="Brand Identity System"
            category="Graphic Design"
            year="2024"
            image="/works/brand-identity-banner.png"
          />
        </Link>

        <Link to={`/work/editorial-social-campaign`}>
          <WorkItem
            title="Editorial Social Campaign"
            category="Social Media"
            year="2024"
            image="/works/editorial-social-banner.png"
          />
        </Link>

        <Link to={`/work/minimal-packaging-design`}>
          <WorkItem
            title="Minimal Packaging Design"
            category="Visual System"
            year="2023"
            image="/works/minimal-packaging-design.png"
          />
        </Link>

      </div>
    </section>
  )
}

/* ===============================
   WORK ITEM (UNCHANGED)
   =============================== */

function WorkItem({ title, category, year, image }) {
  return (
    <div className="group fade-up">

      <div className="relative aspect-[16/9] overflow-hidden mb-10 bg-white/5">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition duration-700 ease-out
            group-hover:scale-105
            group-hover:opacity-90
          "
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span>{category}</span>
        <span>{year}</span>
      </div>

      <h2 className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-white group-hover:opacity-80 transition">
        {title}
      </h2>

      <div className="mt-24 border-t border-white/5" />
    </div>
  )
}
