export default function Work() {
  return (
    <section className="max-w-5xl mx-auto px-5 pt-40 pb-40">

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
      <div className="space-y-32">

        {/* ITEM */}
        <WorkItem
          title="Brand Identity System"
          category="Graphic Design"
          year="2024"
        />

        <WorkItem
          title="Editorial Social Campaign"
          category="Social Media"
          year="2024"
        />

        <WorkItem
          title="Minimal Packaging Design"
          category="Visual System"
          year="2023"
        />

        <WorkItem
          title="Content Direction Study"
          category="Process"
          year="2023"
        />

      </div>
    </section>
  )
}

/* ===============================
   WORK ITEM
   =============================== */

function WorkItem({ title, category, year }) {
  return (
    <div className="group fade-up">

      {/* IMAGE PLACEHOLDER */}
      <div className="aspect-[16/9] bg-white/5 mb-6">
        {/* nanti ganti image */}
      </div>

      {/* META */}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
        <span>{category}</span>
        <span>{year}</span>
      </div>

      {/* TITLE */}
      <h2 className="mt-4 text-xl md:text-2xl font-medium tracking-tight text-white group-hover:opacity-80 transition">
        {title}
      </h2>

    </div>
  )
}
