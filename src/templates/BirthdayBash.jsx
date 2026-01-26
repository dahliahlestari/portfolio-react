import { useEffect } from "react"
import AOS from "aos"

export default function BirthdayBash() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="min-h-screen bg-[#FF007A] text-white font-sans overflow-hidden relative selection:bg-yellow-300 selection:text-black">

            {/* CONFETTI DECORATION (CSS) */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 text-6xl rotate-12">🎉</div>
                <div className="absolute top-40 right-20 text-4xl -rotate-12">🎈</div>
                <div className="absolute bottom-20 left-1/2 text-5xl rotate-45">✨</div>
            </div>

            {/* 1. HEADER */}
            <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
                <h3 data-aos="fade-down" className="text-yellow-300 font-bold uppercase tracking-widest text-xl mb-4 bg-black/10 px-4 py-1 rotate-2 inline-block">
                    You're Invited!
                </h3>

                <h1 data-aos="zoom-in" className="text-6xl md:text-9xl font-black italic transform -rotate-3 leading-tight drop-shadow-xl text-stroke-black">
                    ISABELLA'S<br />
                    <span className="text-yellow-300">25TH</span> BDAY
                </h1>

                <div data-aos="fade-up" className="mt-12 bg-white text-black px-8 py-4 rounded-full font-bold text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
                    SEPT 15 • 8 PM
                </div>
            </section>

            {/* 2. AREA INFO */}
            <section className="py-20 px-6 bg-yellow-300 text-black border-y-4 border-black">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
                    <div data-aos="fade-right" className="flex-1">
                        <h2 className="text-5xl font-black mb-6 uppercase leading-none">
                            Drinks,<br />Dance &<br />Drama.
                        </h2>
                        <p className="text-xl font-bold max-w-sm">
                            Get ready for the wildest night of the year. Wear your sparkliest outfit!
                        </p>
                    </div>
                    <div data-aos="fade-left" className="flex-1 bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                        <h3 className="font-black text-2xl uppercase border-b-4 border-black pb-2 mb-4">Location</h3>
                        <p className="text-lg font-bold">The Rooftop Bar</p>
                        <p className="text-sm font-medium">45 Party Lane, Downtown</p>
                        <div className="mt-6 w-full h-32 bg-gray-200 border-2 border-black flex items-center justify-center font-mono text-xs text-gray-500 uppercase">
                            [Map Placeholder]
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RSVP */}
            <section className="py-32 flex flex-col items-center justify-center text-center">
                <h2 data-aos="flip-up" className="text-4xl md:text-6xl font-black mb-8">
                    RSVP OR FOMO
                </h2>
                <a href="#" className="inline-block bg-black text-white px-12 py-6 text-2xl font-bold uppercase tracking-wide border-4 border-white hover:bg-white hover:text-black hover:border-black transition-colors duration-300">
                    I'm Coming!
                </a>
            </section>

        </div>
    )
}
