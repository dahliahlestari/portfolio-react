import { useEffect, useState } from "react"
import AOS from "aos"

export default function VintageArch({ data }) {
    const {
        groom = "David",
        bride = "Lubov",
        date = "19.10.2025",
        time = "14:00",
        venue = "Lorem Street, 25, Ipsum City",
        description = "With special trepidation we invite you to our first family holiday - OUR WEDDING!"
    } = data || {}

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 1200, once: false })
    }, [])

    return (
        // DESKTOP WRAPPER: Centers the mobile view and provides a blurred background
        <div className="min-h-screen w-full bg-[#3a3028] flex justify-center items-start lg:py-10 relative overflow-hidden">

            {/* DESKTOP BACKGROUND (blurred image) */}
            <div className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none">
                <img src="https://images.unsplash.com/photo-1544084944-152696a63339?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover blur-xl scale-110" alt="bg" />
            </div>

            {/* MOBILE CONTAINER */}
            <div className="w-full max-w-[430px] bg-[#f4f1ea] text-[#5c4d43] font-serif min-h-screen shadow-2xl relative z-10 overflow-hidden border-x-4 border-[#5c4d43]/10">

                {/* INLINE STYLES */}
                <style>
                    {`
                        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Great+Vibes&display=swap');
                        .font-cinzel { font-family: 'Cinzel', serif; }
                        .font-vibes { font-family: 'Great Vibes', cursive; }
                        .animate-float { animation: float 6s ease-in-out infinite; }
                        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
                        .animate-spin-slow { animation: spin 20s linear infinite; }
                        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    `}
                </style>

                {/* --- COVER / WELCOME SCREEN --- */}
                <div
                    className={`fixed inset-0 z-50 bg-[#f4f1ea] flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}
                    style={{ position: 'absolute', height: '100vh', width: '100%' }}
                >
                    <div className="border border-[#5c4d43] p-1 rounded-t-full rounded-b-full h-[80%] w-[80%] flex items-center justify-center relative">
                        <div className="absolute inset-0 border border-[#5c4d43]/20 scale-95 rounded-t-full rounded-b-full"></div>
                        <div className="text-center space-y-6">
                            <p className="text-xs tracking-[0.3em] uppercase animate-pulse">The Wedding Of</p>
                            <h1 className="text-5xl font-cinzel text-[#5c4d43]">{groom} <br /> & <br /> {bride}</h1>

                            <button
                                onClick={() => setIsOpen(true)}
                                className="mt-10 px-8 py-3 bg-[#5c4d43] text-[#f4f1ea] rounded-full uppercase tracking-widest text-xs hover:scale-105 transition shadow-lg animate-float"
                            >
                                Open Invitation
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MAIN CONTENT --- */}

                {/* 1. HERO ARCH */}
                <section className="relative h-[70vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1544084944-152696a63339?q=80&w=1000&auto=format&fit=crop"
                        alt="Vintage Arch"
                        className="w-full h-full object-cover object-top opacity-90"
                        data-aos="zoom-out" data-aos-duration="2000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f4f1ea]"></div>
                    <div className="absolute bottom-0 w-full text-center pb-10">
                        <div className="w-16 h-20 border border-[#5c4d43]/30 mx-auto rounded-t-full mb-4 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl animate-bounce">↓</span>
                        </div>
                    </div>
                </section>

                {/* 2. COUPLE PROFILE */}
                <section className="px-6 py-12 text-center relative">
                    <div className="absolute top-0 left-0 text-6xl opacity-10 animate-spin-slow origin-center">✻</div>
                    <div className="absolute bottom-0 right-0 text-6xl opacity-10 animate-spin-slow origin-center">✻</div>

                    <h2 data-aos="fade-up" className="text-4xl font-cinzel text-[#5c4d43] mb-4">{groom} & {bride}</h2>
                    <p data-aos="fade-up" className="text-xs uppercase tracking-[0.2em] mb-8">{date}</p>

                    <div data-aos="zoom-in" className="relative w-48 h-64 mx-auto mb-8 rounded-t-full overflow-hidden border-4 border-[#5c4d43]/20 shadow-xl">
                        <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition duration-700" alt="couple" />
                    </div>

                    <p data-aos="fade-up" className="italic max-w-xs mx-auto leading-loose text-sm opacity-80">
                        "{description}"
                    </p>
                </section>

                {/* 3. COUNTDOWN (Placeholder) */}
                <section className="py-12 bg-[#5c4d43] text-[#f4f1ea] text-center">
                    <h3 data-aos="fade-down" className="font-cinzel text-xl mb-6 uppercase tracking-widest">Save The Date</h3>
                    <div className="flex justify-center gap-6 font-cinzel">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">14</span>
                            <span className="text-[10px] uppercase opacity-60">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">06</span>
                            <span className="text-[10px] uppercase opacity-60">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold">45</span>
                            <span className="text-[10px] uppercase opacity-60">Mins</span>
                        </div>
                    </div>
                </section>

                {/* 4. OUR STORY */}
                <section className="py-20 px-6 relative overflow-hidden">
                    <div className="absolute top-10 -left-10 w-40 h-40 bg-[#e8e4dc] rounded-full blur-3xl opacity-50"></div>
                    <h3 data-aos="fade-right" className="font-cinzel text-2xl mb-8 text-center text-[#5c4d43]">Our Journey</h3>

                    <div className="space-y-8 relative pl-4 border-l border-[#5c4d43]/20 ml-4">
                        <div data-aos="fade-left" className="relative pl-8">
                            <span className="absolute -left-[21px] top-0 w-3 h-3 bg-[#5c4d43] rounded-full"></span>
                            <p className="font-bold text-sm">2020</p>
                            <h4 className="font-serif text-lg italic">First Met</h4>
                            <p className="text-xs opacity-70 leading-relaxed mt-2">We met at a small coffee shop in downtown. It was raining, and we shared an umbrella.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="100" className="relative pl-8">
                            <span className="absolute -left-[21px] top-0 w-3 h-3 bg-[#5c4d43] rounded-full"></span>
                            <p className="font-bold text-sm">2023</p>
                            <h4 className="font-serif text-lg italic">The Proposal</h4>
                            <p className="text-xs opacity-70 leading-relaxed mt-2">Under the stars in Bali, he got down on one knee.</p>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="200" className="relative pl-8">
                            <span className="absolute -left-[21px] top-0 w-3 h-3 bg-[#5c4d43] rounded-full"></span>
                            <p className="font-bold text-sm">2025</p>
                            <h4 className="font-serif text-lg italic">The Wedding</h4>
                            <p className="text-xs opacity-70 leading-relaxed mt-2">The beginning of our forever.</p>
                        </div>
                    </div>
                </section>

                {/* 5. GALLERY */}
                <section className="py-12 bg-[#e8e4dc] px-2">
                    <h3 data-aos="zoom-in" className="font-cinzel text-center text-xl mb-8">Moments</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div data-aos="fade-up" className="h-40 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=500" className="w-full h-full object-cover" /></div>
                        <div data-aos="fade-up" data-aos-delay="100" className="h-40 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500" className="w-full h-full object-cover" /></div>
                        <div data-aos="fade-up" className="col-span-2 h-60 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=800" className="w-full h-full object-cover" /></div>
                    </div>
                </section>

                {/* 6. EVENT DETAILS (Restored from previous) */}
                <section className="py-20 px-4 text-center">
                    <div data-aos="flip-left" className="border border-[#5c4d43] p-8 rounded-t-full rounded-b-full inline-block w-full max-w-xs relative bg-white/50 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-widest mb-4">The Holy Matrimony</p>
                        <h2 className="text-2xl font-cinzel mb-4">{venue}</h2>
                        <p className="text-lg font-bold border-y border-[#5c4d43]/20 py-4 my-4">{date} <br /> {time}</p>
                        <button className="bg-[#5c4d43] text-white px-6 py-2 rounded-full text-xs uppercase tracking-widest mt-4 hover:shadow-lg transition">Get Directions</button>
                    </div>
                </section>

                {/* 7. DIGITAL GIFT */}
                <section className="py-20 px-6 bg-[#5c4d43] text-[#f4f1ea] text-center">
                    <h3 data-aos="fade-up" className="font-cinzel text-2xl mb-4">Wedding Gift</h3>
                    <p data-aos="fade-up" className="text-xs opacity-80 mb-8 max-w-xs mx-auto">Your presence is the greatest gift of all. However, if you wish to honor us with a gift, a digital envelope is available.</p>

                    <div data-aos="zoom-in" className="bg-[#f4f1ea] text-[#5c4d43] p-6 rounded-lg max-w-xs mx-auto shadow-2xl">
                        <p className="font-bold text-sm mb-2">BCA</p>
                        <p className="text-xl font-mono tracking-widest mb-2">123 456 7890</p>
                        <p className="text-xs uppercase opacity-60 mb-4">{groom} & {bride}</p>
                        <button
                            className="w-full border border-[#5c4d43] py-2 text-xs uppercase hover:bg-[#5c4d43] hover:text-white transition"
                            onClick={() => { navigator.clipboard.writeText("1234567890"); alert("Copied!") }}
                        >
                            Copy Account
                        </button>
                    </div>
                </section>

                {/* 8. WISHES FORM */}
                <section className="py-20 px-6">
                    <h3 data-aos="fade-up" className="font-cinzel text-center text-xl mb-8">Send Wishes</h3>
                    <form className="space-y-4">
                        <input data-aos="fade-up" type="text" placeholder="Name" className="w-full bg-transparent border-b border-[#5c4d43]/30 py-3 focus:outline-none focus:border-[#5c4d43] text-sm" />
                        <textarea data-aos="fade-up" placeholder="Your Message" className="w-full bg-transparent border-b border-[#5c4d43]/30 py-3 focus:outline-none focus:border-[#5c4d43] text-sm h-24"></textarea>
                        <button data-aos="fade-up" type="button" className="w-full bg-[#5c4d43] text-white py-4 uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">Send Message</button>
                    </form>
                </section>

                {/* FOOTER */}
                <section className="py-10 text-center bg-[#f4f1ea] opacity-60">
                    <p className="font-cinzel text-sm">{groom} & {bride}</p>
                    <p className="text-[10px] uppercase mt-2">Thank you for visiting</p>
                </section>

                {/* FLOATING ACTION BUTTON FOR AUDIO (Mockup) */}
                <button className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#5c4d43] rounded-full flex items-center justify-center text-white shadow-lg animate-spin-slow">
                    🎵
                </button>

            </div>
        </div>
    )
}
