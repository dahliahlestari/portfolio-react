export default function ContentEditor() {
  return (
    <main className="text-white min-h-screen pt-32">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-semibold">
          Content Editor
        </h1>

        <p className="fade-up mt-6 max-w-2xl text-white/70 text-lg [animation-delay:150ms]">
          Polished content built with attention to detail — ensuring clarity,
          consistency, and a refined final output across platforms.
        </p>
      </section>

      {/* ROLE OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          What I do as a content editor
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Visual Refinement",
              desc: "Enhancing layout, color balance, spacing, and overall visual clarity.",
            },
            {
              title: "Content Consistency",
              desc: "Aligning tone, style, and structure across multiple content pieces.",
            },
            {
              title: "Final Quality Control",
              desc: "Ensuring content is clean, accurate, and ready for publishing.",
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

      {/* WORKFLOW */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          Editing workflow
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-white/70">
          <p className="fade-up">
            My editing process focuses on improving content without
            overcomplicating it. The goal is always to enhance clarity,
            preserve intent, and elevate the final presentation.
          </p>

          <ul className="fade-up space-y-3 text-sm [animation-delay:150ms]">
            <li>– Reviewing structure & visual flow</li>
            <li>– Adjusting layout, spacing, and hierarchy</li>
            <li>– Aligning content with brand tone</li>
            <li>– Preparing assets for final publishing</li>
          </ul>
        </div>
      </section>

      {/* INSTAGRAM REELS */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          Instagram Reels Editing
        </h2>

        <p className="fade-up max-w-2xl text-white/70 mb-16 [animation-delay:150ms]">
          Short-form video edits created for engagement, pacing, and visual clarity
          across Instagram Reels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            "/reels/reel-1.mp4",
            "/reels/reel-2.mp4",
            "/reels/reel-3.mp4",
          ].map((src, i) => (
            <div
              key={i}
              className="fade-up aspect-[9/16] overflow-hidden border border-white/10 bg-black"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>


      {/* CONNECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="fade-up border border-white/10 p-10 text-center">
          <p className="text-white/70 mb-4">
            Content editing ties everything together.
          </p>
          <p className="text-sm text-white/50">
            From marketing visuals to social media execution, refinement is
            what makes content feel intentional.
          </p>
        </div>
      </section>

    </main>
  )
}
