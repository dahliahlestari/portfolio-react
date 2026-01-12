export default function SocialMedia() {
  return (
    <main className="text-white min-h-screen pt-32">

      {/* HEADER */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-semibold">
          Social Media & Paid Ads
        </h1>

        <p className="fade-up mt-6 max-w-2xl text-white/70 text-lg [animation-delay:150ms]">
          Strategy-driven content and ads designed to grow visibility,
          engagement, and measurable results.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Personal Brand — @dahliahlestari",
              desc: "Content strategy focused on consistency, visual identity, and audience relevance across Instagram.",
            },
            {
              title: "Brand Account — W3Liquor",
              desc: "Managing branded content, promotions, and campaign-based ads aligned with business objectives.",
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

      {/* WHAT I DO */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          What I handle
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Content Planning",
              desc: "Monthly planning, content pillars, and posting rhythm aligned with goals.",
            },
            {
              title: "Paid Ads Execution",
              desc: "Ad creatives, copy, and visual consistency for Meta Ads campaigns.",
            },
            {
              title: "Performance Awareness",
              desc: "Optimizing content and ads based on reach, engagement, and response.",
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

      {/* APPROACH */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="fade-up text-2xl font-medium mb-10">
          Approach
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-white/70">
          <p className="fade-up">
            I approach social media and paid ads with a balance between
            creativity and strategy. Content is built not only to look good,
            but to perform and support broader marketing goals.
          </p>

          <ul className="fade-up space-y-3 text-sm [animation-delay:150ms]">
            <li>– Instagram content & reels</li>
            <li>– Meta Ads creative & copy</li>
            <li>– Campaign & promo alignment</li>
            <li>– Visual consistency across feeds</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="fade-up border border-white/10 p-10 text-center">
          <p className="text-white/70 mb-4">
            Looking for refined content execution?
          </p>
          <p className="text-sm text-white/50">
            Continue to the Content Editor section.
          </p>
        </div>
      </section>

    </main>
  )
}
