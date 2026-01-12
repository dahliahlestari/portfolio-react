export default function GraphicDesign() {
  return (
    <main className="text-white min-h-screen pt-32">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-semibold">
          Graphic Design
        </h1>

        <p className="fade-up mt-6 max-w-2xl text-white/70 text-lg [animation-delay:150ms]">
          Visual design focused on clarity, consistency, and brand impact —
          built to support marketing, content, and campaigns.
        </p>
      </section>

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          What I do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Visual Identity",
              desc: "Creating consistent visual systems across digital platforms.",
            },
            {
              title: "Social Media Design",
              desc: "Designing feed posts, stories, and reels visuals for engagement.",
            },
            {
              title: "Promotional Graphics",
              desc: "Posters, banners, and digital assets for campaigns and promos.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="fade-up border border-white/10 p-8 hover:bg-white/5 transition"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h3 className="font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED DESIGNS */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-12">
          Selected Design Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "/designs/design-1.jpg",
            "/designs/design-2.jpg",
            "/designs/design-3.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="fade-up overflow-hidden border border-white/10 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={src}
                alt={`Design work ${i + 1}`}
                className="w-full h-full object-cover
                          group-hover:scale-105 transition duration-300"
              />
              <p className="text-xs text-white/40 mt-2 px-1">
                Social media design
              </p>

            </div>
          ))}
        </div>
      </section>


      {/* TOOLS */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          Tools & approach
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-white/70">
          <p className="fade-up">
            I approach graphic design with a balance of aesthetics and
            purpose. Every visual is designed to support brand communication,
            not just decoration.
          </p>

          <ul className="fade-up space-y-3 text-sm [animation-delay:150ms]">
            <li>– Adobe Illustrator & Photoshop</li>
            <li>– Figma for layout and system design</li>
            <li>– Visual hierarchy & spacing</li>
            <li>– Brand consistency across assets</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="fade-up border border-white/10 p-10 text-center">
          <p className="text-white/70 mb-4">
            Graphic design is the foundation of everything I build.
          </p>
          <p className="text-sm text-white/50">
            From social content to campaigns, strong visuals make the difference.
          </p>
        </div>
      </section>

    </main>
  )
}
