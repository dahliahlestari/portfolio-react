export default function Social() {
  return (
    <section className="max-w-5xl mx-auto px-5 pt-40 pb-40">

      {/* PAGE TITLE */}
      <header className="mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight" data-aos="fade-up">
          SOCIAL
        </h1>

        <p className="mt-6 max-w-md text-xs uppercase tracking-[0.3em] text-white/60" data-aos="fade-up" data-aos-delay="100">
          Studio presence & contact
        </p>
      </header>

      {/* INFO BLOCKS */}
      <div className="space-y-24">

        <InfoBlock
          label="Studio"
          title="SPECIAL"
          description="A minimalist graphic design studio focused on clarity,
          structure, and intentional visual systems."
        />

        <InfoBlock
          label="Based In"
          title="Indonesia"
          description="Available for selected collaborations,
          both local and international."
        />

        <InfoBlock
          label="Contact"
          title="Dahliahlestari@gmail.com"
          description="For project inquiries, collaborations,
          or general questions."
          link="mailto:dahliahlestari@gmail.com"
        />

        <InfoBlock
          label="Instagram"
          title="@Special.idl"
          description="Selected works, ongoing explorations,
          and visual experiments."
          link="https://www.instagram.com/special.idl/"
        />

        <InfoBlock
          label="Handle"
          title="@Dahliahlestari"
          description="Handle By Dahliahlestari"
          link="https://www.instagram.com/dahliahlestari/"
        />

        {/* LEGAL */}
        <div className="pt-16 border-t border-white/10" data-aos="fade-up">
          <span className="block text-xs uppercase tracking-[0.4em] text-white/40">
            Legal
          </span>

          <p className="mt-6 max-w-xl text-white/60 leading-relaxed text-sm">
            SPECIAL Studio.
          </p>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} SPECIAL. All rights reserved.
          </p>
        </div>

      </div>
    </section>
  )
}

/* ===============================
   INFO BLOCK
   =============================== */

function InfoBlock({ label, title, description, link }) {
  const Wrapper = link ? "a" : "div"

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="block group"
      data-aos="fade-up"
    >
      {/* LABEL */}
      <span className="block text-xs uppercase tracking-[0.25em] text-white/40">
        {label}
      </span>

      {/* TITLE */}
      <h2 className="mt-4 text-xl md:text-2xl font-medium tracking-tight text-white group-hover:opacity-80 transition">
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-4 max-w-xl text-white/70 leading-relaxed">
        {description}
      </p>
    </Wrapper>
  )
}
