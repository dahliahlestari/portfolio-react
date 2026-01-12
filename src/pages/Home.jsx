import { Link } from "react-router-dom"

export default function Home() {
  return (
     <main className="space-y-32">

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <h1 className="fade-up text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
          I design,<br />
          market,<br />
          and shape content.
        </h1>

        <p className="fade-up text-white/70 text-lg max-w-md [animation-delay:150ms]">
          Marketing-focused designer with experience in visual design,
          social media strategy, paid ads, and content editing.
        </p>

      </div>
    </section>

       {/* ABOUT ME */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-16">

          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-semibold">
            About Me
          </h1>

          <div className="space-y-6">
            <p className="fade-up text-white/70 text-lg leading-relaxed">
              Hi, I’m <span className="text-white">Dahliah</span> — a Creative Designer & Digital
              Marketer with <span className="text-white">3+ years of experience</span> helping
              brands grow online.
            </p>

            <p className="fade-up text-white/70 text-lg leading-relaxed [animation-delay:150ms]">
              I don’t just make things look good. I create <span className="text-white">
              content and ads that actually work</span> — getting attention, building trust,
              and turning viewers into customers.
            </p>

            <p className="fade-up text-white/70 text-lg leading-relaxed [animation-delay:300ms]">
              From managing Instagram accounts to running paid ads for e-commerce brands like
              <span className="text-white"> W3Liquor</span>, my goal is simple:
              <span className="text-white"> make social media do its job.</span>
            </p>
          </div>

  </div>
</section>


        {/* WHAT I DO */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <h2 className="fade-up text-2xl font-medium mb-16">
            What I Do
          </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Social Media Growth",
                desc: "Helping brands grow on Instagram through Reels, smart content strategy, and consistent visual branding.",
              },
              {
                title: "Content & Visual Design",
                desc: "Designing feeds, stories, and promo creatives that feel clean, premium, and scroll-stopping.",
              },
              {
                title: "Paid Advertising",
                desc: "Running Meta Ads (Instagram & Facebook) to drive reach, engagement, and real sales.",
              },
              {
                title: "Campaign & Launch Design",
                desc: "Building campaigns for promos and launches that are designed to perform, not just exist.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="fade-up border border-white/10 p-8 hover:bg-white/5 transition"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="font-medium mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY WORK WITH ME */}
        <section className="max-w-6xl mx-auto px-6 mb-32">
          <h2 className="fade-up text-2xl font-medium mb-12">
            Why Work With Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-white/70 text-lg leading-relaxed">
            <p className="fade-up">
              A lot of designers focus on how things look.
              <br />
              <span className="text-white">I focus on what converts.</span>
            </p>

            <ul className="fade-up space-y-4 text-sm [animation-delay:150ms]">
              <li>– Get more attention</li>
              <li>– Build a stronger brand presence</li>
              <li>– Turn followers into customers</li>
            </ul>
          </div>

          <p className="fade-up max-w-3xl mt-10 text-white/70 [animation-delay:300ms]">
            With hands-on experience in e-commerce and digital campaigns, I know how to create
            visuals that don’t just look nice — <span className="text-white">they get results</span>.
          </p>
        </section>


      {/* ROLES */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Marketing Design",
              desc: "Clear visuals built for communication",
              link: "/marketing-design",
            },
            {
              title: "Social Media & Paid Ads",
              desc: "Strategy-driven content & ads",
              link: "/social-media",
            },
            {
              title: "Content Editor",
              desc: "Clean, engaging digital edits",
              link: "/content-editor",
            },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="fade-up group border border-white/10 p-8
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:border-white/30
                         hover:bg-white/5"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h3 className="text-lg font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">

            <div className="mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-medium">
                Selected Works
            </h2>
            <p className="fade-up mt-4 max-w-xl text-white/60 [animation-delay:150ms]">
                A selection of projects and work scopes across marketing design,
                social media, paid ads, and content editing.
            </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
            {[
                {
                title: "W3Liquor — Social Media & Campaign Design",
                category: "Social Media · Paid Ads",
                desc: "Managing branded content, promotional visuals, and campaign-based executions aligned with business goals.",
                },
                {
                title: "Personal Brand — @dahliahlestari",
                category: "Content Strategy · Visual Identity",
                desc: "Building a consistent personal brand through visual storytelling and content planning.",
                },
                {
                title: "Promotional Marketing Assets",
                category: "Marketing Design",
                desc: "Designing digital marketing assets for promotions, announcements, and seasonal campaigns.",
                },
                {
                title: "Content Refinement & Editing",
                category: "Content Editor",
                desc: "Improving layout, clarity, and consistency across various digital content formats.",
                },
            ].map((item, i) => (
                <div
                key={i}
                className="fade-up border border-white/10 p-8 hover:bg-white/5 transition"
                style={{ animationDelay: `${i * 150}ms` }}
                >
                <p className="text-xs text-white/40 mb-2">
                    {item.category}
                </p>
                <h3 className="text-lg font-medium mb-3">
                    {item.title}
                </h3>
                <p className="text-sm text-white/60">
                    {item.desc}
                </p>
                </div>
            ))}
            </div>

        </div>
    </section>


    </main>
  )
}
