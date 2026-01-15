import { useParams } from "react-router-dom"

const works = [
  {
    slug: "brand-identity-system",
    title: "Brand Identity System",
    category: "Graphic Design",
    year: "2024",
    banner: "/works/brand-identity-banner.png",
    description:
      "A comprehensive brand identity system focusing on clarity, consistency, and long-term scalability.",
    images: [
      "/works/brand-identity.png",
      "/works/brand-identity-2.png",
      "/works/brand-identity-3.png",
    ],
  },

  {
    slug: "editorial-social-campaign",
    title: "Editorial Social Campaign",
    category: "Social Media",
    year: "2024",
    banner: "/works/editorial-social-banner.png",
    description:
      "An editorial-driven social campaign with narrative rhythm and visual restraint.",
    images: [
      "/works/editorial-social-1.jpg",
      "/works/editorial-social-2.jpg",
    ],
  },

  {
    slug: "minimal-packaging-design",
    title: "Minimal Packaging Design",
    category: "package",
    year: "2023",
    banner: "/works/minimal-packaging-design.png",
    description:
      "An editorial-driven social campaign with narrative rhythm and visual restraint.",
    images: [
      "/works/editorial-social-1.jpg",
      "/works/editorial-social-2.jpg",
    ],
  },
]

export default function WorkDetail() {
  const { slug } = useParams()
  const work = works.find((item) => item.slug === slug)

 if (!work) return null



  return (
    <section className="max-w-4xl mx-auto px-5 pt-40 pb-40">

      {/* BANNER */}
      <div className="aspect-[16/9] mb-20 overflow-hidden bg-white/5 fade-up">
        <img
          src={work.banner}
          alt={work.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* HEADER */}
      <header className="mb-20 fade-up">
        <div className="flex justify-between text-xs uppercase tracking-[0.3em] text-white/60">
          <span>{work.category}</span>
          <span>{work.year}</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
          {work.title}
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">
          {work.description}
        </p>
      </header>

      {/* GALLERY */}
      <div className="space-y-20">
        {work.images.map((img, i) => (
          <div key={i} className="fade-up">
            <img src={img} alt="" className="w-full" />
          </div>
        ))}
      </div>

    </section>
  )
}
