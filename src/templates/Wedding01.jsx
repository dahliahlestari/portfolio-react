import React, { useState, useEffect } from "react"
import AOS from "aos"

export default function Wedding01() {
    const [showIntro, setShowIntro] = useState(true)

    useEffect(() => {
        AOS.init({ duration: 1000 })

        // Auto-dismiss intro after 3 seconds
        const timer = setTimeout(() => {
            setShowIntro(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative min-h-screen bg-[#f9f9f9] text-[#4a4a4a] font-serif overflow-hidden">

            {/* INTRO OVERLAY */}
            <div
                className={`
          fixed inset-0 z-50 flex items-center justify-center bg-white 
          transition-opacity duration-1000 ease-in-out pointer-events-none
          ${showIntro ? "opacity-100" : "opacity-0"}
        `}
            >
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[#8c8c8c]">The Wedding Of</p>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div
                className={`
           transition-opacity duration-1000 delay-500
           ${showIntro ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}
         `}
            >

                {/* HERO SECTION */}
                <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">

                    <div className="border border-[#d4d4d4] p-8 md:p-12 relative max-w-lg w-full">
                        {/* DECORATIVE CORNERS (CSS Shapes) */}
                        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#8c8c8c]" />
                        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#8c8c8c]" />
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#8c8c8c]" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#8c8c8c]" />

                        <p className="text-xs uppercase tracking-[0.2em] mb-8 text-[#8c8c8c]" data-aos="fade-up">
                            Save The Date
                        </p>

                        <h1 className="text-4xl md:text-6xl font-light mb-4" data-aos="fade-up" data-aos-delay="200">
                            Sarah
                            <span className="block text-2xl md:text-3xl my-2 italic text-[#b5b5b5]">&</span>
                            James
                        </h1>

                        <p className="mt-8 text-sm uppercase tracking-widest" data-aos="fade-up" data-aos-delay="400">
                            Saturday, October 24th 2026
                        </p>

                        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
                            <button className="bg-[#4a4a4a] text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-black transition">
                                RSVP Now
                            </button>
                        </div>

                    </div>

                </section>

                {/* DETAILS SECTION */}
                <section className="py-20 px-6 text-center bg-white">
                    <div className="max-w-2xl mx-auto space-y-12">

                        <div data-aos="fade-up">
                            <h2 className="text-2xl font-light mb-4">The Ceremony</h2>
                            <p className="text-sm leading-relaxed text-[#666]">
                                St. Patrick’s Cathedral<br />
                                123 Church Street, New York<br />
                                02:00 PM
                            </p>
                        </div>

                        <div className="w-10 h-[1px] bg-[#d4d4d4] mx-auto" />

                        <div data-aos="fade-up">
                            <h2 className="text-2xl font-light mb-4">The Reception</h2>
                            <p className="text-sm leading-relaxed text-[#666]">
                                The Grand Ballroom<br />
                                456 Party Avenue, New York<br />
                                06:00 PM
                            </p>
                        </div>

                    </div>
                </section>

            </div>

        </div>
    )
}
