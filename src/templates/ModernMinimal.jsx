import { useEffect, useState } from "react"
import AOS from "aos"

export default function ModernMinimal({ data }) {
    const {
        groom = "James",
        bride = "Sarah",
        date = "24.05.2026",
        time = "16:00",
        venue = "The Glass House, White Space City",
        description = "We invite you to witness the beginning of our new life together. Join us for an intimate celebration of love, laughter, and minimalist elegance."
    } = data || {}

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true })
    }, [])

    return (
        // DESKTOP WRAPPER
        <div className="min-h-screen w-full bg-[#f5f5f5] flex justify-center items-start lg:py-10 relative overflow-hidden font-sans selection:bg-black selection:text-white">

            {/* DESKTOP BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Abstract Geometry Pattern */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* MOBILE CONTAINER */}
            <div className="w-full max-w-[430px] bg-white text-black min-h-screen shadow-2xl relative z-10 overflow-hidden border-x border-gray-200">

                {/* FONTS */}
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:wght@200;400;600&display=swap');
                        .font-italiana { font-family: 'Italiana', serif; }
                        .font-montserrat { font-family: 'Montserrat', sans-serif; }
                    `}
                </style>

                {/* --- COVER SCENE --- */}
                <div
                    className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.87, 0, 0.13, 1)] ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}
                    style={{ position: 'absolute', height: '100vh', width: '100%' }}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-between py-20 px-6">
                        <div className="text-center">
                            <p className="text-[10px] tracking-[0.4em] uppercase mb-4 animate-pulse">The Wedding Of</p>
                            <h1 className="text-6xl font-italiana leading-none">{groom} <br /> <span className="text-4xl">&</span> <br /> {bride}</h1>
                        </div>

                        <div className="w-full h-[40vh] bg-gray-100 overflow-hidden relative grayscale">
                            <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800" className="w-full h-full object-cover" />
                        </div>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-full border border-black py-4 uppercase tracking-[0.2em] text-xs hover:bg-black hover:text-white transition duration-500"
                        >
                            Open Invitation
                        </button>
                    </div>
                </div>

                {/* --- MAIN CONTENT --- */}

                {/* 1. HERO */}
                <section className="h-screen flex flex-col justify-center px-8 relative">
                    <div data-aos="fade-down" className="w-[1px] h-20 bg-black mx-auto mb-8 absolute top-0 left-1/2 -translate-x-1/2"></div>

                    <h2 data-aos="fade-up" className="text-7xl font-italiana leading-[0.8]">
                        {bride.charAt(0)}<span className="text-4xl text-gray-400">&</span>{groom.charAt(0)}
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-right mt-4 font-montserrat text-xs tracking-[0.2em] uppercase">
                        {date}
                    </p>

                    <div className="mt-20 relative">
                        <div data-aos="zoom-out" className="aspect-[3/4] bg-gray-100 grayscale hover:grayscale-0 transition duration-1000 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -right-4 bg-white p-4 border border-black">
                            <p className="font-italiana text-2xl">Together</p>
                        </div>
                    </div>
                </section>

                {/* 2. QUOTE */}
                <section className="py-24 px-8 text-center bg-black text-white">
                    <p data-aos="fade-up" className="font-italiana text-3xl leading-relaxed">
                        "Simplicity is the ultimate sophistication."
                    </p>
                    <div className="w-10 h-[1px] bg-white mx-auto my-8"></div>
                    <p data-aos="fade-up" className="font-montserrat text-xs leading-loose opacity-70">
                        {description}
                    </p>
                </section>

                {/* 3. TIMELINE */}
                <section className="py-24 px-8 relative">
                    <h3 data-aos="fade-right" className="font-italiana text-4xl mb-12">The Day</h3>

                    <div className="border-l border-black pl-8 space-y-12 ml-2">
                        <div data-aos="fade-left" className="relative group">
                            <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border border-black bg-white group-hover:bg-black transition"></span>
                            <span className="text-4xl font-italiana block mb-1">16:00</span>
                            <span className="text-xs uppercase tracking-widest block font-bold">Ceremony</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Main Chapel</span>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="100" className="relative group">
                            <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border border-black bg-white group-hover:bg-black transition"></span>
                            <span className="text-4xl font-italiana block mb-1">18:00</span>
                            <span className="text-xs uppercase tracking-widest block font-bold">Cocktails</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Garden Terrace</span>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="200" className="relative group">
                            <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full border border-black bg-white group-hover:bg-black transition"></span>
                            <span className="text-4xl font-italiana block mb-1">19:30</span>
                            <span className="text-xs uppercase tracking-widest block font-bold">Dinner</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 block">Grand Ballroom</span>
                        </div>
                    </div>
                </section>

                {/* 4. GALLERY (Masonry-ish) */}
                <section className="py-12 px-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div data-aos="fade-up" className="h-64 bg-gray-100 grayscale hover:grayscale-0 transition duration-700">
                            <img src="https://images.unsplash.com/photo-1519225448526-72997f55f8b7?q=80&w=400" className="w-full h-full object-cover" />
                        </div>
                        <div data-aos="fade-up" className="h-40 bg-gray-100 grayscale hover:grayscale-0 transition duration-700 mt-24">
                            <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=400" className="w-full h-full object-cover" />
                        </div>
                        <div data-aos="fade-up" className="col-span-2 h-80 bg-gray-100 grayscale hover:grayscale-0 transition duration-700 relative">
                            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition duration-500">
                                <span className="text-white font-italiana text-2xl">Forever</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. LOCATION */}
                <section className="py-24 px-8 text-center bg-gray-50">
                    <h3 className="font-italiana text-3xl mb-4">Location</h3>
                    <p className="font-montserrat text-xs uppercase tracking-widest mb-8">{venue}</p>
                    <div className="w-full h-48 bg-gray-200 grayscale mb-8 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-gray-400">[ Map Placeholder ]</span>
                    </div>
                    <button className="border-b border-black pb-1 text-xs uppercase tracking-widest hover:text-gray-500 transition">View on Google Maps</button>
                </section>

                {/* 6. RSVP FORM */}
                <section className="py-24 px-8 bg-black text-white">
                    <h3 data-aos="fade-up" className="font-italiana text-3xl mb-8 text-center">RSVP</h3>
                    <form className="space-y-8">
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60">Name</label>
                            <input type="text" className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition text-sm" />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-60">Guests</label>
                            <select className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white transition text-sm">
                                <option className="text-black">1 Guest</option>
                                <option className="text-black">2 Guests</option>
                            </select>
                        </div>
                        <button className="w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-gray-200 transition mt-8">
                            Confirm Attendance
                        </button>
                    </form>
                </section>

                <footer className="py-12 text-center text-[10px] uppercase tracking-widest text-gray-400">
                    {groom} & {bride} • 2026
                </footer>

            </div>
        </div>
    )
}
