/* ===============================
   PROCESS SECTION (FOR HOME)
   =============================== */

export function ProcessSection() {
  return (
    <section className="px-5 pt-2 pb-40">

      <header className="mb-24">
        <span className="block text-xs uppercase tracking-[0.3em] text-white/40" data-aos="fade-up">
          Process
        </span>

        <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight" data-aos="fade-up" data-aos-delay="100">
          How I Approach Visual Work
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">

        <ProcessBlock
          index="01"
          title="Observation"
          description="Every project starts with listening. Context, intention,
          and constraints are observed before any visual decision is made."
        />

        <ProcessBlock
          index="02"
          title="Structure"
          description="Information is organized into a clear hierarchy.
          Layout, rhythm, and balance are defined early to avoid decoration."
        />

        <ProcessBlock
          index="03"
          title="Exploration"
          description="Visual directions are explored with restraint.
          Choices are reduced until only what is necessary remains."
        />

        {/* ART GALLERY */}
        <ArtGallery />

        <ProcessBlock
          index="04"
          title="Refinement"
          description="Details are adjusted carefully. Typography, spacing,
          and contrast are refined to support clarity and longevity."
        />

        <ProcessBlock
          index="05"
          title="Delivery"
          description="Final outputs are prepared with consistency
          across formats and platforms, ensuring the system works in real use."
        />

      </div>

    </section>
  )
}

export default function Process() {
  return (
    <section className="max-w-7xl mx-auto px-5 pt-40 pb-40">

      {/* PAGE TITLE */}
      <header className="mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight" data-aos="fade-up">
          PROCESS
        </h1>

        <p className="mt-6 max-w-md text-xs uppercase tracking-[0.3em] text-white/60" data-aos="fade-up" data-aos-delay="100">
          How I approach visual work
        </p>
      </header>

      {/* PROCESS CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">

        <ProcessBlock
          index="01"
          title="Observation"
          description="Every project starts with listening. Context, intention,
          and constraints are observed before any visual decision is made."
        />

        <ProcessBlock
          index="02"
          title="Structure"
          description="Information is organized into a clear hierarchy.
          Layout, rhythm, and balance are defined early to avoid decoration."
        />

        <ProcessBlock
          index="03"
          title="Exploration"
          description="Visual directions are explored with restraint.
          Choices are reduced until only what is necessary remains."
        />

        {/* ART GALLERY */}
        <ArtGallery />

        <ProcessBlock
          index="04"
          title="Refinement"
          description="Details are adjusted carefully. Typography, spacing,
          and contrast are refined to support clarity and longevity."
        />

        <ProcessBlock
          index="05"
          title="Delivery"
          description="Final outputs are prepared with consistency
          across formats and platforms, ensuring the system works in real use."
        />

      </div>
    </section>
  )
}

/* ===============================
   PROCESS BLOCK
   =============================== */

function ProcessBlock({ index, title, description }) {
  return (
    <div data-aos="fade-up">

      {/* INDEX */}
      <span className="block text-xs uppercase tracking-[0.4em] text-white/40">
        {index}
      </span>

      {/* TITLE */}
      <h2 className="mt-4 text-2xl md:text-3xl font-medium tracking-tight">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
        {description}
      </p>

    </div>
  )
}

/* ===============================
   ART GALLERY
   =============================== */

function ArtGallery() {
  return (
    <div data-aos="fade-up">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* IMAGE 1 */}
        <div className="group aspect-[4/5] overflow-hidden bg-white/5">
          <img
            src="/process/process-1.jpg"
            alt=""
            className="
              w-full h-full object-cover
              transition duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* IMAGE 2 */}
        <div className="group aspect-[4/5] overflow-hidden bg-white/5">
          <img
            src="/process/process-2.jpg"
            alt=""
            className="
              w-full h-full object-cover
              transition duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

        {/* IMAGE 3 */}
        <div className="group aspect-[4/5] overflow-hidden bg-white/5">
          <img
            src="/process/process-3.jpg"
            alt=""
            className="
              w-full h-full object-cover
              transition duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>

      </div>

      {/* OPTIONAL CAPTION */}
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">
        Selected process snapshots
      </p>

    </div>
  )
}
