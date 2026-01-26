import { useEffect } from "react"
import AOS from "aos"

export default function RedElegant({ data }) {
    // Default Data
    const {
        groom = "Anton",
        bride = "Irina",
        date = "03.03.2026",
        time = "15:00",
        venue = "Nova Star",
        description = "Please join us for an evening of music, dining, and celebration in clothes the color of red wine."
    } = data || {}

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="min-h-screen bg-[#4a0404] text-[#d4af37] font-serif overflow-hidden relative">

            {/* BACKGROUND ELEMENTS */}
            <div className="fixed inset-0 pointer-events-none opacity-10 background-noise"></div>

            {/* 1. HEADER SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
                <div data-aos="fade-down" className="mb-8">
                    <span className="text-white/60 text-sm tracking-[0.3em] uppercase">Invitation</span>
                </div>

                <h1 data-aos="zoom-in" className="text-5xl md:text-7xl font-cursive mb-6 text-white drop-shadow-md">
                    {groom} & {bride}
                </h1>

                <div data-aos="fade-up" className="w-64 h-64 bg-white/5 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-8 backdrop-blur-sm relative">
                    <div className="absolute -top-4 -right-4 text-4xl">✨</div>
                    <div className="absolute -bottom-4 -left-4 text-4xl">✨</div>
                    <p className="text-white/80 italic">{date}</p>
                </div>

                <p data-aos="fade-up" data-aos-delay="200" className="max-w-md text-white/80 leading-relaxed text-sm tracking-wide">
                    With great joy, we invite you to celebrate our special day.
                </p>
            </section>

            {/* 2. CARD SECTION (White Card) */}
            <section className="py-20 px-6">
                <div data-aos="flip-up" className="max-w-md mx-auto bg-[#f8f5f2] text-[#4a0404] p-10 rounded-sm shadow-2xl relative border-4 border-double border-[#d4af37]">
                    {/* RIBBON DECORATION (CSS) */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#d4af37] rotate-45 flex items-center justify-center shadow-lg">
                        <span className="transform -rotate-45 text-white font-bold text-xs uppercase">Open</span>
                    </div>

                    <h2 className="text-center text-2xl font-bold uppercase tracking-widest mb-6 mt-4">Jubilee</h2>
                    <p className="text-center text-sm leading-loose mb-8">
                        {description}
                    </p>

                    <div className="border-t border-[#4a0404]/20 pt-6 text-center">
                        <p className="font-bold text-lg">Dress Code</p>
                        <p className="italic">Red & Gold</p>
                    </div>
                </div>
            </section>

            {/* 3. DETAILS / TICKET SECTION */}
            <section className="py-20 px-6 relative">
                <div data-aos="fade-up" className="max-w-xs mx-auto bg-[#f8f5f2] text-[#4a0404] rounded-xl overflow-hidden shadow-2xl relative ticket-shape">
                    <div className="p-8 text-center border-b-2 border-dashed border-[#4a0404]/20">
                        <p className="text-xs uppercase tracking-widest mb-2">Venue</p>
                        <h3 className="text-4xl font-cursive text-[#4a0404] mb-4">{venue}</h3>
                        <div className="flex justify-center gap-4 text-sm font-bold mt-6">
                            <div className="border border-[#4a0404] px-4 py-2">{date}</div>
                            <div className="border border-[#4a0404] px-4 py-2">{time}</div>
                        </div>
                    </div>
                    <div className="p-4 bg-[#d4af37] text-white text-center text-xs uppercase tracking-widest">
                        Admit One
                    </div>
                </div>

                {/* SAXOPHONE DECORATION */}
                <div data-aos="fade-left" className="absolute bottom-10 -right-10 opacity-50 rotate-12">
                    <span className="text-9xl">🎷</span>
                </div>
            </section>
        </div>
    )
}
